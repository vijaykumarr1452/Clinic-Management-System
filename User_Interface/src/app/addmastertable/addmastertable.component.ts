import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-addmastertable',
  templateUrl: './addmastertable.component.html',
  styleUrls: ['./addmastertable.component.scss']
})
export class AddmastertableComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')


  type: string;
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
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
      this.ttype = this.type.replace(/([A-Z])/g, ' $1')

   });

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


     this.loginService.masterInsertion(masterManagementReq,this.type).subscribe(res =>{
      console.log(res);
        if(res['status'] ==  '200' ) {
        alert('Data Inserted Successfully');
        this.router.navigateByUrl(`/mastertable/`+this.type);
      } 
       
   })

  }

}
