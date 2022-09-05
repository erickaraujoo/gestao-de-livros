import { server } from './application'
import { SERVER } from './config/constants'
import errorLogger from './utils/error-logger'
import knex from './config/database'

(async () => {
  try {
    await knex.raw('SELECT 1')
    server.listen(SERVER.PORT, async () => console.info(`Server running on port: ${SERVER.PORT}`))
  } catch (error) {
    errorLogger(error)
  }
})()
