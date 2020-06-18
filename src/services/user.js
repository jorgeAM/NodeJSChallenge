import bcrypt from 'bcrypt'
import { getUserByEmail } from '../repositories/user'
import generateJWT from '../utils/generate-jwt'

const getAuthInfo = async payload => {
  const { email, password } = payload

  const user = await getUserByEmail(email)

  if (!user) {
    throw new Error('Usuario no registrado')
  }

  const match = bcrypt.compareSync(password, user.password)

  if (!match) {
    throw new Error('Contraseña incorrecta')
  }

  const token = generateJWT(user)

  return { token, user }
}

export default getAuthInfo
