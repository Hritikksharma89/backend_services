import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

import tryCatch from '../../lib/trycatch'

const prisma = new PrismaClient()

export const getAllEvents = tryCatch(async (_req: Request, res: Response) =>
  res.send(await prisma.event.findMany()),
)

export const createEvent = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.event.create({
      data: req.body,
    }),
  ),
)

export const getEventById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.event.findUnique({
      where: { id: req.params.id },
    }),
  ),
)
export const deleteEventById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.event.delete({
      where: { id: req.params.id },
    }),
  ),
)

export const updateEventById = tryCatch(async (req: Request, res: Response) =>
  res.send(
    await prisma.event.update({
      where: { id: req.params.id },
      data: req.body,
    }),
  ),
)
