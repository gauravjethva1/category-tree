import { User } from 'types/common'
import { getValidatedData, tryCatch } from 'utils/helpers'
import { getUserByEmail } from './service/getUserByEmail'
import { ApiError } from 'utils/error'
import { ERROR_CODES, STATUS_CODES } from 'utils/constant'
import { createUser } from './service'

export const registerUser = tryCatch(async (req, res) => {
  const { email, name, password } = getValidatedData<User>(req)

  const userExist = await getUserByEmail(email)

  if (userExist) {
    throw new ApiError(
      'User Already Registered',
      ERROR_CODES.CONFLICT,
      STATUS_CODES.CONFLICT
    )
  }

  const user = await createUser({ email, name, password })

  res.status(STATUS_CODES.CREATED).json(user)
})
