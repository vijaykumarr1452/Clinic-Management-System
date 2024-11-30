'use strict'

const Sequelize = require('sequelize');
const env = require('./../../.env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.clinicManagement = require('../models/clinicManagement.js')(sequelize, Sequelize);
db.doctorManagement = require('../models/doctorManagement.js')(sequelize, Sequelize);
db.doctorAssignment = require('../models/doctorAssignment.js')(sequelize, Sequelize);
db.assignmentStatus = require('../models/assignmentStatus.js')(sequelize, Sequelize);
db.loginLookUp=require('../models/loginLookUp.model.js')(sequelize, Sequelize);
db.admin=require('../models/admin.model.js')(sequelize, Sequelize);

db.anteriorSeptum=require('../models/anteriorSeptum.js')(sequelize, Sequelize);
db.anteriorWall=require('../models/anteriorWall.js')(sequelize, Sequelize);
db.aorta=require('../models/aorta.js')(sequelize, Sequelize);
db.aorticValve=require('../models/aorticValve.js')(sequelize, Sequelize);
db.conclusion=require('../models/conclusion.js')(sequelize, Sequelize);
db.doctorAdvice=require('../models/doctorAdvice.js')(sequelize, Sequelize);
db.inferiorSeptum=require('../models/inferiorSeptum.js')(sequelize, Sequelize);
db.inferiorVenaCava=require('../models/inferiorVenaCava.js')(sequelize, Sequelize);
db.inferiorWall=require('../models/inferiorWall.js')(sequelize, Sequelize);
db.intracardiacData=require('../models/intracardiacData.js')(sequelize, Sequelize);
db.intraCardiacTumour=require('../models/intraCardiacTumour.js')(sequelize, Sequelize);
db.lateralWall=require('../models/lateralWall.js')(sequelize, Sequelize);
db.leftAtrium=require('../models/leftAtrium.js')(sequelize, Sequelize);
db.leftVentrical=require('../models/leftVentrical.js')(sequelize, Sequelize);
db.leftVentricalFunction=require('../models/leftVentricalFunction.js')(sequelize, Sequelize);
db.mitralValve=require('../models/mitralValve.js')(sequelize, Sequelize);
db.pericardialEffusion=require('../models/pericardialEffusion.js')(sequelize, Sequelize)
db.pericardium=require('../models/pericardium.js')(sequelize, Sequelize);
db.posteriorWall=require('../models/posteriorWall.js')(sequelize, Sequelize);
db.pulmonaryArtery=require('../models/pulmonaryArtery.js')(sequelize, Sequelize);
db.pulmonaryVein=require('../models/pulmonaryVein.js')(sequelize, Sequelize);
db.pulmonicValve=require('../models/pulmonicValve.js')(sequelize, Sequelize);
db.rightAtrium=require('../models/rightAtrium.js')(sequelize, Sequelize);
db.rightVentricalFunction=require('../models/rightVentricalFunction.js')(sequelize, Sequelize);
db.rightVentricle=require('../models/rightVentricle.js')(sequelize, Sequelize);
db.tricuspidValve=require('../models/tricuspidValve.js')(sequelize, Sequelize);
db.venous=require('../models/venous.js')(sequelize, Sequelize);

db.impressions=require('../models/impressions.js')(sequelize, Sequelize);
db.speckleTracking=require('../models/speckleTracking.js')(sequelize, Sequelize);

//
db.regionalwallmotion = require('../models/regionalwallmotion')(sequelize, Sequelize);
db.impressionreport = require('../models/impressionsreport')(sequelize, Sequelize);
db.conclusionreport = require('../models/conclusionreport')(sequelize, Sequelize);
db.doctoradvicereport = require('../models/doctoradvicereport')(sequelize, Sequelize);
db.speckletrackingreport = require('../models/speckletrackingreport')(sequelize, Sequelize);


db.doctorAdviceComments = require('../models/doctorAdviceComments')(sequelize, Sequelize);
db.conclusionsComments = require('../models/conclusionsComments')(sequelize, Sequelize);
db.impressionComments = require('../models/impressionComments')(sequelize, Sequelize);
db.observtaionComments = require('../models/observtaionComments')(sequelize, Sequelize);
//

db.educationalMaster=require('../models/educationalMaster')(sequelize, Sequelize);
db.salutationMaster=require('../models/salutationMaster')(sequelize, Sequelize);
db.hospitalSpeciality=require('../models/hospitalSpeciality')(sequelize, Sequelize);
db.hospitalService=require('../models/hospitalService')(sequelize, Sequelize);
db.hospitalType=require('../models/hospitalType')(sequelize, Sequelize);
db.religionMaster=require('../models/religionMaster')(sequelize, Sequelize);
db.occupationMaster=require('../models/occupationMaster')(sequelize, Sequelize);
db.diagnosisMaster=require('../models/diagnosisMaster')(sequelize, Sequelize);
db.complaintsMaster=require('../models/complaintsMaster')(sequelize, Sequelize);
db.branchMaster=require('../models/branchMaster')(sequelize, Sequelize);
db.martialStatus=require('../models/maritalStatus')(sequelize, Sequelize);

db.gender = require('../models/gendermaster')(sequelize, Sequelize);
db.state = require('../models/statemaster')(sequelize, Sequelize);
db.country = require('../models/countrymaster')(sequelize, Sequelize);
db.referralcomment = require('../models/referralcomment')(sequelize, Sequelize);
db.complains = require('../models/complains')(sequelize, Sequelize);

db.otherdetails = require('../models/otherdetails')(sequelize, Sequelize);
db.familymodel = require('../models/familymodel')(sequelize, Sequelize);
db.lifestyle = require('../models/lifestyle')(sequelize, Sequelize);
db.investigationreport = require('../models/investigationreport')(sequelize, Sequelize);


//////////////////////////////////////////masters
db.durationMaster = require('../models/durationmaster')(sequelize, Sequelize);
db.tabletsMaster = require('../models/tabletsMaster')(sequelize, Sequelize);
db.periodMaster = require('../models/periodMaster')(sequelize, Sequelize);
db.syrupMaster = require('../models/syrupMaster')(sequelize, Sequelize);
db.regimeMaster = require('../models/regimeMaster')(sequelize, Sequelize);
db.medicineMaster = require('../models/medicinemaster')(sequelize, Sequelize);


////////////////////////////

db.generalClinicManagement = require('../models/generalClinicManagement.js')(sequelize, Sequelize);
db.generalDoctorManagement = require('../models/generalDoctorManagement.js')(sequelize, Sequelize);

db.services = require('../models/services')(sequelize, Sequelize);
db.speciality = require('../models/speciality')(sequelize, Sequelize);
db.branches = require('../models/branches')(sequelize, Sequelize);


/////////////////////////////////////////////////
db.patientMaster=require('../models/patientMaster')(sequelize, Sequelize);
db.kinMaster = require('../models/kinmaster')(sequelize, Sequelize);

db.patientmodel=require('../models/patientmodel')(sequelize, Sequelize);

db.observations=require('../models/observations')(sequelize, Sequelize);

db.doctorAssignment.belongsTo(db.doctorManagement);
db.doctorAssignment.belongsTo(db.clinicManagement);

////////////////////////////////////

db.observationsItem = require('../models/observationsItem')(sequelize, Sequelize);
///////////////////////////////////
db.bloodtest = require('../models/bloodtest')(sequelize, Sequelize);
db.cbc = require('../models/cbc')(sequelize, Sequelize);
db.liverfunction = require('../models/liverfunction')(sequelize, Sequelize);
db.renalfunction = require('../models/renalfunction')(sequelize, Sequelize);
db.throidpanel = require('../models/throidpanel')(sequelize, Sequelize);
db.electrolytes = require('../models/electrolytes')(sequelize, Sequelize);
db.vitamins = require('../models/vitamins')(sequelize, Sequelize);
// db.bloodtest = require('../models/bloodtest')(sequelize, Sequelize);
db.lipidprofile = require('../models/lipidprofile')(sequelize, Sequelize);
//////////////////////////////////////////////REPOSRT
db.mitralValveComments = require('../models/mitralValveComments')(sequelize, Sequelize);
db.aorticValveComments = require('../models/aorticValveComments')(sequelize, Sequelize);
db.pulmonaryValveComments = require('../models/pulmonaryValveComments')(sequelize, Sequelize);
db.tricuspidValveComments = require('../models/tricuspidValveComments')(sequelize, Sequelize);
db.leftAtriumComments = require('../models/leftAtriumComments')(sequelize, Sequelize);
db.leftVentricleComments = require('../models/leftVentricleComments')(sequelize, Sequelize);
db.rightAtriumComments = require('../models/rightAtriumComments')(sequelize, Sequelize);
db.rightVentricleComments = require('../models/rightVentricleComments')(sequelize, Sequelize);

db.mitralValvereport = require('../models/mitralValvereport')(sequelize, Sequelize);
db.aorticValvereport = require('../models/aorticValvereport')(sequelize, Sequelize);
db.pulmonaryValvereport = require('../models/pulmonaryValvereport')(sequelize, Sequelize);
db.tricuspidValvereport = require('../models/tricuspidValvereport')(sequelize, Sequelize);
db.leftAtriumereport = require('../models/leftAtriumreport')(sequelize, Sequelize);
db.leftVentriclereport = require('../models/leftVentriclereport')(sequelize, Sequelize);
db.rightAtriumreport = require('../models/rightAtriumreport')(sequelize, Sequelize);
db.rightVentriclereport = require('../models/rightVentriclereport')(sequelize, Sequelize);
////////////////lv motion
db.lvmotion = require('../models/lvmotion')(sequelize, Sequelize);
///////////Critical image
db.criticalImage = require('../models/criticalImage')(sequelize, Sequelize);
///////////////precription
db.prescription = require('../models/prescription')(sequelize, Sequelize);
db.imageScreenshot = require('../models/imageScreenshot')(sequelize, Sequelize);
db.editedImages = require('../models/editedImages')(sequelize, Sequelize);
db.leftVentricalFunctionReport = require('../models/leftVentricalFunctionReport')(sequelize, Sequelize);
db.rightVentricalFunctionReport = require('../models/rightVentricalFunctionReport')(sequelize, Sequelize);
db.pericardialEffusionReport = require('../models/pericardialEffusionReport')(sequelize, Sequelize);
db.intraCardiacClotsReport = require('../models/intracardiacclotsreport')(sequelize, Sequelize);
db.intraCardiacTumourReport = require('../models/intraCardiacTumourReport')(sequelize, Sequelize);
db.inferiorVenacavaReport = require('../models/Inferiorvenacavareport')(sequelize, Sequelize);
db.aortaReport = require('../models/aortareport')(sequelize, Sequelize);
db.aortaComment = require('../models/aortacomment')(sequelize, Sequelize);
db.ivcReport = require('../models/ivcReport')(sequelize, Sequelize);
db.ivcComment = require('../models/ivcComment')(sequelize, Sequelize);
db.venousReport = require('../models/venousReport')(sequelize, Sequelize);
db.venousComment = require('../models/venousComment')(sequelize, Sequelize);
db.pericardiumReport = require('../models/pericardiumReport')(sequelize, Sequelize);
db.pericardiumComment = require('../models/pericardiumComment')(sequelize, Sequelize);
db.pulmonaryArteryReport = require('../models/paReport')(sequelize, Sequelize);
db.pulmonaryArteryComment = require('../models/paComment')(sequelize, Sequelize);
db.referenceDoctor = require('../models/referenceDoctor')(sequelize, Sequelize);
db.reasonForEcho = require('../models/reasonForEcho')(sequelize, Sequelize);
db.clinicObservation = require('../models/clinicObservation')(sequelize, Sequelize);
db.contactUs = require('../models/contactUs')(sequelize, Sequelize);
db.reasonList = require('../models/reasonList')(sequelize, Sequelize);
db.InterventricularSeptum = require('../models/InterventricularSeptum')(sequelize, Sequelize);
db.InterartrialSeptum = require('../models/InterartrialSeptum')(sequelize, Sequelize);
db.report = require('../models/reports')(sequelize, Sequelize);
db.typeOfMedicine = require('../models/typeOfMedicine')(sequelize, Sequelize);
db.unitOfMeasure = require('../models/unitOfMeasure')(sequelize, Sequelize);
db.manufacturerDetails = require('../models/manufacturerDetails')(sequelize, Sequelize);
db.doselist = require('../models/doselistObject')(sequelize, Sequelize);
db.MedicineDetails = require('../models/medicineDetails')(sequelize, Sequelize);
db.day = require('../models/days')(sequelize, Sequelize);
db.diagnosis = require('../models/diagnosis')(sequelize, Sequelize);

db.impressionLeftVentricle = require('../models/impressionLeftVentricle')(sequelize, Sequelize);
db.impressionRightVentricle = require('../models/impressionRightVentricle')(sequelize, Sequelize);
db.impressionLeftAtrium = require('../models/impressionLeftAtrium')(sequelize, Sequelize);
db.impressionRightAtrium = require('../models/impressionRightAtrium')(sequelize, Sequelize);
db.impressionAorticValve = require('../models/impressionAorticValve')(sequelize, Sequelize);
db.impressionMitralValve = require('../models/impressionMitralValve')(sequelize, Sequelize);
db.impressionTricuspidValve = require('../models/impressionTricuspidValve')(sequelize, Sequelize);
db.impressionPulmonicValve = require('../models/impressionPulmonicValve')(sequelize, Sequelize);
db.impressionPericardium = require('../models/impressionPericardium')(sequelize, Sequelize);
db.impressionAorta = require('../models/impressionAorta')(sequelize, Sequelize);
db.impressionPulmonaryArtery = require('../models/impressionPulmonaryArtery')(sequelize, Sequelize);
db.impressionPulmonaryVein = require('../models/impressionPulmonaryVein')(sequelize, Sequelize);
db.impressionInferiorVenaCava = require('../models/impressionIVC')(sequelize, Sequelize);
db.impressionAnteriorWall = require('../models/impressionAnteriorWall')(sequelize, Sequelize);
db.impressionPosteriorWall = require('../models/impressionPosteriorWall')(sequelize, Sequelize);
db.impressionInferiorWall = require('../models/impressionInferiorWall')(sequelize, Sequelize);
db.impressionLateralValve = require('../models/impressionLateralValve')(sequelize, Sequelize);
db.impressionAnteriorSeptum = require('../models/impressionAnteriorSeptum')(sequelize, Sequelize);
db.impressionInferiorSeptum = require('../models/impressionInferiorSeptum')(sequelize, Sequelize);
db.impressionIntraCardiacClots = require('../models/impressionIntraCardiacClots')(sequelize, Sequelize);
db.impressionIntraCardiacTumour = require('../models/impressionIntraCardiacTumour')(sequelize, Sequelize);
db.impressionPericardialEffusion = require('../models/impressionPericardialEffusion')(sequelize, Sequelize);
db.impressionLeftVentricularFunction = require('../models/impressionLeftVentricularFunction')(sequelize, Sequelize);
db.impressionRightVentricalFunction = require('../models/impressionRightVentricalFunction')(sequelize, Sequelize);
db.impressionSpeckleTracking = require('../models/impressionSpeckleTracking')(sequelize, Sequelize);
db.impressionIntraArtrialSeptum = require('../models/impressionIntraArtrialSeptum')(sequelize, Sequelize);
db.impressionIntraVentricularSeptum = require('../models/impressionIntraVentricularSeptum')(sequelize, Sequelize);
db.impressionMasterObservation = require('../models/impressionMasterObservations')(sequelize, Sequelize);
module.exports = db;