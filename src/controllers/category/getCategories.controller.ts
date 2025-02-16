import { tryCatch } from 'utils/helpers'
import { getAllCategories } from './service'
import { STATUS_CODES } from 'utils/constant'

export const getCategories = tryCatch(async (_req, res) => {
  const categories = await getAllCategories()
  res.status(STATUS_CODES.OK).json(categories)
})
