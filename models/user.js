'use strict';
const { Model, DatabaseError } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    comparePassword(givenPassword) {
      return bcrypt.compareSync(givenPassword, this.password);
    }

    static associate(models) {
      User.belongsToMany(models.Meeting, {
        through: models.UserMeeting
      })
    }
  }

  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_login: DataTypes.DATE,
      profileImgPublicId: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeCreate: async (userData) => {
          userData.password = await bcrypt.hash(userData.password, 10);
          return userData;
        },
        beforeUpdate: async (userData) => {
          userData.password = await bcrypt.hash(userData.password, 10);
          return userData;
        }
      },
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
