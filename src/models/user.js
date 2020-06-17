const User = (sequelize, Sequelize) => {
  const model = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    role: {
      type: Sequelize.ENUM,
      values: ['user', 'admin']
    }
  })

  model.associate = models => {
    model.hasMany(models.ReplacementOrder, {
      foreignKey: 'AttenderId'
    })
  }

  return model
}

export default User
