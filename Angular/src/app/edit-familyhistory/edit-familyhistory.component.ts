import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-familyhistory',
  templateUrl: './edit-familyhistory.component.html',
  styleUrls: ['./edit-familyhistory.component.scss']
})
export class EditFamilyhistoryComponent implements OnInit {

  diabetictypes = ['High Sugar', 'Low Sugar','Type I','Type II','Latent autoimmune diabetes in adults','Maturity onset diabetes of the young','Gestational diabetes mellitus'];
  familydiabetictypes=['Type I','Type II','Latent autoimmune diabetes in adults','Maturity onset diabetes of the young','Gestational diabetes mellitus'];
  relationsships = ['Father','Mother','Sister','Son','Brother','Daughter','Relative'];
  patientno;
  diabetic;
  detectiondate;
  diabetictype;
  yearsofdiabetic;
  diabeticcoma;
  gangreon;
  diabeticcomplication;
  period;
  familydiabetic;
  fatherdiabetc;
  familydiabetictype;
  motherdiabetic;
  motherdiabetictype;
  siblingdiabetic;
  siblingdiabetictype;
  cardiachistory;
  cardiacdeath;
  relationship;
  hypertension;
  hypertensiondeath;
  relationshipwithpatient;
  kidneyproblem;
  kidneyproblemdeath;
  kidneyproblemdeathinfamily;
  kidneyproblemdeathinfamilyrelation;
  liverfailureinfamily;
  liverfailuredeath;
  liverfailuredeathrelation;
  thyroidhistory;
  thyroidhistorydeath;
  thyroidhistorydeathrelation;
  strokehistory;
  strokehistorydeath;
  strokehistorydeathrelation;
  cancerhistory;
  cancerhistorydeath;
  cancerhistorydeathrelation;
  mentaldisorderhistory;
  mentaldisorderhistorydeath;
  mentaldisorderhistorydeathrelation;

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
 
  
  ///////////////////////////////////

  
  updform = {
    patientno:'',
  diabetic:'',
  detectiondate:'',
  diabetictype:'',
  yearsofdiabetic:'',
  diabeticcoma:'',
  gangreon:'',
  diabeticcomplication:'',
  period:'',
  familydiabetic:'',
  fatherdiabetc:'',
  familydiabetictype:'',
  motherdiabetic:'',
  motherdiabetictype:'',
  siblingdiabetic:'',
  siblingdiabetictype:'',
  cardiachistory:'',
  cardiacdeath:'',
  relationship:'',
  hypertension:'',
  hypertensiondeath:'',
  relationshipwithpatient:'',
  kidneyproblem:'',
  kidneyproblemdeath:'',
  kidneyproblemdeathinfamily:'',
  kidneyproblemdeathinfamilyrelation:'',
  liverfailureinfamily:'',
  liverfailuredeath:'',
  liverfailuredeathrelation:'',
  thyroidhistory:'',
  thyroidhistorydeath:'',
  thyroidhistorydeathrelation:'',
  strokehistory:'',
  strokehistorydeath:'',
  strokehistorydeathrelation:'',
  cancerhistory:'',
  cancerhistorydeath:'',
  cancerhistorydeathrelation:'',
  mentaldisorderhistory:'',
  mentaldisorderhistorydeath:'',
  mentaldisorderhistorydeathrelation:'',
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  familyDetailForm: FormGroup;

  ngOnInit(): void {

    this.loginService.getEditFamilyDetailData()
    .subscribe(data => {
      console.log(data)
      this.updform = data['user']
    }, error => console.log(error));
    

    this.familyDetailForm = this.formBuilder.group({
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

getToday(): string {
  return new Date().toISOString().split('T')[0]
}

updateFamilydetails = ():any => {
  console.log(this.updform);
     this.loginService.updateFamilyDetailData(this.updform).subscribe(updateDoctor =>{
       alert('Other Details Updated Successfully');
      this.router.navigateByUrl('/previewallfamilyhistory');
     })
    
  }


}
