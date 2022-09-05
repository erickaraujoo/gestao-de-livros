import { IUserAuth } from './../../../domain/use-cases/auth/user-auth'
import { HttpResponse } from 'presentation/protocols'
import { Controller } from './../../protocols/controller'
import { serverError, notFound, ok } from './../../../main/utils/api-response'
import { IUserAuthParams } from './../../../domain/use-cases/auth/user-auth'

export class UserAuthController implements Controller {
  constructor(private readonly userAuth: IUserAuth) {}

  async handle(httpRequest: HttpResponse) {
    try {
      const { username, password }: IUserAuthParams = httpRequest.body

      if (!(username && password)) return notFound('auth', 'usename or password not found')

      const token = await this.userAuth.index({ username, password })

      return ok({ token })
    } catch (error) {
      return serverError(error)
    }
  }
}
