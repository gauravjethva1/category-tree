import { tryCatch } from 'utils/helpers'
import { removeCategory } from './service'
import { getValidatedData } from 'utils/helpers'
import { ObjectId } from 'mongoose'
import { STATUS_CODES } from 'utils/constant'

export const deleteCategory = tryCatch(async (req, res) => {
  const { id } = getValidatedData<{ id: ObjectId }>(req)

  await removeCategory(id)

  res.status(STATUS_CODES.OK).json({ success: true })
})
