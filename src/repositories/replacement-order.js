import { models } from '../models'

const getReplacementOrder = id => models.ReplacementOrder.findByPk(id)

const getReplacementOrders = () => models.ReplacementOrder.findAll()

const createReplacementOrder = payload =>
  models.ReplacementOrder.create(payload)

export { getReplacementOrder, getReplacementOrders, createReplacementOrder }
