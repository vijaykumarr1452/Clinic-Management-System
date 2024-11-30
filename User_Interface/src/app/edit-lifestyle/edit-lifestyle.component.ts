import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-lifestyle',
  templateUrl: './edit-lifestyle.component.html',
  styleUrls: ['./edit-lifestyle.component.scss']
})
export class EditLifestyleComponent implements OnInit {

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
  
  
  patientId;
  typelifestyle;
  smoking;
  tobaccochewing;
  alcoholconsumption;
  glassbeer;
  brandypegs;
  whiskypegs;
  localalcoholpegs;
  wineglasses;
  excercise;
  aerobicexercise;
  walking;
  yoga;
  cycling;
  cardiacexercises;
  otherexercises;
  smoker;
  physicalactivity;
  sleep;
  panchewing;
  regyoga;
  typecancer;
  chemotherapy;
  radiationtherapy;
  therapy;
  heartattack;
  bypasssurgery;
  angiography;
  angioplasty;
  valvesurgery;
  irregularpulse;
  heartmurmur;
  admissionheartproblem;
  eardischarge;
  earpain;
  vision;
  spectacles;
  chronickidneydisease;
  abnormalurinefindings;
  dialysis;
  difficultyinpassingurine;
  painwhilepassingurine;
  prostrate;
  hernia;
  scarsofoperation;
  enlargedliver;
  cirrhosisofliver;
  chronicliverdisease;
  cancerofliver;
  chronicalcoholicliverdisease;
  hepatitis;
  hepatitisc;
  sexuallytransmitteddisease;
  asthma;
  bronchitis;
  tuberculosis;
  pneumonia;
  emphysema;
  chronicobstructivepulmonarydisease;
  cough;
  shortnessofbreath;
  bloodinsputam;
  epilepsy;
  blackouts;
  paralysis;
  anxiety;
  depression;
  bloodinstool;
  goitre;
  hypothrodism;
  hyperthyrodism;
  thyroditis;
  allergies;
  malaria;
  filaria;
  kalaazar;
  swineflu;
  covid19;
  myopathy;
  rheumatism;
  arthrities;
  gout;
  osteoporosis;
  bonefractures;
  slippeddisc;
  physicaldeformity;
  congentialdeformity;
  handicap;
  spousehavingHIV;
  spousehavinghepatitisB;
  spousehavinghepatatisC;
  pregancy;
  postmenopause;
  hysterectomy;
  mamography;
  papsmear;
  uterusremoved;
  anyothergynaeproblem;
  nervous;
  jointandmusclepain;
  bodydeformity;
  
  
  
  lifeStyleForm = new FormGroup({
    patientId: new FormControl(''),
    typelifestyle: new FormControl(''),
    smoking: new FormControl(''),
    tobaccochewing: new FormControl(''),
    alcoholconsumption: new FormControl(''),
    glassbeer: new FormControl(''),
    brandypegs: new FormControl(''),
    whiskypegs: new FormControl(''),
    localalcoholpegs: new FormControl(''),
    wineglasses: new FormControl(''),
    excercise: new FormControl(''),
    aerobicexercise: new FormControl(''),
    walking: new FormControl(''),
    yoga: new FormControl(''),
    cycling: new FormControl(''),
    cardiacexercises: new FormControl(''),
    otherexercises: new FormControl(''),
    smoker: new FormControl(''),
    physicalactivity: new FormControl(''),
    sleep: new FormControl(''),
    panchewing: new FormControl(''),
    regyoga: new FormControl(''),
    typecancer: new FormControl(''),
    chemotherapy: new FormControl(''),
    radiationtherapy: new FormControl(''),
    therapy: new FormControl(''),
    heartattack: new FormControl(''),
    bypasssurgery: new FormControl(''),
    angiography: new FormControl(''),
    angioplasty: new FormControl(''),
    valvesurgery: new FormControl(''),
    irregularpulse: new FormControl(''),
    heartmurmur: new FormControl(''),
    admissionheartproblem: new FormControl(''),
    eardischarge: new FormControl(''),
    earpain: new FormControl(''),
    vision: new FormControl(''),
    spectacles: new FormControl(''),
    chronickidneydisease: new FormControl(''),
    abnormalurinefindings: new FormControl(''),
    dialysis: new FormControl(''),
    difficultyinpassingurine: new FormControl(''),
    painwhilepassingurine: new FormControl(''),
    prostrate: new FormControl(''),
    hernia: new FormControl(''),
    scarsofoperation: new FormControl(''),
    enlargedliver: new FormControl(''),
    cirrhosisofliver: new FormControl(''),
    chronicliverdisease: new FormControl(''),
    cancerofliver: new FormControl(''),
    chronicalcoholicliverdisease: new FormControl(''),
    hepatitis: new FormControl(''),
    hepatitisc: new FormControl(''),
    sexuallytransmitteddisease: new FormControl(''),
    asthma: new FormControl(''),
    bronchitis: new FormControl(''),
    tuberculosis: new FormControl(''),
    pneumonia: new FormControl(''),
    emphysema: new FormControl(''),
    chronicobstructivepulmonarydisease: new FormControl(''),
    cough: new FormControl(''),
    shortnessofbreath: new FormControl(''),
    bloodinsputam: new FormControl(''),
    epilepsy: new FormControl(''),
    blackouts: new FormControl(''),
    paralysis: new FormControl(''),
    anxiety: new FormControl(''),
    depression: new FormControl(''),
    bloodinstool: new FormControl(''),
    goitre: new FormControl(''),
    hypothrodism: new FormControl(''),
    hyperthyrodism: new FormControl(''),
    thyroditis: new FormControl(''),
    allergies: new FormControl(''),
    malaria: new FormControl(''),
    filaria: new FormControl(''),
    kalaazar: new FormControl(''),
    swineflu: new FormControl(''),
    covid19: new FormControl(''),
    myopathy: new FormControl(''),
    rheumatism: new FormControl(''),
    arthrities: new FormControl(''),
    gout: new FormControl(''),
    osteoporosis: new FormControl(''),
    bonefractures: new FormControl(''),
    slippeddisc: new FormControl(''),
    physicaldeformity: new FormControl(''),
    congentialdeformity: new FormControl(''),
    handicap: new FormControl(''),
    spousehavingHIV: new FormControl(''),
    spousehavinghepatitisB: new FormControl(''),
    spousehavinghepatatisC: new FormControl(''),
    pregancy: new FormControl(''),
    postmenopause: new FormControl(''),
    hysterectomy: new FormControl(''),
    mamography: new FormControl(''),
    papsmear: new FormControl(''),
    uterusremoved: new FormControl(''),
    anyothergynaeproblem: new FormControl(''),
    nervous: new FormControl(''),
    jointandmusclepain: new FormControl(''),
    bodydeformity: new FormControl(''),
  });

  
  updform = {
    patientId:'',
    typelifestyle:'',
    smoking:'',
    tobaccochewing:'',
    alcoholconsumption:'',
    glassbeer:'',
    brandypegs:'',
    whiskypegs:'',
    localalcoholpegs:'',
    wineglasses:'',
    excercise:'',
    aerobicexercise:'',
    walking:'',
    yoga:'',
    cycling:'',
    cardiacexercises:'',
    otherexercises:'',
    smoker:'',
    physicalactivity:'',
    sleep:'',
    panchewing:'',
    regyoga:'',
    typecancer:'',
    chemotherapy:'',
    radiationtherapy:'',
    therapy:'',
    heartattack:'',
    bypasssurgery:'',
    angiography:'',
    angioplasty:'',
    valvesurgery:'',
    irregularpulse:'',
    heartmurmur:'',
    admissionheartproblem:'',
    eardischarge:'',
    earpain:'',
    vision:'',
    spectacles:'',
    chronickidneydisease:'',
    abnormalurinefindings:'',
    dialysis:'',
    difficultyinpassingurine:'',
    painwhilepassingurine:'',
    prostrate:'',
    hernia:'',
    scarsofoperation:'',
    enlargedliver:'',
    cirrhosisofliver:'',
    chronicliverdisease:'',
    cancerofliver:'',
    chronicalcoholicliverdisease:'',
    hepatitis:'',
    hepatitisc:'',
    sexuallytransmitteddisease:'',
    asthma:'',
    bronchitis:'',
    tuberculosis:'',
    pneumonia:'',
    emphysema:'',
    chronicobstructivepulmonarydisease:'',
    cough:'',
    shortnessofbreath:'',
    bloodinsputam:'',
    epilepsy:'',
    blackouts:'',
    paralysis:'',
    anxiety:'',
    depression:'',
    bloodinstool:'',
    goitre:'',
    hypothrodism:'',
    hyperthyrodism:'',
    thyroditis:'',
    allergies:'',
    malaria:'',
    filaria:'',
    kalaazar:'',
    swineflu:'',
    covid19:'',
    myopathy:'',
    rheumatism:'',
    arthrities:'',
    gout:'',
    osteoporosis:'',
    bonefractures:'',
    slippeddisc:'',
    physicaldeformity:'',
    congentialdeformity:'',
    handicap:'',
    spousehavingHIV:'',
    spousehavinghepatitisB:'',
    spousehavinghepatatisC:'',
    pregancy:'',
    postmenopause:'',
    hysterectomy:'',
    mamography:'',
    papsmear:'',
    uterusremoved:'',
    anyothergynaeproblem:'',
    nervous:'',
    jointandmusclepain:'',
    bodydeformity:'',
    lifestyle:'',
  };


  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }


  ngOnInit(): void {

    this.loginService.getEditLifeStyleDetailData()
    .subscribe(data => {
      //console.log(data);
      //console.log('***********...............');
      this.updform = data['lifestyle'];

       // Set Values

     this.lifeStyleForm.get('patientId').setValue(this.updform.patientId)
     this.lifeStyleForm.get('typelifestyle').setValue(this.updform.typelifestyle)
     this.lifeStyleForm.get('smoking').setValue(this.updform.smoking)
     this.lifeStyleForm.get('tobaccochewing').setValue(this.updform.tobaccochewing)
     this.lifeStyleForm.get('alcoholconsumption').setValue(this.updform.alcoholconsumption)
     this.lifeStyleForm.get('glassbeer').setValue(this.updform.glassbeer)
     this.lifeStyleForm.get('brandypegs').setValue(this.updform.brandypegs)
     this.lifeStyleForm.get('whiskypegs').setValue(this.updform.whiskypegs)
     this.lifeStyleForm.get('localalcoholpegs').setValue(this.updform.localalcoholpegs)
     this.lifeStyleForm.get('wineglasses').setValue(this.updform.wineglasses)
     this.lifeStyleForm.get('excercise').setValue(this.updform.excercise)

     this.lifeStyleForm.get('aerobicexercise').setValue(this.updform.aerobicexercise)
     this.lifeStyleForm.get('walking').setValue(this.updform.walking)
     this.lifeStyleForm.get('yoga').setValue(this.updform.yoga)
     this.lifeStyleForm.get('cycling').setValue(this.updform.cycling)
     this.lifeStyleForm.get('cardiacexercises').setValue(this.updform.cardiacexercises)
     this.lifeStyleForm.get('otherexercises').setValue(this.updform.otherexercises)
     this.lifeStyleForm.get('smoker').setValue(this.updform.smoker)
     this.lifeStyleForm.get('physicalactivity').setValue(this.updform.physicalactivity)
     this.lifeStyleForm.get('sleep').setValue(this.updform.sleep)
     this.lifeStyleForm.get('panchewing').setValue(this.updform.panchewing)
     this.lifeStyleForm.get('regyoga').setValue(this.updform.regyoga)
     this.lifeStyleForm.get('typecancer').setValue(this.updform.typecancer)
     this.lifeStyleForm.get('chemotherapy').setValue(this.updform.chemotherapy)
     this.lifeStyleForm.get('radiationtherapy').setValue(this.updform.radiationtherapy)
     this.lifeStyleForm.get('therapy').setValue(this.updform.therapy)
     this.lifeStyleForm.get('heartattack').setValue(this.updform.heartattack)
     this.lifeStyleForm.get('bypasssurgery').setValue(this.updform.bypasssurgery)
     this.lifeStyleForm.get('angiography').setValue(this.updform.angiography)
     this.lifeStyleForm.get('angioplasty').setValue(this.updform.angioplasty)
     this.lifeStyleForm.get('valvesurgery').setValue(this.updform.valvesurgery)
     this.lifeStyleForm.get('irregularpulse').setValue(this.updform.irregularpulse)
     this.lifeStyleForm.get('heartmurmur').setValue(this.updform.heartmurmur)
     this.lifeStyleForm.get('admissionheartproblem').setValue(this.updform.admissionheartproblem)
     this.lifeStyleForm.get('eardischarge').setValue(this.updform.eardischarge)
     this.lifeStyleForm.get('earpain').setValue(this.updform.earpain)
     this.lifeStyleForm.get('vision').setValue(this.updform.vision)
     this.lifeStyleForm.get('spectacles').setValue(this.updform.spectacles)
     this.lifeStyleForm.get('chronickidneydisease').setValue(this.updform.chronickidneydisease)
     this.lifeStyleForm.get('abnormalurinefindings').setValue(this.updform.abnormalurinefindings)
     this.lifeStyleForm.get('dialysis').setValue(this.updform.dialysis)
     this.lifeStyleForm.get('difficultyinpassingurine').setValue(this.updform.difficultyinpassingurine)
     this.lifeStyleForm.get('painwhilepassingurine').setValue(this.updform.painwhilepassingurine)
     this.lifeStyleForm.get('prostrate').setValue(this.updform.prostrate)
     this.lifeStyleForm.get('hernia').setValue(this.updform.hernia)
     this.lifeStyleForm.get('scarsofoperation').setValue(this.updform.scarsofoperation)
     this.lifeStyleForm.get('enlargedliver').setValue(this.updform.enlargedliver)
     this.lifeStyleForm.get('cirrhosisofliver').setValue(this.updform.cirrhosisofliver)
     this.lifeStyleForm.get('chronicliverdisease').setValue(this.updform.chronicliverdisease)
     this.lifeStyleForm.get('cancerofliver').setValue(this.updform.cancerofliver)
     this.lifeStyleForm.get('chronicalcoholicliverdisease').setValue(this.updform.chronicalcoholicliverdisease)
     this.lifeStyleForm.get('hepatitis').setValue(this.updform.hepatitis)
     this.lifeStyleForm.get('hepatitisc').setValue(this.updform.hepatitisc)
     this.lifeStyleForm.get('sexuallytransmitteddisease').setValue(this.updform.sexuallytransmitteddisease)
     this.lifeStyleForm.get('asthma').setValue(this.updform.asthma)
     this.lifeStyleForm.get('bronchitis').setValue(this.updform.bronchitis)
     this.lifeStyleForm.get('tuberculosis').setValue(this.updform.tuberculosis)
     this.lifeStyleForm.get('pneumonia').setValue(this.updform.pneumonia)
     this.lifeStyleForm.get('emphysema').setValue(this.updform.emphysema)
     this.lifeStyleForm.get('chronicobstructivepulmonarydisease').setValue(this.updform.chronicobstructivepulmonarydisease)
     this.lifeStyleForm.get('cough').setValue(this.updform.cough)
     this.lifeStyleForm.get('shortnessofbreath').setValue(this.updform.shortnessofbreath)
     this.lifeStyleForm.get('bloodinsputam').setValue(this.updform.bloodinsputam)
     this.lifeStyleForm.get('epilepsy').setValue(this.updform.epilepsy)
     this.lifeStyleForm.get('blackouts').setValue(this.updform.blackouts)
     this.lifeStyleForm.get('paralysis').setValue(this.updform.paralysis)
     this.lifeStyleForm.get('anxiety').setValue(this.updform.anxiety)
     this.lifeStyleForm.get('depression').setValue(this.updform.depression)
     this.lifeStyleForm.get('bloodinstool').setValue(this.updform.bloodinstool)
     this.lifeStyleForm.get('goitre').setValue(this.updform.goitre)
     this.lifeStyleForm.get('hypothrodism').setValue(this.updform.hypothrodism)
     this.lifeStyleForm.get('hyperthyrodism').setValue(this.updform.hyperthyrodism)
     this.lifeStyleForm.get('thyroditis').setValue(this.updform.thyroditis)
     this.lifeStyleForm.get('allergies').setValue(this.updform.allergies)
     this.lifeStyleForm.get('malaria').setValue(this.updform.malaria)
     this.lifeStyleForm.get('filaria').setValue(this.updform.filaria)
     this.lifeStyleForm.get('kalaazar').setValue(this.updform.kalaazar)
     this.lifeStyleForm.get('swineflu').setValue(this.updform.swineflu)
     this.lifeStyleForm.get('covid19').setValue(this.updform.covid19)
     this.lifeStyleForm.get('myopathy').setValue(this.updform.myopathy)
     this.lifeStyleForm.get('rheumatism').setValue(this.updform.rheumatism)
     this.lifeStyleForm.get('arthrities').setValue(this.updform.arthrities)
     this.lifeStyleForm.get('gout').setValue(this.updform.gout)
     this.lifeStyleForm.get('osteoporosis').setValue(this.updform.osteoporosis)
     this.lifeStyleForm.get('bonefractures').setValue(this.updform.bonefractures)
     this.lifeStyleForm.get('slippeddisc').setValue(this.updform.slippeddisc)
     this.lifeStyleForm.get('physicaldeformity').setValue(this.updform.physicaldeformity)
     this.lifeStyleForm.get('congentialdeformity').setValue(this.updform.congentialdeformity)
     this.lifeStyleForm.get('handicap').setValue(this.updform.handicap)
     this.lifeStyleForm.get('spousehavingHIV').setValue(this.updform.spousehavingHIV)
     this.lifeStyleForm.get('spousehavinghepatitisB').setValue(this.updform.spousehavinghepatitisB)
     this.lifeStyleForm.get('spousehavinghepatatisC').setValue(this.updform.spousehavinghepatatisC)
     this.lifeStyleForm.get('pregancy').setValue(this.updform.pregancy)
     this.lifeStyleForm.get('postmenopause').setValue(this.updform.postmenopause)
     this.lifeStyleForm.get('hysterectomy').setValue(this.updform.hysterectomy)
     this.lifeStyleForm.get('mamography').setValue(this.updform.mamography)
     this.lifeStyleForm.get('papsmear').setValue(this.updform.papsmear)
     this.lifeStyleForm.get('uterusremoved').setValue(this.updform.uterusremoved)
     this.lifeStyleForm.get('anyothergynaeproblem').setValue(this.updform.anyothergynaeproblem)
     this.lifeStyleForm.get('nervous').setValue(this.updform.nervous)
     this.lifeStyleForm.get('jointandmusclepain').setValue(this.updform.jointandmusclepain)
     this.lifeStyleForm.get('bodydeformity').setValue(this.updform.bodydeformity)
     

    }, error => console.log(error));
    
   
   


    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }

  

updateFamilydetails = ():any => {
  console.log(this.lifeStyleForm.value);

     this.loginService.updateLifeStyleDetailData(this.lifeStyleForm.value).subscribe(updateDoctor =>{
       alert('Life Style Details Updated Successfully');
       this.router.navigateByUrl('/previewalllifestyle');
     })
    
  }

}
