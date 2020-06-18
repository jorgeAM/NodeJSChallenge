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

const assignAttender = async (replacementOrder, user) => {
  const updatedOrder = await replacementOrder.setAttender(user)

  return getReplacementOrder(updatedOrder.id)
}

const doneOrder = id => {
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
    ],
    returning: true
  }

  const payload = {
    done: true
  }

  return models.ReplacementOrder.update(payload, query)
}

export {
  getReplacementOrder,
  getReplacementOrders,
  createReplacementOrder,
  assignAttender,
  doneOrder
}
