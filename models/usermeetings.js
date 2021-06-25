'use strict';
const { User } = require('./user');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMeeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  UserMeeting.init({
    host: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    sequelize,
    modelName: 'UserMeeting',
  });
  return UserMeeting;
};