import fs from 'fs'
import path from 'path'
import { getFullDate } from '.'

function errorLogger(error: any) {
  const date = getFullDate()

  const pathError = path.resolve(__dirname, '..', '..', '..', 'logs', 'error')

  if (!fs.existsSync(pathError)) fs.mkdirSync(pathError)

  const pathErrorLog = path.resolve(__dirname, '..', '..', '..', 'logs', 'error', 'error.log')

  const stringError = `------------------------------------------------
Date: ${date}
Error: ${error.name}: ${error.message} at ${error.stack}
`

  fs.appendFile(pathErrorLog, stringError, (errorLog) => {
    if (errorLog) throw errorLog
  })
}

export default errorLogger
