import {
  createReplacementOrder,
  getReplacementOrders,
  getReplacementOrder
} from '../repositories/replacement-order'

const createOrder = payload => {
  try {
    return createReplacementOrder(payload)
  } catch (error) {
    throw error
  }
}

const getById = id => {
  try {
    return getReplacementOrder(id)
  } catch (error) {
    throw error
  }
}

const getAll = () => {
  try {
    return getReplacementOrders()
  } catch (error) {
    throw error
  }
}

export { createOrder, getById, getAll }
