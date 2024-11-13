module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const MedicineDetails= sequelize.define('MedicineDetails', {   
        MedicineDetails: {
          type: DataTypes.JSON,
        
        },
        patientId: {
            type: DataTypes.INTEGER,
          
          },
      });
    return MedicineDetails;
  };