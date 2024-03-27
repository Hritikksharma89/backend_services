import { Router } from 'express'
import {
  forgotPassword,
  resetPassword,
  signIn,
  signInGoogleCallbackController,
  signInGoogleController,
  signUp,
} from './auth.controller'

const authRouter = Router()

authRouter.post('/sign-up', signUp)
authRouter.post('/sign-in', signIn)
authRouter.post('/forgot-password', forgotPassword)
authRouter.post('/reset-password', resetPassword)
authRouter.get('/google', signInGoogleController)
authRouter.get('/google/callback', signInGoogleCallbackController)

export default authRouter
