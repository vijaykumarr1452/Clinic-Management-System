import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  measurementdata: any;
  measurementObject: any;
  m1: any;
  mmm: any;

  constructor(private loginService: LoginserviceService) { }

  ngOnInit(): void {
    this.loginService.observationsGetAllByPatient().subscribe((data:any) => {
      const {m} = data;
      this.m1 = m
   console.log(this.m1.replace(/\s*\(.*?\)\s*/g, ''))

      // for(let i=0;i<=this.m1.findings.length;i++)
      // {
      //   let measure = JSON.parse(m)
      //   // console.log(measure)
      //   console.log(this.m1.findings[i].finding_data.length)
      //   for(let j=0;j<=this.m1.findings[i].finding_data.length;j++)
      //    if(j%2 === 0){
      //     {
      //     console.log( measure.findings[i].finding_data[j],i,j)
      //     this.mmm = measure.findings[i].finding_data.map(data=>{
      //       // console.log(data)
      //       return data
      //     })
      //     console.log(this.mmm)
      //     // this.measurementObject = mmm.map(data=>{
      //     //   // console.log(data);
      //     //   return data}
      //     //   )
      //     }
      //    }
      // }

  for(let i=0;i<=this.m1.findings.length;i++){
    // console.log(this.m1.findings[i])
for(let j in this.m1.findings[i].finding_data)
for(let k in this.m1.findings[i].finding_data[j].List)
if(this.m1.findings[i].finding_data[j].List[k].header === 'Finding Site' || this.m1.findings[i].finding_data[j].List[k].header ==='Image View' || this.m1.findings[i].finding_data[j].List[k].value!='Left Ventricle'){
  console.log(this.m1.findings[i].finding_data[j],i,j,k)
}
  }
  //     const {measurement} = data;          
  //  this.measurementdata = measurement
  //  console.log(this.measurementdata)
//    for(let k in measurement.ROOT.Patient.Exam.MEASUREMENT )
// console.log(measurement.ROOT.Patient.Exam.MEASUREMENT[k].parameterId);
// this.measurementObject = measurement.map(data=>{
//   return data
// })

        // return ({...this.measurementdata})
      })

  
  }

}
