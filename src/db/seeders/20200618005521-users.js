const { map } = require('lodash')
const bcrypt = require('bcrypt')

module.exports = {
  up: async queryInterface => {
    const data = [
      {
        fullName: 'Jorge Alfaro',
        email: 'jorge@gmail.com',
        password: '123456',
        role: 'user'
      },
      {
        fullName: 'Luis Murga',
        email: 'luis@gmail.com',
        password: '123456',
        role: 'user'
      },
      {
        fullName: 'administrator',
        email: 'admin@gmail.com',
        password: '123456',
        role: 'admin'
      }
    ]

    const normalizeItem = item => {
      const { fullName, email, password, role } = item

      return {
        fullName,
        email,
        password: bcrypt.hashSync(password, 10),
        role,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    }

    const payload = map(data, normalizeItem)

    return queryInterface.bulkInsert('Users', payload)
  },

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
}
