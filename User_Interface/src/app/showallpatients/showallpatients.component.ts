import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { pid } from 'process';
//import { AnyRecordWithTtl } from 'dns';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import { SharedService } from '../event-emitter.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-showallpatients',
  templateUrl: './showallpatients.component.html',
  styleUrls: ['./showallpatients.component.scss']
})
export class ShowallpatientsComponent implements OnInit {
  clickEventsubscription:Subscription;
  p: number = 1;
  itemsPerPage :number;
  currentPage :number;
  totalItems :number;

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
  
  // showpatientform = {
  //   docId:''
  // };
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private sharedService:SharedService) {
    this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
      this.ngOnInit();
      //this.generatePdf();
      })
   }

 

  ngOnInit(): void {

    
    this.loginService.getAllClinicPatientsListClinicStatus(this.status).subscribe(user =>{
      //user['user'].map(data => return {...data,id:``})getAllClinicPatientsList
      this.AllClinicPatientsList = user['user']
      this.TotalList = this.AllClinicPatientsList;
     console.log(this.AllClinicPatientsList)

    })

    // this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
    //   this.ClinicData = data['doctor']
    // }, error => console.log(error));

    this.loginService.getAllClinicPatientsListClinicStatusReport(localStorage.getItem("id")).subscribe(data=>{
      //console.log(localStorage)
      this.pending = data['pending']
  console.log(this.pending)
    })
  
  
  }

  goToUpdatePatientDoc = (alllist,index) => {
    window.localStorage.setItem("pid", alllist.id.toString());
    console.log(this.AllClinicPatientsList[index].docId)
    if(this.AllClinicPatientsList[index].docId === null){
      console.log(this.AllClinicPatientsList[index].docId)
alert('please set a doctor')
    }
    else{
      
     this.loginService.updPatientDoc(this.AllClinicPatientsList[index]).subscribe(updateAssignment =>{
      //alert('Doctor Assigned Successfully');
      this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)
     
     })
    }
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
   console.log(this.AllClinicPatientsList)
  })
  
 }

 }

//////////////////////////////////////////////

}
