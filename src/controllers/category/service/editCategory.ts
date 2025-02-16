import { CategoryModel } from 'model/category.model'
import mongoose, { ObjectId } from 'mongoose'
import { Category } from 'types/common'
import { CATEGORY_STATUS, ERROR_CODES, STATUS_CODES } from 'utils/constant'
import { ApiError } from 'utils/error'

const inActiveSubCategories = async (parentId: string) => {
  const data = await CategoryModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(parentId)
      }
    },
    {
      $graphLookup: {
        from: 'categories',
        startWith: '$_id',
        connectFromField: '_id',
        connectToField: 'parentCategory',
        as: 'subCategories'
      }
    }
  ])

  const subCategories = data[0]?.subCategories || []

  if (subCategories.length > 0) {
    await CategoryModel.updateMany(
      { _id: { $in: subCategories.map(({ _id }: { _id: ObjectId }) => _id) } },
      { status: CATEGORY_STATUS.IN_ACTIVE }
    )
  }
}

export const editCategory = async (id: string, category: Partial<Category>) => {
  const result = await CategoryModel.updateOne({ _id: id }, category)

  if (result.matchedCount === 0) {
    throw new ApiError(
      'Category Not Found',
      ERROR_CODES.NOT_FOUND,
      STATUS_CODES.NOT_FOUND
    )
  }

  if (category.status === CATEGORY_STATUS.IN_ACTIVE) {
    await inActiveSubCategories(id)
  }
}
