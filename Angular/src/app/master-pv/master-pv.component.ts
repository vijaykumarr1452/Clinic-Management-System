import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-master-pv',
  templateUrl: './master-pv.component.html',
  styleUrls: ['./master-pv.component.scss']
})
export class MasterPvComponent implements OnInit {

  structure =  [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
  abnormal=[
    {id:2,itemName:'With good excursion'},
    {id:3,itemName:'With mildly decreased excursion'},
    {id:4,itemName:'With moderately decreased excursion'},
    {id:5,itemName:'With severely decreased excursion'},
    // {id:6,itemName:'Other (Specify)'},//text-box
  ]

  pulmonicRegurgitation = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Mild to Moderate'},
    {id:5,itemName:'Moderate'},
    {id:6,itemName:'Moderate to Severe'},
    {id:7,itemName:'Severe'},
    ]
  regurgitationPresent=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Mild to Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate to Severe'},
    {id:6,itemName:'Severe'},

  ]

  pulmonicStenosis=[
    {id:2,itemName:'Location'},
    {id:3,itemName:'Severity'},
    {id:4,itemName:'Quantitative Measurements'},
  ]
  stenosisLocation=[
    {id:2,itemName:'Valvular'},
    {id:3,itemName:'Infundibular'},
    {id:4,itemName:'Valvular and Infundibular'},
    {id:5,itemName:'Supravalvular'},
    // {id:6,itemName:'Branch'},
  ]
  branch=[
    {id:2,itemName:'Left Main Pulmonary Artery'},
    {id:3,itemName:'Right Main Pulmonary Artery'},
    // {id:4,itemName:'Others(Specify)'},//text-box
  ]
  stenosisSeverity=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  stenosisQuantitativeMeasurements=[
    {id:2,itemName:'Peak instantaneous pulmonary velocity(Doppler)'},
    {id:3,itemName:'Peak instantaneous trans-pulmonic Gradient(Doppler)'},
    {id:4,itemName:'Mean Pulmonary Velocity(Doppler)'},
    {id:5,itemName:'Mean trans-Pulmonic Gradient(Doppler)'},
    {id:6,itemName:'Estimated Pulmonary Artery Diastolic Pressure'},
    {id:7,itemName:'Others Specify'},//text-box
  ]
  pulmonaryPressure=[
    {id:2,itemName:'PA Systolic Pressure'},
    {id:3,itemName:'PA Diastolic Pressure'},
    {id:4,itemName:'Mean PA Pressure'},
  ]
  paSystolicPressure=[
    {id:2,itemName:'PA Systolic Pressure-From Tricuspid Regurgitation Jet'},
    {id:3,itemName:'Other Method(Specify)'},//text-box
  ]  
 
  updform : any = {

  }

  settings= {};
  obtype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
   });

   this.loginService.observationsGetAllByPatientIdType().subscribe((observation : any) => {    
  
     if(observation.observation != null){
      this.updform =observation.observation.value;
     }

  }, error => console.log(error));

  }

  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    
  }

  savePulmonicValueData = () => {
    //save function
    document.getElementById("overlay").style.display = "block";
    const objectManagementReq = {
      "value": this.updform
     }
     
     this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
      document.getElementById("overlay").style.display = "none";

        if(res['message'] ==  'submitted successfully' ) {
        alert('Observation Inserted Successfully');
        //this.router.navigateByUrl(`/observations/`);
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
      }   else if(res['message'] ==  ' updated successfully' ) {
        alert('Observation Updated Successfully');
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
      } 
       
   })

}

getAddPage  = (obtype) => {
  
  window.localStorage.setItem("obtype", obtype.toString());
   
  this.actRoute.paramMap.subscribe(params => {
    this.obtype = params.get('obtype');

 });

}

}
