import { models } from '../models'

const getUserByEmail = email => {
  const query = {
    where: { email }
  }

  return models.User.findOne(query)
}

const getUserById = id => models.User.findByPk(id)

export { getUserByEmail, getUserById }
