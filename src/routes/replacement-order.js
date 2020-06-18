import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
  res.json({ message: 'this is login' })
})

router.get('/', async (req, res) => {
  res.json({ message: 'this is login' })
})

router.get('/:id', async (req, res) => {
  res.json({ message: 'this is login' })
})

router.put('/:id/assign', async (req, res) => {
  res.json({ message: 'this is login' })
})

export default router
