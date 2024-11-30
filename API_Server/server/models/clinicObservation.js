'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const clinicObservation= sequelize.define('clinicObservation', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return clinicObservation;
};