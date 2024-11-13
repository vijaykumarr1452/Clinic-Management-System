'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPulmonaryArtery= sequelize.define('impressionPulmonaryArtery', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPulmonaryArtery;
};