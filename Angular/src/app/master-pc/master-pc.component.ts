import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-pc',
  templateUrl: './master-pc.component.html',
  styleUrls: ['./master-pc.component.scss']
})
export class MasterPcComponent implements OnInit {

  
  
  pericardium= [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Present'},
    {id:4,itemName:"dimension ( pl specify)"}
  ]
  pericardiumEffusion=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},    
  ]
  
  x= [1,2,3,5]
  ascites=[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Mild'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Severe'},
  ]

  
  size=[

    {id:2,itemName:'Trivial'},
    {id:3,itemName:'Small'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Large'},

  ]
  location=[
    {id:2,itemName:'Generalized'},
    {id:3,itemName:'Localized-Near Left Ventricle'},
    {id:4,itemName:'Localized-Near Right Ventricle'},
    {id:5,itemName:'Localized-Near Left Atrium'},
    {id:6,itemName:'Localized-Near Right Atrium'},
  
  ]
  
  content=[
    {id:2,itemName:'Fluid'},
    {id:3,itemName:'Fibrinous'},
    {id:4,itemName:'Focal Strands'},
    {id:5,itemName:'Effusive Constructive'},
  ]
  thickening_calcification=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  mass=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
    // {id:4,itemName:'dimension ( pl specify)'}
  ]

  pleuralEffusion=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present-Right'},
    {id:4,itemName:'Present-Left'},
    {id:5,itemName:'Present-Right and Left'},
  ]
 
  tamponade=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  constriction=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  effusoConstructive=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  septalBounce=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  inversion=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present-Left Ventricle'},
    {id:4,itemName:'Present-Right Ventricle'},
    {id:5,itemName:'Present-Left Atrium'},
    {id:6,itemName:'Present-Right Atrium'},
  ]

  
  excessiveRespiratoryVariation=[
    // {id:2,itemName:'Ventricular Dimensions'},
    // {id:3,itemName:'Mitral Valve Slope'},
    // {id:4,itemName:'Doppler Flow Velocities-Mitral'},
    // {id:5,itemName:'Doppler Flow Velocities-Tricuspid'},
    // {id:6,itemName:'Doppler Flow Velocities-Aortic'},
    // {id:7,itemName:'Doppler Flow Velocities-Pulmonic'},
    // {id:8,itemName:'Doppler Flow Velocities-Hepatic'},
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
 

  leftVentricularDiastole=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]
  
  flatPad=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
  ]

  
  settings= {};
  
  obtype: string;
  data : any[] = [];

  Size:string;
  updform : any = {
 
  }
  observation : any[] = [];
  

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

    this.settings = {
      singleSelection: false,
      text: "Not Applicable(N/A)",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Select ',
      enableSearchFilter: true,
      badgeShowLimit: 5,
    };

  }
  
  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    console.log(this.updform)
  }

  savePericardiumValueData = () => {
      //save function
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