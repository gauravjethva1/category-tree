import { getUserById } from 'controllers/auth/service'
import { UnauthorizedError } from 'utils/error'
import { tryCatch, verifyAndDecodeToken } from 'utils/helpers'

export const validateUser = tryCatch(async (req, _res, next) => {
  if (!req?.headers?.authorization) {
    throw new UnauthorizedError('Unauthorized')
  }

  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    throw new UnauthorizedError('Unauthorized')
  }

  const { data } = verifyAndDecodeToken(token) as { data: string }

  if (!data) {
    throw new UnauthorizedError('Unauthorized')
  }

  const user = await getUserById(data)

  if (!user) {
    throw new UnauthorizedError('Unauthorized')
  }

  req.userData = user

  return next()
})
