import { Response } from 'express'
import { HttpResponse } from 'presentation/protocols'

export function getFullDate() {
  const date = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/, '+')
    .split(/ /)

  return `${date[2]}-${date[1]}-${date[3]}:${date[4]} ${date[5]}`
}

export function makeReturn(res: Response, httpResponse: HttpResponse) {
  return res.status(httpResponse.statusCode).json(httpResponse.body)
}
