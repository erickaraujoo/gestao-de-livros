import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'
import { loadBooksControllerFactory } from './../factories/controller/book/load-books-controller-factory'
import { createBookControllerFactory } from './../factories/controller/book/create-book-controller-factory'
import { loadBookControllerFactory } from './../factories/controller/book/load-book-controller-factory'
import { tokenMiddleware } from '../middlewares/token-middleware'

export default (routes: Router) => {
  routes.get('/books', tokenMiddleware, adaptRoute(loadBooksControllerFactory()))
  routes.get('/books/:id', adaptRoute(loadBookControllerFactory()))
  routes.post('/books', adaptRoute(createBookControllerFactory()))
}
