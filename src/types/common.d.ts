import { Request } from 'express'
import { ObjectId } from 'mongoose'
import { CATEGORY_STATUS } from 'utils/constant'

type ValidatedData = {
  query: Record<string, any>
  params: Record<string, any>
  body: Record<string, any>
}

export interface RequestWithValidate extends Request {
  validatedData?: ValidatedData
}

export interface Category {
  name: string
  parentCategory?: ObjectId | null
  status: keyof typeof CATEGORY_STATUS
}

export interface User {
  name: string
  email: string
  password: string
}

export interface UserWithId extends User {
  _id: string
}

declare global {
  namespace Express {
    interface Request {
      userData?: { name: string; email: string; password: string; _id: string }
    }
  }
}
