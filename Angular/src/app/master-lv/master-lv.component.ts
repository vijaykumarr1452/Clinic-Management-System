import { Component } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {defaultValue} from '../helperFunction';

@Component({
  selector: 'app-master-lv',
  templateUrl: './master-lv.component.html',
  styleUrls: ['./master-lv.component.scss']
})
export class MasterLvComponent {
  defaultDropdownValue =  defaultValue();
  
  cavitySize = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Increased Mild'},
    {id:4,itemName:'Increased Moderate'},
    {id:5,itemName:'Increased Severe'},
    {id:6,itemName:'Decreased'},
  ]
 
  x= [1,2,3,5]

  wallThickness = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Increased Mild'},
    {id:4,itemName:'Increased Moderate'},
    {id:5,itemName:'Increased Severe'},
    {id:6,itemName:'Decreased'},
    // {id:7,itemName:'Relative Wall Thickness'},
     ]

     
  ventricularMass = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'BorderLine'},
    {id:4,itemName:'Increase'},
    {id:5,itemName:'Index'},    
  ]

  
  ventricularShape= [
    {id:2,itemName:'Normal'},  
  ]

  concentricHypertrophy= [
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Severe'},  
  ]

  asymmetricHypertrophy = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present-Anterior'},
    {id:4,itemName:'Present-Posterior '},
    {id:5,itemName:'Present-Septal'},
    {id:6,itemName:'Present-Lateral'},
    {id:7,itemName:'Present-Apical'},
  ]
  asymmetricHypertrophyPresent = [
    {id:2,itemName:'Present-Anterior'},
    {id:3,itemName:'Present-Posterior '},
    {id:4,itemName:'Present-Septal'},
    {id:5,itemName:'Present-Lateral'},
    {id:6,itemName:'Present-Apical'},
  ]

  eccentricHypertrophy= [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},  
  ]

  aneurysm= [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Anterior'},
    {id:4,itemName:'Posterior'},
    {id:5,itemName:'Inferior'},
    {id:6,itemName:'Septal'},
    {id:7,itemName:'Lateral'},
    {id:8,itemName:'Apical'},
    // {id:9,itemName:'Other (Specify)'}, 
  ]

  aneurysmPresent= [
    {id:2,itemName:'Anterior'},
    {id:3,itemName:'Posterior'},
    {id:4,itemName:'Inferior'},
    {id:5,itemName:'Septal'},
    {id:6,itemName:'Lateral'},
    {id:7,itemName:'Apical'},
    // {id:8,itemName:'Other (Specify)'}, 
  ]

  pseudoaneurysm= [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Anterior'},
    {id:4,itemName:'Posterior'},
    {id:5,itemName:'Inferior'},
    {id:6,itemName:'Septal'},
    {id:7,itemName:'Lateral'},
    {id:8,itemName:'Apical'},
    {id:9,itemName:'Basal'},  
  ]

  pseudoaneurysmPresent= [
    {id:2,itemName:'Anterior'},
    {id:3,itemName:'Posterior'},
    {id:4,itemName:'Inferior'},
    {id:5,itemName:'Septal'},
    {id:6,itemName:'Lateral'},
    {id:7,itemName:'Apical'},
    {id:8,itemName:'Basal'}, 
  ]

  systolicfunction = [
    {id:2,itemName:'Global'},  
  ]
  systolicFunctionEjectionFraction =[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Borderline'},
    {id:4,itemName:'Low Normal'},
    //{id:5,itemName:'Decreased'},
    {id:6,itemName:'Decreased-Mild'},
    {id:7,itemName:'Decreased-Mild-To-Moderate'},
    {id:8,itemName:'Decreased-Moderate'},
    {id:9,itemName:'Decreased-Mild-To-Severe'},
    {id:10,itemName:'Decreased-Severe'},
    {id:11,itemName:'Increased (Hyperdynamic)'},
  ]
  systolicFunctionEjectionFractionDecreased =[
    {id:2,itemName:'Decreased-Mild'},
    {id:3,itemName:'Decreased-Mild-To-Moderate'},
    {id:4,itemName:'Decreased-Moderate'},
    {id:5,itemName:'Decreased-Mild-To-Severe'},
    {id:6,itemName:'Decreased-Severe'},
  ]
  systolicFunctionFractionalShortening =[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Decreased'},
    {id:4,itemName:'Increased'},
  ]

  systolicFunctionFractionalAreaChanges =[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Decreased'},
    {id:4,itemName:'Increased'},
  ]

  systolicFunctionDilated =[
    {id:2,itemName:'Mild'},
    {id:3,itemName:'Mild-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Mild-To-Severe'},
    {id:6,itemName:'Severe'},
  ]

  regional =[
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Hypokinetic'},
    {id:4,itemName:'Akinetic'},
    {id:5,itemName:'Dyskinetic'},
    {id:6,itemName:'Scar/Thinning'},
    {id:7,itemName:'Not Seen'}, 
  ]

  abnormalSeptalMotion = [
    {id:2,itemName:'Abnormal (Paradoxical) Motion Consistent With Right Ventricular Volume Overload and / Or Elevated RV End-Diastolic Pressure. '},
    {id:3,itemName:'Abnormal (Paradoxical) Motion Consistent With Post-Operative Status'},
    {id:4,itemName:'Abnormal (Paradoxical) Motion Consistent With Left Bundle Branch Block'},
    {id:5,itemName:'Abnormal (Paradoxical) Motion Consistent With Rv Pacemaker'},
    {id:6,itemName:'Abnormal (Paradoxical) Motion Due To Pre-Excitation'},
    {id:7,itemName:'Flattened In Diastole (D Shaped Left Ventricle) Consistent With Right Ventricular Volume Overload'},
    {id:8,itemName:'Flattened In Systole Consistent With Right Ventricular Pressure Overload'},
    {id:9,itemName:'Flattened In Systole And Diastole Consistent With Right Ventricular Pressure And Volume Overload'},
    {id:10,itemName:'Septal Bounce Consistent With Constructive Physiology'},
    {id:11,itemName:'Excessive Respiratory Change – Consider Tamponade, Ventilation Related Etc.'},
    {id:12,itemName:'Other (Specify)'},    
  ]


  diastolicFilling = [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
    // {id:4,itemName:'Abnormal-Elevated LV Filling Pressure'},    
  ]

  diastolicFillingAbnormalPattern = [
    {id:2,itemName:'Impaired Relation'},
    {id:3,itemName:'Pseudo normal'},
    {id:4,itemName:'Restrictive'},  
  ]

  diastolicFillingAbnormalLvFilling = [
    // {id:2,itemName:'Abnormal-Elevated LV Filling Pressure-Absent'},
    {id:2,itemName:'Elevated Mean Left Atrial Pressure (LAP)'},
    {id:3,itemName:'Elevated LV end diastolic pressure (LVDEP)'},
    {id:4,itemName:'Both Elevated LAP And LVEDP'},    
  ]
   

  myocardialInfractionAnterior = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},  
  ]

  myocardialInfractionPosterior = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},
  ]

  myocardialInfractionInferior = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},
  ]

  myocardialInfractionLateral = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},  
  ]

  myocardialInfractionAnteroseptal = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},
  ]

  myocardialInfractionApical = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'}, 
  ]

  myocardialInfractionAnteroApical = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'},
  ]
  myocardialInfractionPosteroLateral = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Small-To-Moderate'},
    {id:4,itemName:'Moderate'},
    {id:5,itemName:'Moderate-To-Large'},
    {id:6,itemName:'Large'}, 
  ]
  myocardialInfractionOther = [     
    {id:2,itemName:'Other (Specify)-Small'},
    {id:3,itemName:'Other (Specify)-Small-To-Moderate'},
    {id:4,itemName:'Other (Specify)-Moderate'},
    {id:5,itemName:'Other (Specify)-Moderate-To-Large'},
    {id:6,itemName:'Other (Specify)-Large'}, 
  ]

  thrombus = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'}
  ]
  thrombusPresentSize = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
  ]
  thrombusLocation = [
    {id:5,itemName:'Apical'},
    {id:6,itemName:'Basal'},
    {id:7,itemName:'Lateral'},
    {id:8,itemName:'Septal'},   
  ]
  thrombusShape = [   
    {id:2,itemName:'Flat (Mural)'},
    {id:3,itemName:'Protruding'},
    {id:4,itemName:'Pedunculated'},
    {id:5,itemName:'Spherical'},
    {id:6,itemName:'Regular'},
    {id:7,itemName:'Irregular'},
    {id:8,itemName:'Multilobular'},
    // {id:9,itemName:'Other (Specify)'},
  ]
  thrombusTexture = [   
    {id:2,itemName:'Solid'},
    {id:3,itemName:'Layered'},
    {id:4,itemName:'Hypoechoic Interior (Cystic)'},
    {id:5,itemName:'Hyperechoic'},
    {id:6,itemName:'Calcified'}
  ]
  thrombusMobility = [
    {id:2,itemName:'Mobile'},
    {id:3,itemName:'Fixed (Sessile)'}
  ]
  thrombusDimensions = [
    {id:2,itemName:'Present-Dimensions'},
  ]
  mass = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},       
  ]

  massPresentSize = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'}   
  ]

  massPresentLocation = [   
    {id:2,itemName:'Apical'},
    {id:3,itemName:'Basal'},
    {id:4,itemName:'Septal'},
    {id:5,itemName:'Lateral'},
    {id:6,itemName:'Intramyocardial'},
    {id:7,itemName:'Intracavitary'},     
  ]
  massPresentShape = [   
    {id:2,itemName:'Flat (Mural'},
    {id:3,itemName:'Protruding'},
    {id:4,itemName:'Pedunculated'},
    {id:5,itemName:'Papillary'},
    {id:6,itemName:'Spherical'},
    {id:7,itemName:'Regular'},
    {id:8,itemName:'Irregular'},
    {id:9,itemName:'Multilobular'},
    {id:10,itemName:'Frondlike'},
    {id:11,itemName:'Infiltrating'}    
  ]

  massPresentTexture = [ 
    {id:2,itemName:'Solid'},
    {id:3,itemName:'Layered'},
    {id:4,itemName:'Hypoechoic Interior (Cystic)'},
    {id:5,itemName:'Echogenic'},
    {id:6,itemName:'Calcified'}   
  ]
  massPresentMobility = [   
    {id:2,itemName:'Mobile'},
    {id:3,itemName:'Fixed (Sessile)'},    
  ]

  massPresentDimensions = [   
    {id:2,itemName:'Present-Dimensions'},    
  ]
  ventricularSeptalDefect = [
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},   
  ]
  ventricularSeptalDefectPresentLocation = [
    {id:2,itemName:'Membranous (Infracristal)'},
    {id:3,itemName:'Infundibular (Supracristal)'},
    {id:4,itemName:'Inlet'},
    {id:5,itemName:'Muscular'},
    {id:6,itemName:'Multiple'},   
  ]
  ventricularSeptalDefectPresentSize = [
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    {id:5,itemName:'Specify dimensions'}, 
  ]

  ventricularSeptalDefectPresentShunt = [
    {id:2,itemName:'Left-To-Right'},  
    {id:3,itemName:'Right-To-Left'},
    {id:4,itemName:'Bidirectional'},
    // {id:5,itemName:'Qp:Qs Ratio'},    
  ]

  /////////////////////////////////////////////


  settings= {};
  
  obtype: string;
  data : any[] = [];
  
  wallthickness:string;
 
  updform : any  = {
 
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 
        this.getPageData();

  this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

  }

  getPageData() {
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
    text: "{{defaultDropdownValue}}",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    searchPlaceholderText: 'Select',
    enableSearchFilter: true,
    badgeShowLimit: 5,
  };

  }

  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    console.log(this.updform[selectedKey])
  }


  saveLeftVentricleValueData = () => {

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
    } else if(res['message'] ==  ' updated successfully' ) {
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
