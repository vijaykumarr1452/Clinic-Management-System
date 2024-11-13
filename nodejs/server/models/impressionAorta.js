'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionAorta= sequelize.define('impressionAorta', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionAorta;
};