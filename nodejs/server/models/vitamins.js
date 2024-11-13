'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const vitamins= sequelize.define('vitamins', {
    vitamins:{
    type:DataTypes.JSON,
    required:true
},
bloodtestId:{
  type: DataTypes.INTEGER,
  required: true
}
});
  return vitamins;
};