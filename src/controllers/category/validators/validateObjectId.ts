import { isValidObjectId } from 'mongoose'
import * as yup from 'yup'

export const validateObjectId = (title: string) => {
  return yup
    .string()
    .required(`${title} is required`)
    .test('is-valid-object-id', `Invalid ${title}`, (value) =>
      isValidObjectId(value)
    )
}
