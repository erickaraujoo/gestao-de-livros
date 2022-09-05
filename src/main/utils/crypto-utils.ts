import { createCipheriv, createDecipheriv, createHash } from 'crypto'
import { ENCRYPTION } from '../config/constants'
import errorLogger from './error-logger'

export interface TokenData {
  user?: { username?: number }
  token?: { sub?: string; type?: string }
}

export function hashGen(string: string) {
  return createHash('sha1').update(string).digest('hex')
}

export function encryptUserData(data: any) {
  try {
    const keyBuffer = Buffer.from(ENCRYPTION.KEY, 'utf8');
    const ivBuffer = Buffer.alloc(0);
    const cipher = createCipheriv("AES-128-ECB", keyBuffer, ivBuffer);

    const updatedCipher = cipher.update(JSON.stringify(data))

    const finalCypher = Buffer.concat([updatedCipher, cipher.final()])

    const base64Token = finalCypher.toString('base64')

    return base64Token
  } catch (error) {
    errorLogger(error)
    throw new Error("ERROR_DURING_ENCRYPT_TOKEN")
  }
}

export function decryptUserToken(token: any): TokenData {
  try {
    const encryptedText = Buffer.from(token, 'base64')
    
    const keyBuffer = Buffer.from(ENCRYPTION.KEY, 'utf8');
    const ivBuffer = Buffer.alloc(0);
    
    const decipher = createDecipheriv("AES-128-ECB", keyBuffer, ivBuffer);

    const updatedDecipher = decipher.update(encryptedText)
    
    const finalDecipher = Buffer.concat([updatedDecipher, decipher.final()])

    const base = finalDecipher.toString()

    return JSON.parse(base)
  } catch (error) {
    errorLogger(error)
    throw new Error("ERROR_DURING_DECRYPT_TOKEN")
  }
}

export function tagGen() {
  const randomString = Math.random().toString(36).slice(-8) + Date.now()

  return createHash('md5').update(randomString).digest('hex')
}
