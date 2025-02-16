import * as yup from 'yup'
import { validateObjectId } from './validateObjectId'
import { CATEGORY_STATUS } from 'utils/constant'

export const updateCategorySchema = yup.object({
  params: yup.object({
    id: validateObjectId('Category Id')
  }),
  body: yup
    .object({
      name: yup.string().optional(),
      status: yup
        .string()
        .optional()
        .oneOf([CATEGORY_STATUS.ACTIVE, CATEGORY_STATUS.IN_ACTIVE])
    })
    .test(
      'at-least-one',
      'Either name or status is required',
      (value) => value?.name !== undefined || value?.status !== undefined
    )
})
