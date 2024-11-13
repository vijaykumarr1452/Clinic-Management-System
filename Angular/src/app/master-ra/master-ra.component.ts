import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-master-ra',
  templateUrl: './master-ra.component.html',
  styleUrls: ['./master-ra.component.scss']
})
export class MasterRaComponent implements OnInit {

  data =  [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
    dataabnormal=[
    {id:2,itemName:'Size'},
    {id:3,itemName:'Thrombus'},
    {id:4,itemName:'Mass'},
    {id:5,itemName:'Catheter/Pacemaker'},
    {id:6,itemName:'Spontaneous Echo Contrast'},
    {id:7,itemName:'Pressure'},
    {id:8,itemName:'Others'},
    ]
    dataabnormalsize=[
    {id:2,itemName:'Mildly Enlarged'},
    {id:3,itemName:'Moderately Enlarged'},
    {id:4,itemName:'Markedly Enlarged'},
    {id:5,itemName:'Small'},
    ]
    dataabnormalthrombus=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
    ]
    dataabnormalthrombuspresent=[
      {id:2,itemName:'Size'},
      {id:3,itemName:'Location'},
      {id:4,itemName:'Shape'},
      {id:5,itemName:'Texture'},
      {id:6,itemName:'mobility'}
    ]
    dataabnormalthrombuspresentsize=[
      {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    ]
    dataabnormalthrombuspresentlocation=[
    {id:2,itemName:'RA Cavity'},
    {id:3,itemName:'RA Appendage'},
    {id:4,itemName:'Extending From Inferior Vena Cava'},
    ]
    dataabnormalthrombuspresentshape=[
    {id:2,itemName:'Flat (Mural)'},
    {id:3,itemName:'Protruding'},
    {id:4,itemName:'Pedunculatedge'},
    {id:5,itemName:'Papillary'},
    {id:6,itemName:'Spherical'},
    {id:7,itemName:'Regular'},
    {id:8,itemName:'Irregular'},
    {id:9,itemName:'Multilobular'},
    // {id:10,itemName:'Other (Specify)'},
    ]
    dataabnormalthrombuspresenttexture=[
    {id:2,itemName:'Solid'},
    {id:3,itemName:'Layered'},
    {id:4,itemName:'Hypoechonc Interior (Cystic)'},
    {id:5,itemName:'Echogenic'},
    {id:6,itemName:'Calcified'},
    // {id:7,itemName:'Other (Specify)'},
    ]
    dataabnormalthrombuspresentmobility=[
    {id:2,itemName:'Mobile'},
    {id:3,itemName:'Fixed (Sessile)'},
    // {id:4,itemName:'Dimensions'},
    ] 
    dataabnormalmass=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
    ]
    dataabnormalmasspresent=[
    {id:2,itemName:'Abnormal-Mass-Present-Size'},
    {id:3,itemName:'Abnormal-Mass-Present-Location'},
    {id:4,itemName:'Abnormal-Mass-Present-Shape'},
    {id:5,itemName:'Abnormal-Mass-Present-Texture'},
    {id:6,itemName:'Abnormal-Mass-Present-Mobility'},
    {id:7,itemName:'Abnormal-Mass-Present-Type'},
    {id:8,itemName:'Abnormal-Mass-Present-Dimensions'},
    ]
    dataabnormalmasspresentsize=[
      {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    {id:4,itemName:'Large'},
    ]
    dataabnormalmasspresentlocation=[
    {id:2,itemName:'RA Cavity'},
    {id:3,itemName:'RA Appendage'},
    {id:4,itemName:'Extending From Inferior Vena Cava'},
    ]
    dataabnormalmasspresentshape=[
    {id:2,itemName:'Flat (Mural)'},
    {id:3,itemName:'Protruding'},
    {id:4,itemName:'Pedunculatedge'},
    {id:5,itemName:'Papillary'},
    {id:6,itemName:'Spherical'},
    {id:7,itemName:'Regular'},
    {id:8,itemName:'Irregular'},
    {id:9,itemName:'Multilobular'},
    {id:10,itemName:'Frondlike'},
    // {id:11,itemName:'Others specify'},
    ]
    dataabnormalmasspresenttexture=[
    {id:2,itemName:'Solid'},
    {id:3,itemName:'Layered'},
    {id:4,itemName:'Hypoechonc Interior (Cystic)'},
    {id:5,itemName:'Echogenic'},
    {id:6,itemName:'Calcified'},
    // {id:7,itemName:'Other (Specify)'},
    ]
    dataabnormalmasspresentmobility=[
    {id:2,itemName:'Mobile'},
    {id:3,itemName:'Fixed (Sessile)'},
    ]
    dataabnormalmasspresenttype=[
    {id:2,itemName:'Suggestive Of Myxoma'},
    {id:3,itemName:'Suggestive Of Papilloma'},
    {id:4,itemName:'Suggestive Of Fibroelastoma'},
    // {id:5,itemName:'Others specify'},
    ]
    dataabnormalmasspresentdimensions=[
    {id:2,itemName:'Abnormal-Mass-Present-Dimensions'},
    ]
    dataabnormalcatheter=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present : RA Cavity'},
    {id:4,itemName:'Present : RA Appendage'},
    ]
    dataabnormalspontaneous=[
    {id:2,itemName:'Absent'},
    {id:3,itemName:'Present'},
    ]
    dataabnormalspontaneouspresentdegree=[
      {id:2,itemName:'Mild'},
    {id:3,itemName:'Severe'},
    ]
    dataabnormalspontaneouspresentpersistence=[
    {id:2,itemName:'Intermittent'},
    {id:3,itemName:'Continuous'},
    ]
    dataabnormalspontaneouspresentlocation=[
    {id:2,itemName:'RA Cavity'},
    {id:3,itemName:'RA Appendage'},
    {id:4,itemName:'RA Cavity And RA Appendage'},

    ]
    dataabnormalpressure=[
      {id:2,itemName:'Absent'},
    {id:3,itemName:'Interatrial Septum Bowed Towards The Left, Consistent With Elevated Right Atrial Pressures'},
    {id:4,itemName:'Dilated Coronary Sinus Consistent With Elevated Right Atrial Pressures Or A Persistent Left Superior Vena Cava'},
    {id:5,itemName:'Dilated Hepatic Veins'},
    {id:6,itemName:'Dilated inferior vena cava with the poor inspiratory collapse consistent with elevated right atrial pressure.'}
    ]
    dataabnormalothers=[
    {id:2,itemName:'Appropriate Appearance For A Transplant Recipient'},
    {id:3,itemName:'Prominent Eustachian Valve'},
    {id:4,itemName:'Prominent Chiari Network'}, 
  ]


rightArtrium:any;
updform : any  ={

}
settings= {};
obtype: string;
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { }

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

  saveRightAtriumData = () => {
      //save function
 
  const objectManagementReq = {
    "value": this.updform
   }
   document.getElementById("overlay").style.display = "spinner";

   this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{

    // document.getElementById("overlay").style.display = "spinner";
    // document.getElementById('loader').style.display = 'loader'
      if(res['message'] ==  'submitted successfully' ) {
      alert('Observation Inserted Successfully');
      document.getElementById("overlay").style.display = "spinner";

      this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
    }  
    else if(res['message'] ==  ' updated successfully' ) {
      alert('Observation Updated Successfully');
      document.getElementById("overlay").style.display = "spinner";

      this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
    } 
     
 }
 )

  }
  getAddPage  = (obtype) => {
   
    window.localStorage.setItem("obtype", obtype.toString());
     
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
  
   });
  
  }
}