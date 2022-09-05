import { Controller } from './../../../../presentation/protocols/controller'
import { LoadBook } from './../../../../data/use-cases/book/load-book'
import { LoadBookController } from './../../../../presentation/controller/book/load-book-controller'

export function loadBookControllerFactory(): Controller {
  const loadBook = new LoadBook()
  return new LoadBookController(loadBook)
}
