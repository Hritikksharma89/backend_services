// import { PrismaClient } from '@prisma/client'
// import { Request, Response } from 'express'

// import tryCatch from '../../lib/trycatch'

// const prisma = new PrismaClient()

// export const getAllNewsfeeds = tryCatch(async (_req: Request, res: Response) =>
//   res.send(await prisma.newsfeed.findMany()),
// )

// export const createNewsfeed = tryCatch(async (req: Request, res: Response) =>
//   res.send(
//     await prisma.newsfeed.create({
//       data: req.body,
//     }),
//   ),
// )

// export const getNewsfeedById = tryCatch(async (req: Request, res: Response) =>
//   res.send(
//     await prisma.newsfeed.findUnique({
//       where: { id: req.params.id },
//     }),
//   ),
// )
// export const deleteNewsFeedById = tryCatch(async (req: Request, res: Response) =>
//   res.send(
//     await prisma.newsfeed.delete({
//       where: { id: req.params.id },
//     }),
//   ),
// )

// export const updateNewsfeedById = tryCatch(async (req: Request, res: Response) =>
//   res.send(
//     await prisma.newsfeed.update({
//       where: { id: req.params.id },
//       data: req.body,
//     }),
//   ),
// )
