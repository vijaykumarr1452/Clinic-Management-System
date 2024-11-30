import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addleftventricle',
  templateUrl: './addleftventricle.component.html',
  styleUrls: ['./addleftventricle.component.scss']
})
export class AddleftventricleComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')

  leftventricle :any;

  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {

    //this.getallJsonList();

  }

  // getallJsonList(){
  //   this.loginService.allJsonListLeftVentricle().subscribe(leftventricle => {
  //       this.leftventricle=leftventricle.leftventricle;
  //       //this.countryInfo=data2.Countries;
  //       //console.log('Data:', this.countryInfo);
  //     },
  //     err => console.log(err),
  //     () => console.log('leftventricle')
  //   )

  
  // }

}
