import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-master-aorta',
  templateUrl: './master-aorta.component.html',
  styleUrls: ['./master-aorta.component.scss']
})
export class MasterAortaComponent implements OnInit {

  aorta= [
    {id:2,itemName:'Normal'},
    {id:3,itemName:'Abnormal'},
  ]
  dialation=[
    {id:2,itemName:'Aortic root'},
    {id:3,itemName:'Aortic root and the ascending aorta'},
    {id:4,itemName:'Aortic root limited to the sinuses of Valsalva'},
    {id:5,itemName:'Aortic root, ascending and descending aorta'},
    {id:6,itemName:'Aortic root, sinuses of Valsalva and ascending aorta'},
    {id:7,itemName:'Aortic root, ascending and transverse aorta'},
    {id:8,itemName:'Aortic root, transverse, descending and ascending aorta'},
    {id:9,itemName:'Sinuses of Valsalva, aortic root, ascending and transverse aorta'},
    {id:10,itemName:'Ascending aorta'},
    {id:11,itemName:'Ascending and descending aorta'},
    {id:12,itemName:'Ascending and transverse aorta'},
    {id:13,itemName:'Ascending aorta and the sinuses of Valsalva'},
    {id:14,itemName:'Ascending, transverse and descending aorta'},
    {id:15,itemName:'Descending aorta'},
  ]
  
  x= [1,2,3,5]

  aneurysm=[
    {id:2,itemName:'Ascending aorta'},
    {id:3,itemName:'Transverse aorta'},
    {id:4,itemName:'Descending aorta'},
    {id:5,itemName:'Ascending and transverse aorta'},
    {id:6,itemName:'Ascending, transverse and descending aorta'},
    {id:7,itemName:'Ascending and descending aorta'},
    {id:8,itemName:'Transverse and descending aorta'},
    // {id:9,itemName:'Dimensions'}
  ]
  plaque=[
    {id:2,itemName:'Plaque'},
    // {id:3,itemName:'Plaque-Characteristics'},
    // {id:4,itemName:'Plaque-Size'},
    // {id:5,itemName:'Plaque-Mobility'},
  ]
  plaqueLocation= [
    {id:2,itemName:'Ascending aorta'},
    {id:3,itemName:'Transverse aorta'},
    {id:4,itemName:'Descending aorta'},
    {id:5,itemName:'Ascending and transverse aorta'},
    {id:6,itemName:'Ascending and descending aorta'},
    {id:7,itemName:'Ascending, transverse and descending aorta'},
    {id:8,itemName:'Transverse and descending aorta'},
  ]
  plaqueCharacteristics=[

    {id:2,itemName:'Layered'},
    {id:3,itemName:'Protruding'},
    {id:4,itemName:'Layered and protruding'},
    {id:5,itemName:'Multilobular'},
    {id:6,itemName:'Echolucent center'},
  ]
  plaqueSize=[
    
    {id:2,itemName:'Small'},
    {id:3,itemName:'Moderate'},
    // {id:4,itemName:'Large'},
    //dimensions??
  ]
  plaqueMobility=[

    {id:2,itemName:'Mobile'},
    {id:3,itemName:'Immobile'},
  ]
  graft=[
    {id:2,itemName:'Graft'},
  ]

  graftType= [
    {id:2,itemName:'Prosthetic'},
    {id:3,itemName:'Homograft'},
  ]
  graftLocation=[

    {id:2,itemName:'Ascending aorta'},
    {id:3,itemName:'Ascending and transverse aorta'},
    {id:4,itemName:'Descending aorta'},
    {id:5,itemName:'Transverse aorta and descending aorta'},
    {id:6,itemName:'Ascending, transverse, and descending aorta'},
 ]

 dissection=[
  {id:2,itemName:'Dissection'},

 ]


  dissectionLocation= [
    {id:2,itemName:'Extending from the aortic root to the aortic arch'},
    {id:3,itemName:'Extending from the aortic root to the aortic arch'},
    {id:4,itemName:'Extending from the aortic root to the descending aorta'},
    {id:5,itemName:'Extending from the ascending aorta to the aortic arch'},
    {id:6,itemName:'Extending from the ascending aorta to the descending aorta'},
    {id:7,itemName:'Extending from the aortic arch to the descending aorta'},
    {id:8,itemName:'Limited to the descending aorta'},
  ]
  dissectionEntrySite=[

    {id:2,itemName:'Aortic root'},
    {id:3,itemName:'Aortic arch'},
    {id:4,itemName:'Ascending aorta '},
    {id:5,itemName:'Descending aorta'},
  ]
  dissectionExitPoint=[
    
    {id:2,itemName:'Ascending aorta'},
    {id:3,itemName:'Aortic arch'},
    // {id:4,itemName:'Descending Aorta-Multiple'},
    // {id:5,itemName :'Multiple (describe)'}
  ]
  dissectionFalseLumen=[
    
    {id:2,itemName:'Contains thrombus'} ,
    {id:3,itemName:'Compressing the superior vena cava'},
    {id:4,itemName:'Compressing the true lumen'},
    {id:5,itemName:'Contains thrombus and compressing the true lumen'},
  ]
  dissectionIntramuralHematoma=[

    {id:2,itemName:'Ascending root'},
    {id:3,itemName:'Extending from the aortic root to the ascending aortat'},
    {id:4,itemName:'Extending from the aortic root to the descending aorta'},
    {id:5,itemName:'Extending from the ascending aorta to the aortic arch'},
    {id:6,itemName:'Extending from the ascending aorta to the descending aorta'},
    {id:7,itemName:'Extending from tire aortic arch to the descendmg aorta'},
    {id:8,itemName:'Limited to the descending aorta'},
  ]
  dissectionClassification=[

    {id:2,itemName:'Stanford Type A (Proximal)'},
    {id:3,itemName:'Stanford Type B (Distal)'},
    {id:4,itemName:'DeBakey Type I)'},
    {id:5,itemName:'DeBakey Type E)'},
    {id:6,itemName:'DeBakey Type III'},
    // {id:7,itemName:'Other (Specify)'},
 ]
  coarctation=[
    {id:2,itemName:'Location'},
    {id:3,itemName:'Minimal diameter'},
    {id:4,itemName:'Peak gradient'},
  ]
  coarctationLocation=[
    {id:2,itemName:'Proximal to left subclavian artery'},
    {id:3,itemName:'Distal to left subclavian artery'},
  ]
  
  
  
  transposition=[
    {id:2,itemName:'Transposition of the great arteries'},//textbox required
  ]
  correctedTransposition=[
    {id:2,itemName:'Corrected transposition of the great arteries'},//textbox required
  ]


  settings= {};

  obtype: string;
  data : any[] = [];

  Size:string;
  updform : any  = {
    
  }
  aortaObservationObject: any;

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



  saveAortaitemNameData = () => {
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