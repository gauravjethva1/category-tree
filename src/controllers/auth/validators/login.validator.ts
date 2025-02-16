import { REGEX } from 'utils/constant'
import * as yup from 'yup'

export const loginSchema = yup.object({
  body: yup.object({
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
