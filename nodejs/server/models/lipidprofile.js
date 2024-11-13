'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const lipidprofile= sequelize.define('lipidprofile', {
    lipidprofile:{
    type:DataTypes.JSON,
    required:true
},
bloodtestId:{
  type: DataTypes.INTEGER,
  required: true
}
});
  return lipidprofile;
};