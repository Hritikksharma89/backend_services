import axios from 'axios'
import { Request, Response } from 'express'
import CryptoFactory from './crypto.factory'
import { generateAuthTokens } from './token.factory'
import { db, Responses, TC } from '../../core'
import { env } from 'process'

const { comparePassword, encryptedPassword } = CryptoFactory()

export const signUp = TC(async (req: Request, res: Response) => {
  const payload: any = req.body
  const { email, password, name } = payload
  const user = await db.user.findUnique({ where: { email } })
  if (user) return Responses(res, 'User already exists, Use different email')
  const newUser = await db.user.create({
    data: {
      email,
      name,
      passwordHash: await encryptedPassword(password),
    },
  })
  return Responses(res, 'Sign-up Successfully, Please check your E-mail', newUser)
})

export const signIn = TC(async (req: Request, res: Response) => {
  const payload: any = req.body
  const { email, password } = payload
  const user = await db.user.findUnique({
    where: { email },
  })
  if (!user) return Responses(res, 'No User Found with this Email')
  const userPassword = user.passwordHash
  if (comparePassword(password, userPassword as string)) {
    const token = await generateAuthTokens(user.id, user.role)

    return Responses(res, 'Sign-in Successfully', { user, token })
  }
  return Responses(res, 'Invalid Email or Password')
})

export const forgotPassword = TC(async (req: Request, res: Response) => {
  const user = await db.user.findFirst({
    where: {
      email: req.body.email,
    },
  })
  if (!user) return Responses(res, 'No user found with this email')
  return Responses(res, 'Password Reset link sent to your email')
})

export const resetPassword = TC(async (req: Request, res: Response) => {
  const { email, password, newPassword } = req.body
  const user = await db.user.findUnique({
    where: { email },
  })
  if (!user) return Responses(res, 'No User Found with this Email')
  if (comparePassword(password, user.passwordHash as string)) {
    if (comparePassword(password, encryptedPassword(newPassword)))
      return Responses(res, 'Old and New Password cannot be the same')
    await db.user.update({
      where: { id: user.id! },
      data: {
        passwordHash: encryptedPassword(newPassword),
      },
    })
    return Responses(res, 'Password reset Successfully')
  }
  return Responses(res, 'Invalid Email or Password')
})

export const signInGoogleController = TC(async (req: Request, res: Response) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&response_type=code&scope=profile email`
  res.redirect(url)
})
export const signInGoogleCallbackController = TC(async (req: Request, res: Response) => {
  const { code } = req.query
  const { data } = await axios.post('<https://oauth2.googleapis.com/token>', {
    client_id: env.CLIENT_ID,
    client_secret: env.CLIENT_SECRET,
    code,
    redirect_uri: env.REDIRECT_URI,
    grant_type: 'authorization_code',
  })
  const { access_token } = data
  const { data: profile } = await axios.get('<https://www.googleapis.com/oauth2/v1/userinfo>', {
    headers: { Authorization: `Bearer ${access_token}` },
  })
  res.send({ data, profile })
})
