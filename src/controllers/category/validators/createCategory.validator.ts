import * as yup from 'yup'
import { isValidObjectId } from 'mongoose'

export const createCategorySchema = yup.object({
  body: yup.object({
    name: yup.string().required('Category Name is required'),
    parentCategory: yup
      .string()
      .nullable()
      .test('is-valid-object-id', `Invalid Parent Category`, (value) =>
        value ? isValidObjectId(value) : true
      )
  })
})
