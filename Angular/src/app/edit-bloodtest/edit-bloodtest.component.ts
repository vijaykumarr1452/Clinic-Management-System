import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-edit-bloodtest',
  templateUrl: './edit-bloodtest.component.html',
  styleUrls: ['./edit-bloodtest.component.scss']
})
export class EditBloodtestComponent implements OnInit {
  bloodTestForm = new FormGroup({
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
  updform={
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
      liver:'',
      renal:'',
      lipid:'',
      electrolytes:'',
      vitamins:'',
      throidpanel:''
  
  }
  cbcf={
    cbc:''
  }
  cbc: FormArray;
  liver: FormArray;
  renal: FormArray;
  lipid: FormArray;
  throidpanel: FormArray;
  electrolytes: FormArray;
  vitamins: FormArray;
  cbc1: any;
  liver1: any[];
  renal1: any[];
  lipid1: any[];
  throidpanel1: any[];
  electrolytes1: any[];
  vitamins1: any[];
    
  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }
  
  
    ngOnInit(): void {
    this.loginService.getOneBloodTest().subscribe(data=>{
this.updform = data['bloodtest'];
this.cbc1 = data['bloodtest']['cbc'],
this.liver1 = data['bloodtest']['liver']
this.lipid1 = data['bloodtest']['lipid']
this.renal1 = data['bloodtest']['renal']
this.throidpanel1 = data['bloodtest']['throidpanel']
this.electrolytes1 = data['bloodtest']['electrolytes']
this.vitamins1 = data['bloodtest']['vitamins']
////////////////////////////////
this.bloodTestForm.get('haematology').setValue(this.updform.haematology)
this.bloodTestForm.get('hemoglobin').setValue(this.updform.hemoglobin)
this.bloodTestForm.get('tlc').setValue(this.updform.tlc)
this.bloodTestForm.get('leucocyteCount').setValue(this.updform.leucocyteCount)
this.bloodTestForm.get('lymphocyte').setValue(this.updform.lymphocyte)
this.bloodTestForm.get('Monocyte').setValue(this.updform.Monocyte)
this.bloodTestForm.get('Eosinophil').setValue(this.updform.Eosinophil)
this.bloodTestForm.get('Basophil').setValue(this.updform.Basophil)
this.bloodTestForm.get('pcv').setValue(this.updform.pcv)
this.bloodTestForm.get('rbc').setValue(this.updform.rbc)
this.bloodTestForm.get('plateletscount').setValue(this.updform.plateletscount)
this.bloodTestForm.get('mcv').setValue(this.updform.mcv)
this.bloodTestForm.get('mch').setValue(this.updform.mch)
this.bloodTestForm.get('mchc').setValue(this.updform.mchc)
this.bloodTestForm.get('esr').setValue(this.updform.esr)
this.bloodTestForm.get('biochemistry').setValue(this.updform.biochemistry)
this.bloodTestForm.get('Bilirubintotal').setValue(this.updform.Bilirubintotal)
this.bloodTestForm.get('AlkalinePhosphatase').setValue(this.updform.AlkalinePhosphatase)
this.bloodTestForm.get('Directbilirubin').setValue(this.updform.Directbilirubin)
this.bloodTestForm.get('Indirectbilirubin').setValue(this.updform.Indirectbilirubin)
this.bloodTestForm.get('ggt').setValue(this.updform.ggt)
this.bloodTestForm.get('sgot').setValue(this.updform.sgot)
this.bloodTestForm.get('sgpt').setValue(this.updform.sgpt)
this.bloodTestForm.get('Proteintotal').setValue(this.updform.Proteintotal)
this.bloodTestForm.get('Albuminserum').setValue(this.updform.Albuminserum)
this.bloodTestForm.get('SerumALBGlobulinratio').setValue(this.updform.SerumALBGlobulinratio)
this.bloodTestForm.get('SerumGlobulin').setValue(this.updform.SerumGlobulin)
this.bloodTestForm.get('TotalCholesterol').setValue(this.updform.TotalCholesterol)
this.bloodTestForm.get('Triglyceride').setValue(this.updform.Triglyceride)
this.bloodTestForm.get('hdl').setValue(this.updform.hdl)
this.bloodTestForm.get('hdlratio').setValue(this.updform.hdlratio)
this.bloodTestForm.get('tc').setValue(this.updform.tc)
this.bloodTestForm.get('nonhdl').setValue(this.updform.nonhdl)
this.bloodTestForm.get('ldl').setValue(this.updform.ldl)
this.bloodTestForm.get('vldl').setValue(this.updform.vldl)
this.bloodTestForm.get('chol').setValue(this.updform.chol)
this.bloodTestForm.get('Bloodurea').setValue(this.updform.Bloodurea)
this.bloodTestForm.get('srCreatinine').setValue(this.updform.srCreatinine)
this.bloodTestForm.get('uricacid').setValue(this.updform.uricacid)
this.bloodTestForm.get('Bloodureanitrogen').setValue(this.updform.Bloodureanitrogen)
this.bloodTestForm.get('bun').setValue(this.updform.bun)
this.bloodTestForm.get('SrCalcium').setValue(this.updform.SrCalcium)
this.bloodTestForm.get('bloodsugarrandom').setValue(this.updform.bloodsugarrandom)
this.bloodTestForm.get('hbalc').setValue(this.updform.hbalc)
this.bloodTestForm.get('Estimatedaverage').setValue(this.updform.Estimatedaverage)
this.bloodTestForm.get('psa').setValue(this.updform.psa)
this.bloodTestForm.get('TotalTriiodothyronine').setValue(this.updform.TotalTriiodothyronine)
this.bloodTestForm.get('TotalThyroxine').setValue(this.updform.TotalThyroxine)
this.bloodTestForm.get('tsh').setValue(this.updform.tsh)
this.bloodTestForm.get('Sodium').setValue(this.updform.Sodium)
this.bloodTestForm.get('Potassium').setValue(this.updform.Potassium)
this.bloodTestForm.get('Chlorides').setValue(this.updform.Chlorides)
this.bloodTestForm.get('Iron').setValue(this.updform.Iron)
this.bloodTestForm.get('tibc').setValue(this.updform.tibc)
this.bloodTestForm.get('TransferrinSaturation').setValue(this.updform.TransferrinSaturation)
this.bloodTestForm.get('B12level').setValue(this.updform.B12level)
this.bloodTestForm.get('oh').setValue(this.updform.oh)
this.bloodTestForm.get('d2').setValue(this.updform.d2)
this.bloodTestForm.get('d3').setValue(this.updform.d3)
this.bloodTestForm.get('dtotal').setValue(this.updform.dtotal)
this.bloodTestForm.get('egfr').setValue(this.updform.egfr)
this.bloodTestForm.setControl('cbc', this.formBuilder.array((this.cbc1 || []).map((x) => this.formBuilder.group(x))))
this.bloodTestForm.setControl('liver', this.formBuilder.array((this.liver1 || []).map((x) => this.formBuilder.group(x))))
this.bloodTestForm.setControl('renal', this.formBuilder.array((this.renal1 || []).map((x) => this.formBuilder.group(x))));
this.bloodTestForm.setControl('lipid', this.formBuilder.array((this.lipid1 || []).map((x) => this.formBuilder.group(x))));
this.bloodTestForm.setControl('throidpanel', this.formBuilder.array((this.throidpanel1 || []).map((x) => this.formBuilder.group(x))));
this.bloodTestForm.setControl('electrolytes', this.formBuilder.array((this.electrolytes1 || []).map((x) => this.formBuilder.group(x))));
this.bloodTestForm.setControl('vitamins', this.formBuilder.array((this.vitamins1 || []).map((x) => this.formBuilder.group(x))));
}, error => console.log(error));

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
     
  deleteRow(index: number) {
    this.bloodTestForm.removeControl('cbc');
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
    updatebloodTest = (data):any =>{
      console.log(data)
    
      this.loginService.editBloodTest(this.bloodTestForm.value).subscribe(res=>{
        if(res['status'] ==  '200') {            
          alert('Blood Test Added Successfully');
          this.router.navigate(['/previewbloodtest']);
        } 
      })
    
      
    }
  
  

}
