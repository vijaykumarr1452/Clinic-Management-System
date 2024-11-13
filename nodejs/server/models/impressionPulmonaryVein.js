'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPulmonaryVein= sequelize.define('impressionPulmonaryVein', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPulmonaryVein;
};