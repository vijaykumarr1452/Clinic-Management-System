'use strict'

module.exports = (sequelize, DataTypes) => {
  const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
  const bloodTest= sequelize.define('bloodTest', {
bloodtest:{
    type:DataTypes.JSON,
    required:true
}
});
  return bloodTest;
};