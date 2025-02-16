import { REGEX } from 'utils/constant'
import * as yup from 'yup'

export const registerSchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required('Name is required')
      .matches(REGEX.NAME, 'Name must contain only letters and spaces'),
    email: yup
      .string()
      .required('Email is required')
      .email('Invalid email format'),
    password: yup
      .string()
      .required('Password is required')
      .matches(REGEX.PASSWORD, 'Password must match the pattern')
  })
})
