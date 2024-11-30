'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const renalfunction= sequelize.define('renalfunction', {
    renalfunction:{
    type:DataTypes.JSON,
    required:true
},
bloodtestId:{
  type: DataTypes.INTEGER,
  required: true
}
});
  return renalfunction;
};