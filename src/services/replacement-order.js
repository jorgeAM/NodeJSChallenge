import {
  createReplacementOrder,
  getReplacementOrders,
  getReplacementOrder,
  assignAttender,
  doneOrder
} from '../repositories/replacement-order'
import getProduct from '../repositories/products'
import { getUserById } from '../repositories/user'

const createOrder = payload => {
  const { ProductId } = payload

  const product = getProduct(ProductId)

  if (!product) {
    throw new Error('La producto no existe')
  }

  return createReplacementOrder(payload)
}

const getById = id => getReplacementOrder(id)

const getAll = () => getReplacementOrders()

const assignAttenderToReplacementOrder = async (id, userId) => {
  const replacementOrder = await getReplacementOrder(id)

  if (!replacementOrder) {
    throw new Error('La order no existe')
  }

  const user = await getUserById(userId)

  if (!user) {
    throw new Error('Usuario no existe')
  }

  return assignAttender(replacementOrder, user)
}

const doneReplacementOrder = async (id, userId) => {
  const replacementOrder = await getReplacementOrder(id)

  if (!replacementOrder || !!replacementOrder.done) {
    throw new Error('La order no existe')
  }

  if (replacementOrder.AttenderId != userId) {
    throw new Error('No tienes asignada esta orden')
  }

  return doneOrder(id)
}

export {
  createOrder,
  getById,
  getAll,
  assignAttenderToReplacementOrder,
  doneReplacementOrder
}
