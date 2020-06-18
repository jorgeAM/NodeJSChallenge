import getProduct from '../repositories/products'

const getProductByIdentifier = async id => {
  const product = await getProduct(id)

  if (!product) {
    throw new Error('Producto no encontrado')
  }

  return { product }
}

export default getProductByIdentifier
