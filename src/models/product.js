const Product = (sequelize, Sequelize) => {
  const model = sequelize.define('Product', {
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
      type: Sequelize.FLOAT(10, 2),
      allowNull: false
    }
  })

  model.associate = models => {
    model.hasMany(models.ReplacementOrder, {
      foreignKey: 'ProductId'
    })
  }

  return model
}

export default Product
