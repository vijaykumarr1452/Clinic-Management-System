'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const referenceDoctor= sequelize.define('referenceDoctor', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return referenceDoctor;
};