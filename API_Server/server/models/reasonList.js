'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const reasonList= sequelize.define('reasonList', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return reasonList;
};