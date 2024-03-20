import { Router } from 'express'

import tokenValidate from '../../lib/token.validate'
import {
  getAllChurchs,
  createChurch,
  deleteChurchById,
  getChurchById,
  updateChurchById,
} from './church.controller'

const churchRoute = Router()

churchRoute.get('/', getAllChurchs)
churchRoute.get('/:id', getChurchById)
churchRoute.post('/', createChurch)
churchRoute.delete('/:id', tokenValidate, deleteChurchById)
churchRoute.put('/:id', updateChurchById)

export default churchRoute
