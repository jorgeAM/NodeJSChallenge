import express from 'express'

const router = express.Router()

router.post('/login', async (req, res) => {
  res.json({ message: 'this is login' })
})

export default router
