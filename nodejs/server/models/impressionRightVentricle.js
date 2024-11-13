'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionRightVentricle= sequelize.define('impressionRightVentricle', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionRightVentricle;
};