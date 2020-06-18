import express from 'express'
import auth from '../middlewares/auth'
import admin from '../middlewares/admin'
import { createOrder, getById, getAll } from '../services/replacement-order'

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

    res.json({ replacementOrders })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const replacementOrder = await getById(id)

    res.json({ replacementOrder })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

router.put('/:id/assign', async (req, res) => {
  res.json({ message: 'this is assignation' })
})

export default router
