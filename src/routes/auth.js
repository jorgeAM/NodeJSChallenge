import express from 'express'
import getAuthInfo from '../services/user'

const router = express.Router()

router.post('/login', async (req, res) => {
  try {
    const { token, user } = await getAuthInfo(req.body)

    return res.status(200).json({ token, user })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
})

export default router
