'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionAnteriorWall= sequelize.define('impressionAnteriorWall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionAnteriorWall;
};