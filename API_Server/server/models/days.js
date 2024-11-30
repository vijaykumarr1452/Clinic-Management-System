'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const day= sequelize.define('day', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return day;
};