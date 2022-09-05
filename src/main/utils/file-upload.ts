import crypto from 'crypto'
import { resolve, extname } from 'path'

export interface Image {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}

const extensions = ['.jpg', '.jpeg', '.png']

export const megaBytesToBytes = (value: number) => {
  return 2 ** 20 * value
}

export const fileFilter = (file: Image) => {
  if (!extensions.includes(extname(file.originalname).toLocaleLowerCase())) {
    return new Error('Format not allowed')
  }

  return true
}

export const handleFileName = async (extName: String) => {
  try {
    const name = crypto.randomBytes(16)

    return name.toString('hex') + extName.toLocaleLowerCase()
  } catch (error) {
    return new Error('File generated name')
  }
}

export const uploadsPath = resolve(__dirname, '..', '..', '..', 'uploads')
