'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionLeftVentricularFunction= sequelize.define('impressionLeftVentricularFunction', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionLeftVentricularFunction;
};