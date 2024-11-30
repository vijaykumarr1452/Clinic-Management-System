'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionInferiorWall= sequelize.define('impressionInferiorWall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionInferiorWall;
};