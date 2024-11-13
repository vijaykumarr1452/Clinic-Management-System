import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-medicineform',
  templateUrl: './medicineform.component.html',
  styleUrls: ['./medicineform.component.scss']
})
export class MedicineformComponent implements OnInit {

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  //gtype  = localStorage.getItem('gtype')

  // typemedicine = ['Tablet','Syrup','Injection','Pads','Pair'];
  // unitmeasurement = ['50mg','80mg','100mg','150mg','200mg'];

  addform = {
    medicinename:'',
    genericname:'',
    typeofmedicine:'',
    unitofmeasurement:'',
    manufacturer:''
  }
  manufacturerDetails: any;
  typemedicine: any;
  unitmeasurement: any;


  constructor(private loginService: LoginserviceService,private router:Router,private http:HttpClient, private formBuilder: FormBuilder,private actRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
this.loginService.getMedicineFormMasters().subscribe(data=>{
  console.log(data)
  this.typemedicine = data['typeOfMedicine']
  this.unitmeasurement = data['unitOfMeasure']
  this.manufacturerDetails = data['manufacturerDetails']
  console.log(this.manufacturerDetails,this.typemedicine,this.unitmeasurement)
})

  }

  addMedicine = (data):any => {


  //   if(data.itemName === '' || data.item === null) {
  //    alert('Please Enter Valid Value');
  //   }

    const masterManagementReq = {
     "medicinename": data.medicinename,
     "genericname":data.genericname,
     "typeofmedicine":(data.typeofmedicine),
     "unitofmeasurement":(data.unitofmeasurement),
     "manufacturer":(data.manufacturer)
    }


    this.loginService.medicineMasterInsertion(masterManagementReq).subscribe(res =>{
     console.log(res);
       if(res['status'] ==  '200' ) {
       alert('Data Inserted Successfully');
       this.router.navigateByUrl('/previewmedicine/');
     } 
      
  })

 }


}
