'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionRightVentricularFunction= sequelize.define('impressionRightVentricularFunction', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionRightVentricularFunction;
};