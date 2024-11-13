import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-preview-lifestyle',
  templateUrl: './preview-lifestyle.component.html',
  styleUrls: ['./preview-lifestyle.component.scss']
})
export class PreviewLifestyleComponent implements OnInit {

  AllLifeStyleDetails: any;  

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

     
    this.loginService.getAllLifeStyleFormDetails().subscribe(user =>{
      //  console.log(user);
      //  console.log('............');
        this.AllLifeStyleDetails = user['user'];
    
      })

  }

 
  goToEditOtherDetails  = (list) => {
    //console.log(list);
   window.localStorage.setItem("lsid", list.id.toString());
   this.router.navigateByUrl(`/editlifestyle/${list.id}`)
 
 
 }
 
 goToDeleteOtherDetails = (list):any => {
   window.localStorage.setItem("lsid", list.id.toString());
    this.loginService.deleteLifeStyleDetail().subscribe(res =>{
      alert('Successfully Deleted');
      window.location.reload();
       //this.router.navigateByUrl('/dashboard')
    })
 
 
 }

}
