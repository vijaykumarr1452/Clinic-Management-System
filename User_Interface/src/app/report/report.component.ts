import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake.min.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'

import { ObservationsComponent } from '../observations/observations.component';
import { SharedService } from '../event-emitter.service';
import { Subscription } from 'rxjs';
import { data } from 'jquery';
import { formatDate } from '@angular/common';
import { heartBaseImage } from './../report/heartbaseImage'
import { NgxSpinnerService } from 'ngx-spinner';
//import { type } from 'os';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
// pdfMake.fonts = {
//   // yourFontName: {
//   //   normal: 'https://example.com/fonts/fontFile.ttf',
//   //   bold: 'https://example.com/fonts/fontFile2.ttf',
//   //   italics: 'https://example.com/fonts/fontFile3.ttf',
//   //   bolditalics: 'https://example.com/fonts/fontFile4.ttf'
//   // },
//   TimesNewRoman: {
//     normal: 'https://candyfonts.com/wp-data/2019/04/06/51810/times.ttf',
//     // bold: 'TimesNewRoman2.ttf',
//     // italics: 'TimesNewRoman3.ttf',
//     // bolditalics: 'TimesNewRoman4.ttf'
//   },

//   // download default Roboto font from cdnjs.com
//   Roboto: {
//     normal: 'https://db.onlinewebfonts.com/c/32441506567156636049eb850b53f02a?family=Times+New+Roman',
//     bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
//     italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
//     bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
//   },
//   // PingFangSC: {
//   //   normal: ['pingfang.ttc', 'PingFangSC-Regular'],
//   //   bold: ['pingfang.ttc', 'PingFangSC-Semibold'],
//   // },
//   // TimesNewRoman: {
//   //   normal: 'TimesNewRoman-Roman',
//   //   bold: 'TimesNewRoman-Bold',
//   //   italics: 'TimesNewRoman-Italic',
//   //   bolditalics: 'TimesNewRoman-BoldItalic'
//   // },
//   // example of usage fonts in collection
//   // PingFangSC: {
//   //   normal: ['https://example.com/fonts/pingfang.ttc', 'PingFangSC-Regular'],
//   //   bold: ['https://example.com/fonts/pingfang.ttc', 'PingFangSC-Semibold'],
//   // }
// }
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  clickEventsubscription: Subscription;
  isLogin = localStorage.getItem('token') ? true : false;
  id = localStorage.getItem('id')
  role = localStorage.getItem('role')
  //type  = localStorage.getItem('type')
  //  favoriteSeason
  radioTitle: string;
  radioItems: Array<string>;
  model = { option: '' };
  //radioItems: string[] = ['Normal Report', 'Abnormal Report'];

  //patientDataObject;  
  patientDataObject = {
    'ef': '',
    'patientname': '',
    'id': '',
    'dob': '',
    'age': '',
    'bpsystolic': '',
    'bpdiastolic': '',
    'testdate': '',
    'gender': '',
    'height': '',
    'weight': '',
    'bsa': '',
    'bmi': '',
    'testtype': '',
    'ew': '',
    'clinicId': '',
    'tapse': '',
    'mapse': ''
  };

  observationsObject: any = [];
  observationsObjecttype;
  AllMastersList;
  clinicDataObject;
  favoriteSeason;
  itemList = [];
  itemList1 = [];
  selectedItemsObservations: any = [];
  selectedItems1: any = [];
  selectedItems2: any = [];
  selectedItems3: any = [];
  selectedItems5: any = [];
  selectedItems6: any = [];
  selectedItems4: any = []
  selectedItems7: any = []
  selectedItems8: any = []
  selectedItems9: any = []
  selectedItems10: any = []
  selectedItems11: any = []
  selectedItems12: any = []
  selectedItems13: any = []
  selectedItems14: any = []
  selectedItems15: any = []
  mitralValvecomments: any = [];
  leftAtriumcomments1: any = [];
  leftVentriclecomments: any = [];
  rightAtriumcomments: any = [];
  rightVentriclecomments: any = [];
  aorticValvecomments: any = [];
  pulmonaryValvecomments: any = [];
  tricuspidValvecomments: any = [];
  // pericardiumComments:any=[];
  impressioncomments: any = [];
  conclusioncomments: any = [];
  docadvicecomments: any = [];
  aortaComments: any = [];
  venousComments: any = [];
  ivcComments: any = [];
  InterartrialSeptumComments: any = []
  InterventricularSeptumComments: any = []
  speckleTrackingComments: any = []
  leftVentricalFunctionComments: any = []
  rightVentricalFunctionComments : any=[]
  PeriCardialEffusionComments : any = []
  IntraCardiacClotComments : any = []
  IntraCardiacTumourComments : any =[]
  settings = {};
  // leftAtriumcomments1=[];

  public comments: any[] = [{
    id: 1,
    comment: ''
  }];
  // public leftAtriumcomments1: Array<LeftAtriumcomments1> = [];

  // public leftAtriumcomments1: Array<any> = [{

  //   id: 1,
  //   leftAtriumcomment: ''
  // }];
  // public leftVentriclecomments: any[] = [{
  //   id: 1,
  //   leftVentriclecomment: ''
  // }];
  // public rightAtriumcomments: any[] = [{
  //   id: 1,
  //   rightAtriumcomment: ''
  // }];
  // public rightVentriclecomments: any[] = [{
  //   id: 1,
  //   rightVentriclecomment: ''
  // }];

  // public aorticValvecomments: any[] = [{
  //   id: 1,
  //   aorticcomment: ''
  // }]; 
  // public pulmonaryValvecomments:any[] =[{
  //   id:1,
  //   comment :''
  // }]
  //  public tricuspidValvecomments: any[] = [{
  //   id: 1,
  //   tricuspidcomment: ''
  // }];
  // public impressioncomments: any[] = [{
  //   id: 1,
  //   impressioncomment: ''
  // }];

  // public conclusioncomments: any[] = [{
  //   id: 1,
  //   conclusioncomment: ''
  // }];

  // public docadvicecomments: any[] = [{
  //   id: 1,
  //   docadvicecomment: ''
  // }];
  //  venousComments: any = [ ];
  anteriorwall;
  posteriorwall;
  inferiorwall;
  lateralwall;
  valueofef: any;
  pulmonaryarterypressure;
  avgsystolicstrain;



  updform = {
    anteriorwall: 'Normal',
    posteriorwall: 'Normal',
    inferiorwall: 'Normal',
    lateralwall: 'Normal',
    anteriorseptum :'Normal',
    inferiorseptum :'Normal',
    valueofef: '',
    pulmonaryarterypressure: '',
    avgsystolicstrain: '',
    tapse : '',
    mapse : ''
  }

  doctorAdvice: any = []
  conclusion: any = []
  leftAtrium: Array<any> = [];
  leftVentricle = []
  rightAtrium = []
  rightVentricle = []
  mitralValve = []
  pericardium = []
  aorticValve = []
  pulmonaryValve = []
  tricuspidValve = []
  impression: any = []
  speckleTracking = []
  leftVentricalFunction = []
  rightVentricalFunction = []
  PeriCardialEffusion = []
  IntraCardiacTumour = []
  IntraCardiacClot = []
  inferiorVenaCava = []
  regionalWallMotion = [];
  InterartrialSeptumData = [];
  InterventricularSeptumData = [];
  DoctorData;
  selectedregionalWallMotion = [];

  Observationscomments: []
  selectedObseravtionsInEditList: []

  regionalWalls: any = [];
  regionalWalls1: any = [];
  referralComment: any = [];
  gens: any;
  observationComments: any;
  m1: any = [];
  lvmotiondata: any;
  wallmotions: any[];
  lvmotionvalue: any;
  editedImages: any = [];
  getReferralImages: any;
  impressionReport: any;
  conclusionReport: any;
  mitralValveObservation: any;
  leftVentricalObservation: any;
  rightVentricleObservation: any;
  leftAtriumObservation: any;
  rightAtriumObservation: any;
  tricuspidValveObservation: any;
  pulmonaryArteryObservation: any;
  pulmonicValveObservation: any;
  aortaObservation: any;
  pericardiumObservation: any;
  speckletrackingreport: any;
  leftVentricalFunctionReport: any;
  rightVentricalFunctionReport: any;
  pericardialEffusionReport: any;
  IntraCardiacClotReport: any;
  IntraCardiacTumourReport: any;
  inferiorVenacavaReport: any;
  intraCardiacTumourReport: any;
  aorta: any;
  // aortaComment: any;
  aortacomment: any;
  ivcReport: any;
  venousReport: any;
  venous: any;

  ivc: any;
  venousss: any;
  venousObservation: any;
  ivcObservation: any;
  aorticValveObservation: any;
  pericardiumReport: any;
  pericardiumComments: any;
  pulmonaryArteryReport: any;
  pulmonaryArteryComment: any;
  pulmonaryArteryComments: any;
  pulmonaryArtery: any;
  InterartrialSeptum: any;
  InterventricularSeptum: any;
  impressionLeftVentricle: any;
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
  impressionlv: any;
  impressionrv: any;
  impressionla: any;
  impressionra: any;
  impressionav: any;
  impressionmv: any;
  impressiontv: any;
  impressionpv: any;
  impressionpc: any;
  impressionao: any;
  impressionpa: any;
  impressionpvein: any;
  impressionivc: any;
  impressionaw: any;
  impressionpw: any;
  impressioniw: any;
  impressionlav: any;
  impressionas: any;
  impressionis: any;
  impressionicc: any;
  impressionict: any;
  impressionpe: any;
  impressionlvf: any;
  impressionrvf: any;
  impressionst: any;
  impressionias: any;
  impressionivs: any;
  impressionMaster: any;

  // leftAtrium: any;
  // leftAtriumcomments1: Array<any> = [];
  constructor(private loginService: LoginserviceService, private router: Router, private http: HttpClient, private actRoute: ActivatedRoute, private sharedService: SharedService, private spinner: NgxSpinnerService) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.ngOnInit();
      //this.generatePdf();
    })
    this.radioTitle = 'Radio Button in Angular';
    this.radioItems = ['Normal Report', 'Abnormal Report'];
    //console.log(this.avgsystolicstrain)
  }

  dynamicComment: Array<ReportComponent> = [];
  newComment: any = {};

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
     this.impressionMaster = data["impressionMasterObservation"]
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
    this.loginService.getLVMotion().subscribe(data => {
      //console.log(data)
      this.lvmotiondata = data['lvmotion']
      this.lvmotionvalue = data['lvMotionData']
    })

    this.loginService.getReferralImages().subscribe(data => {
      //console.log(data)
      this.getReferralImages = data['referralImages']
      // this.lvmotionvalue = data['lvMotionData']
    })
    this.loginService.getEditedImages().subscribe(data => {
      console.log(data)
      this.editedImages = data['editedImages']
    })
    this.loginService.getCritialImages().subscribe(data => {
      console.log(data)
      this.gens = data['g']
    })
    this.loginService.getDoctorData(localStorage.getItem("id")).subscribe(data => {

      this.DoctorData = data['doctor']
    }, error => console.log(error));

    this.loginService.getPatientData(localStorage.getItem("pid")).subscribe(data => {
      //console.log(localStorage);
      this.patientDataObject = data['doctor'];
console.log(this.patientDataObject)
      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => {
        this.clinicDataObject = data['doctor'];
        //console.log(this.updform)
      })

    }, error => console.log(error));
this.loginService.getReportMaster().subscribe((data:any)=>{
  const {   InterventricularSeptum,
    InterartrialSeptum,
    InterartrialSeptumComments,
    leftVentricalFunctionComments,
    rightVentricalFunctionComments,
    InterventricularSeptumComments,
    PeriCardialEffusionComments,
    IntraCardiacClotComments,
    IntraCardiacTumourComments,
    speckleTrackingComments,pericardialEffusionReport} = data
console.log(data,data.leftVentricalFunctionComment)
this.InterartrialSeptum = InterartrialSeptum
this.InterventricularSeptum = InterventricularSeptum
this.InterartrialSeptumComments = InterartrialSeptumComments
this.leftVentricalFunctionComments = leftVentricalFunctionComments
this.rightVentricalFunctionComments =rightVentricalFunctionComments
this.InterventricularSeptumComments =InterventricularSeptumComments
// this.pericardialEffusionReport = report.pericardialEffusionReport
this.PeriCardialEffusionComments = PeriCardialEffusionComments
this.IntraCardiacClotComments = IntraCardiacClotComments
this.IntraCardiacTumourComments = IntraCardiacTumourComments
this.speckleTrackingComments = speckleTrackingComments
 this.pericardialEffusionReport = pericardialEffusionReport
})
    this.loginService.observationsGetAllByPatient().subscribe((data: any) => {
      const { observations, masterData, conclusioncomment, conclusionreport, doctorAdviceComments,
        doctorAdvicereport, leftAtriumcomment, leftVentriclecomment, leftVentriclereport, leftAtriumreport, rightAtriumreport, rightAtriumcomment, rightVentriclereport, rightVentriclecomment, mitralValvecomment, mitralValvereport, aorticValvecomment, aorticValvereport, pulmonaryValvecomment, pulmonaryValvereport, tricuspidValvecomment, tricuspidValvereport, impressioncomment, impressionreport, observationItem,
        observtaionComments, speckleTrackingreport, regionalWall, gen, referralcomment, aorticValveComments,
        pulmonaryValveComments,
        tricuspidValveComments, leftAtriumComments, leftVentricleComments, rightAtriumComments, rightVentricleComments, rightVentricles, leftAtriums, leftVentricles, rightAtriums, mitralValves, pulmonaryValves, tricuspidValves, aorticValves, m, lvmotion, mitralValveObservation,
        leftVentricalObservation, rightVentricleObservation, leftAtriumObservation, rightAtriumObservation,
        tricuspidValveObservation, pulmonaryArteryObservation, pulmonicValveObservation,
        aortaObservation, pericardiumObservation, speckletrackingreport, leftVentricalFunctionReport, rightVentricalFunctionReport, pericardialEffusionReport, IntraCardiacClotReport, intraCardiacTumourReport, inferiorVenacavaReport, aortareport, aortaComment, ivcReport, ivcComment, venousReport, venousComment, venousObservation,
        ivcObservation,
        aorticValveObservation, pericardiumComment, pericardiumReport, pulmonaryArteryComment, pulmonaryArteryReport, InterartrialSeptum, InterventricularSeptum, report } = data;
      console.log(data)

      this.m1 = m
      this.doctorAdvice = masterData['doctorAdvice']
      this.conclusion = masterData['conclusion']
      this.observationComments = observtaionComments
      this.leftAtrium = masterData['leftAtrium']
      this.leftVentricle = masterData['leftVentrical']
      this.rightAtrium = masterData['rightAtrium']
      this.rightVentricle = masterData['rightVentricle']
      this.mitralValve = masterData['mitralValve']
      this.pericardium = masterData['pericardium']
      this.aorticValve = masterData['aorticValve']
      this.pulmonaryValve = masterData['pulmonicValve']
      this.tricuspidValve = masterData['tricuspidValve']
      this.pulmonaryArtery = masterData['pulmonaryArtery']
      ////console.log(this.pulmonaryValve)
      ////console.log(masterData)
      this.impression = masterData['impressions']
      this.aorta = masterData['aorta']
      this.venous = masterData['venous']
      this.ivc = masterData['inferiorVenaCava']
      ////console.log(this.impression)
      this.speckleTracking = masterData['speckleTracking']
      this.leftVentricalFunction = masterData['leftVentricalFunction']
      this.rightVentricalFunction = masterData['rightVentricalFunction']
      this.PeriCardialEffusion = masterData['pericardialEffusion']
      this.IntraCardiacClot = masterData['intracardiacData']
      this.IntraCardiacTumour = masterData['intraCardiacTumour']
      this.inferiorVenaCava = masterData['inferiorVenaCava']
      this.selectedItems5 = leftAtriumreport;
      this.selectedItems6 = leftVentriclereport;
      this.InterartrialSeptumData = masterData['InterartrialSeptumData']
      this.InterventricularSeptumData = masterData['InterventricularSeptumData']
      this.selectedItems2 = impressionreport;
      this.selectedObseravtionsInEditList = observationItem;
      this.comments = observtaionComments;
      this.rightAtriumcomments = rightAtriumcomment;
      this.rightVentriclecomments = rightVentriclecomment;
      this.mitralValvecomments = mitralValvecomment;
      this.selectedItems9 = mitralValvereport;
      this.aorticValvecomments = aorticValvecomment;
      this.selectedItems10 = aorticValvereport;
      this.selectedItems13 = aortareport;
      this.aortaComments = aortaComment
      this.ivcReport = ivcReport
      this.ivcComments = ivcComment
      this.pericardiumReport = pericardiumReport,
        this.pericardiumComments = pericardiumComment
      this.pulmonaryArteryReport = pulmonaryArteryReport,
        this.pulmonaryArteryComments = pulmonaryArteryComment
      this.venousComments = venousComment
      this.venousReport = venousReport
      this.pulmonaryValvecomments = pulmonaryValvecomment;
      this.selectedItems11 = pulmonaryValvereport;
      this.tricuspidValvecomments = tricuspidValvecomment;
      this.selectedItems12 = tricuspidValvereport;
      this.selectedItems7 = rightAtriumreport;
      this.selectedItems8 = rightVentriclereport;
      this.conclusionReport = conclusionreport
      this.conclusioncomments = conclusioncomment;
      this.selectedItems3 = conclusionreport;
      // if(report != null){
     
  
        // }
        // else{
        //   this.InterartrialSeptum = null
        // this.InterventricularSeptum = null
        // this.InterartrialSeptumComments = null
        // this.leftVentricalFunctionComments = null
        // this.rightVentricalFunctionComments = null
        // this.InterventricularSeptumComments = null
        // // this.pericardialEffusionReport = report.pericardialEffusionReport
        // this.PeriCardialEffusionComments = null
        // this.IntraCardiacClotComments = null
        // this.IntraCardiacTumourComments =null
        // this.speckleTrackingComments = null
        // this.pericardialEffusionReport = null
        // }
      ////console.log(this.selectedItems3)
      console.log(this.InterventricularSeptum, this.venousReport)
      this.docadvicecomments = doctorAdviceComments;
      this.selectedItems4 = doctorAdvicereport;
      this.leftAtriumcomments1 = leftAtriumcomment;
      this.leftVentriclecomments = leftVentriclecomment;
      this.impressionReport = impressionreport
      this.impressioncomments = impressioncomment;
      this.leftVentricalFunctionReport = leftVentricalFunctionReport
      this.rightVentricalFunctionReport = rightVentricalFunctionReport
      // this.pericardialEffusionReport = report.pericardialEffusionReport

      this.IntraCardiacClotReport = IntraCardiacClotReport
      this.intraCardiacTumourReport = intraCardiacTumourReport
      this.inferiorVenacavaReport = inferiorVenacavaReport
      this.referralComment = referralcomment;
      this.mitralValveObservation = mitralValveObservation,
        this.leftVentricalObservation = leftVentricalObservation,
        this.rightVentricleObservation = rightVentricleObservation,
        this.leftAtriumObservation = leftAtriumObservation,
        this.rightAtriumObservation = rightAtriumObservation,
        this.tricuspidValveObservation = tricuspidValveObservation,
        this.pulmonaryArteryObservation = pulmonaryArteryObservation,
        this.pulmonicValveObservation = pulmonicValveObservation,
        this.aortaObservation = aortaObservation,
        this.pericardiumObservation = pericardiumObservation
      this.venousObservation = venousObservation,
        this.ivcObservation = ivcObservation,
        this.aorticValveObservation = aorticValveObservation
      //////console.log(this.comments);

      this.regionalWalls = regionalWall,
        this.selectedItems1 = speckleTrackingreport;
      this.speckletrackingreport = speckletrackingreport
      let regionalwalllen = this.regionalWalls.length;
      this.updform.tapse = this.patientDataObject.tapse
      this.updform.mapse = this.patientDataObject.mapse
      console.log(this.updform,this.patientDataObject)
      for (let i = 0; i < regionalwalllen; i++) {
        this.updform = this.regionalWalls[i];

      }

      this.mitralValvecomments = observtaionComments,
        this.aorticValvecomments = aorticValveComments,
        this.pulmonaryValvecomments = pulmonaryValveComments,
        this.tricuspidValvecomments = tricuspidValveComments,
        this.leftAtriumcomments1 = leftAtriumComments,
        this.leftVentriclecomments = leftVentricleComments,
        this.rightAtriumcomments = rightAtriumComments,
        this.rightVentriclecomments = rightVentricleComments,
        this.selectedItems8 = rightVentricles
      this.selectedItems5 = leftAtriums
      this.selectedItems7 = rightAtriums
      this.selectedItems6 = leftVentricles
      this.selectedItems7 = rightAtriums
      this.selectedItems9 = mitralValves
      this.selectedItems10 = aorticValves
      this.selectedItems11 = pulmonaryValves
      this.selectedItems12 = tricuspidValves

      ////console.log(this.selectedItems5)

      ////console.log(this.selectedItems8)
      console.log(observations)
      this.observationsObject = observations
      // .map(observation => {

      //   const { type, comments } = observation
      //   const formatedTypename = type.replace("Observation", "").replace(/ /g, "");

      //   const masterdata = masterData[formatedTypename].map(master => {
      //     return { ...master, type: `${formatedTypename}Observation` }
      //   })
      //   //const getRespectiveComments = this.groupBy(comments)

      //   return ({ ...observation, ttype: formatedTypename, masterValues: masterdata, comments: [], regionalWall, observationItem, leftAtriumreport, impressionreport })
      // })
      // for(let i in this.observationsObject){
      //   ////console.log(this.observationsObject[i].comments)
      // }
      // ////console.log(this.observationsObject);

      this.mapSelectedObservationsToMultiSelect();
      this.mapCommentsToTextbox();
    })
    ////console.log(this.observationsObject)
    this.wallmotions = [
      { itemName: "normal" }
    ]
    this.regionalWallMotion = [
      { "id": 1, "itemName": "Normal" },
      { "id": 2, "itemName": "Akinetic" },
      { "id": 3, "itemName": "Hypokinetic" },
      { "id": 4, "itemName": "Dyskinetic" },
      { "id": 5, "itemName": "Aneurysm" },
      { "id": 6, "itemName": "Not seen" }
    ];


    this.settings = {
      text: "Select Data",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };

  }

  groupBy(list) {
    const map = new Map();
    list.forEach((item) => {
      const key = item['type'];
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  mapSelectedObservationsToMultiSelect = () => {
    const groupedSelectedObservations = this.groupBy(this.selectedObseravtionsInEditList)
    for (var i = 0; i < this.observationsObject.length; i++) {
      this.selectedItemsObservations[i] =
        groupedSelectedObservations.get(this.observationsObject[i].type)
    }

  }

  mapCommentsToTextbox = () => {
    const groupedSelectedObservations = this.groupBy(this.comments)

    for (var i = 0; i < this.observationsObject.length; i++) {
      this.observationsObject[i].comments =
        groupedSelectedObservations.get(this.observationsObject[i].type) || []
    }


    // for(var i=0; i<this.comments.length;i++) {    
    //   ////console.log(groupedSelectedObservations.get(this.comments[i].type));
    //       this.comments = copy avvatle
    //       groupedSelectedObservations.get(this.comments[i].type) || []

    //    }

  }
  getSelectedObservationsList = (filterType) => {
    return this.selectedObseravtionsInEditList.filter((data: any) => data.type == filterType)
  }


  ///////////////////////////////////

  spacecamel(s) {
    return s.replace(/([a-z])([A-Z])/g, '$1 $2');
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

  addComment(k, type) {
    // ////console.log(this.observationsObject);  
    // ////console.log(type);

    let count = 0;
    for (let i = 0; i < this.observationsObject.length; i++) {
      count += this.observationsObject[i].comments.length + 1;
    }

    this.observationsObject[k].comments.push({
      id: count,
      type: type,
      comment: ''
    });

    // ////console.log(this.id);
  }

  removeComment(commentsIndex, mainObjectIndex) {
    this.observationsObject[mainObjectIndex].comments.splice(commentsIndex, 1);
  }
  addLeftAtriumComment() {
    this.leftAtriumcomments1 = this.leftAtriumcomments1 || [];

    this.leftAtriumcomments1.push({

      id: this.leftAtriumcomments1.length + 1,
      comment: '',
      type: 'leftAtriumObservation'

    });

    // ////console.log(this.id);


  }
  removeLeftAtriumComment(i: number) {
    this.leftAtriumcomments1.splice(i, 1);
  }
  addLeftVentricleComment() {
    this.leftVentriclecomments = this.leftVentriclecomments || [];

    this.leftVentriclecomments.push({
      id: this.leftVentriclecomments.length + 1,
      comment: '',
      type: 'leftVentricalObservation'

    });

    // ////console.log(this.id);

  }

  removeLeftVentricleComment(i: number) {
    this.leftVentriclecomments.splice(i, 1);
  }
  addImpressionComment() {

    this.impressioncomments.push({
      id: this.impressioncomments.length + 1,
      comment: '',

    });

    // ////console.log(this.id);

  }

  removeImpressionComment(i: number) {
    this.impressioncomments.splice(i, 1);
  }
  addRightAtriumComment() {
    this.rightAtriumcomments = this.rightAtriumcomments || [];
    this.rightAtriumcomments.push({
      id: this.rightAtriumcomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'rightAtriumObservation'

    });
  }

  removeRightAtriumComment(i: number) {
    this.rightAtriumcomments.splice(i, 1);
  }
  addRightVentricleComment() {
    this.rightVentriclecomments = this.rightVentriclecomments || [];
    this.rightVentriclecomments.push({
      id: this.rightVentriclecomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'rightVenricalObservation'

    });
  }

  removeRightVentricleComment(i: number) {
    this.rightVentriclecomments.splice(i, 1);
  }
  addMitralValveComment() {
    this.mitralValvecomments = this.mitralValvecomments || [];
    this.mitralValvecomments.push({
      id: this.mitralValvecomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'mitralValveObservation'

    });
    console.log(this.mitralValvecomments.length + 1)
  }

  removeMitralValveComment(i: number) {
    this.mitralValvecomments.splice(i, 1);
  }
  addAorticValveComment() {
    this.aorticValvecomments = this.aorticValvecomments || [];
    this.aorticValvecomments.push({
      id: this.aorticValvecomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'aorticValveObservation'

    });
  }

  removeAorticValveComment(i: number) {
    this.aorticValvecomments.splice(i, 1);
  }
  addPulmonaryValveComment() {
    this.pulmonaryValvecomments = this.pulmonaryValvecomments || [];
    this.pulmonaryValvecomments.push({
      id: this.pulmonaryValvecomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'pulmonicObservation'

    });
  }

  removePulmonaryValveComment(i: number) {
    this.pulmonaryValvecomments.splice(i, 1);
  }
  addTricuspidValveComment() {
    this.tricuspidValvecomments = this.tricuspidValvecomments || [];
    this.tricuspidValvecomments.push({
      id: this.tricuspidValvecomments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'tricuspidValveObservation'

    });
  }

  removeTricuspidValveComment(i: number) {
    this.tricuspidValvecomments.splice(i, 1);
  }
  addpericardiumComment() {
    this.pericardiumComments = this.pericardiumComments || [];
    this.pericardiumComments.push({
      id: this.pericardiumComments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'pericardiumObservation'

    });
  }

  removepericardiumComment(i: number) {
    this.pericardiumComments.splice(i, 1);
  }
  addpulmonaryArteryComment() {
    this.pulmonaryArteryComments = this.pulmonaryArteryComments || [];
    this.pulmonaryArteryComments.push({
      id: this.pulmonaryArteryComments.length + 1,
      //id: k + 1,
      comment: '',
      type: 'pulmonaryArteryObservation'

    });
  }

  removepulmonaryArteryComment(i: number) {
    this.pulmonaryArteryComments.splice(i, 1);
  }
  addConclusionComment() {
    this.conclusioncomments.push({
      id: this.conclusioncomments.length + 1,
      //id: k + 1,
      comment: ''
    });
  }

  removeConclusionComment(i: number) {
    this.conclusioncomments.splice(i, 1);
  }


  addDocAdviceComment() {
    this.docadvicecomments.push({
      id: this.docadvicecomments.length + 1,
      comment: ''
    });

  }

  removeDocAdviceComment(i: number) {
    this.docadvicecomments.splice(i, 1);
  }
  addaortaComment() {
    console.log(this.aortaComments)
    this.aortaComments.push({
      id: this.aortaComments.length + 1,
      comment: ''
    })
  }
  removeaortaComment(i: number) {
    console.log(i)
    this.aortaComments.splice(i, 1)
  }
  addivcComment() {
    this.ivcComments.push({
      id: this.ivcComments.length + 1,
      comment: ''
    })
  }
  removeivcComment(i: number) {
    console.log(i)
    this.ivcComments.splice(i, 1)
  }
  addvenousComment() {
    this.venousComments.push({
      id: this.venousComments.length + 1,
      comment: ''
    })
  }

  // addvenousComment(){
  //   console.log(this.venousComments)
  //   this.venousComments.push({
  //     id:this.venousComments.length +1,
  //     comment:''
  //   })
  // }
  removevenousComment(i: number) {
    console.log(i)
    this.venousComments.splice(i, 1)
  }
  addInterventricularSeptumComment() {
    this.InterventricularSeptumComments.push({
      id: this.InterventricularSeptumComments.length + 1,
      comment: ''
    })
  }
  removeInterventricularSeptumComment(i: number) {
    console.log(i)
    this.InterventricularSeptumComments.splice(i, 1)
  }
  // addvenousComment(){
  //   console.log(this.venousComments)
  //   this.venousComments.push({
  //     id:this.venousComments.length +1,
  //     comment:''
  //   })
  // }

  addInterartrialSeptumComment() {
    this.InterartrialSeptumComments.push({
      id: this.InterartrialSeptumComments.length + 1,
      comment: ''
    })
  }
  removeInterartrialSeptumComment(i: number) {
    console.log(i)
    this.InterartrialSeptumComments.splice(i, 1)
  }
  addspeckleTrackingComment() {
    this.speckleTrackingComments.push({
      id: this.speckleTrackingComments.length + 1,
      comment: ''
    })
  }
  removespeckleTrackingComment(i: number) {
    console.log(i)
    this.speckleTrackingComments.splice(i, 1)
  }
  addleftVentricalFunctionComment() {
    this.leftVentricalFunctionComments.push({
      id: this.leftVentricalFunctionComments.length + 1,
      comment: ''
    })
  }
  removeleftVentricalFunctionComment(i: number) {
    console.log(i)
    this.leftVentricalFunctionComments.splice(i, 1)
  }
  addrightVentricalFunctionComment() {
    this.rightVentricalFunctionComments.push({
      id: this.rightVentricalFunctionComments.length + 1,
      comment: ''
    })
  }
  removerightVentricalFunctionComment(i: number) {
    console.log(i)
    this.rightVentricalFunctionComments.splice(i, 1)
  }
  addPeriCardialEffusionComment() {
    this.PeriCardialEffusionComments.push({
      id: this.PeriCardialEffusionComments.length + 1,
      comment: ''
    })
  }
  removePeriCardialEffusionComment(i: number) {
    console.log(i)
    this.PeriCardialEffusionComments.splice(i, 1)
  }
  addIntraCardiacClotComment() {
    this.IntraCardiacClotComments.push({
      id: this.IntraCardiacClotComments.length + 1,
      comment: ''
    })
  }
  removeIntraCardiacClotComment(i: number) {
    console.log(i)
    this.IntraCardiacClotComments.splice(i, 1)
  }
  addIntraCardiacTumourComment() {
    this.IntraCardiacTumourComments.push({
      id: this.IntraCardiacTumourComments.length + 1,
      comment: ''
    })
  }
  removeIntraCardiacTumourComment(i: number) {
    console.log(i)
    this.IntraCardiacTumourComments.splice(i, 1)
  }
  reportFormData = () => {


    document.getElementById("overlay").style.display = "block";
    this.spinner.show();

    // const leftAtriumslen = this.selectedItems5.length;
    // const leftAtriumsCommentslen = this.leftAtriumcomments1.length;
    //console.log(localStorage)
    const impressionslen = this.selectedItems2.length;
    const impressionsCommentslen = this.impressioncomments.length;

    const conclusionslen = this.selectedItems3.length;
    const conclusionsCommentslen = this.conclusioncomments.length;

    const doctorslen = this.selectedItems4.length;
    const doctorsCommentslen = this.docadvicecomments.length;

    const getReport = {
      selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
      patientData: this.patientDataObject,
      leftAtriums: this.selectedItems5,
      leftAtriumsComments: this.leftAtriumcomments1,
      leftVentricles: this.selectedItems6,
      leftVentricleComments: this.leftVentriclecomments,
      impressions: this.selectedItems2.filter(impressionslen => impressionslen != '0'),
      impressionComments: this.impressioncomments,
      rightAtriums: this.selectedItems7,
      rightAtriumsComments: this.rightAtriumcomments,
      rightVentricles: this.selectedItems8,
      rightVentriclesComments: this.rightVentriclecomments,
      mitralValves: this.selectedItems9,
      mitralValveComments: this.mitralValvecomments,
      aorticValves: this.selectedItems10,
      aorticValveComments: this.aorticValvecomments,
      pulmonaryValves: this.selectedItems11,
      pulmonaryValveComments: this.pulmonaryValvecomments,
      tricuspidValves: this.selectedItems12,
      tricuspidValveComments: this.tricuspidValvecomments,
      conclusions: this.selectedItems3,
      conclusionsComments: this.conclusioncomments,
      doctorAdvice: this.selectedItems4,
      doctorAdviceComments: this.docadvicecomments,
      observations: this.observationsObject,
      relativewall: this.updform,
      speckleTracking: this.selectedItems1,
      // reportdate: `${formatDate(new Date(), 'yyyy-MM-dd', 'en_US')}`,
      status: 'Report Generated',
      leftVentricalFunctionReport: this.leftVentricalFunctionReport,
      rightVentricalFunctionReport: this.rightVentricalFunctionReport,
      pericardialEffusionReport: this.pericardialEffusionReport,
      IntraCardiacClotReport: this.IntraCardiacClotReport,
      intraCardiacTumourReport: this.intraCardiacTumourReport,
      inferiorVenacavaReport: this.inferiorVenacavaReport,
      aortaComment: this.aortaComments,
      aortareport: this.selectedItems13,
      ivcComment: this.ivcComments,
      ivcReport: this.ivcReport,
      venousReport: this.venousReport,
      venousComment: this.venousComments,
      pericardiumComment: this.pericardiumComments,
      pericardiumReport: this.pericardiumReport,
      pulmonaryArteryComment: this.pulmonaryArteryComments,
      pulmonaryArteryReport: this.pulmonaryArteryReport,
      InterartrialSeptumReport: this.InterartrialSeptum,
      InterventricularSeptumReport: this.InterventricularSeptum,
      InterartrialSeptumComment: this.InterartrialSeptumComments,
      InterventricularSeptumComment: this.InterventricularSeptumComments,
      speckleTrackingComment: this.speckleTrackingComments,
      leftVentricalFunctionComment: this.leftVentricalFunctionComments,
      rightVentricalFunctionComment: this.rightVentricalFunctionComments,
      IntraCardiacClotComment : this.IntraCardiacClotComments,
      intraCardiacTumourComment: this.IntraCardiacTumourComments,
      pericardialEffusionComment:this.PeriCardialEffusionComments
    }

    //////console.log(getReport);

    this.loginService.observationsReportUpdate(getReport).subscribe(res => {
      document.getElementById("overlay").style.display = "none";
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1);
      this.loginService.updPatientDoc((getReport)).subscribe(res => {
        console.log(getReport)
      })

      console.log(getReport);
      if (res['message'] == 'report updated successfully') {
        alert('Report Observations Updated Successfully');
        this.router.navigateByUrl(`/observations/` + localStorage.getItem('pid'));
      }

    })


    //////console.log(getReport);



    return {
      selctedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
      patientData: this.patientDataObject,
      leftAtriums: this.selectedItems5,
      leftVentricles: this.selectedItems6,
      impressions: this.selectedItems2,   //to do 
      conclusions: this.selectedItems3,
      doctorAdvice: this.selectedItems4,
      rightAtriums: this.selectedItems7,
      rightVentricles: this.selectedItems8,
      observations: this.observationsObject,
      regionalWall: this.regionalWalls,
      leftAtriumComments: this.leftAtriumcomments1,
      leftVentricleComments: this.leftVentriclecomments,
      impressionComments: this.impressioncomments,
      doctorAdviceComments: this.docadvicecomments,
      rightAtrium: this.selectedItems7,
      rightAtriumsComments: this.rightAtriumcomments,
      rightVentriclescomments: this.rightVentriclecomments,
      mitralValves: this.selectedItems9,
      mitralValveComments: this.mitralValvecomments,
      aorticValves: this.selectedItems10,
      aorticValveComments: this.aorticValvecomments,
      pulmonaryValves: this.selectedItems11,
      pulmonaryValveComments: this.pulmonaryValvecomments,
      tricuspidValves: this.selectedItems12,
      tricuspidValveComments: this.tricuspidValvecomments,
      conclusion: this.selectedItems3,
      conclusionsComments: this.conclusioncomments
    }

  }

  /////////////////////////////////////

  hideloader() {

    // Setting display of spinner 
    // element to none 
    document.getElementById('loading')
      .style.display = 'none';
  }

  ///////////////////////////////////

  reportFormData1 = () => {
    document.getElementById("overlay").style.display = "block";

    const getReport1 = {
      selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
      patientData: this.patientDataObject,
      // leftAtriums: this.selectedItems5,
      // leftAtriumsComments: this.leftAtriumcomments1,
      // leftVentricles: this.selectedItems6,
      // leftVentricleComments: this.leftVentriclecomments,
      // impressions: this.selectedItems2.filter(impressionslen => impressionslen != '0'),
      // impressionComments: this.impressioncomments,
      // rightAtriums: this.selectedItems7,
      // rightAtriumsComments: this.rightAtriumcomments,
      // rightVentricles: this.selectedItems8,
      // rightVentriclesComments: this.rightVentriclecomments,
      // mitralValves: this.selectedItems9,
      // mitralValveComments: this.mitralValvecomments,
      // aorticValves: this.selectedItems10,
      // aorticValveComments: this.aorticValvecomments,
      // pulmonaryValves: this.selectedItems11,
      // pulmonaryValveComments: this.pulmonaryValvecomments,
      // tricuspidValves: this.selectedItems12,
      // tricuspidValveComments: this.tricuspidValvecomments,
      // conclusions: this.selectedItems3,
      // conclusionsComments: this.conclusioncomments,
      // doctorAdvice: this.selectedItems4,
      // doctorAdviceComments: this.docadvicecomments,
      // observations: this.observationsObject,
      // relativewall: this.updform,
      // speckleTracking: this.selectedItems1,
      reportdate: `${formatDate(new Date(), 'yyyy-MM-dd', 'en_US')}`,
      status: 'Report Generated',
      // leftVentricalFunctionReport: this.leftVentricalFunctionReport,
      // rightVentricalFunctionReport: this.rightVentricalFunctionReport,
      // pericardialEffusionReport: this.pericardialEffusionReport,
      // IntraCardiacClotReport: this.IntraCardiacClotReport,
      // intraCardiacTumourReport: this.intraCardiacTumourReport,
      // inferiorVenacavaReport: this.inferiorVenacavaReport,
      // aortaComment : this.aortaComments,
      // aortareport : this.selectedItems13,
      // ivcComment : this.ivcComments,
      // ivcReport : this.ivcReport,
      // venousReport:this.venousReport,
      // venousComment:this.venousComments  
    }

    //////console.log(getReport);

    this.loginService.observationsReportUpdate(getReport1).subscribe(res => {
      document.getElementById("overlay").style.display = "none";

      this.loginService.updPatientDoc((getReport1)).subscribe(res => {
        document.getElementById("overlay").style.display = "none";

        console.log(getReport1)
      })

      document.getElementById("overlay").style.display = "none";
      console.log(getReport1);
      if (res['message'] == 'report updated successfully') {
        alert('Report Observations Updated Successfully');
        this.router.navigateByUrl(`/observations/` + localStorage.getItem('pid'));
      }

    })

    return {
      selctedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
      patientData: this.patientDataObject,

      impressions: this.selectedItems2,   //to do 
      conclusions: this.selectedItems3,
      doctorAdvice: this.selectedItems4,
      leftAtriums: this.selectedItems5,
      leftVentricles: this.selectedItems6,
      rightAtriums: this.selectedItems7,
      rightVentricles: this.selectedItems8,
      observations: this.observationsObject,
      regionalWall: this.regionalWalls,
      leftAtriumComments: this.leftAtriumcomments1,
      leftVentricleComments: this.leftVentriclecomments,
      impressionComments: this.impressioncomments,
      doctorAdviceComments: this.docadvicecomments,
      conclusion: this.selectedItems3,
      conclusionsComments: this.conclusioncomments,
      rightAtrium: this.selectedItems7,
      rightAtriumsComments: this.rightAtriumcomments,
      ightVentricles: this.selectedItems8,
      rightVentriclescomments: this.rightVentriclecomments,
      mitralValves: this.selectedItems9,
      mitralValveComments: this.mitralValvecomments,
      aorticValves: this.selectedItems10,
      aorticValveComments: this.aorticValvecomments,
      pulmonaryValves: this.selectedItems11,
      pulmonaryValveComments: this.pulmonaryValvecomments,
      tricuspidValves: this.selectedItems12,
      tricuspidValveComments: this.tricuspidValvecomments,

    }

  }

  /////////////////////////////// PDFF

  generatePdf(action = 'open') {
    //////console.log("im looking for")
    //////console.log(this.reportFormData)
    //////console.log(this.getformatteddata)
    this.sharedService.sendClickEvent();
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
    }
  }


  getDocumentDefinition() {
    sessionStorage.setItem('report', JSON.stringify(this.reportFormData1));
    //console.log(this.favoriteSeason)
    //sessionStorage.setItem('report',JSON.stringify(this.getformatteddata))
    //let pdfFormData = this.reportFormData1()
    //////console.log("Stringify Observations from reportformdata")
    //////console.log(this.reportFormData1())
    //////console.log(this.observationsObject[0].value);
    //////console.log(this.regionalWalls)
    //////console.log("checking for observation object")
    //////console.log(this.observationsObject)
    //////console.log("get obs to pdf")



    // ////console.log(tmp);
    var result = []
    var rows = [];
    var rows1 = [];
    var dd = [];
    var dd1 = [];
    var leftAtriumpdf = [];
    var leftVentriclepdf = [];
    var impressionpdf = [];
    var doctoradvicepdf = [];
    var conclusionpdf = [];
    var rightAtriumpdf = [];

    var referral = [];
    var generate = [];
    var valves = [];
    var chambers = [];
    var gar = [];
    var rwm = [];
    var measurement = []
    var lvm = []
    var editImage = []
    var referralImage = []
    var signature = []
    var signature1 = []

    signature.push({
      image: 'data:image/jpeg;base64,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',
      alignment: 'right',
      width: 100,
      height: 50,
      margin: [0, 5, 0, 0]
    },
      {
        text: `Dr. Digamber Naik`,


        alignment: 'right',
        margin: [0, 5, 0, 0]
      },
      {
        text: `MD (Medicine), DOIH, FIAE, DHA, FAIMP(cardiology)`,


        alignment: 'right',
        margin: [0, 5, 0, 0]
      },
      {
        text: `Thank You`,
        bold: true,
        fontSize: 15,
        alignment: 'right',
        margin: [0, 20, 0, 0]
      })
    if (this.lvmotiondata != null || this.m1.findings != undefined || this.gens != null || this.getReferralImages != null) {
      signature1.push('\n')
      signature1.push('\n')
      signature1.push('\n')
      signature1.push({
        image: 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAABhCAIAAABd1JE8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAC+eSURBVHhe7Z3pXxVH+vafmUkAFyCTRE2YmQyCoOICqChRFCVqTFTct7hrxCUkivu+4Qpx3zBgXMBoQlBRXIgsUXFBMTOTmETNKOgYk3kzn/wJvy/nbuvpHLYDnAMHrOtFf6qrq6true+rrru6D/y/f2hoaGg4DTQlaWhoOBE0JWloaDgRNCVpaGg4ETQlaWhoOBE0JWloaDgRNCVpaGg4ETQlaWhoOBE0JWloaDgRnI6Svvnmm3/+85/mNEc51dDQqPdwFkqCd8C/LMjKynr69On333+fnZ397bff3r17l/RPP/10586d7777zrhBQ0OjPqI2KUnRELzD8fHjxzDO/Pnz//znP8+ePdvPz+8vf/lLcHDw0KFDw8LC9u3bN3z48Ly8PLhJ7pVKNDQ06hNqgZJgE1TPvXv3CMru379/69atuLi4WbNmDRo0qFmzZtCQwMvL6+9///trr732xhtvvPrqq3/729/c3d1btGixdetW7pIa4DKjUg0NjXqBmqMkiyT6Bh756quvMjMz0UG9evUKCQmBbho1agQHQTp//etfIaByQLGXX34Z3RQVFTVmzJibN29CT8YDNDQ06j5qgpIIyoi20ERIm9u3b4eGhqKGPD09yycgJJKRKoGmTZtyJL4LCAhISEiAlfQek4ZG/YADKQlNBBn9+OOPubm58+fP79q1a8eOHV9//fUmTZoIs5QFGOeVV17x9vZ+6aWXoC24CQFlXPs9qI2So0ePVntMGhoadRoOoaQffvjh22+/RRaBnTt3Dhs2TEKzUoWP0A3M0rhxY19f3/bt20dERGzbtu3cuXObN2+Gv5BCqCpRRqWCUE72mIgK79y5YzRCQ0OjDsKelAQBoYlEGYWEhEAuaBwhI4M8noF8mAgaatiwYbt27YYMGfL+++8fPXoUIkNb3b1799///jcVInxycnJu3ryZkZERFhZGVZAa8ZpRiwleXl4QU2RkJOW1XNLQqLuwGyUhT+COPXv2EEZBMR4eHuVoIgTR8uXL4+Lizp8/X1RUBIVBRmgr6oGSpEKBkBQFqH/BggVHjhyZOXMm0knexFkBjmvevPm6deuoSmrT0NCoW7APJcEXJ06cmDZtWoMGDcqJsKCSNm3ajBw5ctKkSY8ePeJGJBVHSAcgsiyVlQ6RYN999x0CCj3VqVMn5FLJPSYUGfn9+vUj7qNk+XVqaGg4G+xASXj+smXL3NzcSgZoQhnNmjWDqkignmCi+/fvwxTmT4o4hdQuXrxoI4kQ2VFszpw5aCXiNUjw9ddftzzQwKuvvkpsuGTJkjq6tVQhQWto1FdUl5K+//77zMxMWKDUN/qEbxMmTJg1a1ZSUhIlieyQOfibcbMFErURbXl6ei5duhQSIce4VjaQV/BXamrqwoULU1JS2rVrZ7XHRHvc3d1zcnLq4vcBDAi9o186AtV43lBdSoI+iJJQJQYTWECAhmIKCwt7++23JUCDF1j2rcgI3Lt3LyEhQTaGvLy8oJWQkJCvvvqqZMlSIeT1008/FRQUEDZa7TEhnaZOnXrjxo069DkljFxUVITq9PHxQVr26dMnIyNDf3Wl8fygWpQEF2zatMksTyAFwqhevXrhWtANZUiUxS+QFFTSunVrIju1F06aCK6yAZfIirS0NF9fX/O2OmFdq1at9uzZ4/yfUzJKNHLfvn2QMgGvRMEvvfTSiBEjCgsLjUIaGvUdVackPDw3Nxf/N28hBQQEEJ1dunQJ/YKPlUVGAq5Sg7e3t5lEiPXmzp0rdFYpUBvyCg6ykmzyOeXw4cMvX74MbRmlnQxEtbAzg0YEan4/ADe1bdv2k08+0UKproDVlMliQo1zjUqi6pQEBRw8eBBvNxOKi4vL3r17bdyaZfLy8/PRNeYXZxBcz549S43yKgSqDVbq378/ws1qrx2q4ohcMoo6GX744YcePXp07drVakcMIDy5JPGvhjMDJsICz549269fP+zQ/AJHw3ZUnZJY0omwvLy8DNexvOeKiIiwfX0gTomMjITUjPufITQ0lEtVoCTA0+/evRsfH+/j42NVM3IpNjb2yZMnzvYyC+22Zs0aYjSjoZbf95lfFzCwWVlZVRuQugLpnYhB2SKsQ/jXv/6F4d24cWPy5Mnh4eEvvPDCtGnTdLhdNVSdknDs9957z9PT0/Aby0uu8+fP27iXjAnm5eV17tzZShfAceD69evVIQ4WK8K0ESNGwEpKgqGbmjVrNmfOHGqGtoyitQ1MGWaneYqDCNzat28PK0nL0Xfjx4+nR8YN9Q6IZQl2iNa/+OKLmJiY48ePQ9PyzZqTA1sSPlq1ahXu0LBhQ2YNBAUFpaSk0AtnW/+cH9VSSZiOh4eHOBKAnmbNmmW7SiJaefz4McLKuN8CPHDnzp3V90BM/Oeff+7bt69ZbmArMGCnTp2Sk5OdxMkhRyJNtf9FC6EkZD/rLZmwc6tWra5duybyof4BjwWMQPfu3f38/HBpVhFWjujoaK46f69ZgBMSEpYvX+7i4sLcySQCuoBrLFiwwCinYTOqTkng9u3bLVq0UHtJTMmgQYMIoW0MMVgbDx065O7uLreDJk2ajBw50kadVT6kDR988AHxGtUaD7AAc2nUqFFmZqaUrCZ4EKia80CLxJhmnUh6xowZaP6DBw8GBwe/+OKLe/bsqccSCYmxevXqP/7xj+YdSQyJCRo8eLDty1vNAwWUnp6emJjo6upKg4HRehNmzpzJ3IkpatiIam1v37x509/f3xh+C7p06VJUVGT7HBDocZfZHD/88EMM0S6zyPKL3Zw4cYIV2LyvxOPAjh07qrlnAaU+fPgwPz+fCJSIo1KxhiVYKd7d9/HxkZ141ByyKDAwEKKnHqIYEnFxcXYhaKcFcy2vOGRqzOjTpw8D65xfijIpp06daty4sbe3N0rWaPHvgd7H8JyZVZ0T1VJJTEx4eLhV7EaUYaNnwjuXL182Sxick1DryZMnRgl7AN5hpWrdurXxDAt4EEr72LFjVXstgiaiztOnT/fu3ZvaoBUGISoqiku2kKlEK/369aOz8iqQ9sCS8+bNQxwpDmIYpaSc1kvAOKNHjzYrZQWEEiG2Uc5pwNRfv349KysrIiIC02XWjOb+HiwwACWuP76vLKpFSawAV69efffdd415sHxVtH37duOyDUBlYHbqk2vULy6K+DIu2wNwxK1bt+TVnvmncFjMnDlzKFBZn6c8Rjls2LCwsDB5TYZd0nL6npuba4sJoqd4NGustAQQr61bt84J3wY6GvDv7t27jVH4PbAK0Z5GUecADR4yZAjzTvhvNLQ0MKGbN2/GvDUlVRbVoiTAiI8fP17thuCZixcvtj3yIspbsWKFisPxbYjj8OHDdgncFFjZsKQjR46Yv+3moa6urvHx8ZV9+0bbMLXQ0FCpRwEXGjx4MLrPKFcGUG3EkhRWvSZeI0h5Pm2X0aDvanffDNw+JibGKOccwIoSEhLMmwBloXnz5pQkhmA5tK8x13tUl5IwqdTUVEVJBCADBgywMfIiaLp9+3ZQUJBSSSgX5tJBL5gQXyhts/XT2qFDh3799de27wEBLAwtM2jQIG43KnoGhNLx48fL2aLixjt37iCv1CfadJl6zp079xxSEiNZUFAwcuRIJkXZgAC+9vLySk9Pd5JhoamYKyYUEBBg1tplge7Q/uDgYO5SkbiGLaguJQHZnhT1gYNhXjYuC1jbtGnTGjVqJLMIqIQ4DoJwxMJy7969kydP9urVy8xKPH3evHmVfaX16NGj6Ohoqxd5gKhzwoQJ5exoEoYsXbpUMTggTY6zhSc1BjyWwT948GBgYKDVsCxcuLB2h0WMUHb0WEh++eWXqVOnyt6fjZDCV69edYQ911dUl5IY6ytXrkBJYk9wCg6P59syB7huSkqK+YUF64+/vz/SyUFbKugX4O3tbTzPIpS6dOnC42w3GkoirJo1a6YiLzNQT6ylpbISFIwa4onqRkgNxYS5O6i/dQXyenHmzJkNGjQgIm7YsGHnzp1RyrUyLMwvRMnTaVJhYSGEsmnTpvnz5w8cOLDkIlQ+cAcfH5+8vDzbrUvDDirp7t27mBSOLdOAUEpOTi4qKqrQnpinU6dO4dvm/Z25c+diBw6aQqqFLLp27aqeSKJDhw7YX6We+PTp08GDB5cM3IC7uzssU+r+FJTUp08fMWtGic6+8sorJ06cKCfQe36AGEETYQ/M/q5du9LS0mr4C3sMADBHly5dImD89ddfIyMjsWpPT0/mlMkyryW2QMzjT3/6E51yxEZEfYUdKImJvHXrVo8ePeT1E0rHw8ODhcW4XDaY/uzsbPNM46Isj6xRRgkHgMp79+5tfl1Cmi7Y/lCc59ChQ66ursb9Fl4zUhaEhIScOXPGimjwtzVr1qjYhERMTMyKFSsePHhglNB49vaznMi3+mCuOcruIXNE2HjhwgUicR7NHOXn5/fv3x8aGjNmTKVitJLgdrg1KSlJT3GlYAdKAtjQf/7zn759+zITqAAoZt26dSx3MvFlASNAq1v9Sg7V4NAdhPv3769fvx7SNB5p2U6Kj4+vlBtgx0FBQXI7gWfz5s3NXxhgi61atTIv8lR+8eJFmIsOyi1Dhgz53//+x6VaiU2eNwgNsQRikMwLlpmRkbFx40aMjRic5WHSpEkIWDQRcychuUAmtLJ47bXXMDBC+NrdC6ujsA8lMeVgwoQJ58+f9/f3x/EaNmz4wQcflO9vrB6ff/65+f1F48aNJ06c6FCVhFFevnxZqEEAQdByLonhVgjsDFJTP9zHiFkJDx8+7OfnJzlQD+n9+/fjA3ILbmD1QzZvb2+9xWBfWGzw///NchlbJotZIE3oxBxNnTqViLtt27bYJ9PRtGnTwMBAFlFoyGwSJWGW1eUAW8IeunbtSuDJ/N7R/1Ww8rAPJQFcnVlXW9143dixY3FFsYyyEBwcrByVCA65QSjnaN1+9epVHqSiLVoLxdj40g2Lh9EwO9kpQBwNHz783r17iK/WrVurL1bgWYxYdhCoGRXGLXIJ8MSoqCi9hFYNZosiDfB8poBTZoHJRbAz5jk5OSyQjHyvXr3gHR8fH+SwGJuSPySsgm5OyZTJZdVxd3fHRN9++20kD7MmZcoCfIQNEKylp6dXaE7SCzlqpWyG3ShJoF6dsAqFh4eXv3H75MmTVatWyfQDpnzTpk02UkN1gAW3bNkSA+KhYpGpqanGNRvw+PFjJA930XIMHYaiQpbiM2fOdO7cubgnlmoJSI8dOwYrXbp0Sf2QDaDq1Q/ZjBo1SsBCNQb14LGSZq1CQTPULHWgqKiIzOvXrxMUL1iwAOoh8mJ458+fL389mdGWQExGviwwWUgktBJHFhXskCDuo48+io2Nzc3NffjwIQ/99ddf5cdDpQIWAy4uLjt37pRWCctgGLQcGwBqugkbWY1YeiFQ8ilPFPn06dMbN27oXSdgZ0oCDD0jfvz4caL0cvQOc8YcwAtCDSxf7777rop0HAqMAINTL3RJQIU2ahY8QX17zY0siZisuhQREaF+JkIBYjdGwOq3I/T04MGDsqprKN4hwQLGcFn8t/j1P9OE06akpLBKweDwAmH++++/T+SFqRw4cGDMmDFwPaoc0vHw8BDS5wiziFGZYaWGACW5i3tFMr/33nvM19GjR/Pz89FZtIQ2yB6C0AoFmFPj5t+DStasWbNy5Uq58dGjR6xDW7ZsQalRG+nFixdDNydPntyzZ8+iRYvk8+B+/foNHTo0JCQE+YZqpi+rV6/GBXiWjMnzCftTkqDCYWWacWaWI2NW33jj448/xgSNy44Ednbo0CG1d9C0adPu3bvbwhHYKOue+vYaSkIPGtcsazgr9oABA6RazHTGjBm//fZbZmamehaL9oQJE2pACToJmGXAKsXQAdJk0n3SMtfQEG6M30L0TMrEiRMpvH379ujoaCJiRgw2Z3bat2/fokULwiiJfyVAhtwZWCuuKUk9TBblvb29CcSgIfyfHIiAamNiYpidK1eu0BJ4RHaditttabkkBNgM4svNzU1NpRlkhoaG8mjsedSoUYhlmo3agsLQ47CPq6sr0phHw5UE9bJ/quQbxegL5SlJkGg88nmFoyipQsBZFy5cwDhk5WG9GjFiRM2oJKztyy+/VPvTwN/f/+bNm1ZWWBIoKfO315hRYmKimctgJZxKCmCmgMXzrbfeoiQ5GGKrVq3QhrL2lg/lwOZWkQY4rTi5XJKjFUrNLIkKi5kLqMcBaYBqA0zNkUxJk8n8IhspAAHRXyQDKxDCGQpAWhIEnT17lkVoyZIl8ucQ8EbcFaeFeoj6SWMYDKCMW/Fw/x74v9IskmaFgHGwKFydCiEFdEebNm169uzJgwir0SAsIfHx8QUFBcwabYMWpbU0u3zQNYxz3bp1PEvtGJohGk3WKhojbeNopki6g22QIxZCI+lpQEAAo8E6h5FgG4SKz7mCrjVKwg6wTqZH5gzruXr1Ki5tXHYweBCGLhYvT79165ZxrQxgkeZvr0vVO6z5rPaK7Kgf9xBjBZiy/Psmo3QZgPiISqiZJuHVoiOys7Pl7wTgQhw3b95MXKP+yTh10qPHjx9j0+RLDl4EC0ANalQZc9hBeF9kLE+hQgpzKjVzF/VA0KgGcqQ8BcgkAOFIGWIQiu3YsYPbL1++TP7u3bu5hDuZo5Xly5cTm3Tr1o1BQCYgTOAdcUjhIPFMYR8xgwohKoMhhXEQIPIP35k+RBBBEMN77NixjIyM8ePHHzlyhEbK/32RqJzWkkNP6RRDAYoHpTKghmvXrvXq1YuWqGktC2InFJNtdYQeIzBt2rT09HSGBQW9bNkyiJK2Mc5MdFpaGvVXoVX1DLVGSRgKcyCrCsBkESC2yAe7ACcnLlCURERw+PBhmmRcLg14JlKfpZjyOIboHXFsM/AB81/aVMAJeWKFfIRppqamsni++eabGDG2S7yAzoLmFixY0LVr144dO+LMLi4u2Dd1EieyxhIsEOyMGzcON4CtRo4cST63b926lVAC6v/5559p//nz55GHK1euxA2++OKLxYsX4yE9evRgIuQziP37969YsYJ6aP/evXsHDhzIVRAbG0tL6Pvs2bMjIyPDw8OZOKIYGoPLURhqIFOiFXIkWlH7OwJJl0M9XFLcRGHSdJAH4c8kOIXa/Pz8Zs2aRb+Sk5Px5OnTp9MpaOL27dtwMaOHS3OkL8K8Vh5efYenWgZk0qRJzDKtkpYLaDnNxjawK4aC4WLwx44du3btWiJ6FgbYHNKRZUakkNgPreKSJiNBrVESmDt3rmhgTE3+WBeLmFxyKJh7uG/evHmKknB4vBqzMEqUALcgHAIDA6V8WXpHivmW+BuJmCm+hKAoSWFm0AAKQEYMiEQrwoAYuggu6lEuLY0nk6P4hsQ++LBkcsSN6Rolp06dSg6+TQ70ERQUJB/myL1kspLTbI4U5nFURQPk6VKMHC5RuTCLgLRqD5UASahMgdUpkL4AClOt6IjOnTtTPw/y9PRkEGJiYgi1jh8/3q1bNyImAr2srCz8GeoRO2ESGS5cnWEHMoaOBo+D/pCEzObo0aOxBAZKBpzhoqdTpkzZtGnTwYMHaZsoVqiTtFUja6zBdQ61RkmI/6SkJEyQucSyP/30U/XqqgbA06OiotSmAFZ14cKFclQSPoAzIEzwIu7CFsvSOwgQ1kZxZgU6iAZEmhmFygCtWrhwoYQzdgQ+D8z0USqEUGxEyaqEqqQSHicFhMI4MiCMG9qBCKt169ahoaEbNmyAfd555x18eP369egIxh/eSUlJwdsZKxlhiWUYVabAqdwYlqGFrEx0B0o9efIkJoSGgq1E7Ivwcao21wnUGiWx1BBZCCWxKhJo1IxEAlgJWqZdu3biPzgPS/ShQ4fKsR5cYs6cOYosCHDK4i9caMeOHdIvBRyybdu2FVonrkhJ/Nm4zWEolZvIZEBkTAQlWYY0ioB8RowECovoDJbx9/cPDg7GM8kk3IN9mjdvzi39+/dnNAiKiQ3h8cTERAaB2BbXhXSgIflxGe4t+zsieWQ0KhwuZwCsRC927tzJglonGuz8qDVKevLkyYoVKxAdYvo5OTnlb+XYF1CM/Je3Ys+z+Fs5/x0AfaS+RaKwu7s7cVA5rU1NTVUyQYADIwPLElYKeCnULCGbXUCbaYYwKREcNdNlWIPmkcngI1vgDmiFHFExERERbm5usAz5RNPEd9ArWoa7qIpbaGFcXBwKF5YZPHgwLAPF3Lhxg1GCqSEXWCYzM/PSpUvwPpGLbJrIUQbN7Lqk67on19hS+pygdiiJxVB+hirrMC6xdetW41qNAP85cuQIbmbx3GKWGTdunGyIWkHWcPUtEk4u316XtRMP71j9LVScf9KkSagno0TZwGPXrl0L8ZnpzAyIQ3Z2ZPMIlmHoEJvITMiCTApYChpgeCHT4cOHjxkzZvbs2QQXsMzKlSsPHDgQGxs7ZMgQVoVr165RYOPGjTQbHmGp2Lt3LxRDPn3Zt28f3S8sLIRlsrKy5E2c8AtjKEeJUMQzJS2SBxT3SkOjMqgdSsJkR40aBRHgNviSj48PzoDpG5cdD7zl7Nmzyvl9fX1hmTul/UgSPWXe34ERKvz2evLkyYrsAL3Lzc0ttfKSQID84Q9/IMpTLAOt0EiaymmLFi2mT58OmSLx4JHo6OhTp05RMyQCdxA+WHEZqmfu3LkwC2wLZdAXHiF7dpKGBFkeuCo9glA4ykQwRJplNCoLrBGwUGE8VfPo2qEk/EGiG9ymye9/llEzYMiOHTumNqEbNWqETMA5jcvPgK9mZGRAChKyQRAVfnvNfOzevZt4R2oGrq6uixYtsmV6cP4HDx58+eWXJKAYYsnt27fzaAIuQDzFKcEdrYJleBB1yuaLBESMakBAAGoOYmJsuYX4Kzs7m5KlUonmFw27oHilsnx7gRcfPXqU2B9BjSqv2peGtUBJ+Bu+pL7x4Wj+WUaN4YMPPpAgCOC9qDYyrbwU55d/1yVlbPn2mqtA/cdNCIVAD6IRAWILpH5hGegPTklLSyNuioqKMqszq6ZySmsTExNRWDQYSho/fvyGDRtEDWloOAJYHatjXl4eMQfifcyYMR06dECbY/YuLi49evQQM64UaoGS8M/FixebQyGrn2XUABAOycnJSsvQmM2bN1vJH5zZ/HcgX7Ht22vmgNiKWZG7QIMGDT777DPjcuUBQzHxMrUV7qQyjESgEs2hp2znQQ2NciDrnzI/TjFLZFFBQcGlS5dwYSKJ1157jTBC4gmAVG/fvj3WKPfajpqmJNqHnKPFErXh8LXyM1R8lQFFUMjYMY5WrCEb8KqdjLUt314DpEpCQgK3CNBW/fr1e/TokXHZ8aBrlTUCjfqHCm1ACqhiJIhdOMI7mJCyInyT5ZBTDDslJeWXX365efMmsj03NxcfadmyZVBQEJRktYkp8PHxEclfKdSCSnr69CkxhWzQEODQsSq0u5pgfBcuXKhUUrNmzTZu3Ih8My5bNpvU34GkqS1atKjw22sBtDV27FgoTGoGhHvXr19Xc69RP8CEmudU0sqSORV5i4eLk0sB2VuRYrLHh1GRoADFyMT/yeTIqRSmANbIqdn8MGC5l3x5kHoEmaSxQ8qgmqlc6gcsjeiaoqIiLnHKU6gZNQ3LpKenwzLcRW3btm17+PAh8ic7O3vv3r3vvPNOSEgIrurq6jp48GD5jgTn7du3L5KiVDISECsQzfEsabONqGlKYoyOHj0quzN0xt3dHeo1rtUgmDZkkRpNGCQsLExsArAyxMfHq5CNq5zaIuWwIaawkek/00FqMJTe0HFCiAMLVFolMAYJloUXhCnwLk4xHnF7fJvAhCOOTYLM5ORkVlw8/NixY1euXKEwHi6/kc7JySGgPnDgAN7+9ddfr1q16tq1a1lZWRcuXFi0aJG81li3bl1SUhILGOlx48ZRz8GDB7ds2fLRRx9RPwnoA5og88SJE1QOayxevBjG4ZQW0gA4hfS8efMmT54cERGRmpo6ceJE8j/55BNKUqe3t/e+ffsGDBjw5ptvwik8ERUvkZeXl1evXr3Q9VBPly5dSOAgeIEszAKCBsiIfIkeygeOg/iwDGclUKOUJD7fqVMnwk5aDNfK/yNhdqVAjQF+mTZtmiIdJuPcuXMSlzF/zHTz5s2ZJC4xH5GRkdic3Fghzp8/z12K7Jg/7AmjMTuAhoNgxTJALTOSlhWbRLFmsAQjrJHQQX5+PkxBjvDLyZMn4Y5NmzZRAK/GVDAPohX1F5127dr14YcfEstjJ7t37+7Tp0+7du3QEQ0aNMDbcUVZdHF7TMvFxYUEmbgxazBpDw8PEvKBOwXc3Nzat2/PvXgEGsTPz4/C8omMp6cnJkSayqmne/fuSA/cB7Ps2LEjhbmrdevWlMeVevToQSSF9pfP4sjkyAKp/t4Lj+MRcI00T7iGUzPLkOYoaWXGQHxW8hWkgHiKvOrlKZYrxfXwrM8//9x23xHUKCUhFsw/y6APx48fr2yLqw+sEx4cPXq0jD5g4onjlPkmJCTQSMaXseZ48eJFWSorBDWzAMpHlQKmEN3L4maU0KgkGFIjZUkD1gxmiiNpElAJCkLeabKoEJsgRp48ecJVctAmDD42RmBCEIEoIE3iv//979y5c9966y10DdohICAAqYK4wCqYcfmcHeeHaDjKh+84GP7GqfJw8ToS5hknE1CJ2XvJ4UimnAIhAskXkJYC5hvFAsmRwoBMebSkVT3CBZJJgzkVEqSA3EIjORVmETKCucinC6SBPIh7pQw34gVchdTg2W7dulG+TZs28nE/QyRjgu9Asqy7cGJgYCAjJg4OV0ZHR1chPqg5SsIUWHDorYwaY4G2ROUal2sWWPCYMWPMljR16lSWROyYI0G1ED9HLPXnn382bqsI+AAeQuCtrIoamEg0vFFCo1wIy4iWgXQ4omdZD9AyJGR20LCsHwjPM2fOsKQRjyAxiGUglEmTJnXo0AEXmjBhAr7Rtm1bfI9MJgJPY1K4hNsgN4YOHSpOyyUmiEukybF4dzHwT46WOTSohDI4oY+PDy4nTEEB8XOegmHzCORMq1atSFCAHPQO5EUZWAzv5UE4Kl49cOBAIiPKIHAowKPDwsI4ksOxd+/eL774Im5PGWojh3vhSipHBNEvCIJ60E2ERRzJRHBBDdAEt4wYMSImJiYjI4N0bGwslwjHUPpLly6lnkGDBm3YsIFlEklFOjExkQGBZegCw8joIQkRiZmZmeh9xpYIFHsuKCjAf0+fPs1RvvinCzt27Dh69CjT8fjxYxYDZoRIk1lj8OH6KVOmMH1qmbcdNURJ+CpthU0VC8ikEjYbJWoQGPeePXuwD2kJwMiYSOyeqxi9+haJKWT9ZD7kxgpBNz/++GNCcakWYJerVq3SKgk2MVLPxI7sfWDH5CBaMWtGXv6i05o1a1hdrf6ik9ANboOL4pD4IQmhA4wKyMpPDke4g4Qs+xAHR+yNzGKysRCNzD7zC7iEM1M5VEUZHkEZCpBJRIa74tW+vr5YLwVQVXFxcUwrlEExqE1+VwwFjBo1CmZEssXHx9MYFjl6N336dC7l5eXhzxAE6cLCQnoKz3711VeMwPr16/Fk+ksf0Xd4OBJv3759sg/FQH322Wc4Nos3TEEO9aMEGRzqYf3jXggCP9q2bdvVq1e5xEMpRoXcRRyK9WLwWKb8QRWOjDymLtRPDRRYsmSJfNZIMVkDeC5XmRq1EnCJBDXLjTwFGiLHMqXG/HLkqigjnkJhy8XKoYYoiaFftmyZ2VdhgeXLl5tfctUMGO4bN26w+LAkSkuwQvUNJKNp9S3S7t27mRXj5orAfADslXtlacXiMWXMyChRr4FFAmyXNIPJispocCSNgTLyjCROghfheHggyymFDxw4QDzFospw4cn4OYxT8i86yZFTBU5Fqki+RCvMHeMvCoiZJc6S+YVoZs+ejdAgAEFcvPvuu9zL1PDolJSUc+fO4eGrV6/GDGg8rkvwjpcikJOSkvLz88nHNvbu3UsXQHZ2NhE6zgwF0DV6TTe5kTRHCiC0mXS6jOWLh8slBoQjp3JkZBgBjqRxcskHFBMKIKEyKcZRnQLSUoyncGquXEEKWGUClcNdgBpKLVY1VKeeGqIkhptJQvSKMaFBwsPDmSrGyyjhePAsmnHo0CGsX5EOgHfkG0jaY/UtUjl/F6lUMBOYKRaPe+An1MBKu2vXLmzUKFEvYDY4Uewsm9g0I4yL4jmIhc2bN7P24pb79+9Hgfbt2xf/3759O1wAXyAxsAFIB5MgmGLAyRThLCxjmRnjT1kLxcAslOzUqRMLGyUJWFS00q1bNxSKilaQpdAcqoHARP4SE5OC1yE0mF9kAhNNs1EuzAsyQTpC42k5oHf0SHI4ireTabZVKQaM8xKgcDlXNcpBDVESc4+CFSLA4DCv9PR0WTccCmUWKNWzZ89irGLQFoMvBqyhvoFkoavat0hmYKx0Fp/8/PPPWVTfe++9OsdHVr7EKf6MG5OmdxwZTEJRlA5RDGHLgAEDEBRr165F9bz99tvwCNoElpH3RBwlCubI1CMbSQvpC0hDQ8JKnArLhIaGEhMBTAWWWblyJdR25swZRBYylschWwhYJFqBZSARZop5pKkivRl2Wo6NCX0U9+QZy8ipVTc1nAQ1QUlY8JEjR8QuAcQ0b948CTgdDcwR52GdRByxJuMSZmcw8w4WbPUt0tatW6vMJuLAeAh2L27shBCfVF4KEDtMFtJGdiKQPNA0yuL06dOoHgQFMoRwOzo6GsqAOOAXeIQEqkfEDkPHICuxw5EcOcL1DDhHCqORXVxcKN+9e3fEDrZBPqKG6B4lBddAPYwb5EKIxHNVgE9rmSxhGVktzCxjhVIzNZwcDqckLJtjcHCw7LBgxCx6mJRYkn2hTJAEpAAZsYr26dMHfvH19WW9Fd8Awk14xZYtW+AdjFviShFQhHKRkZE4p9RWu6AvMoaVhYwGRyCjTT1qy4MpgIDwdtQcEQ00dOXKFahnxowZYWFhCxYsgKBJQ9mibho0aCB/0Y3BZIhkoNR4CjgV0uHIGDLCSCQIq1WrVkFBQYippKSk1q1bb9y4EV2DvKIBtAQCSktLowFPnjwhR9opzVa90Hh+4HBKYr1lUVUhG6q+Ut8imS3SYqXF3oXJcpRLEvaL0woNFRQUpKamfvrpp5MnTyZwgATVci3AVQjfUGpIJ9WS9evX4z9clcI3b94UpVOLoG308YsvvkDlSWiJx5IjGkGxjIwDmcX3WEYJMi0sLMTVOVIAsUNfPvvsMwh69erVlDl8+PC4ceOIUgMCAhiKUaNG0XHUCrMjL8vhHWgFBQSseEcAv1OMo6ThHY5wOhQ2ZcoU4lamAI6LioqS3wDDOLQKBqTZom7UJEp3LG3XBKThSErCvHAkTFNIAdvF3GfOnGkO2SgDxLvklKOZZXBCPJMcDJpiksa1EPaXLl06f/78gQMHSBN8saovXLjwnXfeYX1mocZhOMpzzcDZRo4cuWHDBmpTbky1OTk5svIDT09PGE0u1RboL44tEU3Lli1pz8cffww95efnZ2ZmwrywjPyACG/HyT/55BPEztWrV1E9e/bsGTp0KBQze/bsadOmDRw4EL6AcEW2oFk4Uq10FsA7VqxdDqgKyYnsXbp0KafdunV76623VqxYwXRAncwa00HbmEraxiBLWmZWYE5raFjBUZQEcbBK5+XlYbLy3gTgDJgpWh2jhA4gAkwW2kKSoOQfPHjAugo14H6ccu/WrVuXL18+duxYzH3lypV9+/alNvyHhV0+ccKL8K4ePXqwSsMjPKJU7+KUTMoXL/peXjyFNigeBLiN+e8iEVzQJEVYNQ+hY9weNqfxNIm20X54hDGEVUeMGEEgTN8Jptq3b488YUwYH0hfuqlIWXi2JDWXCp6ltI/cwrN4Srt27TgKo1GGJYHJQnwxSrJUcIQWLcyj6UajWnAUJWGjAwYMEEeyWHsxOB0yZAgrOUs9vADLEDuEh4eznq9Zsybk2X9DbdSoESyD9QvLcKSAhAZSDxBPo7CclgpcCBflodxOyUGDBu3atSspKclqZ51Tq2+REhISJFCqLZijXQW6IGxLv0hwJBP2katAcsofEwUpLGAwGW3oj7DLz8+PgLdBgwYdOnRAak2fPh1pBt0gQhMTE9PS0hgZGFzaCRlpGtKwLxxCST/99NPOnTvxbcPkTWDdxmdY6uEX3EBYhiMeIvvfNnpUSSgh0Lhx8f9c7dixY/fu3fGo06dPI7hu3bpFQAFRGk18BryLOIi7xEURBZX9FsnuQCKdPHlS3g9aOlRFCIXBWRzpF4zDEXCJAQ8KCnJzc4Ov0ZvIq0WLFmVnZ7NU0AACwFOnTiGCkLRIRSEgdKVoN6A5SMNxsCclYanEa1gweh7SMS/gZuAhVeYdM6iE5R3AJhy9vb1feOGFmTNnxsbGIsRUQIFfWRby0r0IT1PfIgH01I0bN7jFuFxLIKRt06aNNKl8yCAzAowqgyAfH8ony3AQ1ExAumDBgk2bNp04caJnz55btmy5ePFibm4uy0ZcXBzDQkIGirlTAyVRraQ1NGoS9qEkbBcmgghQHLNnzx45cqRV0GEjZGE3TiygHvyNtZ18CetwNsIx3A9v5HTGjBl44Pz581nhx40bx6ousDhXBR6FN+Kr5qYiHFatWqXkQK1Amk0Ya7TJBBkcCJQu+/r6BgYGdunShTRDQVg6a9as7du33759G6H36aeffvnll9euXfuP5XfwVCgKUYJWHkEf4R2OlnHS1KPhLLADJYllFxQUjBgxArKQDaByIBIJTsHBmjZtKj9o4iixm/zCgEqCg4PDw8MnTpzI8t65c+c5c+agvDp06BAaGrp06dILFy5cvnwZjfPbb7/BgxAioBnygrlC4ISIgq+//hpZREukYTydh3K1dikJQCKDBw+Ga2iVRF5EwSigdu3aQT2TJ08+cuQIjYR9iDGTk5MZB+IscuBiGQpyFNFoxtGoQ7ADJaE15P/rEymIb5eE0FCTJk1we3wMxoGGCLJWrFhx/PjxBw8eLFu2LD09HXKB2pYsWQJZSECBc7KwQzSFhYV4IDl4HTm4YlpaWu/evSkpv2OmvNGgiiBRCfJh2LBh5g0vmoerl9xvqnlAlwS/UA8Krlu3bhJ5ZWRkFBUVwTWMgISWcI30RdKS0NCo06guJYlXREZGyvZwqSDQQOB4e3tHRETEx8cfPXo0OzubVV1+JYCDUQMLu0RbsA+npb5RJl9ypDwaSvaAOfr7++/cuVP2j6RwOYDRYEPUluIjiNLDw2Ps2LG285qjIcwrPxOV7XbRblZjoqFRz2AHlYR+YT03v+xXeP3114mM0ERXrlzJz8+Hg8w+X2XvwleRV+Y9IJSXm5vb8uXLy4m5eJx8CUXQBwfJvgyAMfv164dAu3XrFkRglHYmaBrSeH5gB5WUm5tbVsiGtxOXEXFAIvbyK2IW6ANRVlKXRUdHE9fIbq4VRIURFfr5+QUGBioClXrOnTtX6l0aGho1DDuopKKiImIodIc4ucLLL788ZcoUZJF9F3nIpXv37iU/ekL1vPTSS126dIEEYUAIiNgQ4YOIQxkR+/S0AG0lG1uABLcguChv1K6hoVGrsM/2dmxsrHpvJSBkCwgIsPvPMmA3HhcVFWU8pgTQayAmJmb//v2zZs3y9/dPSEiAGceNG9e4cWMzGcGY8FfXrl3vWP7LlfEADQ2NWoUdKAls376dUEg+OJQ9Gg8PD0f8LAPugOPUnzopFTQAKcRR6ImGNXn2p5oAZMQpdOnt7Y3gIpSr9Q8jNTQ0FOxDSQ8ePLh48WL//v3d3Nz8/PyGDRs2efJkR7y9QiXl5ORASZBOyb2kCqG226kkLy/v3r179g0qNTQ0qgn7UBJAcfz444/Hjh17+PChbM046INDnkKotXTpUoRYSEgIkgcpZFBOGYC85GtvV1fX5OTkCxcu2H2HS0NDwy6wGyWZ4WhvJ3yD9WAWZA4k2KlTJxFNJXWT5HB17ty5cXFxKSkpmow0NJwZDqGkmgEqDHKRT43mzJlDOCZ/vw3dRICGLGrcuDHHyMjIKVOmPLX8D0u9ja2h4eSow5SkANE8ePAgKysL3klMTGzZsmV0dPS2bdsQUBBWYWEhZRwURWpoaNgX9YGSzLh///7t27eLioqEg2ArHaZpaNQh1DdK0tDQqNPQlKShoeFE0JSkoaHhRNCUpKGh4UTQlKShoeFE0JSkoaHhRNCUpKGh4TT4xz/+D/0I18SFQrkDAAAAAElFTkSuQmCC',
        alignment: 'right',
        width: 100,
        height: 50,
        margin: [0, 5, 0, 0]
      },
        {
          text: `Dr. Digamber Naik`,


          alignment: 'right',
          margin: [0, 5, 0, 0]
        },
        {
          text: `MD (Medicine), DOIH, FIAE, DHA, FAIMP(cardiology)`,


          alignment: 'right',
          margin: [0, 5, 0, 0]
        },
        {
          text: `Thank You`,
          bold: true,
          fontSize: 15,
          alignment: 'right',
          margin: [0, 20, 0, 0]
        })
    }
    console.log(this.getReferralImages)
    if (this.getReferralImages != null) {
      console.log(this.getReferralImages)
      referralImage.push({
        pageBreak: 'before',
        lineHeight: 1.5,
        columns: [


          {
            text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
            alignment: 'left'

          },
          {
            text: ` PATIENT ID: ${this.patientDataObject.id}`,
            alignment: 'center'


          },

          {
            text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
            alignment: 'right'

          },

        ],
      },

        {
          lineHeight: 1.5,
          columns: [

            {
              text: `AGE: ${this.patientDataObject.age}`,
              alignment: 'left'
            },
            {
              text: ``,
              alignment: 'center'
            },

            {
              text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic} mmHg  `,
              alignment: 'right'
            },

          ],
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `REFERRED BY:  Dr. DIGAMBAR NAIK`,
              alignment: 'left'

            },
            {
              text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
              alignment: 'center',

            },
            {
              text: `GENDER: ${this.patientDataObject.gender}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
              alignment: 'left',

            },
            {
              text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
              alignment: 'center',

            },
            {
              text: `BSA: ${this.patientDataObject.bsa}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `BMI: ${this.patientDataObject.bmi}`,
              alignment: 'left',

            },
            {
              text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
              alignment: 'center',

            },

            rows,

          ]
        })
      referralImage.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] })
      referralImage.push({
        absolutePosition: { x: 100, y: 250 },
        table: {
          widths: [400],
          heights: [300],
          body: [
            [''],
          ]
        }
      })
      referralImage.push(
        {

          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2,

            },

          ],
          margin: [135, 10, 0, 0,]
        },
        {
          text: "REFERRAL IMAGE",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        },
      )
      referralImage.push({
        lineWidth: 10, columns: [

          {

            image: `data:image/jpeg;base64,${this.getReferralImages}`,
            // alignment: 'center',
            width: 300,
            height: 250,
            margin: [120, 0, 0, 0]

          },
        ]
      })
      referralImage.push('\n')
      if (this.referralComment != '') {
        referralImage.push({
          absolutePosition: { x: 100, y: 520 },
          table: {
            widths: [400],
            heights: [30],
            body: [
              [''],
            ]
          }
        })
        for (var i in this.referralComment) {
          //////console.log(this.referralComment[0].comment)
          //////console.log(this.referralComment[i])
          referralImage.push({ lineHeight: 3, columns: [{ margin: [150, 0, 0, 0], text: 'REFERRAL COMMENT: ', bold: true }, { margin: [0, 0, 0, 0], text: `${this.referralComment[i].comment}` }] })

        }
      }
    }
    console.log(this.editedImages)
    if (this.editedImages != "null") {
      editImage.push({
        pageBreak: 'before',
        lineHeight: 1.5,
        columns: [


          {
            text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
            alignment: 'left'

          },
          {
            text: ` PATIENT ID: ${this.patientDataObject.id}`,
            alignment: 'center'


          },

          {
            text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
            alignment: 'right'

          },

        ],
      },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `AGE: ${this.patientDataObject.age}`,
              alignment: 'left'
            },
            {
              text: ``,
              alignment: 'center'
            },
            {
              text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic} mmHg`,
              alignment: 'right'
            },

          ],
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `REFERRED BY: Dr.DIGAMBAR NAIK `,
              alignment: 'left'

            },
            {
              text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
              alignment: 'center',

            },
            {
              text: `GENDER: ${this.patientDataObject.gender}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
              alignment: 'left',

            },
            {
              text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
              alignment: 'center',

            },
            {
              text: `BSA: ${this.patientDataObject.bsa}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `BMI: ${this.patientDataObject.bmi}`,
              alignment: 'left',

            },
            {
              text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
              alignment: 'center',

            },

            rows,

          ]
        })
      editImage.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] })
      editImage.push(
        {

          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2,

            },

          ],
          margin: [135, 10, 0, 0,]
        },
        {
          text: "SCREENSHOT",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        },
      )
      for (let i = 0; i < this.editedImages.length; i++) {
        // console.log(i,this.gens)
        if (i % 2 == 0) {
          editImage.push({
            lineWidth: 10, columns: [

              {

                image: `data:image/jpeg;base64,${this.editedImages[i]}`,
                //alignment: 'left'
                width: 200,
                margin: [30, 0, 0, 10],

              },
            ]
          },
          )
        }
        if (i % 2 == 1) {
          editImage.push(
            {
              image: `data:image/jpeg;base64,${this.editedImages[i]}`,
              //alignment: 'left'
              width: 200,
              margin: [280, -146, 0, 10]
            },
          )
        }
      }
    }
    if (this.lvmotiondata != null) {

      lvm.push({
        pageBreak: 'before',
        lineHeight: 1.5,
        columns: [


          {
            text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
            alignment: 'left'

          },
          {
            text: ` PATIENT ID: ${this.patientDataObject.id}`,
            alignment: 'center'


          },

          {
            text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
            alignment: 'right'

          },

        ],
      },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `AGE: ${this.patientDataObject.age}`,
              alignment: 'left'
            },
            {
              text: ``,
              alignment: 'center'
            },
            {
              text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic}  mmHg`,
              alignment: 'right'
            },

          ],
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `REFERRED BY: Dr.DIGAMBAR NAIK `,
              alignment: 'left'

            },
            {
              text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
              alignment: 'center',

            },
            {
              text: `GENDER: ${this.patientDataObject.gender}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
              alignment: 'left',

            },
            {
              text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
              alignment: 'center',

            },
            {
              text: `BSA: ${this.patientDataObject.bsa}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `BMI: ${this.patientDataObject.bmi}`,
              alignment: 'left',

            },
            {
              text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
              alignment: 'center',

            },

            rows,

          ]
        })
      lvm.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] })
      lvm.push(
        {

          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2,

            },

          ],
          margin: [135, 10, 0, 0,]
        },
        {
          text: "LV MOTION DIAGRAM",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        },
      )

      lvm.push({
        lineWidth: 10, columns: [

          {

            image: `${this.lvmotiondata}`,
            // alignment: 'left'
            width: 500,
            height: 250,
            margin: [0, 0, 0, 0],

          },
        ]
      })
      console.log(this.lvmotionvalue)
      lvm.push('\n')
      lvm.push({
        columns: [

          {
            text: `1.BASAL ANTEROSEPTAL SEGMENT`,
            fontSize: 9,
          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f1}`
          },
          {
            fontSize: 9,
            text: `2.BASAL ANTERIOR SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f2}`
          }

          ,
        ],

      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          { fontSize: 9, text: `3.BASAL ANTEROLATERAL SEGMENT` },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f3}`
          },

          {
            fontSize: 9,
            text: `4.BASAL POSTEROLATERAL SEGMENT  `,

          },
          { fontSize: 9, text: `:    ${this.lvmotionvalue.lvmotiondata.f4}` }
          ,
        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `5.BASAL INFERIOR SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f5}`
          },

          {
            fontSize: 9,
            text: `6.BASAL INFEROSEPTAL SEGMENT`,

          },
          { fontSize: 9, text: `:    ${this.lvmotionvalue.lvmotiondata.f6}` }

        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `7.Middle ANTEROLATERAL SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f7}`
          },
          {
            fontSize: 9,
            text: `8.Middle ANTERIOR SEGMENT`,


          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f8}`
          }
          ,
        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `9.Middle ANTEROLATERAL SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f9}`
          },

          {
            fontSize: 9,
            text: `10.Middle POSTERIOR SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f9}`
          }

        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `11.MIDDLE INFERIOR SEGMENT `,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f11}`
          },
          {
            fontSize: 9,
            text: `12.INDDLE INFEROSEPTAL SEPTAL SEGMENT`,


          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f12}`
          }
        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `13.APICAL ANTERIOR SEGMENT  `,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f13}`
          },
          {
            fontSize: 9,
            text: `14.APICAL ANTEROLATERAL SEGMENT`,


          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f14}`
          }
        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `15.APICAL INFERIOR SEGMENT`,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f15}`
          },
          {
            fontSize: 9,
            text: `16.APICAL ANTERIOR SEPTAL SEGMENT `,


          },

          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f16}`
          }

        ]
      })
      lvm.push('\n')
      lvm.push({
        lineWidth: 20, columns: [

          {
            fontSize: 9,
            text: `17.APICAL CAP `,

          },
          {
            fontSize: 9,
            text: `:    ${this.lvmotionvalue.lvmotiondata.f17}`
          },
          {}, {}
        ]
      })
    }
    console.log(this.m1.findings)
    if (this.m1.findings != undefined) {
      measurement.push({
        pageBreak: 'before',
        lineHeight: 1.5,
        columns: [


          {
            text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
            alignment: 'left'

          },
          {
            text: ` PATIENT ID: ${this.patientDataObject.id}`,
            alignment: 'center'


          },

          {
            text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
            alignment: 'right'

          },

        ],
      },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `AGE: ${this.patientDataObject.age}`,
              alignment: 'left'
            },
            {
              text: ``,
              alignment: 'center'
            },
            {
              text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic}  mmHg`,
              alignment: 'right'
            },

          ],
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `REFERRED BY: Dr.DIGAMBAR NAIK `,
              alignment: 'left'

            },
            {
              text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
              alignment: 'center',

            },
            {
              text: `GENDER: ${this.patientDataObject.gender}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
              alignment: 'left',

            },
            {
              text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
              alignment: 'center',

            },
            {
              text: `BSA: ${this.patientDataObject.bsa}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `BMI: ${this.patientDataObject.bmi}`,
              alignment: 'left',

            },
            {
              text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
              alignment: 'center',

            },

            rows,

          ]
        })
      measurement.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] })
      measurement.push(
        {

          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2,

            },

          ],
          margin: [135, 10, 0, 0,]
        },
        {
          text: "MEASUREMENTS",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        },
      )

      measurement.push(

        {

          style: 'tableExample',
          headerRows: 1,
          alignment: 'center',
          table: {
            body: [
              [{ text: 'FINDING STATE', style: 'tableHeader', alignment: 'center' }, { text: 'NAME OF THE MEASUREMENT', style: 'tableHeader', alignment: 'center' }, { text: 'VALUE', style: 'tableHeader', alignment: 'center' }, { text: 'OHTER DETAILS', style: 'tableHeader', alignment: 'center' }],
            ], bold: true, heights: [20, 20, 20, 20],
            widths: ['20%', '20%', '20%', '45%'],
            margin: [0, -27, 0, 20]
          },
          layout: {
            hLineWidth: function (i, node) {
              return 0.25;
            },
            vLineWidth: function (i, node) {
              return 0.25;
            }
          }
        })


      for (let i in this.m1.findings) {
        ////console.log(this.m1[i])
        //console.log(this.m1.findings[i].length)
        //console.log(this.m1.findings)
        for (let j = 0; j < this.m1.findings[i].finding_data.length; j++) {
          // for(let k=0; k< this.m1.findings[i].finding_data[j].List.length; k++)
          if (j % 2 == 1) {
            // if (this.m1.findings[i].finding_data[j].List[k].header != 'Measurement Method' || this.m1.findings[i].finding_data[j].List[k].header != 'Selection Status') {
         if(!(this.m1.findings[i].finding_data[j].header === 'Peak Longitudinal Strain' || this.m1.findings[i].finding_data[j].header === 'Global Peak Longitudinal Strain')){
            measurement.push(

              {

                style: 'tableExample',
                headerRows: 1,

                table: {
                  body: [
                    [`${(this.m1.findings[i].finding_site).replace(/ *\([^)]*\) */g, "")}`,
                    `${this.m1.findings[i].finding_data[j].header}`,
                    `${this.m1.findings[i].finding_data[j].value}`,

                    `${(this.m1.findings[i].finding_data[j].List.map(data => {
                      if (!(data.header === 'Measurement Method' || data.header === 'Selection Status')) {
                        // console.log(`${(data.header)} = ${(data.value)}`)
                        return ((`${(data.header)} = ${(data.value)}\n`))
                        // return `${data.header}=${data.value}\n`
                      }
                    }
                    ).join('').replace(/ *\([^)]*\) */g, ""))
                    }`,
                    ]

                  ],
                  heights: [20, 20, 20, 20],
                  widths: ['20%', '20%', '20%', '45%']

                },
                layout: {
                  hLineWidth: function (i, node) {
                    return 0.25;
                  },
                  vLineWidth: function (i, node) {
                    return 0.25;
                  }
                }
              })
          }
        }
          // else {
          //   measurement.push(

          //     {

          //       style: 'tableExample',
          //       headerRows: 1,

          //       table: {
          //         body: [
          //           [`${this.m1.findings[i].finding_data[j].header}`, `${this.m1.findings[i].finding_data[j].value}`, ``, `${this.m1.findings[i].image_mode}`]

          //         ],
          //         heights: [50, 50, 50, 50],
          //         widths: ['20%', '20%', '20%', '20%'],
          //         margin: [20, 0, 0, 0]

          //       }
          //     })
          // }


        }
      }
    }

    rows.push('\n')
    rows1.push('')
    rows1.push({ lineHeight: 1, columns: [{ text: '1. M Mode Echocardiography' }] });
    rows1.push({ lineHeight: 1, columns: [{ text: '2. Two Dimensional Echocardiography' }] });
    rows1.push({ lineHeight: 1, columns: [{ text: '3. Conventional and Color Doppler Echocardigraphy' }] });
    rows1.push({ lineHeight: 1, columns: [{ text: '4. Tissue Doppler' }] });
    rows1.push({ lineHeight: 1.5, columns: [{ text: '5. Speckle Tracking and Strain Imaging' }] });
    rows1.push({ lineHeight: 1, columns: [{ text: `` }] });
    //////console.log(this.observationsObject[0].type)
    ////console.log(this.observationsObject)
    // ////console.log((this.observationsObject[i].type).replace(/Observation/g,''))
    //console.log(this.gens, this.selectedItems9)
    if (this.gens != null) {
      generate.push({
        pageBreak: 'before',
        lineHeight: 1.5,
        columns: [


          {
            text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
            alignment: 'left'

          },
          {
            text: ` PATIENT ID: ${this.patientDataObject.id}`,
            alignment: 'center'


          },

          {
            text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
            alignment: 'right'

          },

        ],
      },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `AGE: ${this.patientDataObject.age}`,
              alignment: 'left'
            },
            {
              text: ``,
              alignment: 'center'
            },
            {
              text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic}  mmHg`,
              alignment: 'right'
            },

          ],
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `REFERRED BY: Dr.DIGAMBAR NAIK `,
              alignment: 'left'

            },
            {
              text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
              alignment: 'center',

            },
            {
              text: `GENDER: ${this.patientDataObject.gender}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
              alignment: 'left',

            },
            {
              text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
              alignment: 'center',

            },
            {
              text: `BSA: ${this.patientDataObject.bsa}`,
              alignment: 'right',

            },

          ]
        },
        {
          lineHeight: 1.5,
          columns: [

            {
              text: `BMI: ${this.patientDataObject.bmi}`,
              alignment: 'left',

            },
            {
              text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
              alignment: 'center',

            },

            rows,

          ]
        })
      generate.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] })
      generate.push({

        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 250,
            h: 30,
            r: 7,
            lineColor: 'black',
            lineWidth: 2

          },

        ],
        margin: [135, 10, 0, 0,]
      },
        {
          text: 'CRITICAL IMAGES',
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        })
      for (let i = 0; i < this.gens.length; i++) {
        console.log(i, this.gens)
        if (i % 2 == 0) {
          generate.push({
            lineWidth: 10, columns: [

              {

                image: `data:image/jpeg;base64,${this.gens[i]}`,
                //alignment: 'left'
                width: 200,
                margin: [30, 0, 0, 10],

              },
            ]
          },
          )
        }
        if (i % 2 == 1) {
          generate.push(
            {
              image: `data:image/jpeg;base64,${this.gens[i]}`,
              //alignment: 'left'
              width: 200,
              margin: [280, -146, 0, 10]
            },
          )
        }
      }
    }
    if (this.favoriteSeason === 'Abnormal Report') {
  
        dd.push(
          { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 350,
                h: 30,
                r: 7,
                lineColor: 'black',
                lineWidth: 2

              },

            ],
            margin: [100, 10, 0, 0,]
          },

          {
            text: 'FOLLOWING OBSERVATIONS WERE OBTAINED',
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [20, -25, 0, 0]
          },
        )
      
      dd.push('\n')
     
        dd.push({ columns: [{ text: "VALVES", bold: true, margin: [0, 0, 0, 0] }] });
        dd.push('\n')
       
      if (this.selectedItems9 != "" || this.mitralValvecomments != "" || this.mitralValveObservation != null) {
        dd.push({ columns: [{ text: `MITRAL VALVE`, bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems9 != "") {
          for (i in this.selectedItems9) {
            dd.push({ lineHeight: 1.5, columns: [{ text: ((JSON.stringify(this.selectedItems9[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], }] });

          }
        }
        for (let key in this.observationsObject) {
          if (this.observationsObject[key].type === 'mitralValveObservation') {
            dd.push({
              lineHeight: 1.5, columns: [
                { text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] }]
            })
          }
        }
        if (this.mitralValvecomments != "") {

          for (var j in (this.mitralValvecomments)) {
            dd.push(
              { lineHeight: 1.5, columns: [{ text: (`${this.mitralValvecomments[j].comment}`), margin: [200, 0, 0, 0] }] })
          }
        }
      }
      else{
        dd.push({ columns: [{ text: "MITRAL VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
      if (this.selectedItems10 != "" || this.aorticValvecomments != "" || this.aorticValveObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "AORTIC VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems10 != "") {
          for (i in this.selectedItems10) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems10[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'aorticValveObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.aorticValvecomments != "") {

          for (var j in (this.aorticValvecomments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.aorticValvecomments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "AORTIC VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
      if (this.selectedItems11 != "" || this.pulmonaryValvecomments != "" || this.pulmonicValveObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "PULMONARY VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems11 != "") {
          for (i in this.selectedItems11) {


            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems11[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'pulmonicValveObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.pulmonaryValvecomments != "") {

          for (var j in (this.pulmonaryValvecomments)) {
            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.pulmonaryValvecomments[j].comment}`, margin: [200, 0, 0, 0] }] })
          }
        }
      }
      else{
        dd.push({ columns: [{ text: "PULMONARY VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
      // }
      if (this.selectedItems12 != "" || this.tricuspidValvecomments != "" || this.tricuspidValveObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "TRICUSPID VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems12 != "") {
          for (i in this.selectedItems12) {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems12[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });
          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'tricuspidValveObservation') {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }
        }
        if (this.tricuspidValvecomments != "") {

          for (var j in (this.tricuspidValvecomments)) {
            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.tricuspidValvecomments[j].comment}`, margin: [200, 0, 0, 0] }] })


          }
        }

      }
      else{
        dd.push({ columns: [{ text: "TRICUSPID VALVE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
        dd.push({ columns: [{ text: "CHAMBERS", bold: true, margin: [0, 0, 0, 0] }] });
        dd.push('\n')
      
      if (this.selectedItems5 != "" || this.leftAtriumcomments1 != "" || this.leftAtriumObservation != null) {
        // dd.push('\n')
        dd.push({ columns: [{ text: "LEFT ATRIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems5 != "") {
          for (i in this.selectedItems5) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems5[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'leftAtriumObservation') {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.leftAtriumcomments1 != "") {

          for (var j in (this.leftAtriumcomments1)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.leftAtriumcomments1[j].comment}`, margin: [200, 0, 0, 0] }] })

            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "LEFT ATRIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in structure and opens and closes normally', margin: [200, 0, 0, 0] })
      }
      if (this.selectedItems6 != "" || this.leftVentriclecomments != "" || this.leftVentricalObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "LEFT VENTRICLE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems6 != "") {
          for (i in this.selectedItems6) {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems6[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'leftVentricalObservation') {


            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.leftVentriclecomments != "") {

          for (var j in (this.leftVentriclecomments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.leftVentriclecomments[j].comment}`, margin: [200, 0, 0, 0] }] })

          }
        }

      }
else{
  dd.push({ columns: [{ text: "LEFT VENTRICLE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
  dd.push({ lineHeight: 1.5, text: 'Normal in structure and opens and closes normally', margin: [200, 0, 0, 0] })
}
      if (this.selectedItems7 != "" || this.rightAtriumcomments != "" || this.rightAtriumObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "RIGHT ATRIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems7 != "") {
          for (i in this.selectedItems7) {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems7[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'rightAtriumObservation') {
            // dd.push({ text: 'RIGHT ATRIUM', margin: [0, 0, 0, -10] }),

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.rightAtriumcomments != "") {

          for (var j in (this.rightAtriumcomments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.rightAtriumcomments[j].comment}`, margin: [200, 0, 0, 0] }] })

            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "RIGHT ATRIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in structure and opens and closes normally', margin: [200, 0, 0, 0] })
      }
      if (this.selectedItems8 != "" || this.rightVentriclecomments != "" || this.rightVentricleObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "RIGHT VENTRICLE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems8 != "") {
          for (i in this.selectedItems8) {


            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems8[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] });
          }
        }

        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'rightVentricleObservation') {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.rightVentriclecomments != "") {

          for (var j in (this.rightVentriclecomments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.rightVentriclecomments[j].comment}`, margin: [200, 0, 0, 0] }] })
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "RIGHT VENTRICLE", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in structure and opens and closes normally', margin: [200, 0, 0, 0] })
      }
      console.log(this.selectedItems13, this.aortaComments, this.aortaObservation)
      if (this.selectedItems13 != "" || this.aortaComments != "" || this.aortaObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "AORTA", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.selectedItems13 != "") {
          for (i in this.selectedItems13) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.selectedItems13[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'aortaObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.aortaComments != "") {

          for (var j in (this.aortaComments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.aortaComments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "AORTA", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and structure', margin: [200, 0, 0, 0] })
      }
      if (this.pericardiumReport != "" || this.pericardiumComments != "" || this.pericardiumObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "PERICARDIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.pericardiumReport != "") {
          for (i in this.pericardiumReport) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.pericardiumReport[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'pericardiumObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.pericardiumComments != "") {

          for (var j in (this.pericardiumComments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.pericardiumComments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "PERICARDIUM", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal', margin: [200, 0, 0, 0] })
      }
      if (this.pulmonaryArteryReport != "" || this.pulmonaryArteryComments != "" || this.pulmonaryArteryObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "PULMONARY ARTERY", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.pulmonaryArteryReport != "") {
          for (i in this.pulmonaryArteryReport) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.pulmonaryArteryReport[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'pulmonaryArteryObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.pulmonaryArteryComments != "") {

          for (var j in (this.pulmonaryArteryComments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.pulmonaryArteryComments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "PULMONARY ARTERY", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and structure', margin: [200, 0, 0, 0] })
      }
      if (this.venousReport != "" || this.venousComments != "" || this.venousObservation != null) {
        dd.push('\n')
        dd.push({ columns: [{ text: "VENOUS", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.venousReport != "") {
          for (i in this.venousReport) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.venousReport[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'venousObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.venousComments != "") {

          for (var j in (this.venousComments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.venousComments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "VENOUS", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
      if (this.ivcReport != "" || this.ivcComments != "" || this.ivcObservation != null) {
        dd.push('\n')
        console.log(this.inferiorVenaCava, this.ivcComments)
        dd.push({ columns: [{ text: "INFERIOR VENACAVA", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        if (this.ivcReport != "") {
          for (i in this.ivcReport) {
            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.ivcReport[i].itemName).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0], });

          }
        }
        for (let key in this.observationsObject) {

          if (this.observationsObject[key].type === 'ivcObservation') {

            dd.push({ lineHeight: 1.5, text: ((JSON.stringify(this.observationsObject[key].value).replace(/[{}]/g, '')).replace(/['"]+/g, '')).split(",").join("\n").replace(/select/g, '').replace(/(_)/g, ' '), margin: [200, 0, 0, 0] })
          }

        }
        if (this.ivcComments != "") {

          for (var j in (this.ivcComments)) {

            dd.push(
              { lineHeight: 1.5, columns: [{ text: `${this.ivcComments[j].comment}`, margin: [200, 0, 0, 0] }] })
            //
            // }
          }
        }

      }
      else{
        dd.push({ columns: [{ text: "INFERIOR VENACAVA", bold: true, margin: [0, 0, 0, -10] }, { text: ':', margin: [-85, 0, 0, -15] },] });
        dd.push({ lineHeight: 1.5, text: 'Normal in size and contractility', margin: [200, 0, 0, 0] })
      }
     
      // }
      if (this.regionalWalls != "") {
        ////console.log('++++++++++++++++++')
        dd1.push('\n')

        dd1.push({
          text: "REGIONAL WALL MOTION",
          bold: true,
          // fontSize: 15,
          // alignment: 'center',
          margin: [0, 0, 0, 0]
        })
        dd1.push('\n')
        for (let i in this.regionalWalls) {
          dd1.push({
            lineHeight: 2, columns: [{ text: 'ANTERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].anteriorwall, margin: [-138, 0, 0, 0] }]
          })
          dd1.push({
            lineHeight: 2, columns: [{ text: 'POSTERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].posteriorwall, margin: [-138, 0, 0, 0] }
            ]
          });
          dd1.push({
            lineHeight: 2, columns: [{ text: 'INFERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].inferiorwall, margin: [-138, 0, 0, 0] }]
          })
          dd1.push({
            lineHeight: 2, columns: [{ text: 'LATERAL WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].lateralwall, margin: [-138, 0, 0, 0] }
            ]
          });
          dd1.push({
            lineHeight: 2, columns: [{ text: 'ANTERIOR SEPTUM', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].anteriorseptum, margin: [-138, 0, 0, 0] }]
          })
          dd1.push({
            lineHeight: 2, columns: [{ text: 'INFERIOR SEPTUM', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: this.regionalWalls[i].inferiorseptum, margin: [-138, 0, 0, 0] }
            ]
          });
          dd1.push({
            lineHeight: 2, columns: [{ text: 'PULMONARY ARTERY PRESSURE', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: `${this.regionalWalls[i].pulmonaryarterypressure}  mmHg`, margin: [-138, 0, 0, 0] }]
          })
          dd1.push({
            lineHeight: 2, columns: [{ text: 'The Average peak of Systolic Strain is' }, { text: ':', margin: [0, 0, 0, 0] }, { text: `${this.regionalWalls[i].avgsystolicstrain}`, margin: [-138, 0, 0, 0] },]
          })
        }
      }
    
     else{
     
        dd1.push({
          lineHeight: 2, columns: [{ text: 'ANTERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }]
        })
        dd1.push({
          lineHeight: 2, columns: [{ text: 'POSTERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }
          ]
        });
        dd1.push({
          lineHeight: 2, columns: [{ text: 'INFERIOR WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }]
        })
        dd1.push({
          lineHeight: 2, columns: [{ text: 'LATERAL WALL', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }
          ]
        });
        dd1.push({
          lineHeight: 2, columns: [{ text: 'ANTERIOR SEPTUM', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }]
        })
        dd1.push({
          lineHeight: 2, columns: [{ text: 'INFERIOR SEPTUM', bold: true }, { text: ':', margin: [0, 0, 0, 0] }, { text: 'Contracts well', margin: [-138, 0, 0, 0] }
          ]
        });
     
      
     }
        // dd1.push({
        //   lineHeight: 2, columns: [{ text: 'Value of Ef', bold: true },{text:':',margin: [0, 0, 0, 0]}, { text: this.regionalWalls[i].valueofef, margin: [-138, 0, 0, 0] }
        //   ]
        // });
    
        if(this.leftVentricalFunctionReport != "" || this.leftVentricalFunctionComments != "" || this.rightVentricalFunctionReport !="" || this.rightVentricalFunctionComments != "" || this.patientDataObject.tapse != null || this.patientDataObject.mapse != null){

dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
dd1.push('\n')
dd1.push({
  lineHeight: 2,
  columns: [{
    text: 'VENTRICLULAR FUNCTION',
    bold: true,
    fontSize: 10,
    alignment: 'left',
    margin: [0, 0, 0, 0]
  }]
})


dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
dd1.push('\n')
        }
if(this.leftVentricalFunctionReport != "" || this.leftVentricalFunctionComments != "" || this.patientDataObject.tapse != null){
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'LEFT VENTRICLE FUNCTION',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: '' }]
        });
        for (let i in this.leftVentricalFunctionReport) {
          console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.leftVentricalFunctionReport[i].itemName}`, margin: [-135, -10, 0, 0] }] })
        }
     
      
      if(this.leftVentricalFunctionComments != []){
        for (let i in this.leftVentricalFunctionComments) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.leftVentricalFunctionComments[i].comment}`, margin: [-138, 0, 0, 0] }] })
        }
      }
      if (this.patientDataObject.tapse != null) {
        dd1.push({

          columns: [{
            text: '',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, 0]
          }, { text: '', margin: [-15, 0, 0, 0] }, { text: `TAPSE : ${this.patientDataObject.tapse} cm2`, margin: [-135, -7, 0, 0] }]
        });
      }
      }
       else{
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'LEFT VENTRICLE FUNCTION',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: 'Normal' ,margin: [-138, 0, 0, 0]}]
        }); 
       }
  if(this.rightVentricalFunctionReport !="" || this.rightVentricalFunctionComments != "" || this.patientDataObject.mapse != null)  {  
        dd1.push('\n')
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'RIGHT VENTRICLE FUNCTION',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: '' }]
        });
        for (let i in this.rightVentricalFunctionReport) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.rightVentricalFunctionReport[i].itemName}`, margin: [-135, -10, 0, 0] }] })
        }
        for (let i in this.rightVentricalFunctionComments) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.rightVentricalFunctionComments[i].comment}`, margin: [-138, 0, 0, 0] }] })
        }
        if (this.patientDataObject.mapse != null) {
          dd1.push({

            columns: [{
              text: '',
              bold: true,
              fontSize: 10,
              alignment: 'left',
              margin: [0, 0, 0, 0]
            }, { text: '', margin: [-15, 0, 0, 0] }, { text: `MAPSE : ${this.patientDataObject.mapse} cm2`, margin: [-135, -7, 0, 0] }]
          });
        }  }
       
        else{
          dd1.push({
            lineHeight: 2,
            columns: [{
              text: 'RIGHT VENTRICLE FUNCTION',
              bold: true,
              fontSize: 10,
              alignment: 'left',
              margin: [0, 0, 0, -15]
            }, { text: ':', margin: [0, 0, 0, -15] }, { text: 'Normal',margin: [-138, 0, 0, 0]}]
          }); 
         }
      console.log(this.pericardialEffusionReport)
      dd1.push('\n')
      dd1.push('\n')
        for (let j in this.pericardialEffusionReport) {
          console.log(this.pericardialEffusionReport)
           dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.pericardialEffusionReport[j].itemName}`, margin: [-138, -30, 0, 0] }] })
         }
      if(this.pericardialEffusionReport != "" || this.PeriCardialEffusionComments != ""){
        // dd1.push('\n')
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'PERICARDIAL EFFUSION',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, -30, 0, -15]
          }, { text: ':', margin: [0, -30, 0, -15] }, { text: '' }]
        });
      }
      else{
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'PERICARDIAL EFFUSION',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: 'Nil' ,margin: [-138,0, 0, 0]}]
        });
      }
        for (let i in this.PeriCardialEffusionComments) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.PeriCardialEffusionComments[i].comment}`, margin: [-138, 0, 0, 0] }] })
        }
    
        // dd1.push('\n')
        if(this.IntraCardiacClotReport != "" || this.IntraCardiacClotComments != ""){

        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'INTRACARDIAC CLOTS',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: '' }]
        });
        for (let i in this.IntraCardiacClotReport) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.IntraCardiacClotReport[i].itemName}`, margin: [-135, -10, 0, 0] }] })
        }
        for (let i in this.IntraCardiacClotComments) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.IntraCardiacClotComments[i].comment}`, margin: [-135, -10, 0, 0] }] })
        }
      }
      else{
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'INTRACARDIAC CLOTS',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: 'Nil' ,margin: [-138, 0, 0, 0]}]
        });
      }
      if(this.intraCardiacTumourReport != "" || this.IntraCardiacClotComments != ""){
        dd1.push('\n')
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'INTRACARDIAC TUMOURS',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text: '' }]
        });
        for (let i in this.intraCardiacTumourReport) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.intraCardiacTumourReport[i].itemName}`, margin: [-135, -10, 0, 0] }] })
        }
        for (let i in this.IntraCardiacTumourComments) {
          // console.log(this.leftVentricalFunctionReport)
          dd1.push({ columns: [{ text: '' }, { text: '' }, { lineHeight: 2, text: `${this.IntraCardiacTumourComments[i].comment}`, margin: [-135, -10, 0, 0] }] })
        }
      }
      else{
        dd1.push({
          lineHeight: 2,
          columns: [{
            text: 'INTRACARDIAC TUMOURS',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, -15]
          }, { text: ':', margin: [0, 0, 0, -15] }, { text:  'Nil' ,margin: [-138, 0, 0, 0]}]
        });
      }
        dd1.push('\n')
        console.log(this.patientDataObject.ef)
        if (this.patientDataObject.ef != null) {
          dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
          dd1.push('\n')
          dd1.push({
            lineHeight: 2,
            columns: [{
              text: 'EJECTION FRACTION',
              bold: true,
              fontSize: 10,
              alignment: 'left',
              margin: [0, 0, 0, 0]
            }]
          })
       
          
          dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
          dd1.push('\n')
          dd1.push({
            lineHeight: 2,
            columns: [{
              text: 'VALUE OF EF',
              bold: true,
              fontSize: 10,
              alignment: 'left',
              margin: [0, 0, 0, 0]
            }, { text: ':', margin: [0, 0, 0, 0] }, { text: `${this.patientDataObject.ef}%`, margin: [-138, 0, 0, 0] }]
          });
        }
        if (this.selectedItems1 != "") {
          console.log(this.regionalWalls)
          dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
          dd1.push('\n')
          dd1.push({ lineHeight: 2, columns: [{ text: 'SPECKLE TRACKING', bold: true }, { text: '' }, { text: '' }] })
               dd1.push( { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },)
          dd1.push('\n')
          for(let i in this.regionalWalls){
          dd1.push({
            lineHeight: 2, columns: [{ text: 'THE AVERAGE PEAK SYSTOLIC STRAIN IS' }, { text: ':', margin: [0, 0, 0, 0] }, { text: `${this.regionalWalls[i].avgsystolicstrain}`, margin: [-138, 0, 0, 0] },]
          })
        }
          dd1.push({ lineHeight: 2, text: 'THE REDUCED PEAK SYSYTOLIC STRAIN OVER' })
          for (let i = 0; i < this.selectedItems1.length; i++) {

            dd1.push({
              lineHeight: 2, columns: [{ text: `${[i + 1]}. ${this.selectedItems1[i].itemName}`, margin: [0, 0, 0, 0] }, { text: '' },]
            })
          }
        }
      
      console.log(this.impressioncomments, this.impressionReport)
      if (this.impressionReport != "" || this.impressioncomments != ""|| this.impressionMaster != "") {
        impressionpdf.push({
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2

            },

          ],
          margin: [135, 10, 0, 0,]
        },
          {
            text: "IMPRESSIONS",
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [0, -27, 0, 20]
          })


        for (var i in this.impressionReport) {
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impression[i].itemName, margin: [0, 0, 0, 0] }] })
        }
      
        if (this.impressioncomments != "") {

          for (var i in this.impressioncomments) {

            impressionpdf.push({ lineHeight: 1.5, columns: [{ text: `${this.impressioncomments[i].impressioncomment}`, margin: [0, 0, 0, 0] }] })
          }
        }
        for(var i in this.impressionlv){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionlv[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionrv){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionrv[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionla){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionla[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionra){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionra[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionav){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionav[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionmv){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionmv[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressiontv){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressiontv[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpv){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpv[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpc){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpc[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionao){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionao[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpa){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpa[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpvein){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpvein[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionivc){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionivc[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionaw){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionaw[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpw){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpw[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressioniw){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressioniw[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionlav){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionlav[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionas){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionas[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionis){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionis[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionicc){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionicc[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionict){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionict[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionpe){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionpe[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionlvf){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionrvf[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionrvf){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionrvf[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionst){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionst[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionias){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionias[i].itemName, margin: [0, 0, 0, 0] }] })
        }
        for(var i in this.impressionivs){
          impressionpdf.push({ lineHeight: 1.5, columns: [{ text: this.impressionivs[i].itemName, margin: [0, 0, 0, 0] }] })
        }
      }
      if (this.selectedItems4 != "" || this.docadvicecomments != "") {
        doctoradvicepdf.push(
          {
            canvas: [
              {
                type: 'rect',
                x: 0,
                y: 0,
                w: 250,
                h: 30,
                r: 7,
                lineColor: 'black',
                lineWidth: 2

              },

            ],
            margin: [135, 10, 0, 0,]
          },

          {
            text: "DOCTOR ADVICE",
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [0, -27, 0, 20]
          })


        //////console.log(this.doctorAdvice)
        for (var i in this.selectedItems4) {
          //////console.log(this.doctorAdvice[i])
          doctoradvicepdf.push({ lineHeight: 1.5, columns: [{ text: `${this.selectedItems4[i].itemName}`, margin: [0, 0, 0, 0] }] })
        }
        if (this.docadvicecomments != "") {

          //////console.log(this.reportFormData1().doctorAdviceComments)
          for (var i in this.docadvicecomments) {
            //////console.log(this.docadvicecomments[i])
            doctoradvicepdf.push({ lineHeight: 1.5, columns: [{ text: `${this.docadvicecomments[i].docadvicecomment}`, margin: [0, 0, 0, 0] }] })
          }
        }
      }
      if (this.selectedItems3 != "" || this.conclusioncomments != "") {
        conclusionpdf.push({
          canvas: [
            {
              type: 'rect',
              x: 0,
              y: 0,
              w: 250,
              h: 30,
              r: 7,
              lineColor: 'black',
              lineWidth: 2

            },

          ],
          margin: [135, 10, 0, 0,]
        }, {
          text: "CONCLUSIONS",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        })

        for (var i in this.selectedItems3) {
          //////console.log(this.reportFormData1.conclusion[i])
          conclusionpdf.push({ lineHeight: 1.5, columns: [{ text: `${this.selectedItems3[i].itemName}`, margin: [0, 0, 0, 0] }] })
        }

        //////console.log(this.reportFormData1().conclusionsComments)
        for (var i in this.conclusioncomments) {
          //////console.log(this.reportFormData1().conclusionsComments[i])
          conclusionpdf.push({ lineHeight: 1.5, columns: [{ text: `${this.conclusioncomments[i].conclusioncomment}`, margin: [0, 0, 0, 0] }] })
        }
      }
      // if (this.referralComment != "") {


      // }
    }
    if (this.favoriteSeason === 'Normal Report') {
      valves.push(
        {
          text: 'VALVES',
          bold: true,
          fontSize: 15,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        })

      valves.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'MITRAL VALVE' }, { text: ':Normal in structure and opens & closes normally', margin: [-50, 0, 0, 0] }] });
      valves.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'AORTIC VALVE' }, { text: ':Normal in structure and opens & closes normally', margin: [-50, 0, 0, 0] }] });
      valves.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'PULMONARY VALVE ' }, { text: ':Normal in structure and opens & closes normally', margin: [-50, 0, 0, 0] }] });
      valves.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'TRICUSPID VALVE ' }, { text: ':Normal in structure and opens & closes normally', margin: [-50, 0, 0, 0] }] });
      ////////////////////////////////////
      chambers.push(
        {
          text: 'CHAMBERS',
          bold: true,
          fontSize: 15,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        })

      chambers.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'LEFT ATRIUM' }, { text: ':Normal in size and contractility', margin: [-50, 0, 0, 0] }] });
      chambers.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'LEFT VENTRICLE ' }, { text: ':Normal in size and contractility', margin: [-50, 0, 0, 0] }] });
      chambers.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'RIGHT ATRIUM' }, { text: ':Normal in size and contractility', margin: [-50, 0, 0, 0] }] });
      chambers.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'RIGHT VENTRICLE' }, { text: ':Normal in size and contractility', margin: [-50, 0, 0, 0] }] });
      rwm.push({
        text: 'REGIONAL WALL MOTION',
        bold: true,
        fontSize: 15,
        alignment: 'left',
        margin: [0, 0, 0, 0]
      })
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'ANTERIOR WALL' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'POSTERIOR WALL' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'INFERIOR WALL' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'LATERAL WALL' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'ANTERIOR SEPTUM' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({ fontSize: 10, lineHeight: 1.5, columns: [{ text: 'INFERIOR SEPTUM' }, { text: ':Contracts well', margin: [-50, 0, 0, 0] }] });
      rwm.push({
        columns: [{
          text: 'LEFT VENTRICLE FUNCTION',
          bold: true,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        }, { text: ':NORMAL', margin: [-50, 0, 0, 0] }]
      });
      rwm.push({
        columns: [{
          text: 'RIGHT VENTRICLE FUNCTION',
          bold: true,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        }, { text: ':NORMAL', margin: [-50, 0, 0, 0] }]
      });
      rwm.push({
        columns: [{
          text: 'PERICARDIAL EFFUSION',
          bold: true,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        }, { text: ':NILL', margin: [-50, 0, 0, 0] }]
      });
      rwm.push({
        columns: [{
          text: 'INTRACARDIAC CLOTS',
          bold: true,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        }, { text: ':NILL', margin: [-50, 0, 0, 0] }]
      });
      rwm.push({
        columns: [{
          text: 'INTRACARDIAC TUMOURS',
          bold: true,
          fontSize: 10,
          alignment: 'left',
          margin: [0, 0, 0, 0]
        }, { text: ':NILL', margin: [-50, 0, 0, 0] }]
      });
      console.log(this.patientDataObject.ef)
      if (this.patientDataObject.ef != null) {
        rwm.push({
          columns: [{
            text: 'VALUE OF EF',
            bold: true,
            fontSize: 10,
            alignment: 'left',
            margin: [0, 0, 0, 0]
          }, { text: `:${this.patientDataObject.ef}%`, margin: [-50, 0, 0, 0] }]
        });
      }
      console.log(this.regionalWalls)
      if (this.regionalWalls != "") {
        if (this.regionalWalls[0].avgsystolicstrain != "") {
          rwm.push({
            text: 'SPECKLE TRACKING',
            bold: true,
            fontSize: 15,
            alignment: 'left',
            margin: [0, 0, 0, 0]
          })
          rwm.push({
            columns: [{
              text: 'THE AVERAGE PEAK SYSTOLIC STRAIN IS',
              bold: true,
              fontSize: 10,
              alignment: 'left',
              margin: [0, 0, 0, 0]
            }, { text: `:${this.regionalWalls[0].avgsystolicstrain}%`, margin: [-50, 0, 0, 0] }]
          })
        }
      }
      impressionpdf.push({
        canvas: [
          {
            type: 'rect',
            x: 0,
            y: 0,
            w: 250,
            h: 30,
            r: 7,
            lineColor: 'black',
            lineWidth: 2

          },

        ],
        margin: [135, 10, 0, 0,]
      },
        {
          text: "Impressions",
          bold: true,
          fontSize: 15,
          alignment: 'center',
          margin: [0, -27, 0, 20]
        })
      impressionpdf.push({ text: 'Cardiac chambers are normal in dimensions and function' }),
        impressionpdf.push({ text: 'Cardiac Valves are normal in structure and function' }),
        impressionpdf.push({ text: 'Great vessels are normal in structure and function' })
      if (this.patientDataObject.ef != null) {
        impressionpdf.push({ text: `Mildly abnormal LV Systolic Function with EF ${this.patientDataObject.ef}%` })
      }
      impressionpdf.push({ text: 'No Regional wall motion abnormality noted' }),
        impressionpdf.push({ text: 'Normal RV Function' }),
        impressionpdf.push({ text: 'Normal PA Function' }),
        impressionpdf.push({ text: 'Normal Doppler study' })
      impressionpdf.push({ text: 'Normal vegetation/Intracardiac clots seen' })
      impressionpdf.push({ text: 'No pericardial effusion noted' })
      conclusionpdf.push({ text: 'Essentially normal heart echo study' })
    }

    return {

      footer: function (currentPage, pageCount) {

        return {
          margin: 5,
          columns: [
            {
              fontSize: 9,
              text: [
                {
                  text: '_______________________________________________________________________________________________________________________' +
                    '\n',
                  margin: [0, 20]
                },
                {
                  text: 'This report creation by Golden Health Services Private Limited, Page no:  ' + currentPage.toString() + ' / ' + pageCount,
                }
              ],
              alignment: 'center'
            }
          ]
        };

      },

      defaultStyle: { margin: [10, 10, 10, 10] },
      content: [
        {
          table: {
            // Defining the top 2 rows as the "sticky" header rows
            headerRows: 3,
            // One column, full width
            widths: ['*'],
            body: [


              // Header Row One
              // An array with just one "cell"
              [
                // Just because I only have one cell, doesn't mean I can't have
                // multiple columns!
                {
                  columns: [


                    {
                      image: 'data:image/png;base64,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',
                      //alignment: 'left'
                      width: 50,
                      margin: [10, 0, 0, 0]
                    },

                    {

                      text: [
                        { text: `${this.clinicDataObject.name}\n`, fontSize: 20, alignment: 'center', colour: "red", },
                        { text: `${this.clinicDataObject.address}`, bold: true, alignment: 'center' },


                      ],
                      fontSize: 10,
                      margin: [-100, 0, 0, 0],
                      // defaultStyle: {
                      //   font: 'TimesNewRoman'
                      // }
                    }
                  ]
                }
              ],


              // Second Header Row

              [
                {
                  columns: [
                    {
                      width: 50,
                      height: 50,
                      margin: [450, -60, 10, 0],

                      image: 'data:image/jpeg;base64,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'

                    },

                  ]
                }
              ],
              [
                { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineHeight: 2 }], },
              ],
              [{
                fontSize: 10,
                stack: [

                  // Content
                  // { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineHeight: 1.5 }], },
                  // rows,
                  {
                    lineHeight: 1.5,
                    text: 'Report',
                    bold: true,
                    alignment: "center",
                    fontSize: 15
                  },
                  {
                    lineHeight: 1.5,
                    columns: [


                      {
                        text: `PATIENT NAME: ${this.patientDataObject.patientname}`,
                        alignment: 'left'

                      },
                      {
                        text: ` PATIENT ID: ${this.patientDataObject.id}`,
                        alignment: 'center'


                      },

                      {
                        text: `DATE OF BIRTH: ${formatDate(this.patientDataObject.dob, 'dd-MM-yyyy', 'en_US')}`,
                        alignment: 'right'

                      },

                    ],
                  },
                  {
                    lineHeight: 1.5,
                    columns: [

                      {
                        text: `AGE: ${this.patientDataObject.age}`,
                        alignment: 'left'
                      },
                      {
                        text: ``,
                        alignment: 'center'
                      },
                      {
                        text: `BP : ${this.patientDataObject.bpsystolic}/${this.patientDataObject.bpdiastolic}  mmHg`,
                        alignment: 'right'
                      },

                    ],
                  },
                  {
                    lineHeight: 1.5,
                    columns: [

                      {
                        text: `REFERRED BY: Dr.DIGAMBAR NAIK`,
                        alignment: 'left'

                      },
                      {
                        text: `DATE OF REPORTING: ${formatDate(this.patientDataObject.testdate, 'dd-MM-yyyy', 'en_US')}`,
                        alignment: 'center',

                      },
                      {
                        text: `GENDER: ${this.patientDataObject.gender}`,
                        alignment: 'right',

                      },

                    ]
                  },
                  {
                    lineHeight: 1.5,
                    columns: [

                      {
                        text: `HEIGHT(cms) : ${this.patientDataObject.height}`,
                        alignment: 'left',

                      },
                      {
                        text: `WEIGHT(kgs) : ${this.patientDataObject.weight}`,
                        alignment: 'center',

                      },
                      {
                        text: `BSA: ${this.patientDataObject.bsa}`,
                        alignment: 'right',

                      },

                    ]
                  },
                  {
                    lineHeight: 1.5,
                    columns: [

                      {
                        text: `BMI: ${this.patientDataObject.bmi}`,
                        alignment: 'left',

                      },
                      {
                        text: `TYPE OF TEST: ${this.patientDataObject.testtype}`,
                        alignment: 'center',

                      },

                      rows,

                    ]
                  },
                  {
                    columns: [[
                      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },
                      {
                        canvas: [
                          {
                            type: 'rect',
                            x: 0,
                            y: 0,
                            w: 250,
                            h: 30,
                            r: 7,
                            lineColor: 'black',
                            lineWidth: 2

                          },

                        ],
                        margin: [135, 10, 0, 0,]
                      },
                      {
                        text: 'ECHOCARDIOGRAPHIC STUDY',
                        bold: true,
                        fontSize: 15,
                        alignment: 'center',
                        margin: [0, -27, 0, 20]
                      },

                      rows1,

                    ]
                    ]
                  },

                  {
                    columns: [[
                      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }], },
                      rows,
                      {
                        text: 'Echo Window:Good',
                        bold: true,
                        margin: [10, 10, 10, 10]
                      },
                      { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },

                    ]
                    ]
                  },


                  dd,

                  dd1,

                  valves,
                  chambers,
                  rwm,
                  //{ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },
                  // {
                  //   canvas: [
                  //     {
                  //       type: 'rect',
                  //       x: 0,
                  //       y: 0,
                  //       w: 250,
                  //       h: 30,
                  //       r: 7,
                  //       lineColor: 'black',
                  //       lineWidth: 2

                  //     },

                  //   ],
                  //   margin:[135,10,0,0,]
                  //   },
                  // {
                  //   text:"leftAtrium",
                  //   bold: true,
                  //   fontSize: 15,
                  //   alignment: 'center',
                  //   margin: [0,-27, 0, 20]
                  // },
                  // leftAtriumpdf,
                  //{ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] },

                  impressionpdf,
                  doctoradvicepdf,



                  conclusionpdf,


                  signature,
                  referral,




                  generate,
                  editImage,

                 

                  lvm,
                  referralImage,
                  measurement,
                  signature1


                ]
              }],







            ]
          },
          layout: {
            hLineWidth: function (i, node) { return (i === 1 || i === 2) ? 1 : 0; },
            vLineWidth: function (i, node) { return 0; },
            hLineColor: function (i, node) { return (i === 1 || i === 2) ? 'white' : 'white'; },
            vLineColor: function (i, node) { return 'white' },
            paddingBottom: function (i, node) {
              switch (i) {
                case 0:
                  return 5;
                case 1:
                  return 2;
                default:
                  return 0;
              }
            },
            paddingTop: function (i, node) {
              switch (i) {
                case 0:
                  return 0;
                case 1:
                  return 2;
                default:
                  return 10;
              }
            }
          }
        },
       
      ]
    }
  }


  ////////////////

  getObservationsToPdf(data: any[]) {
    let observation_data = {};
    data.forEach(obsData => {

      Object.entries(obsData).forEach(([key, value]) => {
        if (value && Array.isArray(value)) {

          ////console.log(value)
          // observation_data[key] = this.getformatteddata(value)
        }
        //for each loop on json
      });


      //////console.log(obsData)
    });
    // ////console.log("..............")
    // return observation_data
  }

  getformatteddata(data: any[]) {
    data.forEach(scopedData => {
      let column = []
      let rows = []
      let master_array = []
      column = Object.keys(scopedData)
      ////console.log("Print column")
      ////console.log(column)
      Object.entries(scopedData).forEach(([key, value]) => {
        ////console.log("printing value of each key i.e, row values")
        ////console.log(value)
      });


      //////console.log(master_array)

    })
    ////console.log("...,,,,,,")

    return this.getformatteddata;

  }

}
