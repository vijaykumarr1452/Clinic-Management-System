'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const criticalImage= sequelize.define('criticalImage', {   
      itemName: {
        type: DataTypes.JSON,
       required: true
        },
        patientId:{
            type: DataTypes.INTEGER,
            required: true
        }
      });
    return criticalImage;
  };