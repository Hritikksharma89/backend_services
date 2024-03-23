import express, { Application } from 'express'
import { env } from './lib/env'
import docsRoute from './module/docs/docs.route'
import userRoute from './module/users/user.route'
import authRouter from './module/auth/auth.route'
import logger from './lib/log'
import churchRoute from './module/churche/church.route'
import eventRoute from './module/events/event.route'

const app: Application = express()
const port = env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs', docsRoute)
app.use('/users', userRoute)
app.use('/auth', authRouter)
app.use('/church', churchRoute)
app.use('/event', eventRoute)

app.listen(port, () => logger.info(`Server running on port ${port}`))

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})
