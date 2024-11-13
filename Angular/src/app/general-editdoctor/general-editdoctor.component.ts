import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-general-editdoctor',
  templateUrl: './general-editdoctor.component.html',
  styleUrls: ['./general-editdoctor.component.scss']
})
export class GeneralEditdoctorComponent implements OnInit {

  
  role: string;
  name: string;
  type:string;
  speciality:string;
  clinictype:string;
  clinicId: string;
  qualification:string;
  specialitydoctor:string;
  email: string;
  phonenumber:string;
  mobNo: string;
  emergencynumber:string;
  emergencymobnumber:string;
  whatsappno:string;
  username: string;
  password: string;
  cpassword: string;
  country: string;
  state: string;
  district:string;
  city: string;
  citycode:string;
  pincode:string;
  address:string;
  otherdetails:string;
  url:string;
  ambulance:string;
  ambulancephno:string;
  degreedoctor:string;
  timingsdays:string;
  timingshours :string;
  googlemaplocation:string;
  middlename:string;
  lastname:string;
  salutation;
  branch;

  AllClinicList: Object;  
  clinic: Object;
  
  ///////////////////////////////////

  typess = ['HOSPITAL', 'CLINIC'];
  roles = ['CLINIC', 'DOCTOR'];
  countrys = ['India', 'USA', 'Australia'];
  states = ['Telangana','AndhraPradesh'];
  citys = ['Hyderabad', 'Visakhapatnam', 'Vijayawada'];

  specialitys = ['Speciaity1','Speciaity2'];
  clinictypes = ['clinictype1','clinictype2'];
  updform = {
  role: '',
  name:'',
  type:'',
  speciality:'',
  clinictype:'',
  clinicId: '',
  qualification:'',
  specialitydoctor:'',
  email: '',
  phonenumber:'',
  mobNo: '',
  emergencynumber:'',
  emergencymobnumber:'',
  whatsappno:'',
  username: '',
  password: '',
  cpassword: '',
  country: '',
  state: '',
  district:'',
  city: '',
  citycode:'',
  pincode:'',
  address:'',
  otherdetails:'',
  url:'',
  ambulance:'',
  ambulancephno:'',
  degreedoctor:'',
  timingsdays:'',
  timingshours:'',
  googlemaplocation:'',
  middlename:'',
  lastname:'',
  salutation:'',
  branch:'',
  };

  // specialityList;
  // serviceList;
  // typeList;
  countryList;
  stateList;
  filteredCities;
  salutationList;
  branchList;

  ///////////////////////////////////

  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder) { }

  addClinicDoctorForm: FormGroup;

  ngOnInit(): void {

    
    this.loginService.getGeneralDoctorData(localStorage.getItem("gaid"))
    .subscribe(data => {
      console.log(data);          
      this.updform = data['doctor'];
      this.salutationList = data['salutation'];
      this.branchList = data['branch'];
      this.countryList = data['country'];
      this.stateList = data['state'];

      
      if(this.updform.country){
           
        this.filteredCities = this.stateList.filter(state=>state.countryId==this.updform.country);
  console.log(this.filteredCities);
     }

    }, error => console.log(error));
    
    this.addClinicDoctorForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      speciality: ['', Validators.required],
      clinictype: ['', Validators.required],
      clinicId: ['', Validators.required],
      qualification: ['', Validators.required],
      specialitydoctor: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required],
      mobNo: ['', Validators.required],
      emergencynumber: ['', Validators.required],
      emergencymobnumber: ['', Validators.required],
      whatsappno: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      citycode: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      otherdetails: ['', Validators.required],
      url: ['', Validators.required],
      ambulance: ['', Validators.required],
      ambulancephno: ['', Validators.required],
      degreedoctor:['', Validators.required],
      timingsdays:['', Validators.required],
      timingshours:['', Validators.required],
      googlemaplocation:['',Validators.required]
    });

    this.loginService.getGeneralAllClinicList().subscribe(clinic =>{
      this.AllClinicList = clinic['clinic']
     //localStorage.setItem("list",cliniclist)
     //console.log(this.AllClinicList)
    })


  }

  onCountrySelect(data){
   
    if (JSON.stringify(data) !== JSON.stringify({})) {
      if(data){
        this.filteredCities = this.stateList.filter(state=>state.countryId==data);
  
     }
   }
  
  }

  updateDoctor = ():any => {
    this.loginService.updateGeneralDoctorData(this.updform).subscribe(updateDoctor =>{
      alert('Doctor Data Updated Successfully');
     this.router.navigateByUrl('/general-previewdoctorall');
    })
   
 }



}
