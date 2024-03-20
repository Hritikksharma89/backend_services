import { Router } from 'express'
import {
  forgotPassword,
  registerTokenValidate,
  resetPassword,
  signInController,
  signInGoogleCallbackController,
  signInGoogleController,
  signUpController,
  verifyResetPassword,
} from './auth.controller'
import { routeLogger } from '../../lib/logRoute'

const authRouter = Router()

authRouter.post('/sign-up', signUpController)
authRouter.post('/sign-in', signInController)
authRouter.get('/sign-out')
authRouter.get('/verify-email', registerTokenValidate)
authRouter.post('/forgot-Password', forgotPassword)
authRouter.post('/reset-Password', resetPassword)
authRouter.get('/verify-reset-Password', verifyResetPassword)
authRouter.get('/google', signInGoogleController)
authRouter.get('/api/google/callback', signInGoogleCallbackController)

authRouter.use(routeLogger)

export default authRouter
