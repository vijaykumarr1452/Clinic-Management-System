'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const manufacturerDetails= sequelize.define('manufacturerDetails', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return manufacturerDetails;
};