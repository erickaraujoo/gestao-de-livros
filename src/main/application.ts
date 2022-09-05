import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import logger from './config/logger'
import setupRoutes from './config/routes'
import { resolve } from 'path'

const server = express()

server.use(logger)

server.use(cors({ exposedHeaders: 'X-Total-Count' }))
server.use(helmet())

server.use(express.json({ limit: '50mb' }))
server.use(express.urlencoded({ limit: '50mb', extended: true }))

server.use('/files', express.static(resolve(__dirname, '..', '..', 'uploads')))

setupRoutes(server)

export { server }
