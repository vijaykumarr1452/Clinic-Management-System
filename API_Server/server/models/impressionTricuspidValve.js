'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionTricuspidValve= sequelize.define('impressionTricuspidValve', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionTricuspidValve;
};