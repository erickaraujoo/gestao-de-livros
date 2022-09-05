import { Controller } from './../../protocols/controller'
import { ICreateBook } from './../../../domain/use-cases/book/create-book'
import { HttpRequest } from './../../protocols/http'
import { serverError, ok } from '../../../main/utils/api-response'
import { Book } from './../../../domain/models/book/book'
import knex from '../../../main/config/database'

export class CreateBookController implements Controller {
  constructor(private readonly createBook: ICreateBook) {}

  async handle(httpRequest: HttpRequest) {
    const trx = await knex.transaction()

    try {
      const book: Book = httpRequest.body

      const createdBook = await this.createBook.store(book, trx)

      trx.commit()

      return ok(createdBook)
    } catch (error) {
      trx.rollback()

      return serverError(error)
    }
  }
}
