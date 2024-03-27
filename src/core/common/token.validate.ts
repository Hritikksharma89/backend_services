import { NextFunction, Request, Response } from 'express'
import { TC } from './tc'
import { verifyToken } from '../../module/auth/token.factory'
import { tokenTypes } from '../constant'
import { db } from '../database/database'

const tokenValidate = TC(async (req: Request, res: Response) => {
  const verifiedToken = verifyToken(req.headers.authorization as string)
  if (verifiedToken.type !== tokenTypes.ACCESS) return res.send({ message: 'Invalid token ' })
  const getAuth = await db.user.findUnique({
    where: { id: verifiedToken.userId },
  })
  console.log(verifiedToken.userId, getAuth?.id)
  if (verifiedToken.userId !== getAuth?.id) return res.send({ message: 'Invalid token ' })
})

export default tokenValidate
