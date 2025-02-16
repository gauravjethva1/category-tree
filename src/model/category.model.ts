import { Schema, model, Types } from 'mongoose'
import { Category } from 'types/common'
import { CATEGORY_STATUS } from 'utils/constant'

const categorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true
    },
    parentCategory: {
      type: Types.ObjectId,
      ref: 'Category',
      default: null
    },
    status: {
      type: String,
      enum: [CATEGORY_STATUS.ACTIVE, CATEGORY_STATUS.IN_ACTIVE],
      default: CATEGORY_STATUS.ACTIVE
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

categorySchema.index({ parentCategory: 1 })
categorySchema.index({ status: 1 })

export const CategoryModel = model<Category>('Category', categorySchema)
