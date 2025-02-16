import { CategoryModel } from 'model/category.model'
import { ObjectId } from 'mongoose'

import { ERROR_CODES, STATUS_CODES } from 'utils/constant'
import { ApiError } from 'utils/error'

const assignToParent = async (id: ObjectId, newParentId: ObjectId | null) => {
  return await CategoryModel.updateMany(
    {
      parentCategory: id
    },
    { parentCategory: newParentId }
  )
}

export const removeCategory = async (id: ObjectId) => {
  const category = await CategoryModel.findById(id)

  if (!category) {
    throw new ApiError(
      'Category Not Found',
      ERROR_CODES.NOT_FOUND,
      STATUS_CODES.NOT_FOUND
    )
  }

  await assignToParent(id, category.parentCategory!)

  await CategoryModel.deleteOne({ _id: id })
}
