import { models } from '../models'

const getProduct = identifier => {
  const query = {
    where: {
      $or: [
        {
          id: identifier
        },
        {
          sku: identifier
        }
      ]
    }
  }

  return models.Product.findOne(query)
}

export default getProduct
