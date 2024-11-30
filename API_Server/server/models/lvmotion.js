module.exports = (sequelize, DataTypes) => {
	const LvMotion = sequelize.define('lvMotion', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
	  lvmotiondata: {
		  type: DataTypes.JSON
	  },
	  
	  patientId: {
		  type: DataTypes.STRING
	  },
	lvmotionId:{
        type: DataTypes.STRING
    }
	});
	
	return LvMotion;
}