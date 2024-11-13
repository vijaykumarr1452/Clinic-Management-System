import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-lifestyle',
  templateUrl: './add-lifestyle.component.html',
  styleUrls: ['./add-lifestyle.component.scss']
})
export class AddLifestyleComponent implements OnInit {

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

  AllPatientList: Object;  
  AllDoctorsList:Object;
  AllClinicsList:Object;
  ///////////////////////////////////

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
    //glassbeer: new FormControl(''),
  });

  

  addform = {
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
  };


  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  lifestyle: FormGroup;


  ngOnInit(): void {

    
    

    this.loginService.getAllRegisteredPatient().subscribe(data =>{
      //console.log(data);
      this.AllPatientList = data['user'];
      this.AllDoctorsList = data['doctor'];
      this.AllClinicsList = data['clinic'];
     //console.log(this.AllPatientList)
    })

  }

  

/*****************************/
registerLifeStyle = (data):any => {

      const lifestyle1 = {
        "patientId": data.patientId,
        "typelifestyle": data.typelifestyle,
        "smoking":data.smoking,
        "tobaccochewing": data.tobaccochewing,
        "alcoholconsumption": data.alcoholconsumption,
        "glassbeer": data.glassbeer,
        "brandypegs": data.brandypegs,
        "whiskypegs": data.whiskypegs,
        "localalcoholpegs": data.localalcoholpegs,
        "wineglasses": data.wineglasses,
        "excercise":data.excercise,
        "aerobicexercise": data.aerobicexercise,
        "walking": data.walking,
        "yoga": data.yoga,
        "cycling": data.cycling,
        "cardiacexercises": data.cardiacexercises,
        "otherexercises": data.otherexercises,
        "smoker": data.smoker,
        "physicalactivity":data.physicalactivity,
        "sleep": data.sleep,
        "panchewing": data.panchewing,
        "regyoga": data.regyoga,
        "typecancer": data.typecancer,
        "chemotherapy": data.chemotherapy,
        "radiationtherapy": data.radiationtherapy,
        "therapy": data.therapy,
        "heartattack":data.heartattack,
        "bypasssurgery": data.bypasssurgery,
        "angiography": data.angiography,
        "angioplasty": data.angioplasty,
        "valvesurgery": data.valvesurgery,
        "irregularpulse": data.irregularpulse,
        "heartmurmur": data.heartmurmur,
        "admissionheartproblem": data.admissionheartproblem,
        "eardischarge":data.eardischarge,
        "earpain": data.earpain,
        "vision": data.vision,
        "spectacles": data.spectacles,
        "chronickidneydisease": data.chronickidneydisease,
        "abnormalurinefindings": data.abnormalurinefindings,
        "dialysis": data.dialysis,
        "difficultyinpassingurine": data.difficultyinpassingurine,
        "painwhilepassingurine":data.painwhilepassingurine,
        "prostrate": data.prostrate,
        "hernia": data.hernia,
        "scarsofoperation": data.scarsofoperation,
        "enlargedliver": data.enlargedliver,
        "cirrhosisofliver": data.cirrhosisofliver,
     
        "chronicliverdisease": data.chronicliverdisease,
        "cancerofliver": data.cancerofliver,
        "chronicalcoholicliverdisease": data.chronicalcoholicliverdisease,
        "hepatitis": data.hepatitis,
        "hepatitisc": data.hepatitisc,
        "sexuallytransmitteddisease": data.sexuallytransmitteddisease,
        "asthma": data.asthma,
        "bronchitis": data.bronchitis,
        "tuberculosis": data.tuberculosis,
        "pneumonia": data.pneumonia,
        "dialemphysemaysis": data.emphysema,
        "chronicobstructivepulmonarydisease": data.chronicobstructivepulmonarydisease,
        "cough": data.cough,
        "shortnessofbreath": data.shortnessofbreath,
        "bloodinsputam": data.bloodinsputam,
        "epilepsy": data.epilepsy,
        "blackouts": data.blackouts,
        "paralysis": data.paralysis,
        "anxiety": data.anxiety,
        "depression": data.depression,
        "bloodinstool": data.bloodinstool,
        "goitre": data.goitre,
        "hypothrodism": data.hypothrodism,
        "hyperthyrodism": data.hyperthyrodism,
        "thyroditis": data.thyroditis,
        "allergies": data.allergies,
        "malaria": data.malaria,
        "filaria": data.filaria,
        "kalaazar": data.kalaazar,
        "swineflu": data.swineflu,
        "covid19": data.covid19,
        "myopathy": data.myopathy,
        "rheumatism": data.rheumatism,
        "arthrities": data.arthrities,
        "gout": data.gout,
        "osteoporosis": data.osteoporosis,
        "bonefractures": data.bonefractures,
        "slippeddisc": data.slippeddisc,
        "physicaldeformity": data.physicaldeformity,
        "congentialdeformity": data.congentialdeformity,
        "handicap": data.handicap,
        "spousehavingHIV": data.spousehavingHIV,
        "spousehavinghepatitisB": data.spousehavinghepatitisB,
        "spousehavinghepatatisC": data.spousehavinghepatatisC,
        "pregancy": data.pregancy,
        "postmenopause": data.postmenopause,
        "hysterectomy": data.hysterectomy,
        "mamography": data.mamography,
        "papsmear": data.papsmear,
        "uterusremoved": data.uterusremoved,
        "anyothergynaeproblem": data.anyothergynaeproblem,
        "nervous": data.nervous,
        "jointandmusclepain": data.jointandmusclepain,
        "bodydeformity": data.bodydeformity,   
      }
      
      // console.log(this.lifeStyleForm.value);
      // console.log('*******************');
      // console.log(lifestyle1);

        this.loginService.lifeStyleInsertion(lifestyle1).subscribe(res =>{
         
          if(res['status'] ==  '200') {            
            alert('Life Style Added Successfully');
            this.router.navigate(['/previewalllifestyle']);
          } 
       })
     

    

  }




}
