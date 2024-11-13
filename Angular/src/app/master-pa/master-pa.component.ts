import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-pa',
  templateUrl: './master-pa.component.html',
  styleUrls: ['./master-pa.component.scss']
})
export class MasterPaComponent implements OnInit {

  observation =  [
    {id:2,itemName:'Normal'},
   {id:3,itemName:'Mildly dilated'},
    {id:4,itemName:'Moderately dilated'},
    {id:5,itemName:'Severely dilated'},
  ]
 dilated=[
   {id:2,itemName:'Mildly dilated'},
    {id:3,itemName:'Moderately dilated'},
    {id:4,itemName:'Severely dilated'},
  ] 
pulmonaryhypertension=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
]
Patentductusarteriosus=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
]
Suspectthromboembolism=[
    {id:2,itemName:'Main pulmonary artery'},
    {id:3,itemName:'Right pulmonary artery'},
    {id:4,itemName:'Left pulmonary artery'},
]
Pulmonarybranchstenosis=[
    {id:2,itemName:'Right pulmonary artery'},
    {id:3,itemName:'Left pulmonary artery'} 
  ]
  // pulmonaryArteryObservation = {
  //   observation:[],
  //   dilated:[],
  //   pulmonaryhypertension:[],
  //   Patentductusarteriosus:[],
  //   Suspectthromboembolism:[],
  //   Pulmonarybranchstenosis:[]
  // }
  selectPulmonaryArteryData:any;
  updform : any  ={

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
    console.log(this.updform)
  }

  savePulmonaryArteryData = () => {
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
