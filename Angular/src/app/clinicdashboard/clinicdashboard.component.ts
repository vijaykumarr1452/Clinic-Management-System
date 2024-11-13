import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../event-emitter.service';

@Component({
  selector: 'app-clinicdashboard',
  templateUrl: './clinicdashboard.component.html',
  styleUrls: ['./clinicdashboard.component.scss']
})
export class ClinicdashboardComponent implements OnInit {

  AllClinicPatientsList: any;  
  AllClinicDoctorList: any;
  clickEventsubscription:Subscription;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')

  docId;
  searchString;
  tempList;
  TotalList;
  ClinicData;
  

  allcases = '#all-cases';
  profileimg: string;
  pending: any;
  path: any;

  constructor(private loginService: LoginserviceService,private router:Router,private sharedService:SharedService) { 
    // this.clickEventsubscription=this.sharedService.getClickEvent().subscribe(()=>{
    //   this.ngOnInit();
    //   //this.generatePdf();
    //   })
  }
  click(){
    this.sharedService.sendClickEvent1();
    }
  ngOnInit(): void {

    this.loginService.getClinicData(localStorage.getItem("id")).subscribe(data => {
     
      this.ClinicData = data['doctor'],
      this.profileimg = `data:image/jpeg;base64,${data["profileimage"]}`
      this.path=`http://localhost:8080/api/get/${data['doctor'].profileImagesId}`
    }, error => console.log(error));
   
//     this.loginService.getAllClinicPatientsListClinicStatusReport(localStorage.getItem("id")).subscribe(data=>{
//       //console.log(localStorage)
       //this.pending = data['pending']
//  // console.log(data)
//     })
    console.log(this.ClinicData)
  }
 

  goToUpdatePatientDoc = (alllist,index) => {
    window.localStorage.setItem("pid", alllist.id.toString());
    this.loginService.updatePatientDoc(this.AllClinicPatientsList[index]).subscribe(updateAssignment =>{
    
     this.router.navigateByUrl(`/vieweditpatientdetails/${alllist.id}`)

    })
 }



}
