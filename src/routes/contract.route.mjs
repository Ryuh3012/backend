import { Router } from 'express'
import { UpdateContract, createContract, deleteContract, getConsul, getContract } from '../controllers/contrat/indexControllers.mjs'


const router = Router()

router.get('/contract', getContract)
router.post('/contract', createContract)
router.get('/contract/:id', getConsul)
router.put('/contract/:id', UpdateContract)
router.delete('/contract/:id', deleteContract)

export default router