import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-investigationreport',
  templateUrl: './edit-investigationreport.component.html',
  styleUrls: ['./edit-investigationreport.component.scss']
})
export class EditInvestigationreportComponent implements OnInit {

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;


  updateinvestigationReport = new FormGroup({
    hbcounts: new FormControl(''),
    tccounts: new FormControl(''),
    dccounts: new FormControl(''),
    esrcounts: new FormControl(''),
    bloodgroup: new FormControl(''),
    completeHaemogram: new FormControl(''),
    rbc: new FormControl(''),
    pcv: new FormControl(''),
    indices: new FormControl(''),
    peripheralSmearReport: new FormControl(''),
    srIron: new FormControl(''),
    tibc: new FormControl(''),
    plateletCount: new FormControl(''),
    hev: new FormControl(''),
    dengue: new FormControl(''),
    chickenGuinea: new FormControl(''),
    leptospira: new FormControl(''),
    tbig: new FormControl(''),
    qigm: new FormControl(''),
    pFal: new FormControl(''),
    pVivax: new FormControl(''),
    smp: new FormControl(''),
    cReactiveProtein: new FormControl(''),
    rheumatoidFactor: new FormControl(''),
    antiStreptolysinOTitre: new FormControl(''),
    vdrl: new FormControl(''),
    widalTest: new FormControl(''),
    pregancyCardTest: new FormControl(''),
    hiv1: new FormControl(''),
    hiv2: new FormControl(''),
    hbs: new FormControl(''),
    hcv: new FormControl(''),
    ppd: new FormControl(''),
    fbsl: new FormControl(''),
    rbsl: new FormControl(''),
    ppbsl: new FormControl(''),
    glycosylated: new FormControl(''),
    lipidProfile: new FormControl(''),
    srCholesterol: new FormControl(''),
    srTriglycerides: new FormControl(''),
    hdlCholestrol: new FormControl(''),
    srBillirubin: new FormControl(''),
    directBillirubin: new FormControl(''),
    indirectBillirubin: new FormControl(''),
    sgot: new FormControl(''),
    sgpt: new FormControl(''),
    totalProtein: new FormControl(''),
    albumin: new FormControl(''),
    globulin: new FormControl(''),
    alkalinePhosphate: new FormControl(''),
    amylase: new FormControl(''),
    ggtp: new FormControl(''),
    srProtein: new FormControl(''),
    ammonia: new FormControl(''),
    bleeding: new FormControl(''),
    clottingTime: new FormControl(''),
    prothrombinTime: new FormControl(''),
    inr: new FormControl(''),
    aptt: new FormControl(''),
    plateletCount1: new FormControl(''),
    fdp: new FormControl(''),
    cdDimer: new FormControl(''),
    ada: new FormControl(''),
    cpkTotal: new FormControl(''),
    ckMb: new FormControl(''),
    sgot1: new FormControl(''),
    ldh: new FormControl(''),
    troponinITest: new FormControl(''),
    bloodUrea: new FormControl(''),
    srCreatinine: new FormControl(''),
    srUricAcid: new FormControl(''),
    bun: new FormControl(''),   
    srSodium: new FormControl(''),
    srPotassium: new FormControl(''),
    srChloride: new FormControl(''),
    srCalcium: new FormControl(''),
    srPhosphorous: new FormControl(''),
    vitaminD3: new FormControl(''),
    vitaminB12: new FormControl(''),
    psa: new FormControl(''),
    abg: new FormControl(''),
    vbg: new FormControl(''),
    papSmear: new FormControl(''),
    fnac: new FormControl(''),
    freeT3: new FormControl(''),
    freeT4: new FormControl(''),
    freeTSH: new FormControl(''),
    ipth: new FormControl(''),
    compliment4: new FormControl(''),
    ana: new FormControl(''),
    anca: new FormControl(''),
    antiDsDna: new FormControl(''),
    dDimerTest: new FormControl(''),
    bloodCulture: new FormControl(''),
    urineRoutine: new FormControl(''),
    urineSugar: new FormControl(''),
    urineCulture: new FormControl(''),
    hoursUrineProteins: new FormControl(''),
    hoursUrineCreatine: new FormControl(''),
    spotUrineForPcRatio: new FormControl(''),
    StoolRoutine: new FormControl(''),
    stoolCulture: new FormControl(''),
    stoolForOccultBlood: new FormControl(''),
    stoolForReducingSubs: new FormControl(''),
    sputumForAFB: new FormControl(''),
    abdominalUltrasound: new FormControl(''),
    sonomammography: new FormControl(''),
    carotidDoppler: new FormControl(''),
    dopplerPeripheralArterial: new FormControl(''),
    dopplerPeripheralVenous: new FormControl(''),
    echocardigraphy: new FormControl(''),
    stressTest: new FormControl(''),
    ultrasound:new FormControl(''),
    xray: new FormControl(''),
    ctscan: new FormControl(''),
    mri: new FormControl(''),
    tmt: new FormControl(''),
    vision: new FormControl(''),
    renal: new FormControl(''),
    physiotherapy: new FormControl(''),
    feteldoppler: new FormControl(''),
    bonedensity: new FormControl(''),
    bodycomposition: new FormControl(''),
    surgery: new FormControl(''),
  });

  updform = {

    hbcounts:'',
    tccounts:'',
    dccounts:'',
    esrcounts:'',
    bloodgroup:'',
    completeHaemogram:'',
    rbc:'',
    pcv:'',
    indices:'',
    peripheralSmearReport:'',
    srIron:'',
    tibc:'',
    plateletCount:'',
    hev:'',
    dengue:'',
    chickenGuinea:'',
    leptospira:'',
    tbig:'',
    qigm:'',
    pFal:'',
    pVivax:'',
    smp:'',
    cReactiveProtein:'',
    rheumatoidFactor:'',
    antiStreptolysinOTitre:'',
    vdrl:'',
    widalTest:'',
    pregancyCardTest:'',
    hiv1:'',
    hiv2:'',
    hbs:'',
    hcv:'',
    ppd:'',
    fbsl:'',
    rbsl:'',
    ppbsl:'',
    glycosylated:'',
    lipidProfile:'',
    srCholesterol:'',
    srTriglycerides:'',
    hdlCholestrol:'',
    srBillirubin:'',
    directBillirubin:'',
    indirectBillirubin:'',
    sgot:'',
    sgpt:'',
    totalProtein:'',
    albumin:'',
    globulin:'',
    alkalinePhosphate:'',
    amylase:'',
    ggtp:'',
    srProtein:'',
    ammonia:'',
    bleeding:'',
    clottingTime:'',
    prothrombinTime:'',
    inr:'',
    aptt:'',
    plateletCount1:'',
    fdp:'',
    cdDimer:'',
    ada:'',
    cpkTotal:'',
    ckMb:'',
    sgot1:'',
    ldh:'',
    troponinITest:'',
    bloodUrea:'',
    srCreatinine:'',
    srUricAcid:'',
    bun:'',   
    srSodium:'',
    srPotassium:'',
    srChloride:'',
    srCalcium:'',
    srPhosphorous:'',
    vitaminD3:'',
    vitaminB12:'',
    psa:'',
    abg:'',
    vbg:'',
    papSmear:'',
    fnac:'',
    freeT3:'',
    freeT4:'',
    freeTSH:'',
    ipth:'',
    compliment4:'',
    ana:'',
    anca:'',
    antiDsDna:'',
    dDimerTest:'',
    bloodCulture:'',
    urineRoutine:'',
    urineSugar:'',
    urineCulture:'',
    hoursUrineProteins:'',
    hoursUrineCreatine:'',
    spotUrineForPcRatio:'',
    StoolRoutine:'',
    stoolCulture:'',
    stoolForOccultBlood:'',
    stoolForReducingSubs:'',
    sputumForAFB:'',
    abdominalUltrasound:'',
    sonomammography:'',
    carotidDoppler:'',
    dopplerPeripheralArterial:'',
    dopplerPeripheralVenous:'',
    echocardigraphy:'',
    stressTest:'',
    ultrasound:'',
    xray:'',
    ctscan:'',
    mri:'',
    tmt:'',
    vision:'',
    renal:'',
    physiotherapy:'',
    feteldoppler:'',
    bonedensity:'',
    bodycomposition:'',
    surgery:'',
  };

 constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }


  ngOnInit(): void {

    this.loginService.getEditinvestigationDetailData()
    .subscribe(investigationreport => {
      console.log(investigationreport);
      console.log('***********...............');
      this.updform = investigationreport['investigationreport'];

       // Set Values

     //this.updateinvestigationReport.get('patientId').setValue(this.updform.patientId)
     this.updateinvestigationReport.get('hbcounts').setValue(this.updform.hbcounts)
     this.updateinvestigationReport.get('tccounts').setValue(this.updform.tccounts)
     this.updateinvestigationReport.get('dccounts').setValue(this.updform.dccounts)
     this.updateinvestigationReport.get('esrcounts').setValue(this.updform.esrcounts)
     this.updateinvestigationReport.get('bloodgroup').setValue(this.updform.bloodgroup)
     this.updateinvestigationReport.get('rbc').setValue(this.updform.rbc)
     this.updateinvestigationReport.get('pcv').setValue(this.updform.pcv)
     this.updateinvestigationReport.get('indices').setValue(this.updform.indices)
     this.updateinvestigationReport.get('peripheralSmearReport').setValue(this.updform.peripheralSmearReport)
     this.updateinvestigationReport.get('srIron').setValue(this.updform.srIron)

     this.updateinvestigationReport.get('tibc').setValue(this.updform.tibc)
     this.updateinvestigationReport.get('plateletCount').setValue(this.updform.plateletCount)
     this.updateinvestigationReport.get('hev').setValue(this.updform.hev)
     this.updateinvestigationReport.get('dengue').setValue(this.updform.dengue)
     this.updateinvestigationReport.get('chickenGuinea').setValue(this.updform.chickenGuinea)
     this.updateinvestigationReport.get('leptospira').setValue(this.updform.leptospira)
     this.updateinvestigationReport.get('tbig').setValue(this.updform.tbig)
     this.updateinvestigationReport.get('qigm').setValue(this.updform.qigm)
     this.updateinvestigationReport.get('pFal').setValue(this.updform.pFal)
     this.updateinvestigationReport.get('pVivax').setValue(this.updform.pVivax)
     this.updateinvestigationReport.get('smp').setValue(this.updform.smp)
     this.updateinvestigationReport.get('cReactiveProtein').setValue(this.updform.cReactiveProtein)
     this.updateinvestigationReport.get('rheumatoidFactor').setValue(this.updform.rheumatoidFactor)
     this.updateinvestigationReport.get('antiStreptolysinOTitre').setValue(this.updform.antiStreptolysinOTitre)
     this.updateinvestigationReport.get('vdrl').setValue(this.updform.vdrl)
     this.updateinvestigationReport.get('widalTest').setValue(this.updform.widalTest)
     this.updateinvestigationReport.get('pregancyCardTest').setValue(this.updform.pregancyCardTest)
     this.updateinvestigationReport.get('hiv1').setValue(this.updform.hiv1)
     this.updateinvestigationReport.get('hiv2').setValue(this.updform.hiv2)
     this.updateinvestigationReport.get('hbs').setValue(this.updform.hbs)
     this.updateinvestigationReport.get('hcv').setValue(this.updform.hcv)
     this.updateinvestigationReport.get('ppd').setValue(this.updform.ppd)
     this.updateinvestigationReport.get('fbsl').setValue(this.updform.fbsl)
     this.updateinvestigationReport.get('rbsl').setValue(this.updform.rbsl)
     this.updateinvestigationReport.get('ppbsl').setValue(this.updform.ppbsl)
     this.updateinvestigationReport.get('glycosylated').setValue(this.updform.glycosylated)
     this.updateinvestigationReport.get('lipidProfile').setValue(this.updform.lipidProfile)
     this.updateinvestigationReport.get('srCholesterol').setValue(this.updform.srCholesterol)
     this.updateinvestigationReport.get('srTriglycerides').setValue(this.updform.srTriglycerides)
     this.updateinvestigationReport.get('hdlCholestrol').setValue(this.updform.hdlCholestrol)
     this.updateinvestigationReport.get('srBillirubin').setValue(this.updform.srBillirubin)
     this.updateinvestigationReport.get('directBillirubin').setValue(this.updform.directBillirubin)
     this.updateinvestigationReport.get('indirectBillirubin').setValue(this.updform.indirectBillirubin)
     this.updateinvestigationReport.get('sgot').setValue(this.updform.sgot)
     this.updateinvestigationReport.get('sgpt').setValue(this.updform.sgpt)
     this.updateinvestigationReport.get('totalProtein').setValue(this.updform.totalProtein)
     this.updateinvestigationReport.get('albumin').setValue(this.updform.albumin)
     this.updateinvestigationReport.get('globulin').setValue(this.updform.globulin)
     this.updateinvestigationReport.get('alkalinePhosphate').setValue(this.updform.alkalinePhosphate)
     this.updateinvestigationReport.get('amylase').setValue(this.updform.amylase)
     this.updateinvestigationReport.get('ggtp').setValue(this.updform.ggtp)
     this.updateinvestigationReport.get('srProtein').setValue(this.updform.srProtein)
     this.updateinvestigationReport.get('ammonia').setValue(this.updform.ammonia)
     this.updateinvestigationReport.get('bleeding').setValue(this.updform.bleeding)
     this.updateinvestigationReport.get('clottingTime').setValue(this.updform.clottingTime)
     this.updateinvestigationReport.get('prothrombinTime').setValue(this.updform.prothrombinTime)
     this.updateinvestigationReport.get('inr').setValue(this.updform.inr)
     this.updateinvestigationReport.get('aptt').setValue(this.updform.aptt)
     this.updateinvestigationReport.get('plateletCount1').setValue(this.updform.plateletCount1)
     this.updateinvestigationReport.get('fdp').setValue(this.updform.fdp)
     this.updateinvestigationReport.get('cdDimer').setValue(this.updform.cdDimer)
     this.updateinvestigationReport.get('ada').setValue(this.updform.ada)
     this.updateinvestigationReport.get('cpkTotal').setValue(this.updform.cpkTotal)
     this.updateinvestigationReport.get('ckMb').setValue(this.updform.ckMb)
     this.updateinvestigationReport.get('sgot1').setValue(this.updform.sgot1)
     this.updateinvestigationReport.get('ldh').setValue(this.updform.ldh)
     this.updateinvestigationReport.get('troponinITest').setValue(this.updform.troponinITest)
     this.updateinvestigationReport.get('bloodUrea').setValue(this.updform.bloodUrea)
     this.updateinvestigationReport.get('srCreatinine').setValue(this.updform.srCreatinine)
     this.updateinvestigationReport.get('srUricAcid').setValue(this.updform.srUricAcid)
     this.updateinvestigationReport.get('bun').setValue(this.updform.bun)
     this.updateinvestigationReport.get('srSodium').setValue(this.updform.srSodium)
     this.updateinvestigationReport.get('srPotassium').setValue(this.updform.srPotassium)
     this.updateinvestigationReport.get('srChloride').setValue(this.updform.srChloride)
     this.updateinvestigationReport.get('srCalcium').setValue(this.updform.srCalcium)
     this.updateinvestigationReport.get('srPhosphorous').setValue(this.updform.srPhosphorous)
     this.updateinvestigationReport.get('vitaminD3').setValue(this.updform.vitaminD3)
     this.updateinvestigationReport.get('vitaminB12').setValue(this.updform.vitaminB12)
     this.updateinvestigationReport.get('psa').setValue(this.updform.psa)
     this.updateinvestigationReport.get('abg').setValue(this.updform.abg)
     this.updateinvestigationReport.get('vbg').setValue(this.updform.vbg)
     this.updateinvestigationReport.get('papSmear').setValue(this.updform.papSmear)
     this.updateinvestigationReport.get('fnac').setValue(this.updform.fnac)
     this.updateinvestigationReport.get('freeT3').setValue(this.updform.freeT3)
     this.updateinvestigationReport.get('freeT4').setValue(this.updform.freeT4)
     this.updateinvestigationReport.get('freeTSH').setValue(this.updform.freeTSH)
     this.updateinvestigationReport.get('ipth').setValue(this.updform.ipth)
     this.updateinvestigationReport.get('compliment4').setValue(this.updform.compliment4)
     this.updateinvestigationReport.get('ana').setValue(this.updform.ana)
     this.updateinvestigationReport.get('anca').setValue(this.updform.anca)
     this.updateinvestigationReport.get('antiDsDna').setValue(this.updform.antiDsDna)
     this.updateinvestigationReport.get('dDimerTest').setValue(this.updform.dDimerTest)
     this.updateinvestigationReport.get('bloodCulture').setValue(this.updform.bloodCulture)
     this.updateinvestigationReport.get('urineRoutine').setValue(this.updform.urineRoutine)
     this.updateinvestigationReport.get('urineSugar').setValue(this.updform.urineSugar)
     this.updateinvestigationReport.get('urineCulture').setValue(this.updform.urineCulture)
     this.updateinvestigationReport.get('hoursUrineProteins').setValue(this.updform.hoursUrineProteins)
     this.updateinvestigationReport.get('hoursUrineCreatine').setValue(this.updform.hoursUrineCreatine)
     this.updateinvestigationReport.get('spotUrineForPcRatio').setValue(this.updform.spotUrineForPcRatio)
     this.updateinvestigationReport.get('StoolRoutine').setValue(this.updform.StoolRoutine)
     this.updateinvestigationReport.get('stoolCulture').setValue(this.updform.stoolCulture)     
     this.updateinvestigationReport.get('stoolForOccultBlood').setValue(this.updform.stoolForOccultBlood)
     this.updateinvestigationReport.get('stoolForReducingSubs').setValue(this.updform.stoolForReducingSubs)
     this.updateinvestigationReport.get('sputumForAFB').setValue(this.updform.sputumForAFB)
     this.updateinvestigationReport.get('abdominalUltrasound').setValue(this.updform.abdominalUltrasound)
     this.updateinvestigationReport.get('sonomammography').setValue(this.updform.sonomammography)
     this.updateinvestigationReport.get('carotidDoppler').setValue(this.updform.carotidDoppler)
     this.updateinvestigationReport.get('dopplerPeripheralArterial').setValue(this.updform.dopplerPeripheralArterial)
     this.updateinvestigationReport.get('dopplerPeripheralVenous').setValue(this.updform.dopplerPeripheralVenous)
     this.updateinvestigationReport.get('echocardigraphy').setValue(this.updform.echocardigraphy)
     this.updateinvestigationReport.get('stressTest').setValue(this.updform.stressTest)
     this.updateinvestigationReport.get('ultrasound').setValue(this.updform.ultrasound)
     this.updateinvestigationReport.get('xray').setValue(this.updform.xray)     
     this.updateinvestigationReport.get('ctscan').setValue(this.updform.ctscan)
     this.updateinvestigationReport.get('mri').setValue(this.updform.mri)
     this.updateinvestigationReport.get('tmt').setValue(this.updform.tmt)
     this.updateinvestigationReport.get('vision').setValue(this.updform.vision)
     this.updateinvestigationReport.get('renal').setValue(this.updform.renal)
     this.updateinvestigationReport.get('physiotherapy').setValue(this.updform.physiotherapy)
     this.updateinvestigationReport.get('feteldoppler').setValue(this.updform.feteldoppler)
     this.updateinvestigationReport.get('bonedensity').setValue(this.updform.bonedensity)
     this.updateinvestigationReport.get('bodycomposition').setValue(this.updform.bodycomposition)
     this.updateinvestigationReport.get('surgery').setValue(this.updform.surgery)

    }, error => console.log(error));
    
   
   


    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }



  updateinvestigationReportData = ():any => {
    console.log(this.updateinvestigationReport.value);
  
       this.loginService.updateinvestigationDetailData(this.updateinvestigationReport.value).subscribe(updateDoctor =>{
         alert('Investigation Form Details Updated Successfully');
         this.router.navigateByUrl('/previewinvestigationreport');
       })
      
    }
  

}
