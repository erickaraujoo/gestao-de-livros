import { Controller } from '../../protocols/controller'
import { ok, serverError } from '../../../main/utils/api-response'
import { ILoadBooks } from './../../../domain/use-cases/book/load-books'

export class LoadBooksController implements Controller {
  constructor(private readonly loadBooks: ILoadBooks) {}

  async handle() {
    try {
      const result = await this.loadBooks.show()

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
