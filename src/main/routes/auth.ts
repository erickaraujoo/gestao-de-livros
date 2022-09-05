import { Router } from 'express'
import { adaptRoute } from '../adapters/adapt-route'
import { UserAuthControllerFactory } from './../factories/controller/auth/user-auth-contoller-factory'

export default (routes: Router) => {
  routes.post('/login', adaptRoute(UserAuthControllerFactory()))
}
