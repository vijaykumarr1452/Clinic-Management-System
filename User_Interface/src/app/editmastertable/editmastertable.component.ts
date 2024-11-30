import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { param } from 'jquery';

@Component({
  selector: 'app-editmastertable',
  templateUrl: './editmastertable.component.html',
  styleUrls: ['./editmastertable.component.scss']
})
export class EditmastertableComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  type  = localStorage.getItem('type')

 
  //type: string;
  key:number;
  value:number;
  AllMasterList

  updateform = {
    itemName:'',
  }
  ttype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 
    
}

addMasterForm: FormGroup;
  ngOnInit(): void {    
    console.log(localStorage,this.type)
    // console.log(this.type.replace(/([A-Z])/g, ' $1'))
// console.log(this.type.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2'))
  this.loginService.getMasterDetail(this.type).subscribe(master =>{
    this.updateform = master['master']
    this.ttype = this.type.replace(/([A-Z])/g, ' $1')
 
  })

  }


  updateMaster = ():any => {
    this.loginService.updateMaster(this.updateform,this.type).subscribe(updateDoctor =>{
     console.log(this.updateform,this.type,updateDoctor)
      if(updateDoctor['status'] ==  '200' ) {
        alert('Updated Successfully');
        this.router.navigateByUrl(`/mastertable/`+this.type);
      } 
      
    })
   
 }


}
