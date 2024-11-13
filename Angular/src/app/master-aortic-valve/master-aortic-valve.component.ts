import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-master-aortic-valve',
  templateUrl: './master-aortic-valve.component.html',
  styleUrls: ['./master-aortic-valve.component.scss']
})
export class MasterAorticValveComponent implements OnInit {
  Structure = [
    { id: 2, itemName: 'Unicuspid' },
    { id: 3, itemName: 'Bicuspid' },
    { id: 4, itemName: 'Quadricuspid' },
    { id: 5, itemName: 'Doming' },
    { id: 6, itemName: 'Focal thickening' },
    { id: 7, itemName: 'Diffuse thickening  ( sclerosis) without reduced excursion' }
  ]
  Normallyfunctioningmechanicalprostheticvalve = [
    { id: 2, itemName: 'Tilting disk' },
    { id: 3, itemName: 'Bileaflet' },
    { id: 4, itemName: 'Ball and cage' },
    // { id: 5, itemName: 'Others specify' }
  ]
  Abnormalityfindingsconsistentwith = 
  [
    { id: 2, itemName: 'Rocking' },
    { id: 3, itemName: 'Vegetation' },
    { id: 4, itemName: 'Thrombus / mass	' },
    { id: 5, itemName: 'Dehiscence' },
    { id: 6, itemName: 'Stenosis' },
    { id: 7, itemName: 'Abscess' },
    { id: 8, itemName: 'Pannus' },
    { id: 9, itemName: 'Fistula' }
  ]
  Regurgitation = 
   [{ id: 2, itemName: 'Physiologic' },
  { id: 3, itemName: 'Prosthetic' },
  { id: 4, itemName: 'Peri - prosthetic' }
  ]
  Normallyfunctioningbioprostheticvalve=[
	{id:2,itemName:'Porcine'},
	{id:3,itemName:'Homograft'},
	{id:4,itemName:'Pericardial'},
	{id:5,itemName:'Native pulmonic'}
  ]
  NormallyfunctioningbioprostheticvalveSize=[
	{id:2,itemName:'Small'},
	{id:3,itemName:'Moderate'}, 
	{id:4,itemName:'Large'}
]
Abnormallyfunctioningbioprostheticvalve=[
	{id:2,itemName:'Porcine'},
	{id:3,itemName:'Homograft'},
	{id:4,itemName:'Pericardial'},
	{id:5,itemName:'Native pulmonic'}
]
AbnormallyfunctioningbioprostheticvalveSize=[
	{id:2,itemName:'Small'},
	{id:3,itemName:'Moderate'}, 
	{id:4,itemName:'Large'}
]
AbnormallyfunctioningbioprostheticvalveAbnormalityfindingsconsistentwith=[
	{id:2,itemName:'Rocking / Dehiscence'},
	{id:3,itemName:'Vegetation'},
	{id:4,itemName:'Thrombus / mass'},
  { id: 5, itemName: 'Dehiscence' },
  { id: 6, itemName: 'Stenosis' },
  { id: 7, itemName: 'Abscess' },
  { id: 8, itemName: 'Pannus' },
  { id: 9, itemName: 'Fistula' },
  {id:10,itemName:'Fracture / perforation'}

]
AbnormallyfunctioningbioprostheticvalveRegurgitation	= [{ id: 2, itemName: 'Physiologic' },
{ id: 3, itemName: 'Prosthetic' },
{ id: 4, itemName: 'Peri - prosthetic' }
]
VegetationLocation =[
	{id: 2, itemName: 'Right coronary cusp'},
	{id: 3, itemName: 'Noncoronary cusp'},
	{id: 4, itemName: 'Left coronary cusp'},
	{id: 5, itemName: 'Right coronary cusp and noncoronary cusp'},
	{id: 6, itemName: 'Right coronary cusp and left coronary cusp'},
	{id:7, itemName: 'Noncoronary cusp and left coronary cusp'},
	{id: 8 , itemName: 'Right concoronary  and left coronary cusp'}
]
VegetationMobility=[
	{id:2,itemName:'Non mobile'},
	{id:3,itemName:'Mobile'},
	{id:4,itemName:'Pedunculated and mobile'}
]
AbscessLocation	=[
	{id: 2, itemName:'Right coronary cusp / annulus'},
	{id: 3, itemName:'Left coronary cusp / annulus'},
	{id: 4, itemName:'Noncoronary cusp / annulus'}
]
AbscessSize=[
  {id:2,itemName:'Small'},
	{id:3,itemName:'Moderate'}, 
	{id:4,itemName:'Large'},
	{id:5,itemName:'Dimension'}
]
AbscessPerforation=
[
  {id: 2, itemName:'Right coronary cusp / annulus'},
	{id: 3, itemName:'Left coronary cusp / annulus'},
	{id: 4, itemName:'Noncoronary cusp / annulus'}
]
MassLocation=[
  {id: 2, itemName:'Right coronary cusp'},
	{id: 3, itemName:'Left coronary cusp'},
	{id: 4, itemName:'Noncoronary cusp'}
]
MassSize=[
  {id:2,itemName:'Small'},
	{id:3,itemName:'Moderate'}, 
	{id:4,itemName:'Large'},
	{id:5,itemName:'Dimension'}
]
AorticStenosisSeverity=[
	{id:2,itemName:'None'},
	{id:3,itemName:'Mild'},
	{id:4,itemName:'Mild to moderate'},
	{id:5,itemName:'Moderate'},
	{id:6,itemName:'Moderate to severe'},
	{id:7,itemName:'Severe'}
]
AorticRegurgitationSeverity=[

	{id:2,itemName:'None'},
	{id:3,itemName:'Trace (Trivial)'},
	{id:4,itemName:'Mild'},
	{id:5,itemName:'Mild to moderate'},
	{id:6,itemName:'Moderate'},
	{id:7,itemName:'Moderate to severe'},
	{id:8,itemName:'Severe'}
]
updform : any  ={

}
settings= {};
  // actRoute: any;
  obtype: any;
  // loginService: any;
  // router: any;
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
  ngOnInit(): void {
    
  }
  aorticValve=()=>{
    document.getElementById("overlay").style.display = "block";
  
    const objectManagementReq = {
      "value": this.updform
     }
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
  onOptionsSelected = (key,itemName)  => {
    const formatedkey =key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
   const selectedKey = `select${key}`
   this.updform[selectedKey] = itemName
   console.log(this.updform)
 }
 getAddPage  = (obtype) => {
  window.localStorage.setItem("obtype", obtype.toString()); 
  console.log(obtype) 
  this.actRoute.paramMap.subscribe(params => {
    this.obtype = params.get('obtype');
 });


}
}
