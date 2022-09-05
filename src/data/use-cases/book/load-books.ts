import { Book } from './../../../domain/models/book/book'
import { ILoadBooks } from './../../../domain/use-cases/book/load-books'
import BookRepository from './../../../main/infra/book-repository'

export class LoadBooks implements ILoadBooks {
  async show(): Promise<Book[]> {
    return BookRepository.findAll()
  }
}
