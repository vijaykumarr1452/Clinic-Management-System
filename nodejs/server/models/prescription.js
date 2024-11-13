module.exports = (sequelize, DataTypes) => {
	const Prescription = sequelize.define('prescription', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
	  prescriptiondata: {
		  type: DataTypes.JSON
	  },
	  
	  patientId: {
		  type: DataTypes.STRING
	  },
	prescriptionId:{
        type: DataTypes.JSON
    }
	});
	
	return Prescription;
}