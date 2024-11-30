'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const liverfunction= sequelize.define('liverfunction', {
    liverfunction:{
    type:DataTypes.JSON,
    required:true
},
bloodtestId:{
  type: DataTypes.INTEGER,
  required: true
}
});
  return liverfunction;
};