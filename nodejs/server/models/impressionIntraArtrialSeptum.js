'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionIntraArtrialSeptum= sequelize.define('impressionIntraArtrialSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionIntraArtrialSeptum;
};