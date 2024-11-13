module.exports = (sequelize, DataTypes) => {
	const medicineMaster = sequelize.define('medicinemaster', {
        
medicinename: {
    type: DataTypes.JSON
},
  genericname: {
    type: DataTypes.JSON
},
  typeofmedicine: {
    type: DataTypes.JSON
},  
  unitofmeasurement: {
    type: DataTypes.JSON
},
manufacturer:{
  type: DataTypes.JSON

}
 
});
	
return medicineMaster;
}