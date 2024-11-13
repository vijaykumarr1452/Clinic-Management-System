import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';

@Component({
  selector: 'app-preview-medicine',
  templateUrl: './preview-medicine.component.html',
  styleUrls: ['./preview-medicine.component.scss']
})
export class PreviewMedicineComponent implements OnInit {
  
  AllMedicineList: any;  
  searchString;
  tempList;
  TotalList;
  p: number = 1; 
  filter;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')


  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient) { }


  ngOnInit(): void {

    this.loginService.getAllmedicinemasterDetails().subscribe(user =>{
    
      this.AllMedicineList = user['medicinemaster']
      this.TotalList = this.AllMedicineList;
     

    })

  }

  getResultData = () => {
    if(this.searchString != '' && this.searchString != null && this.searchString != undefined)  {
   this.AllMedicineList=  this.TotalList.filter(data => 
         data.regmobileno.toString().includes(this.searchString.toString())
    )
    
   }
   else {
  //todo change 
    this.loginService.getAllRegisteredPatientKin().subscribe(user =>{
      //console.log(user['user'])
      this.AllMedicineList = user['user']
    
    })
    
   }
  
   }

goToEditMedicine  = (list) => {
   //console.log(list);
  window.localStorage.setItem("mid", list.id.toString());
  this.router.navigateByUrl(`/editmedicine/${list.id}`)


}

goToDeleteMedicine = (list):any => {
  window.localStorage.setItem("mid", list.id.toString());
   this.loginService.deleteKinMaster().subscribe(res =>{
     alert('Successfullt Deleted');
     window.location.reload();
      //this.router.navigateByUrl('/dashboard')
   })


}


}
