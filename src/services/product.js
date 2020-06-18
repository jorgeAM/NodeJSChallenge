import getProduct from '../repositories/products'

const getProduct = async payload => {
  const { productId } = payload

  const product = await getProduct(productId)

  if (!product) {
    throw new Error('Producto no encontrado')
  }

  return { product }
}

export default getAuthInfo
