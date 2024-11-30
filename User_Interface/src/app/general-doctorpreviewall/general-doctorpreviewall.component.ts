import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-doctorpreviewall',
  templateUrl: './general-doctorpreviewall.component.html',
  styleUrls: ['./general-doctorpreviewall.component.scss']
})
export class GeneralDoctorpreviewallComponent implements OnInit {

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

  AllDoctorList ;
  
  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getGeneralAllDoctorsList().subscribe(data =>{
      this.AllDoctorList = data['clinic'];
     //console.log(this.AllDoctorList)
    })   

  }

  
  goToEditDoctor  = (list) => {
    window.localStorage.setItem("gaid", list.id.toString());
    this.router.navigateByUrl(`/general-editdoctor/${list.id}`)

  }

  goToDeleteDoctor = (list):any => {
    window.localStorage.setItem("gaid", list.id.toString());
     this.loginService.deleteGeneralDoctor().subscribe(res =>{
       window.location.reload();
        //this.router.navigateByUrl('/dashboard')
     })

  }

  getResultData = () => {
    if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
   this.AllDoctorList=  this.TotalList.filter(data => 
         data.mobileno.toString().includes(this.searchString.toString())
    )
   
   }
   else {
  
    this.loginService.getAllDoctorsList().subscribe(clinic =>{
      this.AllDoctorList = clinic['clinic']
     //console.log(this.AllDoctorList)
    })
    
   }
  
   }
  

}
