import {
  createReplacementOrder,
  getReplacementOrders,
  getReplacementOrder,
  assignAttender
} from '../repositories/replacement-order'
import { getUserById } from '../repositories/user'

const createOrder = payload => createReplacementOrder(payload)

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

export { createOrder, getById, getAll, assignAttenderToReplacementOrder }
