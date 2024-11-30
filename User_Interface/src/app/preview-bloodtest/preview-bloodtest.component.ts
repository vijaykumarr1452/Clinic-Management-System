import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-preview-bloodtest',
  templateUrl: './preview-bloodtest.component.html',
  styleUrls: ['./preview-bloodtest.component.scss']
})
export class PreviewBloodtestComponent implements OnInit {
  allBloodTest: any;
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.loginService.getBloodTest().subscribe(data=>{
      console.log(data)
      this.allBloodTest = data['bloodtest']
    })
  }
  goToEditOtherDetails  = (list) => {
    //console.log(list);
   window.localStorage.setItem("lsid", list.id.toString());
   this.router.navigateByUrl(`/editbloodtest/${list.id}`)
 
 
 }
 goToDeleteOtherDetails = (list):any => {
  window.localStorage.setItem("lsid", list.id.toString());
   this.loginService.deleteOneBloodTest().subscribe(res =>{
     alert('Successfully Deleted');
     window.location.reload();
      //this.router.navigateByUrl('/dashboard')
   })
  }}
