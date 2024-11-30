import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-preview-reg-kin',
  templateUrl: './preview-reg-kin.component.html',
  styleUrls: ['./preview-reg-kin.component.scss']
})
export class PreviewRegKinComponent implements OnInit {

  AllKinsList: any;  

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  
  searchString;
  tempList;
  TotalList;
  p: number = 1; 
  filter;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }


  ngOnInit(): void {

    
    this.loginService.getAllRegisteredPatientKin().subscribe(user =>{
    
      this.AllKinsList = user['user']
      this.TotalList = this.AllKinsList;
     

    })

  }

 getResultData = () => {
  if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
 this.AllKinsList=  this.TotalList.filter(data => 
       data.regmobileno.toString().includes(this.searchString.toString())
  )
  
 }
 else {
//todo change 
  this.loginService.getAllRegisteredPatientKin().subscribe(user =>{
    //console.log(user['user'])
    this.AllKinsList = user['user']
  
  })
  
 }

 }


  
 goToEditKin  = (list) => {
   //console.log(list);
  window.localStorage.setItem("kid", list.id.toString());
  this.router.navigateByUrl(`/editkin/${list.id}`)


}

goToDeleteKin = (list):any => {
  window.localStorage.setItem("kid", list.id.toString());
   this.loginService.deleteKinMaster().subscribe(res =>{
     alert('Successfullt Deleted');
     window.location.reload();
      //this.router.navigateByUrl('/dashboard')
   })


}



}
