module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const imageScreenshot= sequelize.define('imageScreenshot', {   
      filename: {
        type: DataTypes.STRING,
       required: true
        },  
        imageId: {
            type: DataTypes.STRING,
           required: true
            },
            patientId:{
                type: DataTypes.STRING,
                required: true 
            } 
      }); 
    return imageScreenshot;
  };