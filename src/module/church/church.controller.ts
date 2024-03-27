import { Request, Response } from 'express'
import { Responses, TC, db } from '../../core'
import { MESSAGES } from '../../core/constant'

export const getAll = TC(async (_req: Request, res: Response) => {
  const CHURCHs = await db.church.findMany()
  if (CHURCHs.length > 0) Responses(res, MESSAGES.CHURCH.SUCCESS.READ, CHURCHs, [])
  if (CHURCHs.length < 0) Responses(res, MESSAGES.CHURCH.ERROR.READ, CHURCHs, [])
})

export const create = TC(async (req: Request, res: Response) => {
  const isCHURCH = await db.church.findFirst({ where: { id: req.body.id } })
  if (isCHURCH) return Responses(res, MESSAGES.CHURCH.ERROR.CREATE)
  const newCHURCH = await db.church.create({ data: { ...req.body } })
  Responses(res, MESSAGES.CHURCH.SUCCESS.CREATE, newCHURCH)
})

export const getById = TC(async (req: Request, res: Response) => {
  const church = await db.church.findUnique({ where: { id: req.params.id } })
  if (church) Responses(res, MESSAGES.CHURCH.SUCCESS.READ, church)
  if (!church) Responses(res, MESSAGES.CHURCH.ERROR.READ)
})

export const deleteById = TC(async (req: Request, res: Response) => {
  const church = await db.church.delete({ where: { id: req.params.id } })
  if (church) Responses(res, MESSAGES.CHURCH.SUCCESS.DELETE, church)
  if (!church) Responses(res, MESSAGES.CHURCH.ERROR.DELETE)
})

export const updateById = TC(async (req: Request, res: Response) => {
  const isChurch = await db.church.findFirst({ where: { id: req.body.id } })
  if (!isChurch) Responses(res, MESSAGES.CHURCH.ERROR.UPDATE)
  // if (isChurch && isChurch.id != req.body.id) Responses(res, MESSAGES.CANNOT_CHANGE_EMAIL)

  const church = await db.church.update({
    where: { id: req.params.id },
    data: req.body,
  })
  console.log(church)
  if (church) Responses(res, MESSAGES.CHURCH.SUCCESS.UPDATE, church)
})
