'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const diagnosis= sequelize.define('diagnosis', {   
    itemName: {
        type: DataTypes.STRING,
       required: true
        },     
    });
  return diagnosis;
};