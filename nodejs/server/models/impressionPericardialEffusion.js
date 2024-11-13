'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPericardialEffusion= sequelize.define('impressionPericardialEffusion', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPericardialEffusion;
};