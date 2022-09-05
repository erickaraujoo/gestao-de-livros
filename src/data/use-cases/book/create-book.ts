import { ICreateBook } from './../../../domain/use-cases/book/create-book'
import { Book } from './../../../domain/models/book/book'
import { upload } from './../../../main/middlewares/file-upload-middleware'
import BookRepository from './../../../main/infra/book-repository'
import Knex from 'knex'

export class CreateBook implements ICreateBook {
  async store(book: Book, trx: Knex.Transaction): Promise<number[]> {
    const thumbnailUrl = await upload(book.thumbnail)
    const wallpaperUrl = await upload(book.wallpaper)

    Object.assign(book, { thumbnailUrl, wallpaperUrl })

    delete book.thumbnail
    delete book.wallpaper

    return await BookRepository.create(book, trx)
  }
}
