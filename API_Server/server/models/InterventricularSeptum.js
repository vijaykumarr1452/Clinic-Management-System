'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const InterventricularSeptum= sequelize.define('InterventricularSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return InterventricularSeptum;
};