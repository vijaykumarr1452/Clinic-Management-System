import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { 
  }

   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
  }


  ngrokUrl = 'http://localhost:8080/api'


  login= (loginBody) => {
     return this.http.post(`${this.ngrokUrl}/auth/signin`,loginBody,this.httpOptions)
  }

  registration= (formData) => {
    //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
    return this.http.post(`${this.ngrokUrl}/auth/registration`,formData)
 }


// getListOfAssignmentsDoctor= () => {
//   const id = localStorage.getItem('id')
//   return this.http.get(`${this.ngrokUrl}/test/assignment/${id}}`)
//   //return this.http.get(`${this.ngrokUrl}/test/assignment/${id}/${localStorage.getItem('role')}`)
// }
getImageNames =()=>{
  const id = localStorage.getItem('pid')
  console.log(localStorage,'45')
  return this.http.get(`${this.ngrokUrl}/get12/${id}`)
}
/////////////////////////////CLINIC APIS//////////////////// 

getAllClinicList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/clinic/`)
}
getAllClinicDoctorList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/doctors/${id}`)
}
deleteClinic= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteclinic/${id}`)
}
getClinicData= (id1)=>{
  const id = localStorage.getItem('id')
  console.log(localStorage)
  return this.http.get(`${this.ngrokUrl}/test/clinic/${id}`)
}
getEditClinicData= (id1)=>{
  const id = localStorage.getItem('id')
  console.log(localStorage)
  return this.http.get(`${this.ngrokUrl}/test/clinic/${id1}`)
}
getAllClinics=()=>{
return this.http.get(`${this.ngrokUrl}/auth/clinic`)
}
updateClinicData= (formData)=>{
  
  const id = localStorage.getItem('aid')
  console.log(formData,id)
  return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,formData)
}

updateClinicFrontData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('id')
  return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,updatedObj)
}

/////////////////////////DOCTORS APIS//////////////////////
getAllDoctorsList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/doctor`)
}

deleteDoctor= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletedoctor/${id}`)
}

getDoctorData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/doctor/${id}`)
}

updateDoctorData= (formData)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,formData)
}

updateDoctorFrontData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('id')
  return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
}

//////////////////////// ASSIGNMENT /////////////////////////////
getAssignmentData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/update/assignment/${id}`)
}
updateAssignment= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('aid')
  return this.http.put(`${this.ngrokUrl}/auth/updateassignment/${id}`,updatedObj)
}
deleteAssignment= ()=>{
  const id = localStorage.getItem('aid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteassignment/${id}`)
}
getListOfAssignments= () => {
  const id = localStorage.getItem('id')
  const role = localStorage.getItem('role')
  if(role === 'CLINIC'){
  return this.http.get(`${this.ngrokUrl}/test/assignment/${id}}`)
  } else {
  return this.http.get(`${this.ngrokUrl}/dep/assignment/${id}}`)
  }
  //return this.http.get(`${this.ngrokUrl}/test/assignment/${id}/${localStorage.getItem('role')}`)
}

assignment= (assignmentBody) => {
  //console.log(assignmentBody);
    return this.http.post(`${this.ngrokUrl}/auth/assignment`,assignmentBody,this.httpOptions)
  }
  
//////////////////////// PATIENT APIS
createPatient =(formData)=>{
  let id  = localStorage.getItem('id')
  console.log(formData)
  return this.http.post(`${this.ngrokUrl}/addpatient/${id}`,formData)
}
addpatientForm= (patientFormReq) => {

  return this.http.post(`${this.ngrokUrl}/create/patient`,patientFormReq,this.httpOptions)
}
 deletePatient=()=>{
   console.log(localStorage)
  const id = localStorage.getItem('pid')

   return this.http.delete(`${this.ngrokUrl}/delete/patient/${id}`)
 }
getAllClinicPatientsList= ()=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/findAll/patients/${id}`)
}


getAllClinicPatientsListClinicStatus= (status)=>{
  const id = localStorage.getItem('id');
  console.log(id)
  return this.http.get(`${this.ngrokUrl}/findall/patient/${id}/${status}`)
}

getAllClinicPatientsListClinicStatusReport= (status)=>{
  const id = localStorage.getItem('id');
  console.log(status)
  return this.http.get(`${this.ngrokUrl}/findall/patientstatusreport/${id}`)
}

getAllPatients=()=>{
  return this.http.get(`${this.ngrokUrl}/getAll/Patients`)
}

getAllClinicPatientsListDateType= (date,status)=>{
  const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/findbydate/${date}/${status}/${id}`)
}


updatePatientDoc= (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  return this.http.put(`${this.ngrokUrl}/update/patient/${id}`,updatePatientDocObject,this.httpOptions)
}

updPatientDoc= (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  return this.http.put(`${this.ngrokUrl}/save/patient/${id}`,updatePatientDocObject,this.httpOptions)
}
transferPatient = (updatePatientDocObject)=>{
  const id = localStorage.getItem('pid')
  return this.http.put(`${this.ngrokUrl}/transfer/patient/${id}`,updatePatientDocObject,this.httpOptions)
}
updPatientDocReportStatusClosed= (patientDataObject)=>{
  console.log(patientDataObject,localStorage.getItem('rpid'))
  const id = localStorage.getItem('rpid')
  return this.http.put(`${this.ngrokUrl}/save/patientReportclosed/${id}/${patientDataObject}`,patientDataObject)
}
openClosedPatient= (patientDataObject)=>{
  console.log(patientDataObject)
  const id = localStorage.getItem('rpid')
  return this.http.put(`${this.ngrokUrl}/save/openClosedPatient/${id}/${patientDataObject.status}`,patientDataObject)
}

getAllDoctorPatientsList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/findall/patdoc/${id}`)
}

getAllDoctorPatientsListStatus= ()=>{
  const id = localStorage.getItem('id');
  const status = 'assigned';
  return this.http.get(`${this.ngrokUrl}/findall/patientdoc/${id}/${status}`)
}

// getPatientData= (id)=>{
//   //const id = localStorage.getItem('aid')
//   return this.http.get(`${this.ngrokUrl}/findOne/prescriptiondetails/${id}`)
// }

getPatientData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/findOne/patient/${id}`)
}



////////////////////////////////////// JSON DATA MASTER TABLE


allJsonListMaster= ()=>{
 const type = localStorage.getItem('obtype')
  return this.http.get(`${this.ngrokUrl}/auth/master/${type}`)
}

allJsonListMasterObservations= ()=>{
   return this.http.get(`${this.ngrokUrl}/findall/masters`)
 }

//////////////////////////////////// REGISTERED PATIENT MASTER

registeredPatient= (patientManagementReq) => {

  return this.http.post(`${this.ngrokUrl}/auth/patientmaster`,patientManagementReq,this.httpOptions)
}

getAllRegisteredPatient= () => {
  return this.http.get(`${this.ngrokUrl}/auth/findpatientmaster/`,this.httpOptions)
}


getRegisteredPatientDetail= () => {  
  const id = localStorage.getItem('pid')
  return this.http.get(`${this.ngrokUrl}/auth/findonepatientmaster/${id}`,this.httpOptions)
}

updateRegisteredPatientList= (updatePatientMasterObject) => {
  const id = localStorage.getItem('pid')
  //console.log(updatePatientMasterObject)
  return this.http.put(`${this.ngrokUrl}/auth/updatepatientmaster/${id}`,updatePatientMasterObject,this.httpOptions)
}

deletePatientMaster= ()=>{
  const id = localStorage.getItem('pid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletepatientmaster/${id}`)
}

url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

allCountries(): Observable<any>{
  return this.http.get(this.url);
}


//////////////////////////////////// REGISTERED KIN MASTER

registeredPatientKin= (kinManagementReq) => {

  return this.http.post(`${this.ngrokUrl}/auth/kinmaster`,kinManagementReq,this.httpOptions)
}

getAllRegisteredPatientKin= () => {
  return this.http.get(`${this.ngrokUrl}/auth/findkinmaster/`,this.httpOptions)
}

getRegisteredPatientKinDetail= () => {  
  const id = localStorage.getItem('kid')
  return this.http.get(`${this.ngrokUrl}/auth/findonekinmaster/${id}`,this.httpOptions)
}

updateRegisteredPatientKinList= (updatePatientKinObject) => {
  const id = localStorage.getItem('kid')
  //console.log(updatePatientKinObject)
  return this.http.put(`${this.ngrokUrl}/auth/updatekinmaster/${id}`,updatePatientKinObject,this.httpOptions)
}
deleteKinMaster= ()=>{
  const id = localStorage.getItem('kid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletekinmaster/${id}`)
}

///////////////////////////////// Masters

masterInsertion= (masterManagementReq,data) => {
  return this.http.post(`${this.ngrokUrl}/auth/createmaster/${data}`,masterManagementReq,this.httpOptions)
}

getMaster= (data) => {
  return this.http.get(`${this.ngrokUrl}/auth/getmaster/${data}`,this.httpOptions)
}

updateMaster= (updateMasterObject,data) => {
  const id = localStorage.getItem('id')
  console.log(id,localStorage)
  return this.http.put(`${this.ngrokUrl}/auth/updatemaster/${id}/${data}`,updateMasterObject,this.httpOptions)
}

getMasterDetail= (data) => {  
  const id = localStorage.getItem('mid')
  return this.http.get(`${this.ngrokUrl}/auth/findonemaster/${id}/${data}`,this.httpOptions)
}



observations= (masterObservationReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/obs`,masterObservationReq,this.httpOptions)
}

////////////////////////////////////////////////////////

observationsInsertion= (objectManagementReq) => {
  const pmid = localStorage.getItem('pid');
  const obtype = localStorage.getItem('obtype')
  return this.http.post(`${this.ngrokUrl}/auth/observation/${pmid}/${obtype}`,objectManagementReq,this.httpOptions)
}

observationsGetIndividual= () => {
  const pmid = localStorage.getItem('pid');  
  return this.http.get(`${this.ngrokUrl}/findOne/observation/${pmid}`,this.httpOptions)
}

observationsGetAllByPatient= () => {
  const pmid = localStorage.getItem('pid');  
  return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
}

observationsGetAllByPatientReport= () => {
  const pmid = localStorage.getItem('prid');  
  return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
}

// observationsGetAllByPatientmultiple= () => {
//   const pmid = localStorage.getItem('pid');  
//   return this.http.get(`${this.ngrokUrl}/findall/observations/${pmid}`,this.httpOptions)
// }

observationsGetAllByPatientIdType= () => {
  const pmid = localStorage.getItem('pid');  
  const obtype = localStorage.getItem('obtype')
  return this.http.get(`${this.ngrokUrl}/findOne/observation/${pmid}/${obtype}`,this.httpOptions)
}


masterReportInsertion= (objectManagementReq) => {
  const pmid = localStorage.getItem('pid');
  //const obtype = localStorage.getItem('obtype')
  return this.http.post(`${this.ngrokUrl}/update/observation/${pmid}`,objectManagementReq,this.httpOptions)
}

observationsReportUpdate= (objectManagementReq) => {
  const pmid = localStorage.getItem('pid');  
  return this.http.post(`${this.ngrokUrl}/update/report/${pmid}`,objectManagementReq,this.httpOptions)
}
getReportMaster =()=>{
  const pmid = localStorage.getItem('pid');
return this.http.get(`${this.ngrokUrl}/reportMasters/${pmid}`)
}
/////////////////////////////////////////

getAllPatientMasterFetch= () => {
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/getallpatientmasterfetch/${id}`)
}

referralCommentInsert= (referralComment) => {
  const pmid = localStorage.getItem('pid'); 
  return this.http.post(`${this.ngrokUrl}/auth/referralcomment/${pmid}`,referralComment,this.httpOptions)
}

getReferralCommentPatientId= () => {
  const id = localStorage.getItem('pid')
  return this.http.get(`${this.ngrokUrl}/auth/getreferralcomment/${id}`)
}

getAllHospitalClinicFetch= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallhospitalclinicfetch`)
}

/////////////////////////// GENERAL CLINIC AND DOCTOR APIS //////////////////

generalAddClinicDoctor= (formData) => {
  //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
  return this.http.post(`${this.ngrokUrl}/auth/generalAddClinicDoctor`,formData)
}

getGeneralAllClinicList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/generalclinic/`)
}

getGeneralClinicData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/generalclinic/${id}`)
}
updateGeneralClinicData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('gaid')
  return this.http.put(`${this.ngrokUrl}/auth/updategeneralclinic/${id}`,updatedObj)
}
deleteGeneralClinic= ()=>{
  const id = localStorage.getItem('gaid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletegeneralclinic/${id}`)
}

getGeneralAllClinicDoctorList= ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/auth/doctors/${id}`)
}




// updateGeneralClinicFrontData= (updatedObj)=>{
//   console.log(updatedObj)
//   const id = localStorage.getItem('id')
//   return this.http.put(`${this.ngrokUrl}/auth/updateclinic/${id}`,updatedObj)
// }

/////////////////////////DOCTORS APIS//////////////////////
getGeneralAllDoctorsList= () => {
  return this.http.get(`${this.ngrokUrl}/auth/generaldoctor/`)
}

deleteGeneralDoctor= ()=>{
  const id = localStorage.getItem('gaid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletegeneraldoctor/${id}`)
}
getGeneralDoctorData= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/test/generaldoctor/${id}`)
}

updateGeneralDoctorData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('gaid')
  return this.http.put(`${this.ngrokUrl}/auth/updategeneraldoctor/${id}`,updatedObj)
}




// updateGeneralDoctorFrontData= (updatedObj)=>{
//   console.log(updatedObj)
//   const id = localStorage.getItem('id')
//   return this.http.put(`${this.ngrokUrl}/auth/updatedoctor/${id}`,updatedObj)
// }


////////////////////////////////////////////////////

////////////////////// GENERAL ALL MASTERS /////////////////

masterGeneralInsertion= (masterManagementReq,data) => {
  return this.http.post(`${this.ngrokUrl}/auth/creategeneralmaster/${data}`,masterManagementReq,this.httpOptions)
}

getGeneralMaster= (data) => {
  return this.http.get(`${this.ngrokUrl}/auth/getgeneralmaster/${data}`,this.httpOptions)
}
deleteGeneralMaster =(data) =>{
  const id = localStorage.getItem('ggmid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletegeneralmaster/${id}/${data}`,this.httpOptions)

}
updateGeneralMaster= (updateMasterObject,data) => {
  const id = localStorage.getItem('ggmid')
  //console.log(updateMasterObject)
  return this.http.put(`${this.ngrokUrl}/auth/updategeneralmaster/${id}/${data}`,updateMasterObject,this.httpOptions)
}

getGeneralMasterDetail= (data) => {  
  const id = localStorage.getItem('ggmid')
  return this.http.get(`${this.ngrokUrl}/auth/findonegeneralmaster/${id}/${data}`,this.httpOptions)
}


///////////////////////// FAMILY AND OTHERS
otherDetailsInsertion= (otherDetailsReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/createotherdetails`,otherDetailsReq,this.httpOptions)
}
getAllOtherFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallotherdetails`)
}
getAllClinicDoctorMasterFetch= () => {
  //const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/getallclinicdoctorfetch/`)
}
getAllDoctorMasterFetch= () => {
  //const id = localStorage.getItem('id');
  return this.http.get(`${this.ngrokUrl}/auth/getalldoctorfetch/`)
}

////////////////////////
getEditOtherDetailData= ()=>{
  const id = localStorage.getItem('odid')
  return this.http.get(`${this.ngrokUrl}/auth/getotherdetails/${id}`)
}
updateOtherDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('odid')
  return this.http.put(`${this.ngrokUrl}/auth/updateotherdetails/${id}`,updatedObj)
}
deleteOtherDetail= ()=>{
  const id = localStorage.getItem('odid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteotherdetails/${id}`)
}

/////////////////////////////

familyDetailsInsertion= (familyManagementReq) => {
  return this.http.post(`${this.ngrokUrl}/auth/createfamily`,familyManagementReq,this.httpOptions)
}
getAllFamilyFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallfamily`)
}

getEditFamilyDetailData= ()=>{
  const id = localStorage.getItem('fdid')
  return this.http.get(`${this.ngrokUrl}/auth/getfamily/${id}`)
}
updateFamilyDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('fdid')
  return this.http.put(`${this.ngrokUrl}/auth/updatefamily/${id}`,updatedObj)
}
deleteFamilyDetail= ()=>{
  const id = localStorage.getItem('fdid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletefamily/${id}`)
}


///////////////////////////////// Life Style Form 

lifeStyleInsertion= (lifestyle) => {
  return this.http.post(`${this.ngrokUrl}/auth/lifestyle`,lifestyle,this.httpOptions)
}

getAllLifeStyleFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getalllifestyle`)
}
getEditLifeStyleDetailData= ()=>{
  const id = localStorage.getItem('lsid')
  return this.http.get(`${this.ngrokUrl}/auth/getlifestyle/${id}`)
}
updateLifeStyleDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('lsid')
  return this.http.put(`${this.ngrokUrl}/auth/updatelifestyle/${id}`,updatedObj)
}
deleteLifeStyleDetail= ()=>{
  const id = localStorage.getItem('lsid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletelifestyle/${id}`)
}



///////////////////////////////// Investigation Form 

investigationFormInsertion= (investigationData) => {
  return this.http.post(`${this.ngrokUrl}/auth/investigationreport`,investigationData,this.httpOptions)
}

getAllinvestigationFormDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallinvestigationreport`)
}
getEditinvestigationDetailData= ()=>{
  const id = localStorage.getItem('inid')
  return this.http.get(`${this.ngrokUrl}/auth/getinvestigationreport/${id}`)
}
updateinvestigationDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('inid')
  return this.http.put(`${this.ngrokUrl}/auth/updateinvestigationreport/${id}`,updatedObj)
}
deleteinvestigationDetail= ()=>{
  const id = localStorage.getItem('inid')
  return this.http.delete(`${this.ngrokUrl}/auth/deleteinvestigationreport/${id}`)
}



///////////////////////////////// Medicine Master 

medicineMasterInsertion= (medicineData) => {
  return this.http.post(`${this.ngrokUrl}/auth/insertmedicinemaster`,medicineData,this.httpOptions)
}

getAllmedicinemasterDetails= () => {
  return this.http.get(`${this.ngrokUrl}/auth/getallmedicinemaster`)
}
getEditmedicineDetailData= ()=>{
  const id = localStorage.getItem('mid')
  return this.http.get(`${this.ngrokUrl}/auth/getmedicinemaster/${id}`)
}
updatemedicineDetailData= (updatedObj)=>{
  //console.log(updatedObj)
  const id = localStorage.getItem('mid')
  return this.http.put(`${this.ngrokUrl}/auth/updatemedicinemaster/${id}`,updatedObj)
}
deletemedicineDetail= ()=>{
  const id = localStorage.getItem('mid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletemedicine/${id}`)
}



/////////////////prescription

getPatientDataPrescription= (id)=>{
  //const id = localStorage.getItem('aid')
  return this.http.get(`${this.ngrokUrl}/findOne/prescriptiondetails/${id}`)
}
postPrescription =(prescription,id)=>{
  // const id = localStorage.getItem('ppid')
  console.log(id)
  return this.http.post(`${this.ngrokUrl}/postprescription/${id}`,prescription)
}
getPatientPrescription = ()=>{
  const id = localStorage.getItem('ppid')
  console.log(localStorage)
  return this.http.get(`${this.ngrokUrl}/getPrescription/prescription/${id}`)
}
////////////////////////blood test
createBloodTest = (bloodtest)=>{
  return this.http.post(`${this.ngrokUrl}/auth/createbloodtest`,bloodtest)
}
getBloodTest =()=>{
  return this.http.get(`${this.ngrokUrl}/auth/getbloodtest`)
}
editBloodTest = (bloodtest)=>{
  const id = localStorage.getItem('lsid')
  return this.http.put(`${this.ngrokUrl}/auth/editbloodtest/${id}`,bloodtest)
}
getOneBloodTest =()=>{
  const id = localStorage.getItem('lsid')
  return this.http.get(`${this.ngrokUrl}/auth/getonebloodtest/${id}`)
}
deleteOneBloodTest=()=>{
  const id = localStorage.getItem('lsid')
  return this.http.delete(`${this.ngrokUrl}/auth/deletebloodtest/${id}`)
}
////////////////////critical 
postCriticalImages=(data)=>{
  const id = localStorage.getItem('pid')
  return this.http.post(`${this.ngrokUrl}/post/criticalimages/${id}`,data)
}
getCritialImages =()=>{
  const id = localStorage.getItem('pid')
  return this.http.get(`${this.ngrokUrl}/getcriticalImage/critic/${id}`)
}
///////////lv motion
postLvMotion = (formData)=>{
  const id = localStorage.getItem('pid')
  console.log(id)
  console.log(formData)
  return this.http.post(`${this.ngrokUrl}/post/lvmotion/${id}`,formData)
}
getLVMotion =()=>{
  const id = localStorage.getItem('pid')
  return this.http.get(`${this.ngrokUrl}/getLvmotion/${id}`)
}
////////////Supplementary Reports
postSupplimentaryReports=(data)=>{
  const id = localStorage.getItem('pid')
return this.http.put(`${this.ngrokUrl}/updateSupplementoryReport/SupplementoryReport/${id}`,data)
}
///////////////////////////screenshot video
postScreenshot = (formData) => {
  //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
  const id = localStorage.getItem('pid')
  console.log(formData)
  return this.http.post(`${this.ngrokUrl}/post/editImage/${id}`,formData)
}
postEditedImages = (formData) => {
  //console.log("nsifnewjirnnwergnjinertifvnuiernfvnueirntu")
  const id = localStorage.getItem('pid')
  console.log(formData)
  return this.http.post(`${this.ngrokUrl}/save/editedImage/${id}`,formData)
}
//////////////////////////cases to be closed
getCasesToBeClosed = ()=>{
  const id = localStorage.getItem('id')
  return this.http.get(`${this.ngrokUrl}/casesToBeClosed/Patients/${id}`)
}
////////////////////////get edited images
getEditedImages = () =>{
  const id = localStorage.getItem('pid')
  console.log(id)
  return this.http.get(`${this.ngrokUrl}/getEditedImages/${id}`)
}
////////////////////////get edited images
getReferralImages = () =>{
  const id = localStorage.getItem('pid')
  console.log(id)
  return this.http.get(`${this.ngrokUrl}/getReferralImages/${id}`)
}
///////////////////////
contactUS = (contactForm)=>{
  return this.http.post(`${this.ngrokUrl}/contact`,contactForm )
}
getMedicineFormMasters = ()=>{
  return this.http.get(`${this.ngrokUrl}/getMedicineFormMasters`)
}
postExpertOpinion =(formData)=>{
  const id = localStorage.getItem('pid')
  return this.http.post(`${this.ngrokUrl}/imageSend/${id}`,formData )

}
expertsOpinoinImages = (formData)=>{
  const id = localStorage.getItem('pid')
  return this.http.post(`${this.ngrokUrl}/expertsopinion/${id}`,formData)
}
getImpressionMasters =()=>{
  const id = localStorage.getItem('pid')
  return this.http.get(`${this.ngrokUrl}/impressionMaster/${id}`)
}
postImpressionMasterObservation = (data)=>{
  const id = localStorage.getItem('pid')
  return this.http.post(`${this.ngrokUrl}/postImpressionMasterObservation/${id}`,data)
}
}
