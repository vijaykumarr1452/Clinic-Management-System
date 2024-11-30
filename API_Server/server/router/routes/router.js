const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');
// const multipart = require('connect-multiparty');
const fs = require('fs');
const multer = require('multer');
const UUID = require('uuid-generate')
const multipart = require('connect-multiparty');
const Sequelize = require('sequelize');
const uniqueKey = UUID.generate()
const express = require('express')
const app = express()
// const port = 3000
const db = require('../../config/db');
const Patient = db.patientmodel;
var GetDicomData = require('../../controller/controller')
// const bodyParser = require("body-parser");
// const cors = require('cors')
//const upload = require('../../config/upload');
var dicomParser = require('../../../node_modules/dicom-parser/dist/dicomParser');

// Load in Rusha so we can calculate sha1 hashes
//  var Rusha = require('../../../node_modules/rusha/dist/rusha');


module.exports = function(app) {
  const controller = require('../../controller/controller'); 
	//app.post('/api/auth/registration',  controller.registration);
	
	app.post('/api/auth/signin', controller.signin);

	app.post('/api/auth/assignment',  controller.assignmentStatus);
// CLINIC
app.get('/api/test/user', [authJwt.verifyToken], controller.clinicContent);
// app.put('/api/auth/updateclinic/:id',  controller.updateClinicContent);
app.delete('/api/auth/deleteclinic/:id',  controller.deleteClinic);
app.get('/api/auth/clinic', controller.getAllClinics);
app.get('/api/test/clinic/:id', controller.getClinics);


// DOCTOR
app.get('/api/auth/doctors/:clinicId',controller.doctors)
// app.put('/api/auth/updatedoctor/:id',  controller.updateDoctors);
app.delete('/api/auth/deletedoctor/:id',  controller.deleteDoctors);
app.get('/api/auth/doctor', controller.getAllDoctors);
app.get('/api/test/doctor/:id', controller.getDoctors);

 // ASIGNMENT
 app.get('/api/test/assignment/:id', controller.getListOfAssignments);
 app.put('/api/auth/updateassignment/:id',  controller.updateAssignment);
app.delete('/api/auth/deleteassignment/:id',  controller.deleteAssignment);
app.get('/api/update/assignment/:id',controller.getAssignments)
app.get('/api/dep/assignment/:id', controller.getListOfAssignmentsinDoctor);

//Master
app.get('/api/auth/master/:data',controller.master );


//patient

// app.post('/api/create/patient/:id',dicomupload.array('dicomUploads'),controller.createPatient
// );
app.put('/api/update/patient/:id',controller.updatePatient);
app.delete('/api/delete/patient/:id',controller.deletePatient);
app.get('/api/findall/patient/:clinicId/:status',controller.findpatient);
app.get('/api/findall/patientstatusreport/:clinicId',controller.findpatientreport);

//app.get('/api/findall/patient/:docId',controller.getAllPatients);
app.get('/api/findall/patdoc/:docId',controller.getAllPatients);

/////////////////////////
app.get('/api/getAll/Patients',controller.findAllPatients)
app.get('/api/findall/patientdoc/:docId/:status',controller.getAllPatientsStatus);

app.get('/api/findOne/patient/:id',controller.getPatient)

app.get('/api/findAll/patients/:clinicId',controller.getClinic)

app.put('/api/save/patient/:id',controller.updPatient);
app.put('/api/transfer/patient/:id',controller.transferPatient);
app.put('/api/save/patientReportclosed/:id/:status',controller.updPatientReportStatus);
app.put('/api/save/openClosedPatient/:id/:status',controller.OpenClosedCases);

///patient master api's
app.post('/api/auth/patientmaster',controller.patientMaster)
app.get('/api/auth/findpatientmaster',controller.findPatientMaster)
app.get('/api/auth/findonepatientmaster/:id',controller.findOnePatientMaster)
app.put('/api/auth/updatepatientmaster/:id',controller.updatePatientMaster)
app.delete('/api/auth/deletepatientmaster/:id',  controller.deletePatientMaster);


////kin api's
app.post('/api/auth/kinmaster',controller.kinMaster)
app.get('/api/auth/findkinmaster',controller.findkinMaster)
app.get('/api/auth/findonekinmaster/:id',controller.findOneKinMaster)
app.put('/api/auth/updatekinmaster/:id',controller.updateKinMaster)
app.delete('/api/auth/deletekinmaster/:id',  controller.deleteKin);

///////////////////////////////////////

//app.get('/api/findall/masters',controller.findobservations);


///////////////////////////////////////////// Master Tables

app.get('/api/auth/getmaster/:data',controller.getmaster)
app.post('/api/auth/createmaster/:data',controller.createmaster)
app.put('/api/auth/updatemaster/:id/:data',controller.updatemaster)
app.delete('/api/auth/deletemaster/:id/:data',controller.deletemaster)
app.get('/api/auth/findonemaster/:id/:data',controller.getonemaster)

//////////////////////////// OBSERVATIONS

app.post('/api/auth/obs', controller.obs);

/////////////////////////////////////////////////////////// 

//app.get('/api/auth/findbydate/:testdate/:status',controller.findByDate)
app.get('/api/auth/findbydate/:testdate/:status/:clinicId',controller.findByDate)

///////////////////////////////////

app.post('/api/auth/observation/:patientId/:type', controller.Observation);
app.get('/api/findOne/observation/:id',controller.getObservation)
app.get('/api/findOne/observation/:patientId/:type',controller.findObservation)
app.get('/api/findall/observations/:patientId',controller.findAllObservations);


///////////////////////////////

//app.post('/api/create/report/:patientId/:type',controller.report)
app.post('/api/update/observation/:patientId',controller.updateobs)
app.post('/api/update/report/:patientId',controller.updatereport)

/////////////////////////////////// GET PATIENTFORM SUB FIELDS 

app.get('/api/auth/getallpatientmasterfetch/:id',controller.getAllPatientMasterFetch)

app.post('/api/auth/referralcomment/:patientId',controller.referralcomment)
app.get('/api/auth/getreferralcomment/:patientId',controller.getAllReferralComment)

app.get('/api/auth/getallhospitalclinicfetch',controller.getAllHostipalClinicSubFetch)

///////////////////////////// GENERAL CLINIC DOCTOR APIS/////////////////////

// CLINIC
app.get('/api/auth/generalclinic', controller.getGeneralAllClinics);
app.get('/api/test/generalclinic/:id', controller.getGeneralClinics);
app.put('/api/auth/updategeneralclinic/:id',  controller.updateGeneralClinicContent);
app.delete('/api/auth/deletegeneralclinic/:id',  controller.deleteGeneralClinic);

//app.get('/api/test/user', [authJwt.verifyToken], controller.clinicContent);

// DOCTOR
app.get('/api/auth/generaldoctor', controller.getAllGeneralDoctors);
app.get('/api/test/generaldoctor/:id', controller.getGeneralDoctors);
app.delete('/api/auth/deletegeneraldoctor/:id',  controller.deleteGeneralDoctors);
app.put('/api/auth/updategeneraldoctor/:id',  controller.updateGeneralDoctors);



//app.get('/api/auth/doctors/:clinicId',controller.doctors)

///////////////////////////////////////////// Master Tables

app.get('/api/auth/getgeneralmaster/:data',controller.getgeneralmaster)
app.post('/api/auth/creategeneralmaster/:data',controller.creategeneralmaster)
app.put('/api/auth/updategeneralmaster/:id/:data',controller.updategeneralmaster)
app.delete('/api/auth/deletegeneralmaster/:id/:data',controller.deletegeneralmaster)
app.get('/api/auth/findonegeneralmaster/:id/:data',controller.getonegeneralmaster)

//////////////////////////
// app.get('/api/auth/getmaster/:data',controller.getallotherdetailsmaster)
// app.post('/api/auth/createmaster/:data',controller.createotherdetailsmaster)
// app.put('/api/auth/updatemaster/:id/:data',controller.updateotherdetailsmaster)
// app.delete('/api/auth/deletemaster/:id/:data',controller.deleteotherdetailsmaster)
// app.get('/api/auth/findonemaster/:id/:data',controller.getotherdetailsmaster)

///////////////////family
app.post('/api/auth/createfamily',controller.createfamily)
app.put('/api/auth/updatefamily/:id',controller.updatefamily)
app.delete('/api/auth/deletefamily/:id',controller.deleteFamily)
app.get('/api/auth/getfamily/:id',controller.getFamily)
app.get('/api/auth/getallfamily',controller.getallFamily)

/////////////////////other details
app.post('/api/auth/createotherdetails',controller.createotherdetails)
app.put('/api/auth/updateotherdetails/:id',controller.updateotherdetails)
app.delete('/api/auth/deleteotherdetails/:id',controller.deleteotherdetails)
app.get('/api/auth/getotherdetails/:id',controller.getotherdetails)
app.get('/api/auth/getallotherdetails',controller.getallotherdetails)


app.get('/api/auth/getallclinicdoctorfetch/',controller.getAllClinicDoctorFetch)

app.get('/api/auth/getalldoctorfetch',controller.getAllDoctorFetch)


//////////////////////////Life Style Form

app.post('/api/auth/lifestyle',controller.lifestyle)
app.put('/api/auth/updatelifestyle/:id',controller.updatelifestyle)
app.delete('/api/auth/deletelifestyle/:id',controller.deletelifestyle)
app.get('/api/auth/getlifestyle/:id',controller.getlifestyle)
app.get('/api/auth/getalllifestyle',controller.getalllifestyle)


///////////////////////////Investigation Report 

// app.post('/api/auth/investigationreport',controller.investigation)
app.put('/api/auth/updateinvestigationreport/:id',controller.updateinvestigationreport)
app.delete('/api/auth/deleteinvestigationreport/:id',controller.deleteinvestigationreport)
app.get('/api/auth/getinvestigationreport/:id',controller.getinvestigationreport)
app.get('/api/auth/getallinvestigationreport',controller.getallinvestigationreport)

///////////////////////////Medicine Master 

app.post('/api/auth/insertmedicinemaster',controller.medicineMaster)
app.put('/api/auth/updatemedicinemaster/:id',controller.updateMedicineMaster)
app.delete('/api/auth/deletemedicine/:id',controller.deleteMedicine)
app.get('/api/auth/getmedicinemaster/:id',controller.findOneMedicineMaster)
app.get('/api/auth/getallmedicinemaster',controller.findMedicineMaster)

////////////////////////////////////// Prescription

app.get('/api/findOne/prescriptiondetails/:id',controller.getPatientPrescription)
///////////////////////////////////////bllod test
app.post('/api/auth/createbloodtest',controller.createbloodtest)
app.get('/api/auth/getonebloodtest/:id',controller.getonebloodtest)
app.get('/api/auth/getbloodtest',controller.getbloodtest)
app.put('/api/auth/editbloodtest/:id',controller.updatebloodtest)
app.delete('/api/auth/deletebloodtest/:id',controller.deletebloodtest)
//////////////////////\\
app.get('/api/get/:clinicId/:status',controller.gettt)
//////////////////////
// app.get('/api/get/:id',controller.g)
///////////////LVMOTION
 app.get('/api/get1/:id/:path',controller.g)
 app.get('/api/get12/:id',controller.getImage)
 //////////////CRITICAL IMAGES\
 app.post('/api/post/criticalimages/:id',controller.criticalImages)
 app.get('/api/getcriticalImage/critic/:id',controller.getCritcalImage)
 //////////Lv Motion
 app.get('/api/getLvmotion/:id',controller.getLvMotion)
 //////prescription
 app.post('/api/postprescription/:id',controller.Prescription)
 app.get('/api/getPrescription/prescription/:id',controller.getPatientPrescription1)
 //////updateSupplementoryReport
 app.put('/api/updateSupplementoryReport/SupplementoryReport/:id',controller.updateSupplementoryReport)
 /////////////////sendClinicDoctorImages
 app.get('/api/sendClinicDoctorImages/:id/:type',controller.sendClinicDoctorImages)
 ///////////////////////get screensghot
 app.get('/api/getImagePath/:id/:filename',controller.getScreenshot)
 ////////////path
 app.get('/api/path/:id',controller.path)
 ///////////////cases to be closed
 app.get('/api/casesToBeClosed/Patients/:id',controller.findAllPatientsInClinic)
 ////////////////////////get edited images
 app.get('/api/getEditedImages/:id',controller.getEditedImages)
 ////////////////////////////////get referralImages
 app.get('/api/getReferralImages/:id',controller.getReferralImages)
 app.post('/api/contact',controller.contactUs)
 app.get('/api/reportMasters/:patientId',controller.reportMasters)
 app.get('/api/getMedicineFormMasters',controller.getMedicineFormMasters)
 app.post('/api/imageSend/:id',controller.imageSend)
 app.get('/api/expertsopinion/:id/:image',controller.expertsOpinion)
 //////////////////
 app.get('/api/impressionMaster/:id',controller.getImpressionsMasters)
 app.post('/api/postImpressionMasterObservation/:id',controller.postImpressionMasterObservation)
}

