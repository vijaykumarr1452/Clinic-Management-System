'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const unitOfMeasure= sequelize.define('unitOfMeasure', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return unitOfMeasure;
};