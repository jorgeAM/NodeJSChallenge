import express from 'express'
import auth from '../middlewares/auth'
import admin from '../middlewares/admin'
import {
  createOrder,
  getById,
  getAll,
  assignAttenderToReplacementOrder,
  doneReplacementOrder
} from '../services/replacement-order'

const router = express.Router()

router.post('/', auth, async (req, res) => {
  const { productId, quantity } = req.body

  const payload = {
    ProductId: productId,
    quantity
  }

  try {
    const replacementOrder = await createOrder(payload)

    return res.status(201).json({ replacementOrder })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/', auth, admin, async (req, res) => {
  try {
    const replacementOrders = await getAll()

    return res.json({ replacementOrders })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const replacementOrder = await getById(id)

    return res.json({ replacementOrder })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.put('/:id/assign', auth, admin, async (req, res) => {
  const { id } = req.params
  const { userId } = req.body

  try {
    const replacementOrder = await assignAttenderToReplacementOrder(id, userId)

    return res.json({ replacementOrder })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params

    const [_, [replacementOrder]] = await doneReplacementOrder(id, req.user.id)

    return res.json({ replacementOrder })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default router
