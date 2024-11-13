import { Component, OnInit,ViewChild } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-preview-investigationreport',
  templateUrl: './preview-investigationreport.component.html',
  styleUrls: ['./preview-investigationreport.component.scss']
})
export class PreviewInvestigationreportComponent implements OnInit {

  AllInvestigationDetails: any;  

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

     
    this.loginService.getAllinvestigationFormDetails().subscribe(investigationreport =>{
        console.log(investigationreport);
        console.log('............');
        this.AllInvestigationDetails = investigationreport['investigationreport'];
    
      })

  }

 
  goToEditInvestigationDetails  = (list) => {
    //console.log(list);
   window.localStorage.setItem("inid", list.id.toString());
   this.router.navigateByUrl(`/editinvestigationreport/${list.id}`)
 
 
 }
 
 goToDeleteInvestigationDetails = (list):any => {
   window.localStorage.setItem("inid", list.id.toString());
    this.loginService.deleteinvestigationDetail().subscribe(res =>{
      alert('Successfully Deleted');
      window.location.reload();
       //this.router.navigateByUrl('/dashboard')
    })
 
 
 }

}
