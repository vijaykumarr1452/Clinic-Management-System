'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionIntraCardiacClots= sequelize.define('impressionIntraCardiacClots', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionIntraCardiacClots;
};