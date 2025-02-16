import { UserModel } from 'model/user.model'
import { User } from 'types/common'

export const createUser = async (user: User) => {
  const result: Partial<User> = (await UserModel.create(user)).toJSON()

  delete result.password

  return result
}
