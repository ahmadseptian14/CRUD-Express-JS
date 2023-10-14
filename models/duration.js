'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duration extends Model {

    static associate(models) {
      // define association here
    }
  }
  Duration.init({
    value: DataTypes.INTEGER,
    unit_duration: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Duration',
  });
  return Duration;
};
