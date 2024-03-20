import express, { Application } from 'express'
import https from 'https'
import fs from 'fs'
import { env } from './lib/env'
import docsRoute from './module/docs/docs.route'
import userRoute from './module/users/user.route'
import authRouter from './module/auth/auth.route'
import logger from './lib/log'
import churchRoute from './module/churche/church.route'
// import NewsfeedRoute from './module/feedback/feedback.route'

const options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem'),
  passphrase: 'hritik',
}

const app: Application = express()
const port = env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs/', docsRoute)
app.use('/users/', userRoute)
app.use('/auth', authRouter)
app.use('/church', churchRoute)
// app.use('/newsfeed', NewsfeedRoute)

const server = https.createServer(options, app)

server.listen(port, () => logger.info(`Server running on port ${port}`))

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
  // You might want to gracefully handle the error or log it
  process.exit(1) // Exit the process with an error code
})
