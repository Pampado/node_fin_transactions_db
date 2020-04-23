import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import fs from 'fs'
import http from 'http'
import https from 'https'
import routes from './routes'
import AppError from './errors/AppError'

import createConnection from './database'

const privateKey = fs.readFileSync(`${__dirname}/ssl/selfsigned.key`, 'utf8')
const certificate = fs.readFileSync(`${__dirname}/ssl/selfsigned.crt`, 'utf8')

const credentials = { key: privateKey, cert: certificate }

createConnection()
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  // console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

export const httpsServer = https.createServer(credentials, app)
export const httpServer = http.createServer(app)
export default app
