'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Meeting.init({
    meetingName: DataTypes.STRING,
    timeDate: DataTypes.DATE,
    category_id: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meeting',
  });
  return Meeting;
};