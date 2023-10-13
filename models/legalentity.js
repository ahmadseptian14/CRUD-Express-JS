'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LegalEntity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LegalEntity.init({
    pic_name: DataTypes.STRING,
    pic_email: DataTypes.STRING,
    pic_position: DataTypes.STRING,
    company_name: DataTypes.STRING,
    company_mobile: DataTypes.STRING,
    company_npwp: DataTypes.STRING,
    company_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LegalEntity',
  });
  return LegalEntity;
};