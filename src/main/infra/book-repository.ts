import Knex from 'knex'
import { Book } from './../../domain/models/book/book'
import knex from '../../main/config/database'

class BookRepository {
  static create({ title, price, thumbnailUrl, wallpaperUrl, details }: Book, trx: Knex.Transaction) {
    return knex('tbl_livro').transacting(trx).insert({
      titulo: title,
      preco: price,
      imagem_peq: thumbnailUrl,
      imagem_grd: wallpaperUrl,
      detalhes: details,
    })
  }

  static findAll() {
    return knex<Book[]>('tbl_livro').select({
      id: 'cod_livro',
      title: 'titulo',
      price: 'preco',
      thumbnailUrl: 'imagem_peq',
      wallpaperUrl: 'imagem_grd',
      details: 'detalhes',
    })
  }

  static findOne(id: number) {
    return knex('tbl_livro').select('*').where('cod_livro', '=', id).first()
  }

  static delete({ id }: Book) {
    return knex('tbl_livro').delete().where('cod_livro', '=', id)
  }
}

export default BookRepository
