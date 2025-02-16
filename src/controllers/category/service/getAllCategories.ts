import { CategoryModel } from 'model/category.model'
import { ObjectId } from 'mongoose'
import { Category } from 'types/common'

type CategoryWithoutSub = Pick<Category, 'name' | 'status'> & { _id: ObjectId }

type CategoryPipeline = {
  subCategories?: CategoryWithoutSub[]
} & CategoryWithoutSub

const getPipeline = (id?: ObjectId) => {
  return [
    {
      $match: id
        ? {
            _id: id
          }
        : {
            parentCategory: null
          }
    },
    {
      $lookup: {
        from: 'categories',
        localField: '_id',
        foreignField: 'parentCategory',
        as: 'subCategories'
      }
    },
    {
      $project: {
        name: 1,
        status: 1,
        'subCategories.name': 1,
        'subCategories._id': 1,
        'subCategories.status': 1
      }
    }
  ]
}

const getNestedCategories = async (
  category: CategoryWithoutSub
): Promise<CategoryPipeline> => {
  const data = await CategoryModel.aggregate<CategoryPipeline>(
    getPipeline(category._id)
  )

  const subCategories = await Promise.all(
    (data[0]?.subCategories || []).map(async (subCategory) => {
      return await getNestedCategories(subCategory)
    })
  )

  return { ...category, subCategories }
}

export const getAllCategories = async () => {
  const rootCategories = await CategoryModel.aggregate<CategoryPipeline>(
    getPipeline()
  )

  const subQuery = rootCategories.map(async (category) => {
    const subCategories = await Promise.all(
      (category.subCategories || []).map(async (subCategory) => {
        return await getNestedCategories(subCategory)
      })
    )

    return { ...category, subCategories }
  })

  return await Promise.all(subQuery)
}
