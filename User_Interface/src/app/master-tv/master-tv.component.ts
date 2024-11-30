import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-tv',
  templateUrl: './master-tv.component.html',
  styleUrls: ['./master-tv.component.scss']
})
export class MasterTvComponent implements OnInit {
  structure= [
    {id:2,itemName:'Normal'},
    //{id:3,itemName:'Abnormal'},
    {id:3,itemName:'Rheumatic'},  
  ]
  
  rheumatic =[
    {id:2,itemName:'Rheumatic'},

  ]
  
  vegetationAnteriorleaflet = [

    {id:2,itemName:'Non-mobile'},
    {id:3,itemName:'Mobile'},
    {id:4,itemName:'Pedunculated and mobile'},
    // {id:5,itemName:'Other (Specify)'},
  ]
  vegetationAnteriorleafletsize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    {id:5,itemName:'Dimensions'},


  ]

  vegetationPosteriorleaflet = [

    {id:2,itemName:'Non-mobile'},
    {id:3,itemName:'Mobile'},
    {id:4,itemName:'Pedunculated and mobile'},
    // {id:5,itemName:'Other (Specify)'},
  ]
  vegetationPosteriorleafletsize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    // {id:5,itemName:'Dimensions'},
  ]
  
  vegetationSeptalleaflet = [

    {id:2,itemName:'Non-mobile'},
    {id:3,itemName:'Mobile'},
    {id:4,itemName:'Pedunculated and mobile'},
    // {id:5,itemName:'Other (Specify)'},
  ]
  vegetationSeptalleafletsize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    // {id:5,itemName:'Dimensions'},
  ]
  
  myxomatousredundant =[
    {id:2,itemName:'Myxomatous (redundant)'},

  ]
  
  prolapseAnteriorleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  prolapsePosteriorleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  prolapseSepatlleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  holosystolic =[
    {id:2,itemName:'prolapse-Holosystolic'},

  ]
  lateSystolic =[
    {id:2,itemName:'Prolaspe-Late Systolic'},

  ]
 
  rupturedchordaeAnteriorleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  rupturedchordaePosteriorleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  rupturedchordaeSepatlleaflet =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},

  ]
  dilatedannulusDimensions=[
    {id:2,itemName:'Ruptured-Dilated Annulus Dimensions'},

  ]
  ebsteinsAnomaly=[
    {id:2,itemName:'Ruptured-Ebstein’s anomaly'},

  ]
  tricuspidAtresia=[
    {id:2,itemName:'Ruptured-Tricuspid Atresia'},

  ]
  regurgitation= [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},  
  ]
  
  severity = [
    {id:2,itemName:'Trace'},
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Mild-to-moderate'},
    {id:5,itemName:'Moderate-to-severe'},
    {id:6,itemName:'Severe'},


  ]
  jetdirection = [
    {id:2,itemName:'Toward septum'},
    {id:3,itemName:'Toward RA free wall'},
    {id:4,itemName:'Central'},
    {id:5,itemName:'Eccentric'},
    {id:6,itemName:'Impinging on wall'},
    {id:7,itemName:'Extending to dome (back wall of RA)'},

  ]
  hepaticveinsystolicflow = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Bluted(decresed)'},
    {id:4,itemName:'Reversed'},
    // {id:5,itemName:'Hepatic vein systolic flow-Moderate-to-severe'},
    // {id:6,itemName:'Hepatic vein systolic flow-Severe'},


  ]
  stenosis =[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  stenosisSeverity=[
    {id:2,itemName:'None'},
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Severe'},
  ]
  quantitativeMeasurements =[
    {id:2,itemName:'Peak tricuspid velocity (Doppler)'},
    {id:3,itemName:'Peak trans-fricuspid gradient (Doppler)'},
    {id:4,itemName:'Mean tricuspid velocity (Doppler)'},
    {id:5,itemName:'Mean trans-tricuspid gradient (Doppler)'},
    {id:6,itemName:'Other (Specify)'},

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

  saveTricuspidValveData = () => {
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
    }  else if(res['message'] ==  ' updated successfully' ) {
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
