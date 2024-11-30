import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-clinicpreviewall',
  templateUrl: './general-clinicpreviewall.component.html',
  styleUrls: ['./general-clinicpreviewall.component.scss']
})
export class GeneralClinicpreviewallComponent implements OnInit {

  AllClinicList: Object;  

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  p: number = 1; 
  searchString;
  tempList;
  TotalList;
  filter;
  
  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {

    this.loginService.getGeneralAllClinicList().subscribe(clinic =>{
      //console.log(clinic);
      this.AllClinicList = clinic['clinic']
     //localStorage.setItem("list",cliniclist)
     //console.log(this.AllClinicList)
    })

  }

  
  goToEditClinic  = (list) => {
    window.localStorage.setItem("gaid", list.id.toString());
    this.router.navigateByUrl(`/general-editclinic/${list.id}`)


  }

  goToDeleteClinic = (list):any => {
    window.localStorage.setItem("gaid", list.id.toString());
     this.loginService.deleteGeneralClinic().subscribe(res =>{
       window.location.reload();
        //this.router.navigateByUrl('/dashboard')
     })

    
   
    
  }

  

}
