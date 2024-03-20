import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import tryCatch from '../../lib/trycatch'

const prisma = new PrismaClient()

export const getAllUsers = tryCatch(async (_req: Request, res: Response) =>
  res.send(await prisma.user.findMany()),
)

export const createUser = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.create({
      data: req.body,
    }),
  ),
)

export const getUserById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.findUnique({
      where: { id: req.params.id },
    }),
  ),
)
export const deleteUserById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.delete({
      where: { id: req.params.id },
    }),
  ),
)

export const updateUserById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.user.update({
      where: { id: req.params.id },
      data: req.body,
    }),
  ),
)
