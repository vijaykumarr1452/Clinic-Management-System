import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-generate-editmaster',
  templateUrl: './generate-editmaster.component.html',
  styleUrls: ['./generate-editmaster.component.scss']
})
export class GenerateEditmasterComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  gtype  = localStorage.getItem('gtype')

 
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

  this.loginService.getGeneralMasterDetail(this.gtype).subscribe(master =>{
    this.updateform = master['master']
   //console.log(this.updateform)
  })
  this.ttype = this.gtype.replace(/([A-Z])/g, ' $1')

  }


  updateMaster = ():any => {
    this.loginService.updateGeneralMaster(this.updateform,this.gtype).subscribe(updateDoctor =>{
     console.log(this.updateform,this.gtype)
      if(updateDoctor['status'] ==  '200' ) {
        alert('Updated Successfully');
        this.router.navigateByUrl(`/general-previewmasterall/`+this.gtype);
      } 
      
    })
   
 }


}
