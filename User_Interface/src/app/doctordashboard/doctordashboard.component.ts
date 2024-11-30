import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //name  = localStorage.getItem('name')
  DoctorData;
  name;
  profileImg: any;
  
  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {

    this.loginService.getDoctorData(localStorage.getItem("id")).subscribe(data => {
      console.log(data)
      this.DoctorData = data['doctor']
      this.profileImg = `data:image/png;base64,${data['profileimage']}`
    }, error => console.log(error));

  }

}
