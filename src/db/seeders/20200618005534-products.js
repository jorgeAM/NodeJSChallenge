const { map } = require('lodash')

module.exports = {
  up: async queryInterface => {
    const data = [
      {
        sku: 'CC450',
        name: 'Coca cola 450ml',
        price: 3.0
      },
      {
        sku: 'PL500',
        name: 'Papitas Lays 500gr',
        price: 5.0
      },
      {
        sku: 'RBSA',
        name: 'Red Bull sin azucar',
        price: 10.5
      }
    ]

    const normalizeItem = item => {
      const { sku, name, price } = item

      return {
        sku,
        name,
        price,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalizeItem)

    return queryInterface.bulkInsert('Products', payload)
  },

  down: queryInterface => queryInterface.bulkDelete('Products', null, {})
}
