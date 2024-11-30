import { formatDate } from '@angular/common';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { data } from 'fe/node_modules/@types/jquery';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { SharedService } from '../event-emitter.service';
import { LoginserviceService } from '../loginservice.service';
// import { SharedService } from 'src/src/app/event-emitter.service';
// import { LoginserviceService } from 'src/src/app/loginservice.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import moment from 'moment'

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  // export class CasesToBeOpenedComponent implements OnInit {
    myProperty = 'this write in script';
    myDateValue: Date;
    toDate:Date;
    duplicateArray:any=[]
    // ngOnInit() {
    
  


    ///////////////////////////////////
    
    clickEventsubscription:Subscription;
       
    p: number = 1;
    itemsPerPage :number;
    currentPage :number;
    totalItems :number;
    filter;
   
  
    AllClinicPatientsList: any = [];  
    AllClinicDoctorList: any;
  
    isLogin = localStorage.getItem('token')  ? true : false;
    id  = localStorage.getItem('id')
    role  = localStorage.getItem('role')
    name  = localStorage.getItem('name')
  
   
    docId;
    searchString;
    tempList;
    TotalList;
    ClinicData;
    status = 'assigned';
    
   date_ob = new Date();
   date = ("0" + this.date_ob.getDate()).slice(-2);
   month = ("0" + (this.date_ob.getMonth() + 1)).slice(-2);
   year = this.date_ob.getFullYear();
  
   reqdate = this.year + "-" + this.month + "-" + this.date;
  
  
   observationsObject;
  
   //////////////////////////////////////////
  
    patientDataObject = { 
      'reportdate':null,
      'submitdate' : null,
      'docId' : null,
      'status' : 'created',
     
     };
     addform = {
       'testdate1':''
     }
    
    itemList = [];
    itemList1 = [];
    selectedItemsObservations:any = [];
    selectedItems1 = [];
    selectedItems2 = [];
    selectedItems3  = [];
    settings = {};
  
    
   anteriorwall;
   posteriorwall;
   inferiorwall;
   lateralwall;
   valueofef:any;
   pulmonaryarterypressure;
   avgsystolicstrain;
  
  
   observationsObjecttype;
   AllMastersList;
   clinicDataObject;
  
    
    updform = {
      anteriorwall :'',
      posteriorwall:'',
      inferiorwall:'',
      lateralwall:'',
      valueofef:'',
      pulmonaryarterypressure:'',
      avgsystolicstrain:''
    }
    
    doctorAdvice= []
    conclusion = []
    impression = []
    speckleTracking = []
    selectedItems4=[]
    regionalWallMotion = [];
    DoctorData;
    selectedregionalWallMotion = [];
  
    Observationscomments:[]
    selectedObseravtionsInEditList: []
  
    regionalWalls:any=[];
    referralComment:any=[]
    comments;
    conclusioncomments;
    docadvicecomments;
    impressioncomments;
    pending: any;
allPatients: any;
clinicId: any;
clinicDataObj: any;
  allPatients1: any= [];
  startIndex = 0;
  endIndex = 5;
  testdate1: Date;
  testdate2:Date
  value: any;
  duplicateArray1: any;
  // toDate:Date;
    
    //////////////////////////////////////
    idToBeDeleted = '';
    modalRef: BsModalRef;
    message: string;
    
    constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute,private sharedService:SharedService,private modalService: BsModalService) { 
      this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
        this.ngOnInit();
        //this.generatePdf();
        })
    }
    getArrayLenght(length){
      return new Array(length)
    }
    getIndex(pageIndex){
      this.startIndex = pageIndex * 5;
     this.endIndex = this.startIndex + 5;
     console.log(this.startIndex);
    }
    prevIndex(length){
      this.startIndex = length * 0;
      console.log(this.startIndex)
    }
    nextIndex(endIndex){
      this.endIndex++
      console.log(this.endIndex)
    }
    openModal(template: TemplateRef<any>, id: any) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
      this.idToBeDeleted = id;
    }
    confirm(): void {
      this.message = 'Confirmed!';
      this.modalRef.hide();
      this.goToDeletePatient(this.idToBeDeleted);
    }
  
    delete():void{
      console.log('deleted',this.idToBeDeleted,' record');
    }
    decline(): void {
      this.message = 'Declined!';
      this.modalRef.hide();
  
    }
    ngOnInit(): void {
      // $( function() {
      //   $( "#datepicker" ).datepicker();
      // } );
      // this.testdate1 = new Date();
      
        console.log(this.allPatients1)
  
      this.loginService.getAllClinicPatientsListClinicStatusReport(this.status).subscribe(user =>{
        //console.log(user);
        this.AllClinicPatientsList = user['user']
        this.TotalList = this.AllClinicPatientsList;
  
      })
      // this.loginService.getAllOtherFormDetails().subscribe(data=>{
      //   console.log(data)
      // })
  this.loginService.getCasesToBeClosed().subscribe(data =>{
     console.log(data)
    this.allPatients1 = data['allForceClosedPatients']
    this.clinicDataObj = data['clinicData']
    this.duplicateArray=this.allPatients1
   
    this.duplicateArray1=  this.clinicDataObj.map(clinic=>{
      const patient =  this.allPatients1.filter(data1=>{
          console.log(data)
if(clinic.id === data1.clinicId){
return {data1,clinic}
}
      })
      // console.log(this.duplicateArray1)
      return {clinic,patient}
    })
    console.log(this.duplicateArray1)
    // this.allPatients = data['ForceClosedPatients'] 
     console.log(this.duplicateArray)
     for(let i in this.allPatients){
    // this.loginService.getClinicData(this.allPatients[i].clinicId).subscribe(clinic => { 
    //   // console.log(clinic)
    //   this.clinicDataObj = clinic['doctor'];
    //   // console.log(this.clinicDataObj)
    // })
  }
    this.clinicId = this.allPatients
    for(let i in this.allPatients)
    this.clinicId = this.allPatients[i].clinicId
  //  console.log(this.allPatients[i].clinicId)
  })
  console.log(this.allPatients1)
  
      this.regionalWallMotion = [
        { "id": 1, "itemName": "Normal" },
        { "id": 2, "itemName": "Akinetic" },
        { "id": 3, "itemName": "Hypokinetic" },
        { "id": 4, "itemName": "Dyskinetic" },
        { "id": 5, "itemName": "Aneurysm" },
        { "id": 6, "itemName": "Not seen" }
    ];
  
    this.loginService.getAllClinicPatientsListClinicStatusReport(localStorage.getItem("id")).subscribe(data=>{
      //console.log(localStorage)
      this.pending = data['completed']
  console.log(this.pending)
  // console.log(this.allPatients)
    })
  
  
  
    }
    onDateChange(newDate: Date) {
      console.log(newDate,26);
    }
  
     reverseAndTimeStamp(dateString) {
       console.log(dateString)
          const reverse = new Date(dateString.split("-").reverse().join("-"));
          return reverse.getTime();
          }
      filterDate() {
        console.log(moment(this.testdate1).add(1, 'days'),223,this.testdate2)
          let testdate=moment(this.testdate1).add(-1, 'days').format('DD-MM-YYYY');
     
      let todate=moment(this.testdate2).add(1, 'days').format('DD-MM-YYYY');
      if(this.testdate1!=undefined){
        const selectedMembers = this.allPatients1.filter(m => {
          // console.log(this.testdate1,formatDate(m.testdate, 'yyyy-dd-MM', 'en-US'),230)
          // console.log(this.reverseAndTimeStamp(m.testdate),this.reverseAndTimeStamp(testdate),234)
          return this.reverseAndTimeStamp(m.testdate) >= this.reverseAndTimeStamp(testdate)
          && this.reverseAndTimeStamp(m.testdate) <= this.reverseAndTimeStamp(todate)
      }
      );
       this.duplicateArray=selectedMembers
       console.log(this.duplicateArray,245)
  }else{
  this.duplicateArray=this.allPatients1
  console.log(this.allPatients1,230)
      }
      }
  
    goToViewObservations = (alllist):any => {
      
      window.localStorage.setItem("prid", alllist.id.toString());
    
      
       //////////////////////////////////////////////////
      
        this.loginService.getPatientData(alllist.id.toString()).subscribe(patient => {   
       
         this.patientDataObject = patient['doctor'];
        console.log(this.patientDataObject)
         this.loginService.getDoctorData(this.patientDataObject.docId).subscribe(doctor => { 
           console.log(doctor)     
           this.DoctorData = doctor['doctor'];
          
         }, error => console.log(error));
        
        //  this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(clinic => { 
        //    console.log(clinic)
        //    this.clinicDataObject = clinic['doctor'];
        //    console.log(this.clinicDataObject)
        //  })
   
       }, error => console.log(error));
  
    //    this.loginService.observationsGetAllByPatientReport().subscribe((observationall:any) => {
    //      const {observations,masterData,conclusioncomment,conclusionreport,doctorAdviceComments,
    //        doctorAdvicereport,impressioncomment,impressionreport,observationItem,
    //        observtaionComments,speckleTrackingreport,regionalWall,referralcomment} = observationall;          
   
    //      this.doctorAdvice = masterData['doctorAdvice']
    //      this.conclusion = masterData['conclusion']
    //      this.impression = masterData['impressions']
    //      this.speckleTracking = masterData['speckleTracking']
    //      this.referralComment = referralcomment;
    //      this.selectedItems2 = impressionreport;
    //      this.selectedObseravtionsInEditList = observationItem;
    //      this.comments = observtaionComments;
    //      this.conclusioncomments = conclusioncomment;
    //      this.selectedItems3 = conclusionreport;
    //      this.docadvicecomments = doctorAdviceComments;
    //      this.selectedItems4 = doctorAdvicereport;
    //      this.impressioncomments = impressioncomment;
                 
    //      this.regionalWalls=regionalWall;
    //         ///////////////////////////
    //         if(this.regionalWalls == ''){
  
    //           this.updform.anteriorwall = 'Normal';
    //           this.updform.posteriorwall = 'Normal'; 
    //           this.updform.inferiorwall = 'Normal';
    //           this.updform.lateralwall = 'Normal';
    //         }
    //         //////////////////////////
  
    //       this.selectedItems1 = speckleTrackingreport;
    //       let regionalwalllen = this.regionalWalls.length;
    //        for(let i=0; i<regionalwalllen; i++){
    //         this.updform =this.regionalWalls[i];            
    //        }
  
         
  
    //      this.observationsObject = observations.map(observation => {
    //        const {type,comments} =observation
    //        const formatedTypename = type.replace("Observation","").replace(/ /g, "") ;
   
    //        const masterdata = masterData[formatedTypename].map(master =>{
    //          return {...master,type:`${formatedTypename}Observation`}
    //        })
    //        //const getRespectiveComments = this.groupBy(comments)
   
    //        return ({...observation,ttype:formatedTypename,masterValues:masterdata,comments:[],regionalWall,observationItem,impressionreport})
    //      })
   
    //      this.mapSelectedObservationsToMultiSelect();
    //      this.mapCommentsToTextbox();
  
    //     //  this.generatePdf('open');
    //  })
   
   
   
       //////////////////////////////////////////////////
  
       
   
    }
  
  
    // click(){
    //   this.sharedService.sendClickEvent();
    //   }
  
      goToUpdatePatientDoc = (alllist) => {
        alert('Are you Sure to Open the case');
        window.localStorage.setItem("rpid", alllist.id.toString());
        console.log(this.patientDataObject)
        const getReport = {
          patientDataObject:[this.patientDataObject]
        }
         this.loginService.openClosedPatient(this.patientDataObject).subscribe(updateAssignment =>{
         //alert('Doctor Assigned Successfully');
         if(updateAssignment['description']=='Patient Status updated'){
          alert('Case Opened');
          this.click()
          // this.router.navigateByUrl(`/clinicdashboard`)
          // window.location.reload();
         }
         
       
        })
     }
  
     /////////////////////////////////////////////
  
  reportFormData1=() =>{
  
    return  {
      selctedObservations: this.selectedObseravtionsInEditList,
      patientData : this.patientDataObject,
      impressions: this.selectedItems2,   //to do 
      conclusions: this.selectedItems3,
      doctorAdvice: this.selectedItems4,
      observations:this.observationsObject,
      regionalWall:this.regionalWalls,
      impressionComments:this.impressioncomments,
      doctorAdviceComments:this.docadvicecomments,
      conclusion:this.selectedItems3,
      conclusionsComments:this.conclusioncomments
    }
  
  
  }
  
   groupBy(list) {
      const map = new Map();
      list.forEach((item) => {
           const key = item['type'];
           const collection = map.get(key);
           if (!collection) {
               map.set(key, [item]);
           } else {
               collection.push(item);
           }
      });
      return map;
  }
  
  mapSelectedObservationsToMultiSelect = () => {
    const groupedSelectedObservations = this.groupBy(this.selectedObseravtionsInEditList)
    for(var i=0; i<this.observationsObject.length;i++) {
       this.selectedItemsObservations[i] =
                groupedSelectedObservations.get(this.observationsObject[i].type)
        }
     
  }
  
  mapCommentsToTextbox = () => {
    const groupedSelectedObservations = this.groupBy(this.comments)
   
    for(var i=0; i<this.observationsObject.length;i++) {    
       this.observationsObject[i].comments =
                groupedSelectedObservations.get(this.observationsObject[i].type) || []
        }
     
  }
    getSelectedObservationsList = (filterType) => {
        return this.selectedObseravtionsInEditList.filter((data:any) => data.type == filterType)
    }
  
    // changed(value,value1) {
    //   console.log(value,value1)
    //   if(value != 'Not Applicable(N/A)' || value != null){
    //   this.duplicateArray=this.duplicateArray.filter(((element) => element.gender == value))
    //   }
    //   else if(value1 != 'Not Applicable(N/A)' || value1 != null){
    //     console.log(this.duplicateArray,value1)
    //     this.duplicateArray=this.duplicateArray.filter(((element) => element.clinicId == value1))

    //   }

    //   else{
    //     this.duplicateArray = this.allPatients1
    //   }

    //   console.log(this.duplicateArray,433)
    //   this.value = value;
    // }
  
    changed(value) {
      console.log(value)
      if(value != 'Not Applicable(N/A)'){
        console.log(this.duplicateArray,value)
        this.duplicateArray=this.allPatients1.filter(((element) => element.clinicId == value))

      }
      
      else{
        this.duplicateArray = this.allPatients1
      }
      // this.duplicateArray=this.duplicateArray.filter(((element) => element.clinicId == value))
      console.log(this.duplicateArray,433)
      this.value = value;
    }
  /////////////////////////////// PDFF
  
  click(){
    this.sharedService.sendClickEvent();
    }
  
 
  goToDeletePatient = (list):any => {
    // alert('Are you Sure to delete the case');
    window.localStorage.setItem("pid", list.id.toString());
     this.loginService.deletePatient().subscribe(res =>{
       console.log(res)
      if(res['description']=='patient deleted successfully'){
        alert('Case Deleted');
        this.click()
        // this.router.navigateByUrl(`/clinicdashboard`)
        // window.location.reload();
       }
      //  window.location.reload();
        //this.router.navigateByUrl('/dashboard')
     })
    }
    
  ////////////////
  
  

  

  
  
  
  
  
  
  
  




}
