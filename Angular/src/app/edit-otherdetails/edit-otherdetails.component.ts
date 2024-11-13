import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-otherdetails',
  templateUrl: './edit-otherdetails.component.html',
  styleUrls: ['./edit-otherdetails.component.scss']
})
export class EditOtherdetailsComponent implements OnInit {

  bloodgroups = ['A', 'B','AB','O','B+','O+'];

  patientId;
  refferedby;
  nameofclinic;
  followup;
  bloodgroup;
  heightincms;
  weightinkgs;
  bsa;
  bmi;
  waistdiameter;
  hipdiameter;
  bpsystolic;
  bpdiastolic;
  pulserate;
  SPO2;
  temperature;

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
 
  
  ///////////////////////////////////

  
  updform = {
    patientId:'',
    refferedby:'',
    nameofclinic:'',
    followup:'',
    heightincms:'',
    weightinkgs:'',
    bsa:'',
    bmi:'',
    bloodgroup:'',
    waistdiameter:'',
    hipdiameter:'',
    bpsystolic:'',
    bpdiastolic:'',
    pulserate:'',
    SPO2:'',
    temperature:'',
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  otherDetailsReq: FormGroup;

  ngOnInit(): void {

    this.loginService.getEditOtherDetailData()
    .subscribe(data => {
      console.log(data)
      this.updform = data['user']
    }, error => console.log(error));
    

    this.otherDetailsReq = this.formBuilder.group({
      patientId:['',Validators.required],
      refferedby:['',Validators.required],
      nameofclinic:['',Validators.required],
      followup: ['', Validators.required],
      heightincms:['',Validators.required],
      weightinkgs: ['', Validators.required],      
      bsa: ['', Validators.required],
      bmi: ['', Validators.required],
      bp: ['', Validators.required],
    });

    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }

/*****************************/

calculateBsa(bsa){

  const ht :any = this.updform.heightincms;
  const wt: any = this.updform.weightinkgs;
   
  this.updform['bsa'] =  Math.pow(ht , wt/ 3600).toFixed(3);
  this.updform['bmi'] = (wt / Math.pow(ht,2)).toFixed(3); 
  
}
getToday(): string {
  return new Date().toISOString().split('T')[0]
}

updateOtherdetails = ():any => {
    //console.log(this.updform);
     this.loginService.updateOtherDetailData(this.updform).subscribe(updateDoctor =>{
       alert('Other Details Updated Successfully');
      this.router.navigateByUrl('/previewallotherdetails');
     })
    
  }


}
