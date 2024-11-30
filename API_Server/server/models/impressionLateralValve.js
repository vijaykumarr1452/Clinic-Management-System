'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionLateralValve= sequelize.define('impressionLateralValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionLateralValve;
};