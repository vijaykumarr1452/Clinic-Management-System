'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionRightAtrium= sequelize.define('impressionRightAtrium', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionRightAtrium;
};