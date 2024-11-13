'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const cbc= sequelize.define('cbc', {
cbc:{
    type:DataTypes.JSON,
    required:true
},
bloodtestId:{
  type: DataTypes.INTEGER,
  required: true
}
});
  return cbc;
};