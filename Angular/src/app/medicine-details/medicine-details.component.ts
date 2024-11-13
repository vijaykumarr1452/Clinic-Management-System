import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.scss']
})
export class MedicineDetailsComponent implements OnInit {
  addform = this.formBuilder.group({
    medicineName:new FormControl(''),
    morningnoOfTablets:new FormControl(''),
    morningInTake:new FormControl(''),
    morningMinutes:new FormControl(''),
    afternoonnoOfTablets:new FormControl(''),
    afternoonInTake:new FormControl(''),
    afternoonMinutes:new FormControl(''),
    eveningnoOfTablets:new FormControl(''),
    eveningInTake:new FormControl(''),
    eveningMinutes:new FormControl(''),
    dinnernoOfTablets:new FormControl(''),
    dinnerInTake:new FormControl(''),
    dinnerMinutes:new FormControl(''),
   
    // date: new FormArray([]),
    //  prescription : new FormArray([])
  })
  prescriptionValue: any;
  medicineListObjects1: any;
  prescriptionData: any;
  regimeListObject: any;
  patientDataObject: any;
  durationListObject: any;
  tabletListObject: any;
  medicineListObject: any;
  doselistObject: any;
  clinicDataObject: any;
  constructor(private loginService: LoginserviceService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private actRoute: ActivatedRoute) { }

  prescriptionDetails = (prescription): any => {
    console.log(this.addform)
    const id = localStorage.getItem('ppid')
    this.loginService.postPrescription(prescription,id).subscribe()
  }
  ngOnInit(): void {
    this.loginService.getPatientDataPrescription(localStorage.getItem("ppid")).subscribe(data => {
      console.log(data, localStorage);
      this.patientDataObject = data['patient'];
      this.regimeListObject = data['regimelist'];
      this.durationListObject = data['durationlist'];
      this.tabletListObject = data['tabletslist'];
      this.medicineListObject = data['medicinelist'];
      this.doselistObject = data['doselistObject']
      console.log(this.medicineListObject)

      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => {
        this.clinicDataObject = data['doctor'];
        console.log(this.clinicDataObject)
      })
    }, error => console.log(error));
  }

}
