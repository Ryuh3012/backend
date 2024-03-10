import { Router } from 'express'
import { UpdateUser, createUser, deleteUser, getConsul, getUser } from '../controllers/user/indexControllers.mjs'

const router = Router()

router.get('/users', getUser)
router.post('/users', createUser)
router.get('/users/:id', getConsul)
router.put('/users/:id', UpdateUser)
router.delete('/users/:id', deleteUser)

export default router