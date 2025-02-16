import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  createCategorySchema,
  updateCategorySchema,
  deleteCategorySchema
} from 'controllers/category'

import { Router } from 'express'
import { validate, validateUser } from 'middleware'

const router = Router()

router.use(validateUser)

/**
 * Get All Categories
 */
router.get('/', getCategories)

/**
 * Create Category
 */
router.post('/', validate(createCategorySchema), createCategory)

/**
 * Update Category
 */
router.put('/:id', validate(updateCategorySchema), updateCategory)

/**
 * Delete Category
 */
router.delete('/:id', validate(deleteCategorySchema), deleteCategory)

export default router
