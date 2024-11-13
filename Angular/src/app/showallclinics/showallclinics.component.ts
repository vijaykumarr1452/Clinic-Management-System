import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showallclinics',
  templateUrl: './showallclinics.component.html',
  styleUrls: ['./showallclinics.component.scss']
})
export class ShowallclinicsComponent implements OnInit {

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

    this.loginService.getAllClinicList().subscribe(clinic =>{
      this.AllClinicList = clinic['clinic']
     //localStorage.setItem("list",cliniclist)
     //console.log(this.AllClinicList)
    })

  }

  
  goToEditClinic  = (list) => {
    window.localStorage.setItem("aid", list.id);
    this.router.navigateByUrl(`/editclinic/${list.id}`)


  }

  goToDeleteClinic = (list):any => {
    window.localStorage.setItem("aid", list.id.toString());
     this.loginService.deleteClinic().subscribe(res =>{
       window.location.reload();
        //this.router.navigateByUrl('/dashboard')
     })

    
  }

  

}
