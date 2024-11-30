'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const reasonForEcho= sequelize.define('reasonForEcho', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return reasonForEcho;
};