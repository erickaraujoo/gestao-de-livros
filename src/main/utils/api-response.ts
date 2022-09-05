import { HttpResponse } from './../../presentation/protocols/http'
import errorLogger from './error-logger'

export function ok(payload = {}): HttpResponse {
  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'request successfull',
      payload,
      errors: [],
    },
  }
}

export function create(payload = {}): HttpResponse {
  return {
    statusCode: 201,
    body: {
      success: true,
      message: 'create successfull',
      payload,
      errors: [],
    },
  }
}

export function badRequest(errors: any = []): HttpResponse {
  return {
    statusCode: 400,
    body: {
      success: false,
      message: 'invalid request params',
      payload: {},
      errors,
    },
  }
}

export function serverError(errors: any = []): HttpResponse {
  errorLogger(errors)
  return {
    statusCode: 500,
    body: {
      success: false,
      message: 'internal server error',
      payload: {},
      errors: [
        {
          message: 'Desculpe! Ocorreu um erro. Tente novamente mais tarde.',
        },
      ],
    },
  }
}

export function notFound(param: string, message: string, payload: any = {}): HttpResponse {
  return {
    statusCode: 404,
    body: {
      success: false,
      message: 'not found',
      payload,
      errors: [
        {
          message,
          param,
        },
      ],
    },
  }
}

export function conflict(param: string, message = 'already exists'): HttpResponse {
  return {
    statusCode: 409,
    body: {
      success: false,
      message: 'conflict',
      payload: {},
      errors: [
        {
          message,
          param,
        },
      ],
    },
  }
}

export function unauthorized(param: string, message = 'token invalid'): HttpResponse {
  return {
    statusCode: 401,
    body: {
      success: false,
      message: 'unauthorized',
      payload: {},
      errors: [
        {
          message,
          param,
        },
      ],
    },
  }
}
