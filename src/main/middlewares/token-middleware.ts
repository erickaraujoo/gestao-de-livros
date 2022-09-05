import errorLogger from '../../main/utils/error-logger'
import { Request, Response, NextFunction } from 'express'
import { decryptUserToken } from '../utils/crypto-utils'
import { unauthorized } from './../utils/api-response'
import { makeReturn } from '../../main/utils'

interface CustomRequest extends Request {
  token?: any
}

export async function tokenMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  const [, token] = authorization.split(' ')

  if (!token) return makeReturn(res, unauthorized('token', 'invalid token'))

  try {
    const decryptedToken = decryptUserToken(token)

    req.token = decryptedToken

    return next()
  } catch (error) {
    errorLogger(error)
  }
}
