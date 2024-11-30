'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const InterartrialSeptum= sequelize.define('InterartrialSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return InterartrialSeptum;
};