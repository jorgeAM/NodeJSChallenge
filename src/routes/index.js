import express from 'express'
import auth from './auth'
import replacementOrder from './replacement-order'

const router = express.Router()

router.use('/auth', auth)
router.use('/replacement-order', replacementOrder)

export default router
