'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const impressionInferiorSeptum= sequelize.define('impressionInferiorSeptum', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return impressionInferiorSeptum;
};