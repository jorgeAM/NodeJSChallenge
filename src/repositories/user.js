import { models } from '../models'

const getUserByEmail = email => {
  const query = {
    where: { email }
  }

  return models.User.findOne(query)
}

export default getUserByEmail
