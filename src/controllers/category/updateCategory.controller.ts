import { tryCatch } from 'utils/helpers'
import { editCategory } from './service'
import { getValidatedData } from 'utils/helpers'
import { Category } from 'types/common'
import { STATUS_CODES } from 'utils/constant'

interface UpdateCategoryPayload extends Partial<Category> {
  id: string
}

export const updateCategory = tryCatch(async (req, res) => {
  const { id, ...data } = getValidatedData<UpdateCategoryPayload>(req)

  await editCategory(id, data)

  res.status(STATUS_CODES.OK).json({ success: true })
})
