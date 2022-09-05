import { Controller } from './../../../../presentation/protocols/controller'
import { CreateBook } from './../../../../data/use-cases/book/create-book'
import { CreateBookController } from './../../../../presentation/controller/book/create-book-controller'

export function createBookControllerFactory(): Controller {
  const createdBook = new CreateBook()
  return new CreateBookController(createdBook)
}
