import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-familyhistory',
  templateUrl: './add-familyhistory.component.html',
  styleUrls: ['./add-familyhistory.component.scss']
})
export class AddFamilyhistoryComponent implements OnInit {

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

  
  addform = {
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

  kinPatientForm: FormGroup;


  ngOnInit(): void {

    
    // this.kinPatientForm = this.formBuilder.group({
    //   patientno:['',Validators.required],
    //   referred:['',Validators.required],
    //   clinic:['',Validators.required],
    //   datefirstvisit: ['', Validators.required],
    //    height:['',Validators.required],
    //    weight: ['', Validators.required],      
    //   bsa: ['', Validators.required],
    //   bmi: ['', Validators.required],
    //   bp: ['', Validators.required],
    // });

    

    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

/*****************************/
familyDetails = (data):any => {

  console.log(data.diabetic);
  console.log('................');

      const familyManagementReq = {
        "patientno": data.patientno,
        "diabetic": data.diabetic,
        "detectiondate":data.detectiondate,
        "diabetictype": data.diabetictype,
        "yearsofdiabetic": data.yearsofdiabetic,
        "diabeticcoma": data.diabeticcoma,
        "gangreon": data.gangreon,
        "diabeticcomplication": data.diabeticcomplication,
        "period": data.period,
        "familydiabetic": data.familydiabetic,
        "fatherdiabetc": data.fatherdiabetc,
        "familydiabetictype": data.familydiabetictype,
        "motherdiabetic": data.motherdiabetic,
        "motherdiabetictype": data.motherdiabetictype,
        "siblingdiabetic": data.siblingdiabetic,
        "siblingdiabetictype": data.siblingdiabetictype,
        "cardiachistory": data.cardiachistory,
        "cardiacdeath": data.cardiacdeath,
        "hypertension": data.hypertension,
        "hypertensiondeath": data.hypertensiondeath,
        "relationshipwithpatient": data.relationshipwithpatient,
        "kidneyproblem": data.kidneyproblem,
        "kidneyproblemdeath": data.kidneyproblemdeath,
        "kidneyproblemdeathinfamily": data.kidneyproblemdeathinfamily,
        "kidneyproblemdeathinfamilyrelation": data.kidneyproblemdeathinfamilyrelation,
        "liverfailureinfamily": data.liverfailureinfamily,
        "liverfailuredeath": data.liverfailuredeath,
        "liverfailuredeathrelation":data.liverfailuredeathrelation,
        "thyroidhistory":data.thyroidhistory,
        "thyroidhistorydeath":data.thyroidhistorydeath,
        "thyroidhistorydeathrelation":data.thyroidhistorydeathrelation,
        "strokehistory":data.strokehistory,
        "strokehistorydeath":data.strokehistorydeath,
        "strokehistorydeathrelation":data.strokehistorydeathrelation,
        "cancerhistory":data.cancerhistory,
        "cancerhistorydeath":data.cancerhistorydeath,
        "cancerhistorydeathrelation":data.cancerhistorydeathrelation,
        "mentaldisorderhistory":data.mentaldisorderhistory,
        "mentaldisorderhistorydeath":data.mentaldisorderhistorydeath,
        "mentaldisorderhistorydeathrelation":data.mentaldisorderhistorydeathrelation,

      }
      
      console.log(familyManagementReq);
  
        this.loginService.familyDetailsInsertion(familyManagementReq).subscribe(res =>{
            if(res['status'] ==  '200' ) {
            alert('Family Details Successfully');
            this.router.navigate(['/previewallfamilyhistory']);
          } 
       })
     

    

  }




}
