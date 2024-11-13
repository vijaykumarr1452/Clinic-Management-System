import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.scss']
})
export class EditMedicineComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //gtype  = localStorage.getItem('gtype')

  typemedicine = ['Tablet','Syrup','Injection','Pads','Pair'];
  unitmeasurement = ['50mg','80mg','100mg','150mg','200mg'];

  updform = {
    medicinename:'',
    genericname:'',
    typeofmedicine:'',
    unitofmeasurement:'',
  }


  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

    
    this.loginService.getEditmedicineDetailData()
    .subscribe(data => {
      console.log(data)
      this.updform = data['medicinemaster']
    }, error => console.log(error));
    


  }

  editMedicine = ():any => {
    //console.log(this.updform);
     this.loginService.updatemedicineDetailData(this.updform).subscribe(updateDoctor =>{
       alert('Medicine Details Updated Successfully');
      this.router.navigateByUrl('/previewmedicine');
     })
    
  }

}
