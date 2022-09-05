import { Controller } from './../../../../presentation/protocols/controller'
import { LoadBooks } from './../../../../data/use-cases/book/load-books'
import { LoadBooksController } from './../../../../presentation/controller/book/load-books-controller'

export function loadBooksControllerFactory(): Controller {
  const loadBooks = new LoadBooks()
  return new LoadBooksController(loadBooks)
}
