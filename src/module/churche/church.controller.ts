import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import tryCatch from '../../lib/trycatch'

const prisma = new PrismaClient()

export const getAllChurchs = tryCatch(async (_req: Request, res: Response) =>
  res.send(await prisma.church.findMany()),
)

export const createChurch = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.church.create({
      data: req.body,
    }),
  ),
)

export const getChurchById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.church.findUnique({
      where: { id: req.params.id },
    }),
  ),
)
export const deleteChurchById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.church.delete({
      where: { id: req.params.id },
    }),
  ),
)

export const updateChurchById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.church.update({
      where: { id: req.params.id },
      data: req.body,
    }),
  ),
)
