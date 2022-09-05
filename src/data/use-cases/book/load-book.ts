import { ILoadBook } from './../../../domain/use-cases/book/load-book'
import { Book } from './../../../domain/models/book/book'
import BookRepository from './../../../main/infra/book-repository'

export class LoadBook implements ILoadBook {
  async show(id: number): Promise<Book> {
    return BookRepository.findOne(id)
  }
}
