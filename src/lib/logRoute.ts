import { NextFunction, Request, Response } from 'express'

import logger from './log'

/**
 * Logs request information using logger middleware.
 */
export const routeLogger = async (req: Request, res: Response, next: NextFunction) => {
  logger.info(`Route exit with: ${req.route.path}`)
  next()
}
