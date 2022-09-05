import Knex from 'knex'
import { Book } from './../../models/book/book'

export interface ICreateBook {
  store(book: Book, trx: Knex.Transaction): Promise<number[]>
}
