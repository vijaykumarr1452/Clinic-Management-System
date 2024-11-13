'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionAnteriorSeptum= sequelize.define('impressionAnteriorSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionAnteriorSeptum;
};