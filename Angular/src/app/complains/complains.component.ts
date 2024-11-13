import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.scss']
})
export class ComplainsComponent implements OnInit {

 
  symptom:string;
  
  ///////////////////////////////////

  
  addform = {
    symptom:''

  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  complaintForm: FormGroup;


  ngOnInit(): void {

    
    this.complaintForm = this.formBuilder.group({
      symptom:['',Validators.required]
    });

  }


  

/*****************************/
complaintsForm = (data):any => {

  const symptomManagementReq = {
    "symptom": data.symptom
  }
  
  console.log(symptomManagementReq);

  //   this.loginService.registration(symptomManagementReq).subscribe(res =>{
  //     console.log(res);
  //     //if(res['message'] ==  'Successfully created' || res['message'] == 'File uploaded successfully!' ) {
  //       if(res['status'] ==  '200' ) {
  //       alert('Added Successfully');
  //       this.router.navigate(['/dashboard']);
  //     } 
  //  })
 



}






}
