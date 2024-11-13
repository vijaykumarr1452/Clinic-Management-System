import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-ivc',
  templateUrl: './ivc.component.html',
  styleUrls: ['./ivc.component.scss']
})
export class IvcComponent implements OnInit {
  IVC = [
    { id: 2, itemName: 'Normal' },
    { id: 3, itemName: 'Abnormal' }
  ]
  size = [
    { id: 2, itemName: 'Normal' },
    { id: 3, itemName: 'Dilated' },
    { id: 4, itemName: 'Stenotic' }
  ]
  Respiratorychangeindimension = [
    { id: 2, itemName: 'Greater than 50 %' },
    { id: 3, itemName: 'Less than 50%' },
    { id: 4, itemName: 'Plethora' },
    { id: 5, itemName: 'Dilated IVC with poor inspiration collapse consistent with elevated right atrial pressure' }
  ]
  Flowpattern = [
    { id: 2, itemName: 'Normal' },
    { id: 3, itemName: 'Systolic blunting' },
    { id: 4, itemName: 'Systolic flow reversal' }
  ]
  Thrombus = [
    { id: 2, itemName: 'Absent' },
    { id: 3, itemName: 'Present' }
  ]
  mass = [
    { id: 2, itemName: 'Absent' },
    { id: 3, itemName: 'Present' }
  ]
  Congentialanomaly = [
    { id: 2, itemName: 'Azygous continuation of IVC to the left of SVC' },
    { id: 3, itemName: 'Azygous continuation of IVC to the right SVC' }
  ]
  PacewireVenousCatherter = [
    { id: 2, itemName: 'Pace wire' },
    { id: 3, itemName: 'Venous - Catherter' }
  ]

  updform: any = {

  }
  settings = {};
  // actRoute: any;
  obtype: any;
  // loginService: any;
  // router: any;
  constructor(private loginService: LoginserviceService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private actRoute: ActivatedRoute) {
    this.getPageData();

    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }; this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };

  }
  getPageData() {
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
    });

    this.loginService.observationsGetAllByPatientIdType().subscribe((observation: any) => {

      if (observation.observation != null) {
        this.updform = observation.observation.value;
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
  ivc=()=>{
    // document.getElementById("overlay").style.display = "block";
  
    const objectManagementReq = {
      "value": this.updform
     }
     this.loginService.observationsInsertion(objectManagementReq).subscribe(res =>{
   
      // document.getElementById("overlay").style.display = "none";
  
        if(res['message'] ==  'submitted successfully' ) {
        alert('Observation Inserted Successfully');
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
      } else if(res['message'] ==  ' updated successfully' ) {
        alert('Observation Updated Successfully');
        this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
      } 
       
   })
  }
  onOptionsSelected = (key, itemName) => {
    const formatedkey = key => key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
    const selectedKey = `select${key}`
    this.updform[selectedKey] = itemName
    console.log(this.updform)
  }
  getAddPage = (obtype) => {
    window.localStorage.setItem("obtype", obtype.toString());
    console.log(obtype)
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
    });


  }
}
