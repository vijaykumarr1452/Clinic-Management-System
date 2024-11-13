import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-master-rv',
  templateUrl: './master-rv.component.html',
  styleUrls: ['./master-rv.component.scss']
})
export class MasterRvComponent implements OnInit {

rightVentricle=[
  {id:2,itemName:'Normal'},
  {id:3,itemName:'Abnormal'}
]

cavitySize=[
  {id:2,itemName:'Normal'},
  {id:3,itemName:'Mildly Enlarged'},
  {id:4,itemName:'Moderately Enlarged'},
  {id:5,itemName:'Severely Enlarged'},
  {id:6,itemName:'Small'},
]
wallThickness=[
  {id:2,itemName:'Normal'},    
  {id:3,itemName:'Mildly Increased'},
  {id:4,itemName:'Moderately Increased'},
  {id:5,itemName:'Severely Increased'},
  {id:6,itemName:'Decreased'},
  {id:7,itemName:'Thinned'},

]
globalSystolicFunction=[
  {id:2,itemName:'Normal'},
  {id:4,itemName:'Hyperdynamic'},
  {id:5,itemName:'Low Normal'},
  {id:6,itemName:'Mildly Reduced'},
  {id:7,itemName:'Moderately Reduced'},
  {id:8,itemName:'Severely Reduced'},
]

segmentWallAnalysis=[
  {id:2,itemName:'Normal'},
  {id:3,itemName:'Free Wall-Hypokinetic'},
  {id:4,itemName:'Free Wall-Akinetic'},
  {id:5,itemName:'Free Wall-Dyskinetic'},
]
segmentWallAnalysisSeptum=[
  {id:2,itemName:'Abnormal (Paradoxical) Motion Consistent With Right Ventricular Volume Overload And/Or Elevated Rv End-Diastolic Pressure'},
  {id:3,itemName:'Abnormal (Paradoxical) Motion Consistent With Post-Operative Status'},
  {id:4,itemName:'Abnormal (Paradoxical) Motion Consistent With Left Bundle Branch Block'},
  {id:5,itemName:'Abnormal (Paradoxical) Motion Consistent With Rv Pacemaker'},
  {id:6,itemName:'Abnormal (Paradoxical) Motion Due To Pre-Excitation'},
  {id:7,itemName:'Flattened In Diastole (D Shaped Left Ventricle) Consistent With Right Ventricular Volume Overload'},
  {id:8,itemName:'Flattened In Systole Consistent With Right Ventricular Pressure Overload'},
  {id:9,itemName:'Flattened In Systole And Diastole Consistent With RightVentricular Pressure And Volume Overload'},
  {id:10,itemName:'Septal Bounce Consistent With Constrictive Physiology'},
  {id:11,itemName:'Excessive Respiratory Change Consider Tamponade, Ventilation–Related Etc'},
  // {id:12,itemName:'Other (Specify)'},
]
segmentWallAnalysisApex=[
  {id:2,itemName:'Hypokinetic'},
  {id:3,itemName:'Akinetic'},
  {id:4,itemName:'Dyskinetic'},
]
miscellaneous=[
  {id:2,itemName:'Consistent With CorPulmonale'},
  {id:3,itemName:'Consistent With Right Ventricular Dysplasia'},
  {id:4,itemName:'Consistent With Right Ventricular Infraction'},
]


rightVentricleData: any;

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


  saveRightVentricleData = () => {
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
    } 
    else if(res['message'] ==  ' updated successfully' ) {
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
