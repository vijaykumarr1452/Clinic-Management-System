import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-otherdetails',
  templateUrl: './add-otherdetails.component.html',
  styleUrls: ['./add-otherdetails.component.scss']
})
export class AddOtherdetailsComponent implements OnInit {

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
  allergy;
  allergyspecification;
  scars;

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
  ///////////////////////////////////

  
  addform = {
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
    allergy:'',
    allergyspecification:'',
    scars:'',
  };

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  otherDetailsReq: FormGroup;


  ngOnInit(): void {

    
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
  
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  calculateBsa(bsa){

    const ht :any = this.addform.heightincms;
    const wt: any = this.addform.weightinkgs;
     
    this.addform['bsa'] =  Math.pow(ht , wt/ 3600).toFixed(3);
    this.addform['bmi'] = (wt / Math.pow(ht,2)).toFixed(3); 
    
  }

/*****************************/
registerOtherdetails = (data):any => {

      const otherDetailsReq = {
        "patientId": data.patientId,
        "refferedby": data.refferedby,
        "nameofclinic":data.nameofclinic,
        "followup": data.followup,
        "heightincms": data.heightincms,
        "weightinkgs": data.weightinkgs,

        "bloodgroup": data.bloodgroup,
        "bsa": data.bsa,
        "bmi": data.bmi,
        "waistdiameter": data.waistdiameter,
        "hipdiameter":data.hipdiameter,
        "bpsystolic": data.bpsystolic,
        "bpdiastolic": data.bpdiastolic,
        "pulserate": data.pulserate,
        "SPO2": data.SPO2,
        "temperature": data.temperature,
      }
      
     // console.log(otherDetailsReq);
  
        this.loginService.otherDetailsInsertion(otherDetailsReq).subscribe(res =>{
         
          if(res['message'] ==  'otherdetails created') {            
            alert('Other Details Added Successfully');
            this.router.navigate(['/previewallotherdetails']);
          } 
       })
     

    

  }




}
