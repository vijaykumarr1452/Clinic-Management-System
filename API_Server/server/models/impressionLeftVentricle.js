'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionLeftVentricle= sequelize.define('impressionLeftVentricle', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionLeftVentricle;
};