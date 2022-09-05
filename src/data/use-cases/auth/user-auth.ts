import { tagGen } from '../../../main/utils/crypto-utils'
import { IUserAuth, IUserAuthParams } from './../../../domain/use-cases/auth/user-auth'
import { encryptUserData } from './../../../main/utils/crypto-utils'

export class UserAuth implements IUserAuth {
  async index({ username, password }: IUserAuthParams): Promise<any> {
    const sub = tagGen()

    const token = encryptUserData({ user: { username }, token: { sub, token: 'auth' } })

    return token
  }
}
