import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit-kin',
  templateUrl: './edit-kin.component.html',
  styleUrls: ['./edit-kin.component.scss']
})
export class EditKinComponent implements OnInit {

  
  patientname:string;
  kinname:string;
  kinno:string;  
  fdoctor:string;
  phfdoctor:string;
  emaildoc:string;
  emailkin:string;
  datefirstvisit:'';
 
  
  ///////////////////////////////////

  
  updform = {
    patientname:'',
    kinname:'',
    kinno:'',
    fdoctor:'',
    phfdoctor:'',
    emaildoc:'',
    emailkin:'',
    datefirstvisit:''

  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  kinPatientForm: FormGroup;

  ngOnInit(): void {

    this.loginService.getRegisteredPatientKinDetail()
    .subscribe(data => {
      //console.log(data)
      this.updform = data['kinmaster']
    }, error => console.log(error));
    

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



  }

/*****************************/
getToday(): string {
  return new Date().toISOString().split('T')[0]
}

updateKin = ():any => {
    //console.log(this.updform);
     this.loginService.updateRegisteredPatientKinList(this.updform).subscribe(updateDoctor =>{
       alert('Kin Updated Successfully');
      this.router.navigateByUrl('/previewregkin');
     })
    
  }


}
