import {
  registerUser,
  loginSchema,
  registerSchema,
  loginUser
} from 'controllers/auth'

import { Router } from 'express'
import { validate } from 'middleware'

const router = Router()

router.post('/login', validate(loginSchema), loginUser)
router.post('/register', validate(registerSchema), registerUser)

export default router
