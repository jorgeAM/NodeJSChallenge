import moment from 'moment'
import jwt from 'jsonwebtoken'

const KEY = process.env.JWT_KEY

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Tienes que iniciar sesión' })
  }

  let token = req.headers.authorization
  token = token.replace('Bearer ', '')

  try {
    let payload = jwt.verify(token, KEY)

    if (moment().unix() >= payload.exp) {
      return res.status(401).json({ message: 'El token ha expirado' })
    }

    req.user = payload
    next()
  } catch (error) {
    return res.status(500).json({ message: 'Tu token es inválido' })
  }
}

export default auth
