import { UserAuth } from '../../../../data/use-cases/auth/user-auth'
import { UserAuthController } from '../../../../presentation/controller/auth/user-auth-controller'
import { Controller } from './../../../../presentation/protocols/controller'

export function UserAuthControllerFactory(): Controller {
  const userAuth = new UserAuth()
  return new UserAuthController(userAuth)
}
