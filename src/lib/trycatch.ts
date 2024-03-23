import { Prisma } from '@prisma/client'

import { NextFunction, Request, Response } from 'express'
import { Responses } from './response'

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
  } catch (error: any) {
    Responses(res, error.message, {}, error)
  }
}

export default tryCatch
