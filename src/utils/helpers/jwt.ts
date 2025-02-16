import jwt from 'jsonwebtoken'
import { UnauthorizedError } from 'utils/error'

const generateToken = (data: string) => {
  return jwt.sign({ data }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRY as jwt.SignOptions['expiresIn']
  })
}

const verifyAndDecodeToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!)
  } catch (error) {
    console.log('🚀 ~ verifyAndDecodeToken ~ error:', error)
    throw new UnauthorizedError('Unauthorized')
  }
}

export { generateToken, verifyAndDecodeToken }
