import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-previewall-familyhistory',
  templateUrl: './previewall-familyhistory.component.html',
  styleUrls: ['./previewall-familyhistory.component.scss']
})
export class PreviewallFamilyhistoryComponent implements OnInit {

  AllFamilyDetails: any;  

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

    
    this.loginService.getAllFamilyFormDetails().subscribe(user =>{
    console.log(user);
    console.log('............');
      this.AllFamilyDetails = user['user']
     
    })

  }

 getResultData = () => {
  if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
 this.AllFamilyDetails=  this.TotalList.filter(data => 
       data.regmobileno.toString().includes(this.searchString.toString())
  )
  
 }
 else {
//todo change 
  this.loginService.getAllFamilyFormDetails().subscribe(user =>{
    //console.log(user['user'])
    this.AllFamilyDetails = user['user']
  
  })
  
 }

 }


  
 goToEditFamilyDetails  = (list) => {
   //console.log(list);
  window.localStorage.setItem("fdid", list.id.toString());
  this.router.navigateByUrl(`/editfamilyhistory/${list.id}`)


}

goToDeleteFamilyDetails = (list):any => {
  window.localStorage.setItem("fdid", list.id.toString());
   this.loginService.deleteFamilyDetail().subscribe(res =>{
     alert('Successfully Deleted');
     window.location.reload();
      //this.router.navigateByUrl('/dashboard')
   })


}



}
