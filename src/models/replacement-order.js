const ReplacementOrder = (sequelize, Sequelize) => {
  const model = sequelize.define(
    'ReplacementOrder',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      done: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {
      defaultScope: {
        where: {
          done: false
        }
      }
    }
  )

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
