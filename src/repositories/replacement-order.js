import { models } from '../models'

const getReplacementOrder = id => {
  const query = {
    where: {
      id
    },
    include: [
      models.Product,
      {
        model: models.User,
        as: 'Attender'
      }
    ]
  }

  return models.ReplacementOrder.unscoped().findOne(query)
}

const getReplacementOrders = () => models.ReplacementOrder.findAll()

const createReplacementOrder = payload =>
  models.ReplacementOrder.create(payload)

export { getReplacementOrder, getReplacementOrders, createReplacementOrder }
