'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const country= sequelize.define('country', {   
      itemName: {
        type: DataTypes.STRING,
       required: true
        }  
      });
    return country;
  };