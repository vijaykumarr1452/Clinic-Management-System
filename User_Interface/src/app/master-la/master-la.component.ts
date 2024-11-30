import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-la',
  templateUrl: './master-la.component.html',
  styleUrls: ['./master-la.component.scss']
})
export class MasterLaComponent implements OnInit {

  leftAtrium = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'}
  ]
  size = [
      {id:2,itemName:'Normal'},
      {id:3,itemName:'Dilated'},
      {id:4,itemName:'Mildly dilated'},
      {id:5,itemName:'Moderately Dilated '},
      {id:6,itemName:'Severely Dilated'},
      {id:7,itemName:'Elongated'},
      // {id:8,itemName:'Volume'}
  ]
  
    thrombus= [
      {id:2,itemName:'Absent'},
      {id:3,itemName:'Present'},
    ]
    thrombuspresent=[
      {id:2,itemName:'Size'},
      {id:3,itemName:'Location'},
      {id:4,itemName:'Shape'},
      {id:5,itemName:'Texture'},
      {id:6,itemName:'Mobility'},
      {id:7,itemName:'Dimensions'},
    ]
    thrombuspresentsize=[
      {id:2,itemName:'Small'},
      {id:3,itemName:'Moderate'},
      {id:4,itemName:'Large'},
    ]
    thrombuspresentlocation=[
      {id:2,itemName:'LA Cavity-Superior'},
      {id:3,itemName:'LA Cavity-Inferior'},
      {id:4,itemName:'LA Cavity-Lateral'},
      {id:5,itemName:'LA Cavity-Atrial Septum'},
      {id:6,itemName:'LA Appendage'},
    ]
    thrombuspresentshape=[
      {id:2,itemName:'Flat (Mural)'},
      {id:3,itemName:'Protruding'},
      {id:4,itemName:'Pedunculated'},
      {id:5,itemName:'Papillary'},
      {id:6,itemName:'Spherical'},
      {id:7,itemName:'Regular'},
      {id:8,itemName:'Irregular'},
      {id:9,itemName:'Multilobular'},
      // {id:10,itemName:'Other (Specify)'},
    ] 
    thrombuspresenttexture=[
      {id:2,itemName:'Solid'},
      {id:3,itemName:'Layered'},
      {id:4,itemName:'Hypoechoic Interior (Cystic)'},
      {id:5,itemName:'Echogenic'},
      {id:6,itemName:'Calcified'},
    ]
    thrombuspresentmobility=[
      {id:2,itemName:'Mobile'},
      {id:3,itemName:'Fixed (Sessile)'},
    ]

    thrombuspresentDimension=[
      {id:2,itemName:'Dimensions'},
    ]
  
    mass=[
      {id:2,itemName:'Absent'},
      {id:3,itemName:'Present'},
    ]
    masspresent=[
      {id:2,itemName:'Size'},
      {id:3,itemName:'Location'},
      {id:4,itemName:'Attachment'},
      {id:5,itemName:'Shape'},
      {id:6,itemName:'Texture'},
      {id:7,itemName:'Mobility'},
      {id:8,itemName:'Dimensions'},
      {id:9,itemName:'Type'},
    ]
      massSize=[
        {id:2,itemName:'Small'},
       {id:3,itemName:'Moderate'},
       {id:4,itemName:'Large'},
      ]
  massLocation=[
      {id:2,itemName:'LA Cavity'},
      {id:3,itemName:'LA Appendage'},
      {id:4,itemName:'Fossa Ovalis/Atrial Septum'},
  ]
  massAttachment=[
      {id:2,itemName:'Fossa Ovalis/Atrial Septum'},
      {id:3,itemName:'Left Atrial Body'},
      {id:4,itemName:'Mitral Valve'},
      {id:5,itemName:'Other (Specify)'},
  ]
  massShape=[
      {id:2,itemName:'Flat (Mural)'},
      {id:3,itemName:'Protruding'},
      {id:4,itemName:'Pedunculated'},
      {id:5,itemName:'Papillary'},
      {id:6,itemName:'Spherical'},
      {id:7,itemName:'Regular'},
      {id:8,itemName:'Irregular'},
      {id:9,itemName:'Multilobular'},
      {id:10,itemName:'Frondlike'},
      // {id:11,itemName:'Other (Specify)'},
  ]
  massTexture=[
      {id:2,itemName:'Solid'},
      {id:3,itemName:'Layered'},
      {id:4,itemName:'Hypoechonc Interior (Cystic)'},
      {id:5,itemName:'Echogenic'},
      {id:6,itemName:'Calcified'},
  ]
  massMobility=[
      {id:2,itemName:'Mobile'},
      {id:3,itemName:'Fixed (Sessile)'},
  ]

  massDimension=[
    {id:2,itemName:'Dimensions'},
  ]

  massType=[
      {id:2,itemName:'Suggestive Of Myxoma'},
      {id:3,itemName:'Suggestive Of Papilloma'},
      {id:4,itemName:'Suggestive Of Fibroelastoma'},
      // {id:5,itemName:'Suggestive Of Other Mass (Specify)'},  
    ]
    catheter=[
      {id:2,itemName:'Absent'},
      //{id:3,itemName:'Present'},
      {id:3,itemName:'Present : LA Cavity'},
      {id:4,itemName:'Present : La appendage'},
  
    ]
    catheterpresent=[
     {id:2,itemName:'LA Cavity'},
      {id:3,itemName:'LA Appendage'},
    ]
  
      spontaneousEchoContrast=[
        {id:2,itemName:'Absent'},
      {id:3,itemName:'Present :Degree-Mild'},
      {id:4,itemName:'Present :Degree-Severe'},
      ]
      spontaneousechocontrastpresentlocation=[
      {id:2,itemName:'LA Cavity'},
      {id:3,itemName:'LA Appendage'},
      {id:4,itemName:'LA Cavity and LA Appendage'},
      
     ]
  
     AtrialSeptalDefect=[
      {id:2,itemName:'Location'},
      {id:3,itemName:'Size'},
      {id:4,itemName:'Shunt'},
     ]
     atrialseptaldefectlocation=[
      {id:2,itemName:'Primum'},
      {id:3,itemName:'Secundum'},
      {id:4,itemName:'Sinus Venosus'},    
     ]
     atrialseptaldefectsize=[
      {id:2,itemName:'Small'},
      {id:3,itemName:'Moderate'},
      {id:4,itemName:'Large'},
     ]
     atrialseptaldefectshunt=[
      {id:2,itemName:'Left-To-Right'},
      {id:3,itemName:'Right-To-Left'},
      {id:4,itemName:'Bidirectional'},
      // {id:5,itemName:'Qp:Qs Ratio'},
     ]
  
     patentForamenOvale=[
      {id:2,itemName:'Absent'},
      //{id:3,itemName:'Present'}
      {id:3,itemName:'Present : Left to right shunt'},
      {id:4,itemName:'Present : Right to left shunt'},
      {id:5,itemName:'Bidirectional Shunt'},
     ]
     patientforamenovalepresent=[
      {id:2,itemName:'Left-To-Right'},
      {id:3,itemName:'Right-To-Left'},
      {id:4,itemName:'Bidirectional Shunt'},
     ]

     other=[
      {id:2,itemName:'CorTriatriatum'},
      {id:3,itemName:'Hypoplastic Left Atrium'},
      {id:4,itemName:'Appearance Consistent With Cardiac Transplantation'},
     ]

  
  settings= {};
  
  obtype: string;
  updform : any  ={}
  observation : Object;

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
  }

  
  saveLeftAtriumValueData = () => {
    document.getElementById("overlay").style.display = "block";	  
 
  const objectManagementReq = {
    "value": this.updform
   }
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
