'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionLeftAtrium= sequelize.define('impressionLeftAtrium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionLeftAtrium;
};