import { generateToken, getValidatedData, tryCatch } from 'utils/helpers'
import { checkUserPassword } from './service'
import { UnauthorizedError } from 'utils/error'
import { STATUS_CODES } from 'utils/constant'

type UserValidatedData = {
  email: string
  password: string
}

/**
 * Controller for login user
 */
export const loginUser = tryCatch(async (req, res) => {
  const { email, password } = getValidatedData<UserValidatedData>(req)

  const user = await checkUserPassword(email, password)

  if (!user) {
    throw new UnauthorizedError('Invalid Credentials')
  }

  const token = generateToken(user._id.toString())

  // @ts-expect-error _id is present
  delete user._id

  res.status(STATUS_CODES.OK).json({ token, user })
})
