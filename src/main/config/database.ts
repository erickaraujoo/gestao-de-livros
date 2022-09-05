import knex from 'knex'
import { DATABASE } from './constants'

const connection = knex({
  client: DATABASE.DB_DIALECT,
  connection: {
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USERNAME,
    password: DATABASE.DB_PASSWORD,
    database: DATABASE.DB_NAME,
  },
})

export default connection
