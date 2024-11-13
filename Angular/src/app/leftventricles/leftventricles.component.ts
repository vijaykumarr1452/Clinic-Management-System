import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leftventricles',
  templateUrl: './leftventricles.component.html',
  styleUrls: ['./leftventricles.component.scss']
})
export class LeftventriclesComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
 
  constructor(private loginService: LoginserviceService,private router:Router) { }

  ngOnInit(): void {
  }


  goToAddLeftVentricle  = () => {
    //window.localStorage.setItem("aid", list.id.toString());
    this.router.navigateByUrl(`/addleftventricle`)
  }


}
