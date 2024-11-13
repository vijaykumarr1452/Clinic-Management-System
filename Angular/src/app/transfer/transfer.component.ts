import { HttpClient } from '@angular/common/http';
// import { TemplateRef } from '@angular/core';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../event-emitter.service';
import { LoginserviceService } from '../loginservice.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  // modalRef: BsModalRef;
    clickEventsubscription:Subscription;
    p: number = 1;
    itemsPerPage :number;
    currentPage :number;
    totalItems :number;
    selectedStatus: any = "DOCTOOR"
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
    status = 'created';
    filter;
    pending: any;
  allPatients: any;
  doctorList: any;
  // modalRef: any;
  // modalService: any;
  // idToBeDeleted='';
  idToBeDeleted = '';
  modalRef: BsModalRef;
  message: string;
    
    // showpatientform = {
    //   docId:''
    // };
    constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private sharedService:SharedService,private modalService: BsModalService,private spinner: NgxSpinnerService) {
      this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
        this.ngOnInit();
        //this.generatePdf();
        })
     }
  
   
  
    ngOnInit(): void {
  
      
      // this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
      //   //console.log(user['user'])
      //   //user['user'].map(data => return {...data,id:``})getAllClinicPatientsList
      //   this.AllClinicPatientsList = user['user']
      //   this.TotalList = this.AllClinicPatientsList;
      // //   for(let i in this.AllClinicPatientsList)
      // //  console.log(this.AllClinicPatientsList[i],i)
  
      // })
  
      // this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
      //   this.ClinicData = data['doctor']
      // }, error => console.log(error));
  
      this.loginService.getAllClinicPatientsListClinicStatusReport(localStorage.getItem("id")).subscribe(data=>{
        ////console.log(localStorage)
        this.pending = data['pending']
    //console.log(this.pending)
      })
      this.loginService.getAllPatients().subscribe(data =>{
        this.allPatients = data['patient']
        this.doctorList = data['doctorList']
      
        console.log(data)
        // this.allPatients.map(data=>{
        //   this.loginService.getAllClinicPatientsListClinicStatus(data.status).subscribe(user =>{
        //     // //console.log(user)
        //     //user['user'].map(data => return {...data,id:``})getAllClinicPatientsList
        //     this.AllClinicPatientsList = user['user']
        //     this.TotalList = this.AllClinicPatientsList;
        //    //console.log(this.AllClinicPatientsList)
      
        //   })
        // })
        //console.log(data['patient'])
      })
    
    }
    openModal(template: TemplateRef<any>, id: any) {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
      console.log(id)
      this.idToBeDeleted = id;
    }
    confirm(): void {
      this.message = 'Confirmed!';
      this.modalRef.hide();
      this.goToUpdatePatientDoc(this.idToBeDeleted,this.idToBeDeleted);
    }
  
    delete():void{
      console.log('deleted',this.idToBeDeleted,' record');
    }
    decline(): void {
      this.message = 'Declined!';
      this.modalRef.hide();
  
    }
    goToUpdatePatientDoc = (alllist,i) => {
      console.log(alllist)
      this.spinner.show();
      window.localStorage.setItem("pid", alllist.id.toString());
       this.loginService.transferPatient(alllist).subscribe(updateAssignment =>{
         if(updateAssignment['status']=== 200){
       alert('Doctor Transferred Successfully');
         }
         setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1);
      //  this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)
      
      })
    
   }
  
   getResultData = () => {
    if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
   this.AllClinicPatientsList=  this.TotalList.filter(data => 
         data.mobileno.toString().includes(this.searchString.toString())
    )
   
   }
   else {
  
    this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
      this.AllClinicPatientsList = user['user']
     ////console.log(this.AllClinicPatientsList)
    })
    
   }
  
   }
  
  //////////////////////////////////////////////
  
  

}
