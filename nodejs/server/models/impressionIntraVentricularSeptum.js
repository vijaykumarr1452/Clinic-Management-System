'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionIntraVentricalSeptum= sequelize.define('impressionIntraVentricalSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionIntraVentricalSeptum;
};