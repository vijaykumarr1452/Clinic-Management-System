'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPulmonicValve= sequelize.define('impressionPulmonicValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPulmonicValve;
};