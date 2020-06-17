const ReplacementOrder = (sequelize, Sequelize) => {
  const model = sequelize.define('ReplacementOrder', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    done: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  })

  model.associate = models => {
    model.belongsTo(models.Product)

    model.belongsTo(models.User, {
      as: 'Attender',
      foreignKey: 'AttenderId'
    })
  }

  return model
}

export default ReplacementOrder
