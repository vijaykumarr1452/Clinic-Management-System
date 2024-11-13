'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const doselistObject= sequelize.define('doselistObject', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return doselistObject;
};