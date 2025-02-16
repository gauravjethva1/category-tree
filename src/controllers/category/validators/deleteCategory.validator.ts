import * as yup from 'yup'
import { validateObjectId } from './validateObjectId'

export const deleteCategorySchema = yup.object({
  params: yup.object({
    id: validateObjectId('Category Id')
  })
})
