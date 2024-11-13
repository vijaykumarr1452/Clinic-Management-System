import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//import { ObservationsComponent } from '../observations/observations.component';

@Component({
  selector: 'app-report-preview',
  templateUrl: './report-preview.component.html',
  styleUrls: ['./report-preview.component.scss']
})
export class ReportPreviewComponent implements OnInit {

  
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //type  = localStorage.getItem('type')
  
  patientDataObject;
  observationsObject;
  AllMastersList;
  clinicDataObject;

  itemList = [];
  itemList1 = [];
  selectedItemsObservations:any = [];
  selectedItems1 = [];
  selectedItems2 = [];
  selectedItems3  = [];
  settings = {};

  public comments: any[] = [{
    id: 1,
    comment: ''
  }];

  public impressioncomments: any[] = [{
    id: 1,
    impressioncomment: ''
  }];

  public conclusioncomments: any[] = [{
    id: 1,
    conclusioncomment: ''
  }];

  public docadvicecomments: any[] = [{
    id: 1,
    docadvicecomment: ''
  }];

  anteriorwall;
  posteriorwall;
  inferiorwall;
  lateralwall;
  ef;
  pulmonaryarterypressure;
  avgsystolicstrain;


  updform = {
    anteriorwall :'',
    posteriorwall:'',
    inferiorwall:'',
    lateralwall:'',
    ef:'',
    pulmonaryarterypressure:'',
    avgsystolicstrain:''
  }
  
  doctorAdvice= []
  conclusion = []
  impression = []
  speckleTracking = []
  selectedItems4=[]
  regionalWallMotion = [];
  DoctorData;
  selectedregionalWallMotion = [];

  Observationscomments:[]
  selectedObseravtionsInEditList: []

  regionalWalls:[];

  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient,private actRoute: ActivatedRoute) { 
  }

  dynamicComment: Array<ReportPreviewComponent> = [];  
  newComment: any = {}; 

  ngOnInit(): void {

    
    this.loginService.getDoctorData(localStorage.getItem("id")).subscribe(data => {
    
      this.DoctorData = data['doctor']
    }, error => console.log(error));

    this.loginService.getPatientData(localStorage.getItem("pid")).subscribe(data => {   
     
      this.patientDataObject = data['doctor'];

      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => { 
        this.clinicDataObject = data['doctor']
      })

    }, error => console.log(error));

  
    this.loginService.observationsGetAllByPatient().subscribe((data:any) => {
        const {observations,masterData,conclusioncomment,conclusionreport,doctorAdviceComments,
          doctorAdvicereport,impressioncomment,impressionreport,observationItem,
          observtaionComments,speckleTrackingreport,regionalWall} = data;          

        console.log(data);
        this.doctorAdvice = masterData['doctorAdvice']
        this.conclusion = masterData['conclusion']
        this.impression = masterData['impressions']
        this.speckleTracking = masterData['speckleTracking']
        
        this.selectedItems2 = impressionreport;
        this.selectedObseravtionsInEditList = observationItem;
        this.Observationscomments = observtaionComments;
        this.conclusioncomments = conclusioncomment;
        this.selectedItems3 = conclusionreport;
        this.docadvicecomments = doctorAdviceComments;
        this.selectedItems4 = doctorAdvicereport;
        this.impressioncomments = impressioncomment;
       
        //this.updform = regionalwallmotion;         
        this.regionalWalls=regionalWall,
         this.selectedItems1 = speckleTrackingreport;

         /************/ 
         let len = this.selectedObseravtionsInEditList.length;
         console.log(len);
          for(let i=0; i<len; i++){
            const selecteditemtype =this.selectedObseravtionsInEditList[i]['type'];  
            console.log(selecteditemtype);          
            this.selectedItemsObservations[i] = this.getSelectedObservationsList(selecteditemtype)
          }

           /************/ 
         let regionalwalllen = this.regionalWalls.length;
         for(let i=0; i<regionalwalllen; i++){
          this.updform =this.regionalWalls[i];            
         }

        this.observationsObject = observations.map(observation => {
          const type =observation.type
          const formatedTypename = type.replace("Observation","").replace(/ /g, "") ;
 
          const masterdata = masterData[formatedTypename].map(master =>{
            return {...master,type:`${formatedTypename}Observation`}
          })
          //console.log(masterdata);
				  return ({...observation,ttype:formatedTypename,masterValues:masterdata,comments:this.Observationscomments,regionalWall,observationItem,impressionreport})
        })
    })



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




  //////////////////////////////////

  getSelectedObservationsList = (filterType) => {
    return this.selectedObseravtionsInEditList.filter((data:any) => data.type == filterType)
}

onItemSelect(item: any,type) {
console.log(item["itemName"]);
console.log(this.selectedItemsObservations);

}
OnItemDeSelect(item: any,type) {
console.log(item);
console.log(this.selectedItemsObservations);
}
onSelectAll(items: any,type) {
console.log(items);
}
onDeSelectAll(items: any,type) {
console.log(items);
}

/////////////////////////////

addComment(k,type) {
this.observationsObject[k].comments.push({
 id: k+ 1,
 type:type,
comment: ''
})

}

removeComment(k) {
this.observationsObject[k].comments.splice(k, 1);
}

logValue() {
console.log(this.comments);
}

//////////////////////////////////

addImpressionComment() {
this.impressioncomments.push({
  id: this.impressioncomments.length + 1,
  //id: k + 1,
  comment: ''
});
}

removeImpressionComment(i: number) {
this.impressioncomments.splice(i, 1);
}

/////////////////////////////////

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

/////////////////////////////////

addDocAdviceComment() {
this.docadvicecomments.push({
  id: this.docadvicecomments.length + 1,
  //id: k + 1,
  comment: ''
});
}

removeDocAdviceComment(i: number) {
this.docadvicecomments.splice(i, 1);
}

/////////////////////////////////



reportFormData=() =>{


// console.log(this.reportFormData);
// console.log('===========');
const impressionslen = this.selectedItems2.length;
const impressionsCommentslen = this.impressioncomments.length;

const conclusionslen = this.selectedItems3.length;
const conclusionsCommentslen = this.conclusioncomments.length;

const doctorslen = this.selectedItems4.length;
const doctorsCommentslen = this.docadvicecomments.length;

const getReport  = {
selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
patientData : this.patientDataObject,
impressions: this.selectedItems2.filter(impressionslen => impressionslen != '0'),    
impressionComments:this.impressioncomments,
conclusions: this.selectedItems3,
conclusionsComments:this.conclusioncomments,
doctorAdvice: this.selectedItems4,
doctorAdviceComments:this.docadvicecomments,
observations:this.observationsObject,
relativewall:this.updform,
speckleTracking:this.selectedItems1 
}

console.log(getReport)

const getObservationsReport  = {
selectedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
//observations:this.observationsObject 
}


// this.loginService.masterReportInsertion(getReport).subscribe(res =>{
//   console.log(res);
//   if(res['message'] ==  'submitted successfully' ) {
//   alert('Report Observations Inserted Successfully');
//   this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
// } 

// })



this.loginService.observationsReportUpdate(getReport).subscribe(res =>{
console.log(res);
if(res['message'] ==  'report updated successfully' ) {
//alert('Report Observations Updated Successfully');
this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
} 

})

return  {
selctedObservations: this.selectedItemsObservations.filter(data => data != 'Empty'),
patientData : this.patientDataObject,
impressions: this.selectedItems2,   //to do 
conclusions: this.selectedItems3,
doctorAdvice: this.selectedItems4,
observations:this.observationsObject,
regionalWall:this.regionalWalls,
impressionComments:this.impressioncomments,
doctorAdviceComments:this.docadvicecomments,
conclusion:this.selectedItems3,
conclusionsComments:this.conclusioncomments
}

}

/////////////////////////////// PDFF

generatePdf(action='open'){
//console.log("im looking for")
//console.log(this.reportFormData)
//console.log(this.getformatteddata)
const documentDefinition = this.getDocumentDefinition();
switch (action) {
  case 'open': pdfMake.createPdf(documentDefinition).open(); break;
  case 'download': pdfMake.createPdf(documentDefinition).download(); break;        
}
}

getDocumentDefinition() {
sessionStorage.setItem('report', JSON.stringify(this.reportFormData));
//sessionStorage.setItem('report',JSON.stringify(this.getformatteddata))
//let pdfFormData = this.reportFormData()
console.log("Stringify Observations from reportformdata")
console.log(this.reportFormData())
//console.log(this.observationsObject[0].value);

  console.log("checking for observation object")
   //console.log(this.observationsObject)
   //console.log("get obs to pdf")
   
  




   var rows = [];
   var rows1=[];
   var dd = [];
   var dd1=[];
   var impressionpdf=[];
   var doctoradvicepdf=[];
   var conclusionpdf=[];
   for(var i in ((this.reportFormData()).observations)) { 
    dd.push({columns:[{ text: 'Objective Type', bold:true,},{text: JSON.stringify(((this.reportFormData()).observations[i].type)),margin:[0,0,0,0]}]});
    dd.push({ text: 'Value', bold:true,margin:[0,15,0,0]}),
    dd.push({text: JSON.stringify(((this.reportFormData()).observations[i].value)),margin:[250,0,0,0]});
    dd.push({ 
      text: 'Master Value', 
      style: 'header',
      bold:true,
     margin:[0,0,0,0]}
  ,);
  console.log('=================');
    for(var j in (this.reportFormData().observations[i].observationItem)){
    console.log(this.reportFormData().observations[i].observationItem)
    if((this.reportFormData().observations[i].observationItem[j]).type==(this.reportFormData()).observations[i].type){
      console.log(this.reportFormData().observations[i].observationItem[j])
     dd.push(
      {lineHeight:1.5,columns:[{ text: '', bold:true},{text: `${(this.reportFormData()).observations[i].observationItem[j].itemName}`,margin:[0,-10,0,0] }]})
      dd.push('')
    }
  }
  dd.push({lineHeight:1.5,columns:[{
    text: 'Comment', 
    style: 'header',
    bold:true,
   margin:[0,15,0,0]}]}
,);
    for(var k in this.reportFormData().observations[i].observtaionComments){
      if((this.reportFormData()).observations[i].type==this.reportFormData().observations[i].observtaionComments[k].type){
        console.log(this.selectedObseravtionsInEditList)
      console.log((this.reportFormData()).observations[i].type)  
console.log(this.reportFormData().observations[i].observtaionComments[k])
dd.push(
{lineHeight:1.5,columns:[{ text: '', bold:true},{text: `${(this.reportFormData()).observations[i].observtaionComments[k].comment}`,margin:[0,-25,0,0] }]})

    }
    console.log((this.reportFormData()).observations[i].regionalWall[i].anteriorwall) 
      console.log()
    }
   
}

rows.push('\n')
rows1.push('')
rows1.push({ lineHeight: 1,columns:[{text: '1. M Mode Echocardiography'}]});
rows1.push({ lineHeight: 1,columns:[{text: '2. Two Dimensional Echocardiography'}]});
rows1.push({ lineHeight: 1,columns:[{text: '3. Conventional and Color Doppler Echocardigraphy'}]});
rows1.push({ lineHeight: 1,columns:[{text: '4. Tissue Doppler'}]});
rows1.push({ lineHeight: 2,columns:[{text: '5. Speckle Tracking and Strain Imaging'}]});
rows1.push({ lineHeight: 1,columns:[{text: ``}]});

for(var i in this.reportFormData().regionalWall)
console.log(this.reportFormData().regionalWall);
{
  dd1.push({ lineHeight: 2,columns:[{text:'AnteriorWall:',bold:true},{text: (this.reportFormData()).regionalWall[i].anteriorwall},
  {text:'PosteriorWall:',bold:true},{text: (this.reportFormData()).regionalWall[i].posteriorwall}
]});
dd1.push({ lineHeight: 2,columns:[{text:'InferiorWall:',bold:true},{text: (this.reportFormData()).regionalWall[i].inferiorwall},
  {text:'LateralWall:',bold:true},{text: (this.reportFormData()).regionalWall[i].lateralwall}
]});
dd1.push({ lineHeight: 2,columns:[{text:'Pulmonary Artery Pressure:',bold:true},{text: (this.reportFormData()).regionalWall[i].pulmonaryarterypressure},
  {text:'Value of Ef:',bold:true},{text: (this.reportFormData()).regionalWall[i].valueofef}
]});
dd1.push({ lineHeight: 2,columns:[{text:'The Average peak of Systolic Strain:',bold:true},{text: (this.reportFormData()).regionalWall[i].avgsystolicstrain},
  //{text:'PosteriorWall:',bold:true},{text: (this.reportFormData()).observations[i].regionalWall[i].posteriorwall}
]})
  console.log((this.reportFormData()).regionalWall[i].anteriorwall) 
  console.log(this.reportFormData())
 
}

impressionpdf.push({columns:[{
  text: 'Impression Master',  
  bold:true,
 }]}
,);
for(var i in this.reportFormData().impressions){
  impressionpdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData().impressions[i].itemName}`,margin:[0,-10,0,0]}]})
}
impressionpdf.push({lineHeight:1.5,columns:[{
  text: 'Impression Comment',  
  bold:true,
 }]}
,);
for(var i in this.reportFormData().impressionComments){
  
  impressionpdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData().impressionComments[i].impressioncomment}`,margin:[0,-20,0,0]}]})
}
console.log(this.reportFormData().regionalWall)

doctoradvicepdf.push({lineHeight:1.5,columns:[{
  text: 'DoctorAdvice Master',  
  bold:true,
 }]}
,);
console.log(this.reportFormData().doctorAdvice)
for(var i in this.reportFormData().doctorAdvice){
  console.log(this.reportFormData().doctorAdvice[i])
  doctoradvicepdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData().doctorAdvice[i].itemName}`,margin:[0,-10,0,0]}]})
}
doctoradvicepdf.push({columns:[{
  text: 'DoctorAdvice Comment',  
  bold:true,
 }]}
,);
console.log(this.reportFormData().doctorAdviceComments)
for(var i in this.reportFormData().doctorAdviceComments){
  console.log(this.reportFormData().doctorAdviceComments[i])
  doctoradvicepdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData().doctorAdviceComments[i].docadvicecomment}`,margin:[0,-5,0,0]}]})
}
conclusionpdf.push({lineHeight:1.5,columns:[{
  text: 'Conclusion Master',  
  bold:true,
 }]}
,);
console.log(this.reportFormData().conclusion)
for(var i in this.reportFormData().conclusion){
  console.log(this.reportFormData().conclusion[i])
  conclusionpdf.push({lineHeight:1.5, columns:[{text:'',bold:true},{text:`${this.reportFormData().conclusion[i].itemName}`,margin:[0,-10,0,0]}]})
}
conclusionpdf.push({columns:[{
  text: 'Conclusion Comment',  
  bold:true,
 }]}
,);
console.log(this.reportFormData().conclusionsComments)
for(var i in this.reportFormData().conclusionsComments){
  console.log(this.reportFormData().conclusionsComments[i])
  conclusionpdf.push({ columns:[{text:'',bold:true},{text:`${this.reportFormData().conclusionsComments[i].conclusioncomment}`,margin:[0,0,0,0]}]})
}



return {
  
  defaultStyle: { margin: [10,10,10,10] },
  content: [
  
  {
    columns: [
     
      {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARQSURBVFiFpdd5iNVVFAfwj+PkpKYT4zK2kBplRZpmtFCgCW1EtmlqEmWkVpJQOYlKRLtNaWakFP3RZHuoFQlFCamBlZSaDWWUqbm0TWWFQbbQH+c+5vfevN/ziV94vHe3c8+953u+577OqkMNLsBU/I5dqb8L7sUN6ItPqrR3QBiJrXgHTdiWGbsdr2M03sekAzVeU8WcJszC5fgFOzNj+/AXVuIb1GfGDsdafIlRB+pYFhOwB9uToc3onsYOwa+YjE/RLbPuMryF0/E1bj4YJ4iT98R8ceKX8CHWYHDa5CLUpfmn4V8MQG/8XOJgLhpxsThdFuswPG1wHc7F8TgUnXA93sS3aE7fY9Lv7YIj+w15X2xJp2pOfb2wAqsUxzgPA3AfhqABu5OjnatY62XchhHiyqegFbMreH8ens4Zm4FF1WxcwCosFuy9As/h2jTWU+T8B2n8VnH1DYJocDTmCMJ1FSGbkLE/CI/gkjwHjsEd4grXaj91H3yOuTgRJ4uw3JNZ20WE7368iBdSf60IZ6dkY7bQlSGVbqK/ULtC3FrEdWbRgB2Zdm8RtkZB0A2ZsbfxndAKIszNKmC+uMoCfhJsz6JesSgRYfleaMXITH8XHIUFaeMWPERcSzlsw1nJWMGB/vgzM2eCIOu0SifJYDl+RJu42bmirjgDTyZjBFE2lyx+InndHwPT5rU6akUltGBsaWcNXsEmvIqNWC0yIYsmkc/L8YYg4T/4OzPnMZG2efhC6EEH7EnfZ+OEMuOjFMczDz20y/BQkVFZTNVOvDpB1B7wm+DCV+nTgnP248CRWCqYPr1kbJZIt53awwpnisxqEZK9VmiKFSIEqwVTpwvdroTXRCodh/UlDq9KDt8lhCuLriJMy0RhaiOINEQ7oWoxvmRhH5HfBbQKQsLjih8i40Tl24GTMv2TMQ9P4RqhkmvyTjgYw9Lv0UJEduPK1NeEj0RebxVFLIs6xcXnFKGSU9JniyD/A3kOjBS1HpYkj8emRQWMSsYai5fqJVQyi2cV68VozBQhKYuZ4tEBl4rT71Imj0V4zs8YmyfqQRabVChABTTiY3E9rTgCV4uc75facCwWCg2pF6q5UpC4nM1bcKFQwT2CA2UxGc+IeC0QJ14qyJR9VHYXJyaItEFw4A/FcR8oFPX5ZGuGqAm70oE6YEDabLB4yRbK5XBRxR7UMWY14s3QJsJWwPhka1xqTxQP1BkiHLmvozFCMhcpLlT1goALU7tOu+oVHBmEw1J7G04tGb9bvJxKFbJq3ISH08afiZj+IE66Q/DmvbTZu6Ka7hd55bgUPUSx2Sji3Rc3pvXdsDfNWyaI3E886Zbgzir3yEVPwYGV4s/GXh2Fp4CrBH8aBZnbdNSEIlTzVB4qKtcIUayGiUxYV2buJMGhRlEHWkXxyUVtFQ6sF7HeJBRtH/7LmbsIj4r/hdNynCxCtRwg0nKi4MMc6Tl1sPgfsX7wvAYu7GMAAAAASUVORK5CYII=,', 
        //alignment: 'left'
       width: 30,
      },
      {
        width: 440,
        //height:90,
        text: 'ClinicManagement System',
        bold:'true',
        alignment: "center",
        fontSize: 20
      },
    ]},
rows, 
  {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 ,lineHeight:2} ],},
  rows,
  {
    lineHeight:1.5,
    text:'Report',
 bold:true,
 alignment: "center",
 fontSize: 15
  },
    {
      lineHeight:1.5,
      columns: [
        

          {
          text:`Patient Name: ${(this.reportFormData()).patientData.patientname}`,
         alignment:'left'
          
        },
        {
          text:` Patient Id: ${(this.reportFormData()).patientData.id}`,
         alignment:'center'
          
          
         },

         {
          text:`Date Of Birth: ${(this.reportFormData()).patientData.dob}`,
          alignment:'right'
          
        },
      
    ],
  },
  {
    lineHeight:1.5,
    columns: [
      
        {
          text:`Age: ${(this.reportFormData()).patientData.age}`,
           alignment:'left'
        },
        {
          text:`BP: ${(this.reportFormData()).patientData.bpsystolic}`,
       alignment:'center'
        },
        {
          text:`BP: ${(this.reportFormData()).patientData.bpdiastolic}`,
         alignment:'right'
        },
      
    ],
  },
  {
    lineHeight:1.5,
  columns: [
    
        {
          text:`Referred By: `,
          alignment:'left'
          
        },
        {
          text:`Date of Reporting: ${(this.reportFormData()).patientData.testdate}`,
          alignment: 'center',
         
        },
        {
          text:`Gender: ${(this.reportFormData()).patientData.gender}`,
          alignment: 'right',
        
        },
      
    ]},
    {
      lineHeight:1.5,
      columns: [
        
        {
          text:`Height: ${(this.reportFormData()).patientData.height}`,
          alignment: 'left',
      
        },
        {
          text:`Weight: ${(this.reportFormData()).patientData.weight}`,
          alignment: 'center',
          
        },
        {
          text:`BSA: ${(this.reportFormData()).patientData.bsa}`,
          alignment: 'right',
         
        },
      
    ]
  },
  {
    lineHeight:1.5,
    columns: [
      
        {
          text:`BMI: ${(this.reportFormData()).patientData.bmi}`,
          alignment: 'left',
     
        },
        {
          text:`Type of Test: ${(this.reportFormData()).patientData.testtype}`,
          alignment: 'center',
      
        },
       
rows,
      
      ]
    },
    {
      columns:[[
      {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
        margin:[135,10,0,0,]
        },
      {
        text: 'ECHOCARDIOGRAPHIC STUDY',
        bold: true,
        fontSize: 15,
        alignment: 'center',
        margin: [0,-27, 0, 20]
      },
      
      rows1,
    ]
    ]
    },
    {
      columns:[[
      {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ],},
      rows,
      {
        text: 'Echo Window:Good',
        bold: true,
        margin: [10, 10, 10, 10]
      },
      {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},

    ]
    ]
    },
    {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
      margin:[135,10,0,0,]
      },
   
    {
      text: 'OBSERVATIONS',
      bold: true,
      fontSize: 15,
      alignment: 'center',
      margin: [0,-27, 0, 20]
    },
    
  dd,
  {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
    margin:[135,10,0,0,]
    },

  {
    text:"REGIONAL WALL MOTION",
    bold: true,
    fontSize: 15,
    alignment: 'center',
    margin: [0,-27, 0, 20]
  },
  dd1,
  {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
    margin:[135,10,0,0,]
    },

  {
    text:"Impressions",
    bold: true,
    fontSize: 15,
    alignment: 'center',
    margin: [0,-27, 0, 20]
  },
  impressionpdf,
  {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
    margin:[135,10,0,0,]
    },

  {
    text:"Doctor Advice",
    bold: true,
    fontSize: 15,
    alignment: 'center',
    margin: [0,-27, 0, 20]
  },
  doctoradvicepdf,
  {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 } ]},
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
    margin:[135,10,0,0,]
    },

  {
    text:"Conclusions",
    bold: true,
    fontSize: 15,
    alignment: 'center',
    margin: [0,-27, 0, 20]
  },
  conclusionpdf,
  {
    text:`${this.DoctorData.name}`,
    
 
    alignment:'right',
    margin: [0,5, 0, 0]
  },
  {
    text:`${this.DoctorData.qualification}`,
   
   
    alignment:'right',
    margin: [0,5, 0, 0]
  },
  {
    text:`Thank You`,
    bold: true,
    fontSize: 15,
    alignment:'right',
    margin: [0,20, 0, 0]
  },
  ]
}
}


////////////////


getObservationsToPdf(data:any[]){
let observation_data = {};
data.forEach( obsData =>{

Object.entries(obsData).forEach(([key, value])=>{
  if (value && Array.isArray(value)){
    console.log(value)
    // observation_data[key] = this.getformatteddata(value)
  }
  //for each loop on json
});

  
  //console.log(obsData)
});
// console.log("..............")
// return observation_data
}

getformatteddata(data:any[]){
data.forEach(scopedData=>{
  let column=[]
  let rows=[]
  let master_array=[]
  column = Object.keys(scopedData)
  console.log("Print column")
  console.log(column)
  Object.entries(scopedData).forEach(([key, value])=>{
    console.log("printing value of each key i.e, row values")
    console.log(value)
  });

  
  //console.log(master_array)

})
console.log("...,,,,,,")

return this.getformatteddata;

}







}
