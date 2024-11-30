import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ReactiveFormConfig, RxReactiveFormsModule, RxwebValidators } from '@rxweb/reactive-form-validators';
import { ForceclosureComponent } from '../forceclosure/forceclosure.component';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-vieweditpatientdetails',
  templateUrl: './vieweditpatientdetails.component.html',
  styleUrls: ['./vieweditpatientdetails.component.scss']
})
export class VieweditpatientdetailsComponent implements OnInit {

  isLogin = localStorage.getItem('token') ? true : false;
  id = localStorage.getItem('id')
  role = localStorage.getItem('role')
  name = localStorage.getItem('name')

  // age;
  // bsa :number;
  // bmi : number;
  // height:number;
  // weight:number;
  // ht:any;
  // wt:any;

  ///////////////////////////////////
  statuss = ['Open', 'Closed'];
  requirements = ['Very Urgent', 'With in a Day', 'Routine'];
  protocols = ['Transthoracic', 'Ultra Sound'];
  ews = [
    {
      label: 'Car BMW',
      value: 1
    },
    {
      label: 'Car Audi',
      value: 2
    },
    {
      label: 'Car VW',
      value: 3
    }
  ];

  echo = ['Echo']
  addform = {
    requirement: '',
    reportbase: '',
    patientname: '',
    gender: '',
    age: '',
    height: null,
    weight: '',
    dob: '',
    caseId: '',
    window: '',
    testtype: '',
    testdate: '',
    updatedate: '',
    examinedate: '',
    reportnew: '',
    reportdate: '',
    supplimentaryreport: '',
    supplimentarytdate: '',
    status: '',
    //status:this.statuss[0],
    propreport: '',
    submitdate: '',
    clinicId: '',
    bsa: '0.00',
    bmi: '0.00',
    bp: '',
    bpsystolic: '',
    bpdiastolic: '',
    reason: '',
    sendreport: '',
    diagnostic: '',
    ef: '',
    protocol: '',
    bmitype: '',
    ew: 'Good',
    echoid: '',
    tapse: '',
    mapse: '',
    reasonlist: '',
    mobileno:'',
    docId:'',
    reasonForEcho:'',
    referenceDoctor:''
  };
  country1 = 'Good';
  viewpatientForm = new FormGroup({
    requirement: new FormControl(null),
    reportbase: new FormControl(null),
    patientname: new FormControl(null),
    gender: new FormControl(null),
    age: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    dob: new FormControl(null),
    caseId: new FormControl(null),
    window: new FormControl(null),
    testtype: new FormControl(null),
    testdate: new FormControl(null),
    updatedate: new FormControl(null),
    examinedate: new FormControl(null),
    reportnew: new FormControl(null),
    reportdate: new FormControl(null),
    supplimentaryreport: new FormControl(null),
    supplimentarytdate: new FormControl(null),
    status: new FormControl(null),
    //status:this.statuss[0],
    propreport: new FormControl(null),
    submitdate: new FormControl(null),
    clinicId: new FormControl(null),
    bsa: new FormControl(null),
    bmi: new FormControl(null),
    bp: new FormControl(null),
    bpsystolic: new FormControl('',[ RxwebValidators.greaterThan({fieldName:'bpdiastolic' })]),
    bpdiastolic: new FormControl(null),
    reason: new FormControl(null),
    sendreport: new FormControl(null),
    diagnostic: new FormControl(null),
    ef: new FormControl(null),
    protocol: new FormControl(null),
    bmitype: new FormControl(null),
    ew: new FormControl(this.country1),
    echoid: new FormControl(null),
    tapse: new FormControl(null),
    mapse: new FormControl(null),
    reasonlist: new FormControl(null),
    mobileno: new FormControl(null),
    docId: new FormControl(null),
    reasonForEcho:new FormControl(null),
    referenceDoctor:new FormControl(null),
  })
  patientDataObject = this.formBuilder.group({
    requirement: new FormControl(null),
    docId: new FormControl(null),
    reportbase: new FormControl(null),
    patientname: new FormControl(null),
    mobileno: new FormControl(null),
    gender: new FormControl(null),
    age: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    dob: new FormControl(null),
    caseId: new FormControl(null),
    window: new FormControl(null),
    testtype: new FormControl(null),
    testdate: new FormControl(null),
    updatedate: new FormControl(null),
    examinedate: new FormControl(null),
    reportnew: new FormControl(null),
    reportdate: new FormControl(null),
    supplimentaryreport: new FormControl(null),
    supplimentarytdate: new FormControl(null),
    status: new FormControl(null),
    //status:this.statuss[0],
    propreport: new FormControl(null),
    submitdate: new FormControl(null),
    clinicId: new FormControl(null),
    bsa: new FormControl('0.00'),
    bmi: new FormControl('0.00'),
    bp: new FormControl(null),
    bpsystolic: new FormControl(null),
    bpdiastolic: new FormControl(null),
    reason: new FormControl(null),
    sendreport: new FormControl(null),
    diagnostic: new FormControl(null),
    ef: new FormControl(null),
    protocol: new FormControl(null),
    bmitype: new FormControl(null),
    ew: new FormControl(null),
    echoid: new FormControl(null),
    tapse: new FormControl(null),
    mapse: new FormControl(null),
    reasonlist: new FormControl(null),
    reasonForEcho:new FormControl(null),
    referenceDoctor:new FormControl(null),

  })
  updform = {
    ew: 'Good',
    protocol: 'Transthoracic',
    testtype: 'Echo',
    requirement: 'Very Urgent',
    status: 'Open',
    pulmonaryarterypressure: ' ',
    avgsystolicstrain: ' '
  }
  ClinicDoctors;
  DoctorData;
  allreasonlist;
  selectedOption: any;
  options: any;
  referenceDoctor: any;
  reasonForEcho: any;
  settings = {};
  servicessettings= {};
  branchsettings={}; ///////////////////////////////////
  referenceDoctor1: any;
  clinicObservation: any;

  constructor(private loginService: LoginserviceService, private router: Router, private formBuilder: FormBuilder) {
    console.log(localStorage)

  }

  // viewpatientForm: FormGroup;

  onItemSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
   
  }
  OnItemDeSelect(item: any) {
   // console.log(item);
   // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
   //console.log(items);
  }
  onDeSelectAll(items: any) {
   //console.log(items);
  }
  
  ngOnInit(): void {
    this.viewpatientForm.get('bsa').setValue('0.00')
    this.viewpatientForm.get('bmi').setValue('0.00')
    const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
      console.log(fg.get('bpsystolic').value)

      const start = fg.get('bpsystolic').value;
      const end = fg.get('bpdiastolic').value;
      return start !== null && end !== null && start < end
        ? null
        : { range: true };
    };
    ReactiveFormConfig.set({ "validationMessage": { "greaterThan": "Please enter valid number" } });


    console.log(this.viewpatientForm.controls)
    this.settings = {
      text: "Select Speciality",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
  };

  this.servicessettings = {
    text: "Select Services",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass custom-class"
};

this.branchsettings = {
  text: "Select Branchs",
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  classes: "myclass custom-class"
};
    this.loginService.getPatientData(localStorage.getItem("pid")).subscribe((data: any) => {
      console.log(data);

      const { doctor, allreasonlist,clinicObservation ,referenceDoctor ,reasonForEcho } = data;


      this.clinicObservation = data['clinicObservation'];
      this.referenceDoctor1 = data['referenceDoctor'];
      this.reasonForEcho = data['reasonForEcho'];
      this.addform = data['doctor']
      console.log(this.addform)
      console.log(this.patientDataObject['age'])
      this.viewpatientForm.get('ew').setValue('Good');
      this.viewpatientForm.get('requirement').setValue('Very Urgent')
      this.viewpatientForm.get('testtype').setValue('ECHO')
      this.viewpatientForm.get('protocol').setValue('Transthoracic')
      // this.viewpatientForm.get('requirement').setValue('Very Urgent')
      this.viewpatientForm.get('patientname').setValue(this.addform.patientname)
      this.viewpatientForm.get('dob').setValue(this.addform.dob)
this.viewpatientForm.get('age').setValue(this.addform.age)
this.viewpatientForm.get('height').setValue(this.addform.height)
this.viewpatientForm.get('weight').setValue(this.addform.weight)
this.viewpatientForm.get('caseId').setValue(this.addform.caseId)
this.viewpatientForm.get('window').setValue(this.addform.window)
this.viewpatientForm.get('testdate').setValue(this.addform.testdate)
 this.viewpatientForm.get("updatedate").setValue(this.addform.updatedate)
 this.viewpatientForm.get('examinedate').setValue(this.addform.examinedate)
 this.viewpatientForm.get('reportdate').setValue(this.addform.reportdate)
this.viewpatientForm.get('reportnew').setValue(this.addform.reportnew)
this.viewpatientForm.get('supplimentaryreport').setValue(this.addform.supplimentaryreport)
this.viewpatientForm.get('supplimentarytdate').setValue(this.addform.supplimentarytdate) 
this.viewpatientForm.get('status').setValue(this.addform.status)
this.viewpatientForm.get('gender').setValue(this.addform.gender)
// this.viewpatientForm.get('ew').setValue(this.addform.ew);
//       this.viewpatientForm.get('requirement').setValue(this.addform.requirement)
//       this.viewpatientForm.get('testtype').setValue(this.addform.testtype)
//       this.viewpatientForm.get('protocol').setValue(this.addform.protocol)
      this.viewpatientForm.get('propreport').setValue(this.addform.propreport)
      this.viewpatientForm.get('submitdate').setValue(this.addform.submitdate)
      this.viewpatientForm.get('clinicId').setValue(this.addform.clinicId)
      if(this.addform.bsa != null && this.addform.bmi != null){
      this.viewpatientForm.get('bsa').setValue(this.addform.bsa)
      this.viewpatientForm.get('bmi').setValue(this.addform.bmi)
      }
      this.viewpatientForm.get('bpsystolic').setValue(this.addform.bpsystolic)
      this.viewpatientForm.get('bpdiastolic').setValue(this.addform.bpdiastolic)
      this.viewpatientForm.get('reason').setValue(this.addform.reason)
      this.viewpatientForm.get('sendreport').setValue(this.addform.sendreport)
      this.viewpatientForm.get('diagnostic').setValue(this.addform.diagnostic)
      this.viewpatientForm.get('ef').setValue(this.addform.ef)
      // this.viewpatientForm.get('protocol').setValue(this.addform.protocol)
      this.viewpatientForm.get('bmitype').setValue(this.addform.bmitype)
      // this.viewpatientForm.get('ew').setValue(this.addform.ew)
      this.viewpatientForm.get('echoid').setValue(this.addform.echoid)
      this.viewpatientForm.get('tapse').setValue(this.addform.tapse)
      this.viewpatientForm.get('mapse').setValue(this.addform.mapse)
      this.viewpatientForm.get('reason').setValue(this.addform.reasonlist)
      this.viewpatientForm.get('mobileno').setValue(this.addform.mobileno)
      this.viewpatientForm.get('docId').setValue(this.addform.docId)
      this.viewpatientForm.get('reason').setValue(this.addform.reason)
      this.viewpatientForm.get('referenceDoctor').setValue(this.addform.referenceDoctor)

      this.viewpatientForm.get('reasonForEcho').setValue(this.addform.reasonForEcho)
      // this.viewpatientForm.get('requirement').setValue('Very Urgent')
      console.log(this.viewpatientForm)
    }, error => console.log(error));

    this.loginService.getAllClinicDoctorList().subscribe(clinicdata => {
      this.ClinicDoctors = clinicdata['user']
    }, error => console.log(error));

  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  form() {
    this.viewpatientForm = this.formBuilder.group({
      bpsystolic: ['bpsystolic', [Validators.required, Validators.minLength(2)]],
      bpdiastolic: ['bpdiastolic'],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(g: FormGroup) {
    return g.get('bpsystolic').value > g.get('bpdiastolic').value
      ? null : { 'mismatch': true };
  }
  calculateAge(birthday) {

    //convert date again to type Date
    console.log(birthday)
    const bdate = new Date(this.viewpatientForm.get('dob').value);
    //console.log(bdate);
    const timeDiff = Math.abs(Date.now() - bdate.getTime());
    this.patientDataObject['age'] = this.getAge(this.viewpatientForm.get('dob').value);


    this.viewpatientForm.get('age').setValue(this.patientDataObject['age'])
  }

  getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
      years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
      if (DOB.getDate() > today.getDate())
        years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
      months = (totalMonths % 12);
      if (months == 0)
        months = 11;
      var x = today.getMonth();
      switch (x) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
          var a = DOB.getDate() - today.getDate();
          days = 31 - a;
          break;
        }
        default: {
          var a = DOB.getDate() - today.getDate();
          days = 30 - a;
          break;
        }
      }

    }
    else {
      days = today.getDate() - DOB.getDate();
      if (DOB.getMonth() === today.getMonth())
        months = (totalMonths % 12);
      else
        months = (totalMonths % 12) + 1;
    }
    var age = years + ' years ' + months + ' months ' + days + ' days';
    return age;
  }

  calculateBsa(bsa) {

    const ht = this.viewpatientForm.get('height').value;
    const wt = this.viewpatientForm.get('weight').value;

    this.patientDataObject['bsa'] = Math.pow((ht) * wt / 3600, 0.5).toFixed(3);
    this.patientDataObject['bmi'] = ((wt / Math.pow(ht, 2)) * 10000).toFixed(3)
      ;
    this.viewpatientForm.get('bsa').setValue(this.patientDataObject['bsa'])
    this.viewpatientForm.get('bmi').setValue(this.patientDataObject['bmi'])
  }

  updatePatient = (): any => {
    //console.log('****************');
    // console.log(JSON.parse(this.viewpatientForm.value));
    this.loginService.updPatientDoc((this.viewpatientForm.value)).subscribe(res => {
      console.log(res)
      if (res['description'] === 'patient Details updated') {
        // window.location.reload();
        alert('Patient Details Updated Successfully');

      }
    })

  }
  updatePatient1 = (): any => {
    //console.log('****************');
    // console.log(JSON.parse(this.viewpatientForm.value));
    this.loginService.updPatientDoc((this.viewpatientForm.value)).subscribe(res => {
      console.log(res)
      if (res['description'] === 'patient Details updated') {
        // window.location.reload();
        alert('Patient Details Updated Successfully');
         this.router.navigateByUrl('/clinicdashboard')
        // $('#tabone').trigger('click')
      }
    })

  }
  submit = (): any => {
    //console.log('****************');
    //console.log(this.patientDataObject);
    this.loginService.updPatientDoc(this.patientDataObject).subscribe(res => {
console.log(res)
      if (res['description'] === 'patient Details updated') {
        // window.location.reload();
        alert('Patient Details Updated Successfully');
        // this.router.navigateByUrl('/clinicdashboard')
        $('#tabone').trigger('click')
      }
    })

  }
  goToSendDetails = (): any => {
    this.loginService.updatePatientDoc((this.viewpatientForm.value)).subscribe(res => {
      if (res['message'] === 'patient updated successfully') {
        alert('Report Sent Successfully');
      }
    })
    // if(this.patientDataObject.sendreport === null || this.patientDataObject.sendreport === 'undefined' ){
    //   alert('Please Select One of them to sent the Report');
    //   return false;
    //  }

    // if(this.patientDataObject.sendreport === 'sms'){
    //   this.loginService.updatePatientDoc(this.patientDataObject).subscribe(res =>{

    //     if(res['message'] ===  'patient updated successfully' ) {
    //      alert('Sms Sent Successfully');
    //     }         
    //    })


    // }else if(this.patientDataObject.sendreport === 'email'){

    //   this.loginService.updatePatientDoc(this.patientDataObject).subscribe(res =>{

    //     if(res['message'] ===  'patient updated successfully' ) {

    //       alert('Email Sent Successfully');
    //     }         
    //    })

    //   }


  }





}
