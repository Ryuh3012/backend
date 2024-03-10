import { Router } from 'express'
import { UpdateCases, createCases, deleteCases, getCases, getConsul } from '../controllers/case/indexControllers.mjs'



const router = Router()

router.get('/contract', getCases)
router.post('/contract', createCases)
router.get('/contract/:id', getConsul)
router.put('/contract/:id', UpdateCases)
router.delete('/contract/:id', deleteCases)

export default router