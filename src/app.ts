import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv-safe'
import router from 'routes'
import connectToMongoDB from 'config/mongo'

dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ limit: '20mb', extended: true }))

app.use(cookieParser())

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))

app.use(helmet())

app.use('/api', router)

connectToMongoDB()

export default app
