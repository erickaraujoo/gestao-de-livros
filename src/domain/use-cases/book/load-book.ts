import { Book } from '@domain/models/book/book'

export interface ILoadBook {
  show(id: number): Promise<Book>
}
