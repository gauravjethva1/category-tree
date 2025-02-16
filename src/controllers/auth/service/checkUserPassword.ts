import { UserModel } from 'model/user.model'
import { User } from 'types/common'

export const checkUserPassword = async (email: string, password: string) => {
  const userData = await UserModel.findOne({ email })

  if (!userData) return false

  const result = await userData?.comparePassword(password)

  if (!result) return false

  const user = userData.toObject()

  // @ts-expect-error _id password is not optional
  delete user.password

  return user
}
