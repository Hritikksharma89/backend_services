import { Router } from 'express'
import { create, deleteById, getAll, getById, updateById } from './user.controller'
import { ROUTE } from '../../core/constant'
import { validate } from '../../middleware/validate'
import { CreateUserSchema, UpdateUserSchema } from './user.validation'
import tokenValidate from '../../core/common/token.validate'

const userRoute = Router()

userRoute
  .route(ROUTE.ROOT)
  .get(tokenValidate, getAll)
  .post(tokenValidate, validate(CreateUserSchema), create)

userRoute
  .route(ROUTE.ID)
  .get(tokenValidate, getById)
  .patch(tokenValidate, validate(UpdateUserSchema), updateById)
  .delete(tokenValidate, deleteById)

export default userRoute
