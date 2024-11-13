'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionIVC= sequelize.define('impressionIVC', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionIVC;
};