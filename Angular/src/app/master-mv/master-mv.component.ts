import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-mv',
  templateUrl: './master-mv.component.html',
  styleUrls: ['./master-mv.component.scss']
})
export class MasterMvComponent implements OnInit {

 
  mitralValve=[
    {id:2,itemName:'Mitral Valve-Structure/Function'},
    {id:3,itemName:'Mitral Valve-Mitral Stenosis'},
    {id:4,itemName:'Mitral Valve-Mitral Regurgitation'},
  ]
  
  x= [1,2,3,5]
  
  structureOrFunction = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Rheumatic'},
    {id:4,itemName:'Myxomatous (Redundant)'},
    // {id:5,itemName:'Prolapse'},
    // {id:6,itemName:'Prolapse-Holosystolic'},
    // {id:7,itemName:'Prolapse-Latesystolic'},
    // {id:8,itemName:'Prolapse-Maximum Degree Of Prolapse'}, 
    // {id:9,itemName:'Increased E point Septal Separation'},
    // {id:10,itemName:'Mitral PreSystolic Closure'},
    // {id:11,itemName:'Interrupted AC Closure(B-notch)'},
    // {id:12,itemName:'Status-Post Mitral annual Ring Insertion'},
  
  ]
  prolapse=[
    {id:2,itemName:'Prolapse-Anterior Leaflet'},
    {id:3,itemName:'Prolapse-Posterior Leaflet'},
    {id:4,itemName:'Prolapse-Holosystolic'},
    {id:5,itemName:'Prolapse-Latesystolic'},
    {id:6,itemName:'Prolapse-Maximum Degree Of Prolapse'},  
  ]
  prolapseAnteriorLeaflet=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
    {id:5,itemName:'Medial Segment'},
    {id:6,itemName:'Middle Segment'},
    {id:7,itemName:'Lateral Segment'},
    {id:8,itemName:'Multiple Segments'},
    //{id:9,itemName:'Describe'},//text-box
  ]
  prolapsePosteriorLeaflet=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
    {id:5,itemName:'Medical Segments'},
    {id:6,itemName:'Middle Segments'},
    {id:7,itemName:'Lateral Segments'},
    {id:8,itemName:'Multiple Segments'},
    //{id:9,itemName:'Describe'},//text-box
  ]
  flailLeaflet=[
    {id:2,itemName:'Flail Leaflet(S)-Anterior Leaflet'},
    {id:3,itemName:'Flail Leaflet(S)-Posterior Leaflet'},
  ]
  flailLeafletAnterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
    {id:5,itemName:'Medical Segment'},
    {id:6,itemName:'Middle Segment'},
    {id:7,itemName:'Lateral Segment'},
    {id:8,itemName:'Multiple Segments'},
  ]
  flailLeafletPosterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
    {id:5,itemName:'Medical Scallop'},
    {id:6,itemName:'Middle Scallop'},
    {id:7,itemName:'Lateral Scallop'},
    {id:8,itemName:'Multiple Scallop'},
  ]
  rupturedChordae=[
    {id:2,itemName:'Anterior Leaflet'},
    {id:3,itemName:'Posterior Leaflet'},
  ]
  rupturedChordaeAnterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  rupturedChordaePosterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Modeate'},
    {id:4,itemName:'Severe'},
    {id:5,itemName:'Others'},
  ]
  otherChordalDisease=[
    {id:2,itemName:'Shortening'},
    {id:3,itemName:'Fusion'},
    {id:4,itemName:'Others'},
    {id:5,itemName:'Involving anterior leaflet'},  
    {id:6,itemName:'Involving posterior leaflet'},
    {id:7,itemName:'Involving both leaflets'},
  ]
  leafletElongation=[
    {id:2,itemName:'Anterior leaflet'},
    {id:3,itemName:'Posterior leaflet'},
  ]
  leafletElongationAnterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  leafletElongationPosterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  leafletThickeningOrCalcification=[
    {id:2,itemName:'Anterior leaflet'},
    {id:3,itemName:'Posterior leaflet'},
  ]
  
  leafletThickeningAnterior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  leafletThickeningPosteriior=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  // leafletMobility=[
  //   {id:2,itemName:'Normal'},
  //   {id:3,itemName:'Abnormal-Anterior mitral leaflet'},
  //   {id:4,itemName:'Abnormal-Posterior mitral leaflet'},
  // ]
  leafletMobility=[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'}
  ]
  leafletMobilityAbnormalAnterior=[
    {id:2,itemName:'Mildly decreased mobility'},
    {id:3,itemName:'Moderately decreased mobility'},
    {id:4,itemName:'Immobile'},
  ]
  leafletMobilityAbnormalPosterior=[
    {id:2,itemName:'Mildly decreased mobility'},
    {id:3,itemName:'Moderately decreased mobility'},
    {id:4,itemName:'Immobile'},
  ]
  annularCalicification=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]

  subvalvulardiseaseCalicification=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  subvalvulardiseaseThickCalicification=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]
  
  annularAnnularDilatation=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},
  ]

  vegetation=[
    {id:2,itemName:'Anterior Leaflet'},
    {id:3,itemName:'Posterior Leaflet'},
  ]
  vegetationAnterior=[
    {id:2,itemName:'Non Mobile'},
    {id:3,itemName:'Mobile'},
    {id:4,itemName:'Pendunculated and Mobile'},
    //{id:5,itemName:'Size'},
    // {id:5,itemName:'Small'},
    // {id:6,itemName:'Moderate'},
    // {id:7,itemName:'Large'},
    // {id:8,itemName:'Dimensions'},//text-box
    // {id:9,itemName:'Others(Specify)'},
  ]
  vegetationAnteriorSize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    // {id:5,itemName:'Dimensions'},//text-box
    {id:6,itemName:'Others(Specify)'},
  ]
  vegetationPosterior=[
    {id:2,itemName:'Non Mobile'},
    {id:3,itemName:'Mobile'},
    {id:4,itemName:'Pendunculated and Mobile'},
    //{id:5,itemName:'Size'},
    {id:5,itemName:'Small'},
    {id:6,itemName:'Moderate'},
    {id:7,itemName:'Large'},
    // {id:8,itemName:'Dimensions'},
    {id:9,itemName:'Others(Specify)'},
  ]
  vegetationPosteriorSize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    // {id:5,itemName:'Dimensions'},  

  ]
  abscess=[
    {id:2,itemName:'Location'},
    {id:3,itemName:'Size'},
  ]
  abscessLocation=[
    {id:2,itemName:'Anterior Leaflet/Annulus'},
    {id:3,itemName:'Posterior Leaflet/Annulus'},
    {id:4,itemName:'Litravalvular (pars) Fibrosa'},
  ]
  abscessSize=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    // {id:5,itemName:'Dimensions'},//text-box
  ]
  cleft=[
    {id:2,itemName:'Anterior leaflet'},
    {id:3,itemName:'Posterior leaflet'},
  ]
  cleftAnterior=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  cleftPosterior=[
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  systolicAnteriorMotion=[
    {id:2,itemName:'Anterior leaflet'},
    {id:3,itemName:'Posterior leaflet'},  
    {id:4,itemName:'Chordal'},
  ]
  systolicAnteriorLeaflet=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  systolicPosteriorLeaflet=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  systolicChordal=[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  dialatedAnnulus=[
    //Dimensions
  ]
  diastolicFluttering=[
    {id:2,itemName:'Anterior Leaflet'},
    {id:3,itemName:'Posterior Leaflet'},
  ]

  prostheticValve=[
    {id:2,itemName:'Type'},
    {id:3,itemName:'Abnormality'},
  ]

  // prostheticValve1=[
  //   {id:2,itemName:'Type-Mechanical'},
  //   {id:3,itemName:'Type-Bioprosthetic'},
  //   {id:4,itemName:'Abnormality'},
  // ]
  prostheticValveTypeMechanical=[
    {id:2,itemName:'Tilting Disk'},
    {id:3,itemName:'Bileaflet'},
    {id:4,itemName:'Ball and cage'},
    // {id:5,itemName:'Other (Specify)'},//text-box
    // {id:6,itemName:'Manufacturer'},//text-box
    // {id:7,itemName:'Size'},//text-box
  
  ]
  prostheticValveTypeBioprosthetic=[
    {id:2,itemName:'Porcine'},
    {id:3,itemName:'Homograft'},
    {id:4,itemName:'Pericardial'},
    // {id:5,itemName:'Other (Specify)'},//text-box
    // {id:6,itemName:'Manufacturer'},
    // {id:7,itemName:'Size'},//text-box
  
  ]
  prostheticValveAbnormality=[
    {id:2,itemName:'Rocking'},
    {id:3,itemName:'Dehiscence'},
    {id:4,itemName:'Vegetation '},
    {id:5,itemName:'Thrombus/mass'},
    {id:6,itemName:'Stenosis '},
    {id:7,itemName:'Regurgitation'},
    {id:8,itemName:'Pannus'},
    {id:9,itemName:'Fistula'},//text-box
    // {id:10,itemName:'fracture/perforation'},//text-box
  ]
  prostheticValveAbnormalityRegurgitation=[
  
    {id:2,itemName:'Physiologic'},
    {id:3,itemName:'Prosthetic'},
    {id:4,itemName:'Peri-prosthetic'},
  ]
     
  mitralStenosis=[
    {id:2,itemName:'Severity'},
    {id:3,itemName:'Quantitative Measurements(If Mitral Stenosis Present)'},
    {id:4,itemName:'Status-Post Commissurotomy-Yes'},
    {id:5,itemName:'Status-Post Commissurotomy-No'},
  ]    
  mitralStenosisSeverity=[
    {id:2,itemName:'None'},
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Mild to Moderate'},
    {id:5,itemName:'Moderate'},
    {id:6,itemName:'Moderate to Severe'},
    {id:7,itemName:'Severe'},
  ]
  mitralStenosisQuantitative=[
    {id:2,itemName:'By Planimetry'},
    {id:3,itemName:'By Doppler Pressure Halftime'},
    {id:4,itemName:'By Other Method(Specify)'},//textbox
    {id:5,itemName:'Mean Transmit Velocity(Doppler)'},
    {id:6,itemName:'Mean Transmitral Gradient'},
  ]

  mitralStenosisStatus = [
    {id:2,itemName:'Status-Yes'},
    {id:3,itemName:'Status-No'},
  ]

  mitralRegurgitation = [
    {id:2,itemName:'Severity'},
    {id:3,itemName:'Jet Direction'},
    {id:4,itemName:'Diastolic Mitral Regurgitation'},
    {id:5,itemName:'Quantitative Measurements (If mitral regurgitation present)'},
  ]
  
  mitralRegurgitationSeverity=[
    {id:2,itemName:'None'},  
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Mild-to-moderate'},
    {id:5,itemName:'Moderate'},
    {id:6,itemName:'Moderate-to-severe'},
    {id:7,itemName:'Severe'},
  ]
  mitralRegurgitationJetDirection=[
    {id:2,itemName:'Jet direction-Anteriorly-directed'},
    {id:3,itemName:'Jet direction-Posteriorly-directed'},
    {id:4,itemName:'Jet direction-Centrally-directed'},
    {id:5,itemName:'Jet direction-Wall-impinging jet'},
    {id:6,itemName:'Jet direction-Impingement on pulmonary veins'},
  ]
  mitralRegurgitationDiastolicMitralRegurgitation=[
    {id:2,itemName:'Present'},
    {id:3,itemName:'Absent'},
  ]
   mitralRegurgitationQuantitativeMeasurements=[     
    {id:2,itemName:'Quantitative Measurements-Mitral regurgitation jet/left atrial area ratio'},  
    {id:3,itemName:'Normal pulmonary venous flow'},
    {id:4,itemName:'Blunted (decreased) systolic flow'},
    {id:5,itemName:'Systolic flow reversal'},
    {id:6,itemName:'By pulsed Doppler echo method'},
    {id:7,itemName:'By PISA color Doppler method'},
    {id:8,itemName:'By pulsed Doppler echo method'},
    {id:9,itemName:'By PISA color Doppler method'},
    {id:10,itemName:'By pulsed Doppler echo method'},
    {id:11,itemName:'By PISA color Doppler method'},
    {id:12,itemName:'Vena contracta width'}//text-box
   ]


  quantitativeMeasurementsPulmonaryVenousFlow=[
    {id:2,itemName:'Normal pulmonary venous flow'},
    {id:3,itemName:'Blunted (decreased) systolic flow'},
    {id:4,itemName:'Systolic flow reversal'},
  ]
  quantitativeMeasurementsMitralRegurgitantVolume=[    
    {id:2,itemName:'By pulsed Doppler echo method'},
    {id:3,itemName:'By PISA color Doppler method'},
  ]
  QuantitativeMeasurementsMitralRegurgitantFraction=[
    {id:2,itemName:'By pulsed Doppler echo method'},
    {id:3,itemName:'By PISA color Doppler method'},
  ]
  
  QuantitativeMeasurementsEffectiveMitralRegurgitantOrificeArea=[
      {id:2,itemName:'By pulsed Doppler echo method'},
      {id:3,itemName:'By PISA color Doppler method'},
  ]


settings= {};

obtype: string;

updform : any  = {
 
}


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

  onOptionsSelected = (key,value)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = value
    console.log(this.updform);
  }


saveMitralValueData = () => {
  //save function
  document.getElementById("overlay").style.display = "block";
  const objectManagementReq = {
    "value": this.updform
   }
   console.log(objectManagementReq);
   this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
    
    document.getElementById("overlay").style.display = "none";
 
 
      if(res['message'] ==  'submitted successfully' ) {
      alert('Observation Inserted Successfully');
    
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
