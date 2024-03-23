import { PrismaClient, User } from '@prisma/client'
import { Request, Response } from 'express'

import tryCatch from '../../lib/trycatch'
import { Responses } from '../../lib/response'
import db from '../../lib/db'
import UserValidation from './user.validation'
import reqValidate from '../../lib/reqValidate'

const Message = {
  USER_FETCH_SECCESSFULL: 'User fetch successfully',
  USER_NOT_FOUND: 'User NOT found',
  USERS_LIST_IS_EMPTY: 'Users list is empty',
  USERS_ALREADY_EXIST: 'Users already exist',
}

const prisma = new PrismaClient()

export const getAll = tryCatch(async (req: Request, res: Response) => {
  const validate = reqValidate(req, UserValidation.getAll)
  if (!(await validate).status) return Responses(res, (await validate).message[0], [], [])
  const users = await db.user.findMany()
  if (users.length > 0) Responses(res, Message.USER_FETCH_SECCESSFULL, users, [])
  if (users.length < 0) Responses(res, Message.USERS_LIST_IS_EMPTY, users, [])
})

export const create = tryCatch(async (req: Request, res: Response) => {
  const validate = await reqValidate(req, UserValidation.create)
  if (!validate.status) return Responses(res, validate.message[0], {}, {})
  const user: User = validate.body?.data as User
  const isUser = await db.user.findFirst({ where: { email: user.email } })
  if (isUser) return Responses(res, Message.USERS_ALREADY_EXIST, {}, {})
  const newUser = await db.user.create({ data: { ...user }})
  if (!user) Responses(res, Message.USER_NOT_FOUND, newUser, {})
  Responses(res, Message.USER_FETCH_SECCESSFULL, newUser, {})
})

export const getById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.findUnique({
      where: { id: req.params.id },
    }),
  ),
)
export const deleteById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.delete({
      where: { id: req.params.id },
    }),
  ),
)

export const updateById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.update({
      where: { id: req.params.id },
      data: req.body,
    }),
  ),
)
