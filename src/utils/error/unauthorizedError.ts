import { STATUS_CODES } from 'utils/constant'
import { CustomError } from './customError'

class UnauthorizedError extends CustomError {
  readonly errorCode: string
  readonly statusCode: number

  constructor(message: string) {
    super(message)
    this.errorCode = 'UNAUTHORIZED'
    this.statusCode = STATUS_CODES.UNAUTHORIZED

    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }

  serializeErrors() {
    return {
      code: this.errorCode,
      message: this.message
    }
  }
}

export { UnauthorizedError }
