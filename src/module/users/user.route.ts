import { Router } from 'express'
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from './user.controller'
import tokenValidate from '../../lib/token.validate'

const userRoute = Router()

userRoute.get('/', getAllUsers)
userRoute.get('/:id', getUserById)
userRoute.post('/', createUser)
userRoute.delete('/:id', tokenValidate, deleteUserById)
userRoute.put('/:id', updateUserById)

export default userRoute
