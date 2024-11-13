import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';


@Component({
  selector: 'app-preview-reg-patient',
  templateUrl: './preview-reg-patient.component.html',
  styleUrls: ['./preview-reg-patient.component.scss']
})
export class PreviewRegPatientComponent implements OnInit {

  AllPatientsList: any;  
  p: number = 1; 
  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  
  searchString;
  tempList;
  TotalList;
  ClinicData;
  filter;
  
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
     // console.log(data)
      this.ClinicData = data['doctor']
    }, error => console.log(error));

       
    this.loginService.getAllRegisteredPatient().subscribe(user =>{
      console.log(user);
      console.log('*************');
      this.AllPatientsList = user['user']
      this.TotalList = this.AllPatientsList;
     

    })

  }

  getShortName(fullName) { 
    return Array.prototype.map.call(fullName.split(" "), function(x){ return x.substring(0,2).toUpperCase();}).join('');
  }

 getResultData = () => {
  if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
 this.AllPatientsList=  this.TotalList.filter(data => 
       data.regmobileno.toString().includes(this.searchString.toString())
  )
 
 }
 else {
//todo change 
  this.loginService.getAllRegisteredPatient().subscribe(user =>{
    
    this.AllPatientsList = user['user']
  
  })
  
 }

 }
 
 
  
 goToEditPatientMaster  = (list) => {
  //console.log(list);
 window.localStorage.setItem("pid", list.id.toString());
 this.router.navigateByUrl(`/editpatientmaster/${list.id}`)


}

goToDeletePatientMaster = (list):any => {
 window.localStorage.setItem("pmid", list.id.toString());
  this.loginService.deletePatientMaster().subscribe(res =>{
    alert('Successfully Deleted');
    window.location.reload();
     //this.router.navigateByUrl('/dashboard')
  })


}

}
