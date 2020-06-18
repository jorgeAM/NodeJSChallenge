'use strict'

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sku: {
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }),
  down: queryInterface => queryInterface.dropTable('Products')
}
