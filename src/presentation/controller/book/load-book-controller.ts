import { Controller } from './../../protocols/controller'
import { ILoadBook } from './../../../domain/use-cases/book/load-book'
import { HttpRequest } from './../../protocols/http'
import { serverError, notFound, ok } from './../../../main/utils/api-response'

export class LoadBookController implements Controller {
  constructor(private readonly loadBook: ILoadBook) {}

  async handle(httpRequest: HttpRequest) {
    try {
      const { id }: { id: number } = httpRequest.params

      const result = await this.loadBook.show(id)

      if (!result) return notFound('id', 'book not found')

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
