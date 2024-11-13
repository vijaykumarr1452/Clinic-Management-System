import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  ///////////////////////////////////
  
  requirements = ['Very Urgent', 'With in a Day','Routine'];
  statuss = ['Open', 'Closed'];
  testtypes = ['Echo', 'X-ray','Scanning'];
  patform = {
    requirement: '',
    reportbase:'',
    patientname:'',
    gender:'',
    age:'',
    height:'',
    weight:'',
    dob:'',
    caseId:'',
    window:'',
    testtype:'',
    testdate:'',
    updatedate:'',
    examinedate:'',
    reportnew:'',
    reportdate:'',
    supplimentaryreport:'',
    supplimentarytdate:'',
    status:'',
    //status:this.statuss[0],
    propreport:'',
    submitdate:'',
    clinicId:''
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder) { }

  patienttForm: FormGroup;

  ngOnInit(): void {

    this.patienttForm = this.formBuilder.group({
      //id: [],
       requirement: ['', Validators.required],
       reportbase: ['', Validators.required],
       patientname: ['', Validators.required],
       gender: ['', Validators.required],
       age: ['', Validators.required],
      // //clinicId: ['', Validators.required]
       height: ['', Validators.required]
    });

  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  

  patientform = (data):any => {

    

    if(data.requirement === '' || data.requirement === null  ){
      alert('Please Enter Valid Requirement');
     }
     if(data.reportbase === '' || data.reportbase === null){
      alert('Please Enter Valid Report Base');
     }
     if(data.patientname === '' || data.patientname === null){
      alert('Please Enter Valid Patient Name');
     }
     if(data.gender === '' || data.gender === null){
      alert('Please Select Gender');
     }
     if(data.age === '' || data.age === null){
      alert('Please Enter Age');
     }
     if(data.height === '' || data.height === null){
      alert('Please Enter Height ');
     }

     
     
     if(data.requirement != '' && data.reportbase != '' && data.patientname != '' && data.gender != ''
     && data.age != '' && data.height != '' )
       {
 
         const patientFormReq = {
           "requirement": data.requirement,
           "reportbase": data.reportbase,
           "patientname":data.patientname,
           "gender": data.gender,
           "age": data.age,
           "height": data.height,
           "weight": data.weight,
           "dob": data.dob,
           "caseId": data.caseId,
           "window": data.window,
           "testtype": data.testtype,
           "testdate": data.testdate,
           "updatedate":data.updatedate,
           "examinedate": data.examinedate,
           "reportnew": data.reportnew,
           "reportdate": data.reportdate,
           "supplimentaryreport": data.supplimentaryreport,
           "supplimentarytdate": data.supplimentarytdate,
           "status": data.status,
           "propreport": data.propreport,
           "submitdate": data.submitdate,
           "clinicId" : localStorage.getItem('id')
         }
           
           //alert(JSON.stringify(this.registerForm.value))
     
           this.loginService.addpatientForm(patientFormReq).subscribe(res =>{
             if(res['status'] ==  '200' ) {
               this.router.navigate(['/showallpatients']);
             } else{
               alert("Invalid Details. Please Check the Details");
               return false;
               }
             
          })
        
 
        } else{
 
         alert("Please Fill the Details");
         return false;
         
 
        }
       
  }

}
