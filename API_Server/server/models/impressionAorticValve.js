'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionAorticValve= sequelize.define('impressionAorticValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionAorticValve;
};