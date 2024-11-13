import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-add-bloodtest',
  templateUrl: './add-bloodtest.component.html',
  styleUrls: ['./add-bloodtest.component.scss']
})
export class AddBloodtestComponent implements OnInit {

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;

  bloodTestForm = this.formBuilder.group({
  patientId:new FormControl(''),
  haematology:new FormControl(''),
  hemoglobin:new FormControl(''),
  tlc:new FormControl(''),
  leucocyteCount:new FormControl(''),
  neutrophil:new FormControl(''),
  lymphocyte:new FormControl(''),
  Monocyte:new FormControl(''),
  Eosinophil:new FormControl(''),
  Basophil:new FormControl(''),
  pcv:new FormControl(''),
  rbc:new FormControl(''),
  plateletscount:new FormControl(''),
  mcv:new FormControl(''),
  mch:new FormControl(''),
  mchc:new FormControl(''),
  esr:new FormControl(''),
  biochemistry:new FormControl(''),
  Bilirubintotal:new FormControl(''),
  AlkalinePhosphatase:new FormControl(''),
  Directbilirubin:new FormControl(''),
  Indirectbilirubin :new FormControl(''),
  ggt :new FormControl(''),
  sgot:new FormControl(''),
  sgpt:new FormControl(''),
  Proteintotal :new FormControl(''),
  Albuminserum :new FormControl(''),
  SerumALBGlobulinratio:new FormControl(''),
  SerumGlobulin:new FormControl(''),
  //lipidprofile:new FormControl(''),
  TotalCholesterol:new FormControl(''),
  Triglyceride:new FormControl(''),
  hdl:new FormControl(''),
  hdlratio:new FormControl(''),
  tc:new FormControl(''),
  nonhdl:new FormControl(''),
  ldl:new FormControl(''),
  vldl:new FormControl(''),
  chol:new FormControl(''),
  Bloodurea:new FormControl(''),
  srCreatinine:new FormControl(''),
  uricacid:new FormControl(''),
  Bloodureanitrogen:new FormControl(''),
  bun:new FormControl(''),
  SrCalcium:new FormControl(''),
  bloodsugarrandom:new FormControl(''),
  hbalc:new FormControl(''),
  Estimatedaverage :new FormControl(''),
  psa:new FormControl(''),
  TotalTriiodothyronine:new FormControl(''),
  TotalThyroxine:new FormControl(''),
  tsh:new FormControl(''),
  Sodium:new FormControl(''),
  Potassium :new FormControl(''),
  Chlorides:new FormControl(''), 
  Iron :new FormControl(''), 
  tibc:new FormControl(''),
  TransferrinSaturation:new FormControl(''),
  B12level :new FormControl(''),
  oh:new FormControl(''),
  d2:new FormControl(''),
  d3:new FormControl(''),
  dtotal:new FormControl(''),
  egfr:new FormControl(''),
  cbc: new FormArray([]),
  electrolytes: new FormArray([]),
  throidpanel: new FormArray([]),
  renal: new FormArray([]),
  liver: new FormArray([]),
  lipid: new FormArray([]),
  vitamins: new FormArray([]),

})
addform={
  patientId:'',
  haematology:'',
  hemoglobin:'',
  tlc:'',
  leucocyteCount:'',
  neutrophil:'',
  lymphocyte:'',
  Monocyte:'',
  Eosinophil:'',
  Basophil:'',
  pcv:'',
  rbc:'',
  plateletscount:'',
  mcv:'',
  mch:'',
  mchc:'',
  esr:'',
  biochemistry:'',
  Bilirubintotal:'',
  AlkalinePhosphatase:'',
  Directbilirubin:'',
  Indirectbilirubin :'',
  ggt :'',
  sgot:'',
  sgpt:'',
  Proteintotal :'',
  Albuminserum :'',
  SerumALBGlobulinratio:'',
  SerumGlobulin:'',
 // lipidprofile:'',
  TotalCholesterol:'',
  Triglyceride:'',
  hdl:'',
  hdlratio:'',
  tc:'',
  nonhdl:'',
  ldl:'',
  vldl:'',
  chol:'',
  Bloodurea:'',
  srCreatinine:'',
  uricacid:'',
  Bloodureanitrogen:'',
  bun:'',
  SrCalcium:'',
  bloodsugarrandom:'',
  hbalc:'',
  Estimatedaverage :'',
  psa:'',
  TotalTriiodothyronine:'',
  TotalThyroxine:'',
  tsh:'',
  Sodium:'',
  Potassium :'',
  Chlorides:'', 
  Iron :'', 
  tibc:'',
  TransferrinSaturation:'',
  B12level :'',
  oh:'',
  d2:'',
  d3:'',
  dtotal:'',
  egfr:'',
  cbc:'',
      liverfunction:'',
      renalfunction:'',
      lipidprofile:'',
      electrolytes:'',
      vitamins:'',
      throidpanel:''
  // item:'',
  // name:''

}
  // goodFeedback: any;
  userForm: FormGroup;
  users: FormArray
  cbc: any;
  liver: any;
  renal: any;
  lipid: any;
  electrolytes: any;
vitamins:any;
throidpanel: any
  

constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient,private fb: FormBuilder,private changesDetector: ChangeDetectorRef) { }

  

  registerbloodTest = (data):any =>{
    console.log(data)
    const bloodtest1 ={
      patientId:data.patientId,
      haematology:data.haematology,
      hemoglobin:data.haematology,
      tlc:data.tlc,
      leucocyteCount:data.leucocyteCount,
      neutrophil:data.neutrophil,
      lymphocyte:data.lymphocyte,
      Monocyte:data.Monocyte,
      Eosinophil:data.Eosinophil,
      Basophil:data.Basophil,
      pcv:data.pcv,
      rbc:data.rbc,
      plateletscount:data.plateletscount,
      mcv:data.mcv,
      mch:data.mch,
      mchc:data.mchc,
      esr:data.esr,
      biochemistry:data.biochemistry,
      Bilirubintotal:data.Bilirubintotal,
      AlkalinePhosphatase:data.AlkalinePhosphatase,
      Directbilirubin:data.Directbilirubin,
      Indirectbilirubin :data.Indirectbilirubin,
      ggt :data.ggt,
      sgot:data.sgot,
      sgpt:data.sgpt,
      Proteintotal :data.Proteintotal,
      Albuminserum :data.Albuminserum,
      SerumALBGlobulinratio:data.SerumALBGlobulinratio,
      SerumGlobulin:data.SerumGlobulin,
     // lipidprofile:'',
      TotalCholesterol:data.TotalCholesterol,
      Triglyceride:data.Triglyceride,
      hdl:data.hdl,
      hdlratio:data.hdlratio,
      tc:data.tc,
      nonhdl:data.nonhdl,
      ldl:data.ldl,
      vldl:data.vldl,
      chol:data.chol,
      Bloodurea:data.Bloodurea,
      srCreatinine:data.srCreatinine,
      uricacid:data.uricacid,
      Bloodureanitrogen:data.Bloodureanitrogen,
      bun:data.bun,
      SrCalcium:data.SrCalcium,
      bloodsugarrandom:data.bloodsugarrandom,
      hbalc:data.hbalc,
      Estimatedaverage :data.Estimatedaverage,
      psa:data.psa,
      TotalTriiodothyronine:data.TotalTriiodothyronine,
      TotalThyroxine:data.TotalThyroxine,
      tsh:data.tsh,
      Sodium:data.Sodium,
      Potassium :data.Potassium,
      Chlorides:data.Chlorides, 
      Iron :data.Iron, 
      tibc:data.tibc,
      TransferrinSaturation:data.TransferrinSaturation,
      B12level :data.B12level,
      oh:data.oh,
      d2:data.d2,
      d3:data.d3,
      dtotal:data.dtotal,
      egfr:data.egfr,
      cbc:data.cbc,
      liver:data.liver,
      renal:data.renal,
      lipid:data.lipid,
      electrolytes:data.electrolytes,
      vitamins:data.vitamins,
      throidpanel:data.throidpanel

    }
    this.loginService.createBloodTest(bloodtest1).subscribe(res=>{
      if(res['status'] ==  '200') {            
        alert('Blood Test Added Successfully');
        this.router.navigate(['/previewbloodtest']);
      } 
    })
  
   
 
  }
 
ngOnInit(): void{

  this.loginService.getAllRegisteredPatient().subscribe(data =>{
    //console.log(data);
    this.AllPatientList = data['user'];
    this.AllDoctorsList = data['doctor'];
    this.AllClinicsList = data['clinic'];
   //console.log(this.AllPatientList)
  })

}
createUserForm(){
  return this.formBuilder .group({
  name: ''
  })
}
createElectrolytes(){
  return this.formBuilder .group({
  name: ''
  })
}
createliver(){
  return this.formBuilder .group({
    name: ''
    })
}
createrenal(){
  return this.formBuilder .group({
    name: ''
    })
}
createlipid(){
  return this.formBuilder .group({
    name: ''
    })
}
createthroidpanel(){
  return this.formBuilder .group({
    name: ''
    })
}
createvitamins(){
  return this.formBuilder .group({
    name: ''
    })
}

adduser(){
  this.cbc = this.bloodTestForm.get('cbc') as FormArray;
  this.cbc.push(this.createUserForm());
  
}
addliver(){
  this.liver = this.bloodTestForm.get('liver') as FormArray;
  this.liver.push(this.createliver());
  
}
addrenal(){
  this.renal = this.bloodTestForm.get('renal') as FormArray;
  this.renal.push(this.createrenal());
  
}
addlipid(){
  this.lipid = this.bloodTestForm.get('lipid') as FormArray;
  this.lipid.push(this.createlipid());
  
}
addthroidpanel(){
  this.throidpanel = this.bloodTestForm.get('throidpanel') as FormArray;
  this.throidpanel.push(this.createthroidpanel());
  
}
addelectrolytes(){
  
  this.electrolytes = this.bloodTestForm.get('electrolytes') as FormArray;
  this.electrolytes.push(this.createElectrolytes());
}
addvitamins(){
  this.vitamins = this.bloodTestForm.get('vitamins') as FormArray;
  this.vitamins.push(this.createvitamins());
  
}
removecbc(i: number) {
  this.cbc.removeAt(i);
}
removeliver(i: number) {
  this.liver.removeAt(i);
}
removerenal(i: number) {
  this.renal.removeAt(i);
}
removelipid(i: number) {
  this.lipid.removeAt(i);
}
removethroidpanel(i: number) {
  this.throidpanel.removeAt(i);
}
removeelectrolytes(i: number) {
  this.electrolytes.removeAt(i);
}
removevitamin(i: number) {
  this.vitamins.removeAt(i);
}
}