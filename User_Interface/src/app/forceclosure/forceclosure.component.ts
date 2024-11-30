import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../event-emitter.service';
import { LoginserviceService } from '../loginservice.service';
import pdfMake from 'pdfmake/build/pdfmake';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-forceclosure',
  templateUrl: './forceclosure.component.html',
  styleUrls: ['./forceclosure.component.scss']
})
export class ForceclosureComponent implements OnInit {




    ///////////////////////////////////
    
      clickEventsubscription:Subscription;
       
      p: number = 1;
      itemsPerPage :number;
      currentPage :number;
      totalItems :number;
      filter;
     
      testdate1: Date;
      testdate2:Date
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
        'ef' : '',
        'patientname' : '',
        'id' : '',
        'dob' : '',
        'age' : '',
        'bpsystolic' : '',
        'bpdiastolic' : '',
        'testdate' : '',
        'gender' : '',
        'height' : '',
        'weight' : '',
        'bsa' : '',
        'bmi' : '',
        'testtype' : '',
        'ew' : '',
        'clinicId' : '',
        'docId':'',
        "status":'forceclosed'
       };
      
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
  allPatients1: any;
  value: any;
  duplicateArray: any;
  duplicateArray1: any;
    
      
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
      openModal(template: TemplateRef<any>, id: any) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        this.idToBeDeleted = id;
      }
      confirm(): void {
        this.message = 'Confirmed!';
        this.modalRef.hide();
        this.goToUpdatePatientDoc(this.idToBeDeleted);
      }
    
      delete():void{
        console.log('deleted',this.idToBeDeleted,' record');
      }
      decline(): void {
        this.message = 'Declined!';
        this.modalRef.hide();
    
      }
      
      ngOnInit(): void {
    
      
          
    
        // this.loginService.getAllClinicPatientsListClinicStatusReport(this.status).subscribe(user =>{
        //   //console.log(user);
        //   this.AllClinicPatientsList = user['user']
        //   this.TotalList = this.AllClinicPatientsList;
    
        // })
        // this.loginService.getAllOtherFormDetails().subscribe(data=>{
        //   console.log(data)
        // })
    this.loginService.getAllPatients().subscribe(data =>{
     console.log(data)
      this.allPatients = data['patient']
      this.duplicateArray=this.allPatients
      // console.log(this.allPatients)
      this.loginService.getClinicData(this.allPatients.clinicId).subscribe(clinic => { 
        // console.log(clinic)
        // this.clinicDataObj = clinic['doctor'];
        // console.log(this.clinicDataObj)
      })
      this.loginService.getCasesToBeClosed().subscribe(data =>{
        console.log(data)
      //  this.allPatients1 = data['allForceClosedPatients']
       this.clinicDataObj = data['clinicData']
      //  this.duplicateArray=this.allPatients1
      
       this.duplicateArray1=  this.clinicDataObj.map(clinic=>{
         const patient =  this.allPatients.filter(data1=>{
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
      this.clinicId = this.allPatients.map(data=>

        {
          // console.log(this.clinicDataObj)
          // console.log(data)
        })
      for(let i in this.allPatients)
      this.clinicId = this.allPatients[i].clinicId
    //  console.log(this.allPatients[i].clinicId)
    })
        this.regionalWallMotion = [
          { "id": 1, "itemName": "Normal" },
          { "id": 2, "itemName": "Akinetic" },
          { "id": 3, "itemName": "Hypokinetic" },
          { "id": 4, "itemName": "Dyskinetic" },
          { "id": 5, "itemName": "Aneurysm" },
          { "id": 6, "itemName": "Not seen" }
      ];
    
    //   this.loginService.getAllClinicPatientsListClinicStatusReport(localStorage.getItem("id")).subscribe(data=>{
    //     //console.log(localStorage)
    //     this.pending = data['completed']
    // console.log(this.pending)
    // // console.log(this.allPatients)
    //   })
    
    
    
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
          const selectedMembers = this.allPatients.filter(m => {
            // console.log(this.testdate1,formatDate(m.testdate, 'yyyy-dd-MM', 'en-US'),230)
            // console.log(this.reverseAndTimeStamp(m.testdate),this.reverseAndTimeStamp(testdate),234)
            return this.reverseAndTimeStamp(m.testdate) >= this.reverseAndTimeStamp(testdate)
            && this.reverseAndTimeStamp(m.testdate) <= this.reverseAndTimeStamp(todate)
        }
        );
         this.duplicateArray=selectedMembers
         console.log(this.duplicateArray,245)
    }else{
    this.duplicateArray=this.allPatients
    console.log(this.allPatients,230)
        }
        }
    
    
    
      changed(value) {
        console.log(value)
        if(value != 'Not Applicable(N/A)'){
          console.log(this.duplicateArray,value,this.allPatients)
          this.duplicateArray=this.allPatients.filter(((element) => element.clinicId == value))
  
        }
        
        else{
          this.duplicateArray = this.allPatients
        }
        // this.duplicateArray=this.duplicateArray.filter(((element) => element.clinicId == value))
        console.log(this.duplicateArray,433)
        this.value = value;
      }
  
      click(){
        this.sharedService.sendClickEvent();
        }
    
        goToUpdatePatientDoc = (alllist) => {
          // alert('Are you Sure to Close the case');
          window.localStorage.setItem("rpid", alllist.id.toString());
           this.loginService.updPatientDocReportStatusClosed(this.patientDataObject).subscribe(updateAssignment =>{
           //alert('Doctor Assigned Successfully');
           if(updateAssignment['description']=='Patient Status updated'){
            this.click()
            alert('Case Closed');
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
    
    
    
    
    /////////////////////////////// PDFF
    
    
    
   
    
      
    ////////////////
    
    
  
    

    
    
    
    
    
    
    
    

}
