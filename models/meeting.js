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
      Meeting.belongsTo(models.Category);
      Meeting.belongsToMany(models.User, {
        through: models.UserMeeting
      });
    }
  };
  Meeting.init({
    meetingName: DataTypes.STRING,
    timeDate: DataTypes.DATE,
    meetingStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Meeting',
  });
  return Meeting;
};