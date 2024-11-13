'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPericardium= sequelize.define('impressionPericardium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPericardium;
};