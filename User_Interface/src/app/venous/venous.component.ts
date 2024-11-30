import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-venous',
  templateUrl: './venous.component.html',
  styleUrls: ['./venous.component.scss']
})
export class VenousComponent implements OnInit {
  PulmonaryVein = [
    { id: 2, itemName: 'Left upper' },
    { id: 3, itemName: 'Left lower' },
    { id: 4, itemName: 'Right upper' },
    { id: 5, itemName: 'Right lower' },
    { id: 6, itemName: 'Left upper and left lower' },
    { id: 7, itemName: 'Right upper and right lower' },
    { id: 8, itemName: 'Left upper and right lower' },
    { id: 9, itemName: 'Right upper and left lower' },
    { id: 10, itemName: 'Three pulmonary veins' },
    { id: 11, itemName: 'Four pulmonary veins' }
  ]
  Size = [
    { id: 2, itemName: 'Normal' },
    { id: 3, itemName: 'Dilated' },
    { id: 4, itemName: 'Stenotic' }
  ]
  SizeLocation = [
    { id: 2, itemName: 'Left upper' },
    { id: 3, itemName: 'Left lower' },
    { id: 4, itemName: 'Right upper' },
    { id: 5, itemName: 'Right lower' },
    { id: 6, itemName: 'Left upper and left lower' },
    { id: 7, itemName: 'Right upper and right lower' },
    { id: 8, itemName: 'Left upper and right lower' },
    { id: 9, itemName: 'Right upper and left lower' },
    { id: 10, itemName: 'Three pulmonary veins' },
    { id: 11, itemName: 'Four pulmonary veins' }
  ]
  FlowpatternsDoppler = [
    { id: 2, itemName: 'Systolic blunting' },
    { id: 3, itemName: 'Systolic flow reversal' },
    { id: 4, itemName: 'Location of abnormal flow pattern' }
  ]
  Thrombus = [
    { id: 2, itemName: 'Absent' },
    { id: 3, itemName: 'Present' }
  ]
  Mass = [
    { id: 2, itemName: 'Absent' },
    { id: 3, itemName: 'Present' }
  ]
  MassLocation = [
    { id: 2, itemName: 'Left upper' },
    { id: 3, itemName: 'Left lower' },
    { id: 4, itemName: 'Right upper' },
    { id: 5, itemName: 'Right lower' },
    { id: 6, itemName: 'Left upper and left lower' },
    { id: 7, itemName: 'Right upper and right lower' },
    { id: 8, itemName: 'Left upper and right lower' },
    { id: 9, itemName: 'Right upper and left lower' },
    { id: 10, itemName: 'Three pulmonary veins' },
    { id: 11, itemName: 'Four pulmonary veins' }
  ]
  Congenitalanomalies = [
    { id: 2, itemName: 'Left partial anomalous pulmonary venous return' },
    { id: 3, itemName: 'Right partial anomalous pulmonary venous return' },
    { id: 4, itemName: 'Pulmonary venous hypoplasia' }
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
  venous = () => {
    document.getElementById("overlay").style.display = "block";

    const objectManagementReq = {
      "value": this.updform
    }
    this.loginService.observationsInsertion(objectManagementReq).subscribe(res => {

      document.getElementById("overlay").style.display = "none";

      if (res['message'] == 'submitted successfully') {
        alert('Observation Inserted Successfully');
        this.router.navigateByUrl(`/observations/` + localStorage.getItem('pid'));
      } else if (res['message'] == ' updated successfully') {
        alert('Observation Updated Successfully');
        this.router.navigateByUrl(`/observations/` + localStorage.getItem('pid'));
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
