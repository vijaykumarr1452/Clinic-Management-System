import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-preview-observations',
  templateUrl: './preview-observations.component.html',
  styleUrls: ['./preview-observations.component.scss']
})
export class PreviewObservationsComponent implements OnInit {

  
  leftVentricleObservationObject = {};
  selectedCavitySize;
  selectedVentricularShape;
  selectedDiastolicFilling;
  selectedVentricularSeptalDefect;
  selectedVentricularMass;
  selectedMyocardialInfraction;
  selectedMass;
  selectedWallThickness;
  selectedSystolicfunction;
  selectedThrombus;
  selectedAbnormalSeptalMotion;
 
  user;
  value;

  updform = {
    cs:'',
    vs:'',
    df:'',
    vsd:'',
    vm:'',
    mi:'',
    m:'',
    wt:'',
    sf:'',
    t:'',
    asm:'',
  }

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {


    this.getallJsonList();
    // this.loginService.observationsGetIndividual()
    // .subscribe(data => {
    //   console.log(data)
    //   this.updform = data['observation']
    // }, error => console.log(error));
    

  }

  getallJsonList(){

    this.loginService.observationsGetAllByPatient().subscribe(user => {
        console.log(user);
          this.user=user;
      },
    )
  }


  
  onOptionsSelected = (key,value)  => {
    this.leftVentricleObservationObject[key] = value
  }



  saveLeftVentricleValueData = () => {
    //save function
  //console.log(this.leftVentricleObservationObject)

  const objectManagementReq = {
    "value": this.leftVentricleObservationObject
   }
   console.log(objectManagementReq);
   this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
      console.log(res);
      if(res['message'] ==  'submitted successfully' ) {
      alert('Observation Inserted Successfully');
      //this.router.navigateByUrl(`/observations/`);
      this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
    } 
     
 })


}


}
