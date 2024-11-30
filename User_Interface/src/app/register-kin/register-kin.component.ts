import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register-kin',
  templateUrl: './register-kin.component.html',
  styleUrls: ['./register-kin.component.scss']
})
export class RegisterKinComponent implements OnInit {

  relationsships = ['Father','Mother','Sister','Son','Brother','Daughter','Relative'];
 
  patientname:string;
  kinname:string;
  kinno:string;  
  fdoctor:string;
  phfdoctor:string;
  emaildoc:string;
  emailkin:string;
  datefirstvisit:'';
  relationship;
 

  AllPatientList: Object;  
  
  ///////////////////////////////////

  
  addform = {
    patientname:'',
    kinname:'',
    kinno:'',
    fdoctor:'',
    phfdoctor:'',
    emaildoc:'',
    emailkin:'',
    datefirstvisit:'',
    relationship:''
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  kinPatientForm: FormGroup;


  ngOnInit(): void {

    
    this.kinPatientForm = this.formBuilder.group({
      patientname:['',Validators.required],
      kinname:['',Validators.required],
      kinno:['',Validators.required],
      fdoctor:['',Validators.required],
      phfdoctor: ['', Validators.required],      
      emaildoc: ['', Validators.required],
      emailkin: ['', Validators.required],
      datefirstvisit: ['', Validators.required]
    });

    this.loginService.getAllRegisteredPatient().subscribe(user =>{
      this.AllPatientList = user['user']
     //console.log(this.AllPatientList)
    })

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

/*****************************/
registerPatientkin = (data):any => {

      const kinManagementReq = {
        "patientname": data.patientname,
        "kinname": data.kinname,
        "kinno":data.kinno,
        "fdoctor": data.fdoctor,
        "phfdoctor": data.phfdoctor,
        "emaildoc": data.emaildoc,
        "emailkin": data.emailkin,
        "datefirstvisit": data.datefirstvisit
      }
      
     // console.log(kinManagementReq);
  
        this.loginService.registeredPatientKin(kinManagementReq).subscribe(res =>{
         
          //if(res['message'] ==  'Successfully created' || res['message'] == 'File uploaded successfully!' ) {
            if(res['status'] ==  '200' ) {
            alert('Registered kin Successfully');
            this.router.navigate(['/previewregkin']);
          } 
       })
     

    

  }




}
