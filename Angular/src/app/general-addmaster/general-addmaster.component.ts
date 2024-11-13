import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-general-addmaster',
  templateUrl: './general-addmaster.component.html',
  styleUrls: ['./general-addmaster.component.scss']
})
export class GeneralAddmasterComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  gtype  = localStorage.getItem('gtype')


  //gtype: string;
  key:number;
  value:number;

  addform = {
    itemName:'',
  }
  ttype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  addMasterForm: FormGroup;

  ngOnInit(): void {
   
  //   this.actRoute.paramMap.subscribe(params => {
  //     this.gtype = params.get('gtype');

  //  });
  this.ttype = this.gtype.replace(/([A-Z])/g, ' $1')
   this.addMasterForm = this.formBuilder.group({
    itemName: ['', Validators.required]
  });

  }
  
  addMaster = (data):any => {


     if(data.itemName === '' || data.item === null) {
      alert('Please Enter Valid Value');
     }

     const masterManagementReq = {
      "itemName": data.itemName,
     }


     this.loginService.masterGeneralInsertion(masterManagementReq,this.gtype).subscribe(res =>{
      console.log(res);
        if(res['status'] ==  '200' ) {
        alert('Data Inserted Successfully');
        this.router.navigateByUrl(`/general-previewmasterall/`+this.gtype);
      } 
       
   })

  }

}
