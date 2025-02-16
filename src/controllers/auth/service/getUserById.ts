import { UserModel } from 'model/user.model'
import { UserWithId } from 'types/common'

export const getUserById = async (id: string) => {
  return await UserModel.findById<UserWithId>(id)
}
