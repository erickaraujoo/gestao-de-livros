import fs from 'fs'
import { handleFileName, uploadsPath } from '../utils/file-upload'
import errorLogger from '../utils/error-logger'

export async function upload(file: string) {
  const base64 = file.replace(/^data:image\/(.+);base64,/, '')

  try {
    const filename = await handleFileName('.jpg')

    if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath)

    fs.writeFileSync(`${uploadsPath}/${filename}`, base64, 'base64')

    return filename
  } catch (error) {
    errorLogger(error)
  }
}
