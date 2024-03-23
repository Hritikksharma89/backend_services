import { Router } from 'express'
import { create, deleteById, getAll, getById, updateById } from './user.controller'
import tokenValidate from '../../lib/token.validate'

const userRoute = Router()

userRoute.get('/', getAll)
userRoute.get('/:id', getById)
userRoute.post('/', create)
userRoute.delete('/:id', tokenValidate, deleteById)
userRoute.put('/:id', updateById)

export default userRoute
