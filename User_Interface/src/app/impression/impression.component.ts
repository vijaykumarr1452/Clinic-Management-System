import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../event-emitter.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.scss']
})
export class ImpressionComponent implements OnInit {
  impressionlv: any = []
  impressionrv: any = []
  impressionla: any = []
  impressionra: any = []
  impressionav: any = []
  impressionmv: any = []
  impressiontv: any = []
  impressionpv: any = []
  impressionpc: any = []
  impressionao: any = []
  impressionpa: any = []
  impressionpvein: any = []
  impressionivc: any = []
  impressionaw: any = []
  impressionpw: any = []
  impressioniw: any = []
  impressionlav: any = []
  impressionas: any = []
  impressionis: any = []
  impressionicc: any = []
  impressionict: any = []
  impressionpe: any = []
  impressionlvf: any = []
  impressionrvf: any = []
  impressionst: any = []
  impressionias: any = []
  impressionivs: any = []


  showTab = 1;
  isDataLoadedInLV:boolean = false;
  isDataLoadedInRV:boolean = false;
  isDataLoadedInLA:boolean = false;
  isDataLoadedInRA:boolean = false;
  isDataLoadedInMV:boolean = false;
  isDataLoadedInTV:boolean = false;
  isDataLoadedInPA:boolean = false;
  isDataLoadedInPV:boolean = false;
  isDataLoadedInAORTA:boolean = false;
  isDataLoadedInPC:boolean = false;
  isDataLoadedInREPORT:boolean = false;
  isDataLoadedInRI:boolean = false;
  isDataLoadedInME:boolean = false;
  isDataLoadedImpression:boolean = false;
  isDataLoadedInCritical: boolean = false;
  isDataLoadedInAORTICVALVE: boolean = false;
  isDataLoadedInIVC: boolean = false;
  isDataLoadedInVENOUS: boolean = false;
  isDataLoadedInExpert: boolean;
  obtype: string;
  isDataLoadedInRightVenticle: boolean = false;
  impressionLeftVentricle= [];
  settings = {};
  impressionRightVentricle: any;
  impressionLeftAtrium: any;
  impressionRightAtrium: any;
  impressionAorticValve: any;
  impressionMitralValve: any;
  impressionTricuspidValve: any;
  impressionPulmonicValve: any;
  impressionPericardium: any;
  impressionAorta: any;
  impressionPulmonaryArtery: any;
  impressionPulmonaryVein: any;
  impressionInferiorVenaCava: any;
  impressionAnteriorWall: any;
  impressionPosteriorWall: any;
  impressionInferiorWall: any;
  impressionLateralValve: any;
  impressionAnteriorSeptum: any;
  impressionInferiorSeptum: any;
  impressionIntraCardiacClots: any;
  impressionIntraCardiacTumour: any;
  impressionPericardialEffusion: any;
  impressionLeftVentricularFunction: any;
  impressionRightVentricalFunction: any;
  impressionSpeckleTracking: any;
  impressionIntraArtrialSeptum: any;
  impressionIntraVentricularSeptum: any;
  isDataLoadedInPW: boolean;
  isDataLoadedInAW: boolean;
 
  tabToggle(index){
    this.showTab =index;
  }
  
  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute,private sharedService:SharedService) { 

  }

  onItemSelect(item: any, type) {
    //////console.log(item);
    //////console.log(this.selectedItemsObservations);

  }
  OnItemDeSelect(item: any, type) {

    //////console.log(this.selectedItemsObservations);
  }
  onSelectAll(item: any, type) {
    //////console.log(items);
  }
  onDeSelectAll(item: any, type) {
    //////console.log(items);
  }
  postImpression(){
    const impressionData = {
      impressionLeftVentricle:this.impressionlv,
      impressionRightVentricle:this.impressionrv,
      impressionLeftAtrium: this.impressionla,
      impressionRightAtrium: this.impressionra,
      impressionAorticValve: this.impressionav,
      impressionMitralValve: this.impressionmv,
      impressionTricuspidValve: this.impressiontv,
      impressionPulmonicValve: this.impressionpv,
      impressionPericardium: this.impressionpc,
      impressionAorta: this.impressionao,
      impressionPulmonaryArtery: this.impressionpa,
      impressionPulmonaryVein: this.impressionpvein,
      impressionInferiorVenaCava: this.impressionivc,
      impressionAnteriorWall: this.impressionaw,
      impressionPosteriorWall: this.impressionpw,
      impressionInferiorWall: this.impressioniw,
      impressionLateralValve: this.impressionlav,
      impressionAnteriorSeptum: this.impressionas,
      impressionInferiorSeptum: this.impressionis,
      impressionIntraCardiacClots: this.impressionicc,
      impressionIntraCardiacTumour: this.impressionict,
      impressionPericardialEffusion: this.impressionpe,
      impressionLeftVentricularFunction: this.impressionlvf,
      impressionRightVentricalFunction: this.impressionrvf,
      impressionSpeckleTracking: this.impressionst,
      impressionIntraArtrialSeptum: this.impressionias,
      impressionIntraVentricularSeptum: this.impressionivs,
    }
    console.log(this.impressionlv,this.impressionrv,impressionData)
    this.loginService.postImpressionMasterObservation(impressionData).subscribe()
  }
  ngOnInit(): void {
    this.loginService.getImpressionMasters().subscribe(data=>{
      console.log(data,data["impressionMasterObservation"])
      this.impressionLeftVentricle= data["impressionLeftVentricle"]
     this.impressionRightVentricle= data["impressionRightVentricle"],
     this.impressionLeftAtrium= data["impressionLeftAtrium"],
     this.impressionRightAtrium= data["impressionRightAtrium"],
     this.impressionAorticValve= data["impressionAorticValve"],
     this.impressionMitralValve= data["impressionMitralValve"],
     this.impressionTricuspidValve= data["impressionTricuspidValve"],
     this.impressionPulmonicValve= data["impressionPulmonicValve"],
     this.impressionPericardium= data["impressionPericardium"],
     this.impressionAorta= data["impressionAorta"],
     this.impressionPulmonaryArtery= data["impressionPulmonaryArtery"],
     this.impressionPulmonaryVein= data["impressionPulmonaryVein"],
     this.impressionInferiorVenaCava= data["impressionInferiorVenaCava"],
     this.impressionAnteriorWall= data["impressionAnteriorWall"],
     this.impressionPosteriorWall= data["impressionPosteriorWall"],
     this.impressionInferiorWall= data["impressionInferiorWall"],
     this.impressionLateralValve= data["impressionLateralValve"],
     this.impressionAnteriorSeptum= data["impressionAnteriorSeptum"],
     this.impressionInferiorSeptum= data["impressionInferiorSeptum"],
     this.impressionIntraCardiacClots= data["impressionIntraCardiacClots"],
     this.impressionIntraCardiacTumour= data["impressionIntraCardiacTumour"],
     this.impressionPericardialEffusion= data["impressionPericardialEffusion"],
     this.impressionLeftVentricularFunction= data["impressionLeftVentricularFunction"],
     this.impressionRightVentricalFunction= data["impressionRightVentricalFunction"],
     this.impressionSpeckleTracking= data["impressionSpeckleTracking"],
     this.impressionIntraArtrialSeptum= data["impressionIntraArtrialSeptum"],
     this.impressionIntraVentricularSeptum= data["impressionIntraVentricularSeptum"]
     this.impressionlv = data["impressionMasterObservation"][0]["impressionLeftVentricle"]
     this.impressionrv = data["impressionMasterObservation"][0]["impressionRightVentricle"]
     this.impressionla = data["impressionMasterObservation"][0]["impressionLeftAtrium"]
     this.impressionra = data["impressionMasterObservation"][0]["impressionRightAtrium"]
     this.impressionav = data["impressionMasterObservation"][0]["impressionAorticValve"]
     this.impressionmv = data["impressionMasterObservation"][0]["impressionMitralValve"]
     this.impressiontv = data["impressionMasterObservation"][0]["impressionTricuspidValve"]
     this.impressionpv = data["impressionMasterObservation"][0]["impressionPulmonicValve"]
     this.impressionpc = data["impressionMasterObservation"][0]["impressionPericardium"]
     this.impressionao = data["impressionMasterObservation"][0]["impressionAorta"]
     this.impressionpa = data["impressionMasterObservation"][0]["impressionPulmonaryArtery"]
     this.impressionpvein = data["impressionMasterObservation"][0]["impressionPulmonaryVein"]
     this.impressionivc = data["impressionMasterObservation"][0]["impressionInferiorVenaCava"]
     this.impressionaw = data["impressionMasterObservation"][0]["impressionAnteriorWall"]
     this.impressionpw = data["impressionMasterObservation"][0]["impressionPosteriorWall"]
     this.impressioniw = data["impressionMasterObservation"][0]["impressionInferiorWall"]
     this.impressionlav = data["impressionMasterObservation"][0]["impressionLateralValve"]
     this.impressionas = data["impressionMasterObservation"][0]["impressionAnteriorSeptum"]
     this.impressionis = data["impressionMasterObservation"][0]["impressionInferiorSeptum"]
     this.impressionicc = data["impressionMasterObservation"][0]["impressionIntraCardiacClots"]
     this.impressionict = data["impressionMasterObservation"][0]["impressionIntraCardiacTumour"]
     this.impressionpe = data["impressionMasterObservation"][0]["impressionPericardialEffusion"]
     this.impressionlvf = data["impressionMasterObservation"][0]["impressionLeftVentricularFunction"]
     this.impressionrvf = data["impressionMasterObservation"][0]["impressionRightVentricalFunction"]
     this.impressionst = data["impressionMasterObservation"][0]["impressionSpeckleTracking"]
     this.impressionias = data["impressionMasterObservation"][0]["impressionIntraArtrialSeptum"]
     this.impressionivs = data["impressionMasterObservation"][0]["impressionIntraVentricularSeptum"]

    })
    this.settings = {
      text: "Select Data",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    }

  
  }
  
  getAddPage  = (obtype) => {   

    window.localStorage.setItem("obtype", obtype.toString());
    
    this.actRoute.paramMap.subscribe(params => {
      this.obtype = params.get('obtype');
    
      if(obtype === 'rightventricle'){
        this.isDataLoadedInRightVenticle = true;
      }
      if(obtype === 'leftatrium'){
        this.isDataLoadedInLA = true;
      }
      // if(obtype === 'leftAtriumObservation'){
      //   this.isDataLoadedInLA = true;
      // }
      if(obtype === 'aorta'){
        this.isDataLoadedInAORTA = true;
      }
      if(obtype === 'mv'){
        this.isDataLoadedInMV = true;
      }
      if(obtype === 'tv'){
        this.isDataLoadedInTV = true;
      }
      if(obtype === 'pa'){
        this.isDataLoadedInPA = true;
      }
      if(obtype === 'pvein'){
        this.isDataLoadedInPV = true;
      }
      if(obtype === 'av'){
        this.isDataLoadedInAORTICVALVE = true;
      }
      if(obtype === 'pc'){
        this.isDataLoadedInPC = true;
      }
      if(obtype === 'pw'){
        this.isDataLoadedInPW = true;
      }
      if(obtype === 'aw'){
        this.isDataLoadedInAW = true;
      }
      if(obtype === 'measurements'){
        this.isDataLoadedInME = true;
      }
      if(obtype === 'critical'){
        this.isDataLoadedInCritical = true;
      }
      if(obtype === 'aorticValveObservation'){
        this.isDataLoadedInAORTICVALVE = true
      }
      if(obtype === 'ivcObservation'){
        this.isDataLoadedInIVC = true
      }
      if(obtype === 'venousObservation'){
        this.isDataLoadedInVENOUS = true
      }
      if(obtype === 'expert'){
        this.isDataLoadedInExpert = true;
      }
      if(obtype === 'impression'){
        this.isDataLoadedImpression = true
      }
   });


  }
  
  
}
