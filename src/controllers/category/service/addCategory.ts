import { CategoryModel } from 'model/category.model'
import { ObjectId } from 'mongoose'

export const addCategory = async (
  name: string,
  parentCategory?: ObjectId | null
) => {
  return await CategoryModel.create({
    name,
    parentCategory
  })
}
