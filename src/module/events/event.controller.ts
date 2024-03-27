import { Request, Response } from 'express'
import { Responses, TC, db } from '../../core'
import { MESSAGES } from '../../core/constant'

export const getAll = TC(async (_req: Request, res: Response) => {
  const EVENTs = await db.event.findMany()
  if (EVENTs.length > 0) Responses(res, MESSAGES.EVENT.SUCCESS.READ, EVENTs, [])
  if (EVENTs.length < 0) Responses(res, MESSAGES.EVENT.ERROR.READ, EVENTs, [])
})

export const create = TC(async (req: Request, res: Response) => {
  const isEvent = await db.event.findFirst({ where: { id: req.body.id } })
  if (isEvent) return Responses(res, MESSAGES.EVENT.ERROR.CREATE)
  const newEvent = await db.event.create({ data: { ...req.body } })
  Responses(res, MESSAGES.EVENT.SUCCESS.CREATE, newEvent)
})

export const getById = TC(async (req: Request, res: Response) => {
  const event = await db.event.findUnique({ where: { id: req.params.id } })
  if (event) Responses(res, MESSAGES.EVENT.SUCCESS.READ, event)
  if (!event) Responses(res, MESSAGES.EVENT.ERROR.READ)
})

export const deleteById = TC(async (req: Request, res: Response) => {
  const event = await db.event.delete({ where: { id: req.params.id } })
  if (event) Responses(res, MESSAGES.EVENT.SUCCESS.DELETE, event)
  if (!event) Responses(res, MESSAGES.EVENT.ERROR.DELETE)
})

export const updateById = TC(async (req: Request, res: Response) => {
  const isEvent = await db.event.findFirst({ where: { id: req.body.id } })
  if (!isEvent) Responses(res, MESSAGES.EVENT.ERROR.UPDATE)
  // if (isEvent && isEvent.id != req.body.id) Responses(res, MESSAGES.CANNOT_CHANGE_EMAIL)

  const event = await db.event.update({
    where: { id: req.params.id },
    data: req.body,
  })
  console.log(event)
  if (event) Responses(res, MESSAGES.EVENT.SUCCESS.UPDATE, event)
})
