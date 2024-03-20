import { Prisma } from '@prisma/client'

import { NextFunction, Request, Response } from 'express'

/**
 * Wraps a function in a try/catch block that handles errors by calling next()
 * with the error. This allows async route handlers to avoid needing explicit
 * try/catch blocks.
 *
 * @param fn - The async route handler function to wrap
 */
const tryCatch = (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res)
    return next()
  } catch (error) {
    if (error instanceof Prisma.PrismaClientRustPanicError) {
      res.status(500).send({ message: 'Client Rust Panic Error ', error: error.message })
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      res.status(400).send({ message: 'Client Validation Error', error: error.message })
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      res.status(500).send({ message: 'Client Unknown Request Error ', error: error.message })
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).send({ message: 'Client Known Request Error', error: error.message })
    } else if (error instanceof Prisma.PrismaClientInitializationError) {
      res.status(500).send({ message: 'Client Initialization Error', error: error.message })
    } else {
      res.status(500).send({ message: 'Internal Server Error', error })
    }
  }
}

export default tryCatch
