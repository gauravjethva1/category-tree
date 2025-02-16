import { Router } from 'express'
import { errorHandler } from 'middleware'
import { ERROR_CODES, STATUS_CODES } from 'utils/constant'
import { ApiError } from 'utils/error'
import CategoryRoutes from 'routes/category.routes'
import AuthRoutes from 'routes/auth.routes'

const router = Router()

const { NOT_FOUND } = STATUS_CODES
const { NOT_FOUND: URL_NOT_FOUND } = ERROR_CODES

router.get('/', (_req, res) => {
  res.send('Welcome to Category management')
})

// Router Mapper
router.use('/auth', AuthRoutes)
router.use('/category', CategoryRoutes)

// Handle 404 error
router.use('*', () => {
  throw new ApiError('URL Not Found', URL_NOT_FOUND, NOT_FOUND)
})

router.use(errorHandler)

export default router
