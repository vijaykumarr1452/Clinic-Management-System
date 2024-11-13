'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionPosteriorWall= sequelize.define('impressionPosteriorWall', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionPosteriorWall;
};