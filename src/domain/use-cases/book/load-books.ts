import { Book } from '@domain/models/book/book'

export interface ILoadBooks {
  show(): Promise<Book[]>
}
