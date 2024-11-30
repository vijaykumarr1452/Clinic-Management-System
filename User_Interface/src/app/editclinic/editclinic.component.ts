import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editclinic',
  templateUrl: './editclinic.component.html',
  styleUrls: ['./editclinic.component.scss']
})
export class EditclinicComponent implements OnInit {

  
  role: string;
  name: string;
  type:string;
  specialities= [];
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
  machine:string;
  reference:string;
  services=[];

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
  specialities:'',
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
  services:'',
  machine:'',
  reference:'',
  profileImagesId:'',
  logoImagesId:''


  };

  ///////////////////////////////////

  countryList;
  stateList;
  filteredCities;
  serviceList;
  specialityList;
  typeList;

  updform1 = [];

  dropdownList = [];
  selectedItems;
  selectedItems1;
  //dropdownSettings = {};
  settings = {};
  servicessettings= {};
  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }

  updateClinicForm: FormGroup;

  
  onItemSelect(item: any) {
   //alert('****');
    console.log(item);
    console.log(this.selectedItems);
   
  }
  OnItemDeSelect(item: any) {
   // console.log(item);
   // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
   //console.log(items);
  }
  onDeSelectAll(items: any) {
   //console.log(items);
  }



  ngOnInit(): void {

    this.loginService.getAllClinicDoctorMasterFetch().subscribe( (data : any) => { 
      const {country,state,hospitalService,hospitalSpeciality,hospitalType} = data;         
     console.log(data);
    // console.log('///////////////');
      this.countryList = data['country'];
      this.stateList = data['state'];
      this.serviceList = data['hospitalService'];
      this.specialityList = data['hospitalSpeciality'];
      this.typeList = data['hospitalType'];

    }, error => console.log(error));



    this.loginService.getEditClinicData(localStorage.getItem("aid"))
    .subscribe(data  => {
      //console.log(data);
      this.updform = data['doctor'];
      this.selectedItems = data['speciality'];
      //this.selectedItems = this.updform.speciality;
      this.selectedItems1 = data['services'];
      
     console.log(this.updform,this.selectedItems,this.selectedItems1,localStorage.getItem("aid"))
      if(this.updform.country){
           
        this.filteredCities = this.stateList.filter(state=>state.countryId==this.updform.country);
  console.log(this.filteredCities);
     }

    }, error => console.log(error));
    
    this.updateClinicForm = this.formBuilder.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      specialities: ['', Validators.required],
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
      googlemaplocation:['',Validators.required],
      machine:['',Validators.required],
      reference:['',Validators.required],
      fileSource:['', Validators.required],
      fileSource1:['', Validators.required],
      services:['',Validators.required],
      profileImagesId:['',Validators.required],
      logoImagesId:['',Validators.required]
    });

    // this.loginService.getAllClinicList().subscribe(clinic =>{
    //   this.AllClinicList = clinic['clinic']
    //  //localStorage.setItem("list",cliniclist)
    //  console.log(this.AllClinicList)
    // })

    

  }

  onCountrySelect(data){
   
    if (JSON.stringify(data) !== JSON.stringify({})) {
      if(data){
        this.filteredCities = this.stateList.filter(state=>state.countryId==data);
  
     }
   }
  
  }
  onFileChange(event) {

    if (event.target.files.length > 0) {
      const profileImage = event.target.files[0];
      this.updateClinicForm.patchValue({
        fileSource1: profileImage
      });
      //this.files.push(profileImage)
     
    }
  }
  onPhotoChange(event) {

    if (event.target.files.length > 0) {
      const photo = event.target.files[0];
      this.updateClinicForm.patchValue({
        fileSource2: photo
      });
     
    }
  }
  onLogoChange(event) {

    if (event.target.files.length > 0) {
      const logoImage = event.target.files[0];
      // this.addClinicDoctorForm.patchValue({
      //   fileSource: logoImage
      // });
      // this.files.push(logoImage)
      this.updateClinicForm.get('fileSource').setValue(logoImage);
   
    }
  }
  
  updateClinic = (data):any => {
    var formData = new FormData();
// console.log(data,this.updateClinic)
      //other info request takes
      formData.append("role", data.role);
      // formData.append("profileImagesId",data.profileImagesId)
      formData.append("name", data.name);
      formData.append("middlename", data.middlename);
      formData.append("lastname", data.lastname);
      formData.append("salutation", data.salutation);
      formData.append("branch", (data.branch));
      formData.append("services",JSON.stringify(data.services));
      formData.append("type", data.type);
      formData.append("specialities", JSON.stringify(data.specialities));
      formData.append("clinictype", data.clinictype);
      formData.append("clinicId", data.clinicId);
      formData.append("qualification", data.qualification);
      formData.append("specialitydoctor", data.specialitydoctor);
      formData.append("email", data.email);
      formData.append("phonenumber", data.phonenumber);
      formData.append("mobNo", data.mobNo);
      formData.append("emergencynumber", data.emergencynumber);
      formData.append("emergencymobnumber", data.emergencymobnumber);
      formData.append("whatsappno", data.whatsappno);
      formData.append("username", data.username);
      formData.append("password", data.password);
      formData.append("country", data.country);
      formData.append("state", data.state);
      formData.append("district", data.district);
      formData.append("city", data.city);
      formData.append("citycode", data.citycode);
      formData.append("pincode", data.pincode);
      formData.append("address", data.address);
      formData.append("otherdetails", data.otherdetails);
      formData.append("url", data.url);
      formData.append("ambulance", data.ambulance);
      formData.append("ambulancephno", data.ambulancephno);
      formData.append("degreedoctor", data.degreedoctor);
      formData.append("timingsdays", data.timingsdays);
      formData.append("timingshours", data.timingshours);
      formData.append("googlemaplocation", data.googlemaplocation);
      formData.append("machine",data.machine)
     formData.append("reference",data.reference)
     formData.append('profileImagesId',data.profileImagesId)
     formData.append('logoImagesId',data.logoImagesId)
     console.log(this.updateClinicForm.get('fileSource').status)
    //  if(this.updateClinicForm.get('fileSource').status != 'INVALID'){
      console.log(this.updateClinicForm.get('fileSource').value)
      formData.append('logoImage', this.updateClinicForm.get('fileSource').value);
    //  }else{
    //    console.log('else317')
    //   formData.append('profileImagesId',data.profileImagesId)
    //   formData.append('logoImagesId',data.logoImagesId)
    //  }
    //  if(this.updateClinicForm.get('fileSource1').status != 'INVALID'){
      console.log(this.updateClinicForm.get('fileSource1').value)
      formData.append('profileImage', this.updateClinicForm.get('fileSource1').value);
    //  }else{
    //   console.log('else325')

    //   formData.append('profileImagesId',data.profileImagesId)
    //   formData.append('logoImagesId',data.logoImagesId)

    //  }
     
  
    // this.updform.specialities = this.selectedItems;
    // //JSON.stringify()
    // this.updform.services = this.selectedItems1;
   console.log(formData,data)
     this.loginService.updateClinicData(formData).subscribe(updateDoctor =>{
       console.log(updateDoctor)
       alert('Updated Successfully');
      //this.router.navigateByUrl('/dashboard');
     })
    
  }




}
