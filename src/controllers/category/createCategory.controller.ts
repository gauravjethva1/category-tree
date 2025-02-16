import { getValidatedData, tryCatch } from 'utils/helpers'
import { addCategory } from './service'
import { Category } from 'types/common'
import { STATUS_CODES } from 'utils/constant'

export const createCategory = tryCatch(async (req, res) => {
  const { name, parentCategory = null } =
    getValidatedData<Omit<Category, 'status'>>(req)

  const category = await addCategory(name, parentCategory)

  res.status(STATUS_CODES.CREATED).json(category)
})
