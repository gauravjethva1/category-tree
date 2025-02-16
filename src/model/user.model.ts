import { CallbackError, Schema, model } from 'mongoose'
import { User } from 'types/common'
import { comparePassword, generateHash } from 'utils/helpers'

interface UserDocument extends User {
  comparePassword(password: string): Promise<boolean>
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password') || !this.password) {
    return next()
  }

  try {
    this.password = await generateHash(this.password)
    next()
  } catch (error) {
    next(error as CallbackError)
  }
})

userSchema.methods.comparePassword = async function (password: string) {
  return await comparePassword(password, this.password)
}

export const UserModel = model<UserDocument>('User', userSchema)
