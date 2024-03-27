import { Router } from 'express'

import { ROUTE } from '../../core/constant'
import { create, deleteById, getAll, getById, updateById } from './event.controller'

const eventRoute = Router()

eventRoute.route(ROUTE.ROOT).get(getAll).post(create)

eventRoute.route(ROUTE.ID).get(getById).put(updateById).delete(deleteById)

export default eventRoute
