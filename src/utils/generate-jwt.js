import jwt from 'jsonwebtoken'

const KEY = process.env.JWT_KEY

const generateJWT = async user => {
  const data = {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role
  }

  return jwt.sign(data, KEY, { expiresIn: '8h' })
}

export default generateJWT
