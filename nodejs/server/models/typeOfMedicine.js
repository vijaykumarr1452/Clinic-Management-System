'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const typeOfMedicine= sequelize.define('typeOfMedicine', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return typeOfMedicine;
};