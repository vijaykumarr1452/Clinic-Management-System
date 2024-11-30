import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-previewall-otherdetails',
  templateUrl: './previewall-otherdetails.component.html',
  styleUrls: ['./previewall-otherdetails.component.scss']
})
export class PreviewallOtherdetailsComponent implements OnInit {

  AllOtherDetails: any;  

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  
  searchString;
  tempList;
  TotalList;
  p: number = 1; 
  filter;

  clinicListName;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }


  ngOnInit(): void {

    
    this.loginService.getAllOtherFormDetails().subscribe(user =>{
    // console.log(user);
    // console.log('............');
      this.AllOtherDetails = user['user'];
  
    })

  }


 getResultData = () => {
  if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
 this.AllOtherDetails=  this.TotalList.filter(data => 
       data.regmobileno.toString().includes(this.searchString.toString())
  )
  
 }
 else {
//todo change 
  this.loginService.getAllOtherFormDetails().subscribe(user =>{
    //console.log(user['user'])
    this.AllOtherDetails = user['user']
  
  })
  
 }

 }


  
 goToEditOtherDetails  = (list) => {
   //console.log(list);
  window.localStorage.setItem("odid", list.id.toString());
  this.router.navigateByUrl(`/editotherdetails/${list.id}`)


}

goToDeleteOtherDetails = (list):any => {
  window.localStorage.setItem("odid", list.id.toString());
   this.loginService.deleteOtherDetail().subscribe(res =>{
     alert('Successfully Deleted');
     window.location.reload();
      //this.router.navigateByUrl('/dashboard')
   })


}



}
