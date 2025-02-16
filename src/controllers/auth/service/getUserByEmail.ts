import { UserModel } from 'model/user.model'

export const getUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email }, { password: 0 })
}
