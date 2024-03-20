import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import { SwaggerDefinition } from 'swagger-jsdoc'
import { AuthDocs } from '../auth/auth.docs'
import { UserDocs } from '../users/user.docs'

const config: SwaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Task Management',
    version: '1.0.0',
    description: 'API endpoints for user authentication',
  },

  paths: { ...AuthDocs.paths, ...UserDocs.paths },
}

const docsRoute = Router()
docsRoute.use('/', swaggerUi.serve, swaggerUi.setup(config))

export default docsRoute
