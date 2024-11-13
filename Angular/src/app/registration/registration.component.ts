import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  role: string;
  name: string;
  email: string;
  username: string;
  password: string;
  country: string;
  state: string;
  city: string;
  mobNo: string;
  address:string;
  clinicId: string;

  AllClinicList: Object;  
  clinic: Object;

  ///////////////////////////////////

  roles = ['CLINIC', 'DOCTOR'];
  countrys = ['India', 'USA', 'Australia'];
  states = ['Telangana','AndhraPradesh'];
  citys = ['Hyderabad', 'Visakhapatnam', 'Vijayawada'];
  regform = {
    name: '',
    email:'',
    username:'',
    password:'',
    role: this.roles[0],
    country:this.countrys[0],
    state:this.states[0],
    city:this.citys[0],
    mobNo:'',
    address:'',
    clinicId:''
  };

  ///////////////////////////////////
  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder ) { }

  registerForm: FormGroup;

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      //id: [],
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      //clinicId: ['', Validators.required]
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      mobNo: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.loginService.getAllClinicList().subscribe(clinic =>{
      this.AllClinicList = clinic['clinic']
     //localStorage.setItem("list",cliniclist)
     console.log(this.AllClinicList)
    })


  }

  

  registration = (data):any => {

    //alert(data.role);
    //alert(data.name);

    if(data.role === '' || data.role === null  ){
      alert('Please Select Valid User Role');
     }
     if(data.name === '' || data.name === null){
      alert('Please Enter Valid Name');
     }
     if(data.email === '' || data.email === null){
      alert('Please Enter Valid Email id');
     }
    if(data.username === '' || data.username === null){
      alert('Please Enter Valid User Name');
     }
     if(data.password === '' || data.password === null){
      alert('Please Enter Valid Password');
     }
     if(data.country === '' || data.coutry === null){
      alert('Please Select Valid Country');
     }
     if(data.state === '' || data.state === null){
      alert('Please Select Valid State');
     }
     if(data.city === '' || data.city === null ){
      alert('Please Select Valid City');
     }
     if(data.mobNo === '' || data.mobNo === null ){
      alert('Please Enter Valid Mobile Number');
     }
     if(data.address === '' || data.address === null ){
      alert('Please Enter Address');
     }
    
    if(data.role != '' && data.name != '' && data.email != '' && data.username != '' && 
    data.password != '' && data.country != ''
      && data.state != '' && data.city != '' && data.mobNo != '' && data.address != '' )
      {

        const clinicManagementReq = {
          "role": data.role,
          "name": data.name,
          "email":data.email,
          "username": data.username,
          "password": data.password,
          "country": data.country,
          "state": data.state,
          "city": data.city,
          "mobNo": data.mobNo,
          "address": data.address,
          "clinicId": data.clinicId
        }
          
          //alert(JSON.stringify(this.registerForm.value))
    
        //   this.loginService.registration(clinicManagementReq).subscribe(res =>{
        //     //this.router.navigateByUrl('/')
        //     //alert(res['status']);
        //     if(res['status'] ==  '200' ) {
        //       this.router.navigate(['/']);
        //     } else{
        //       alert("Invalid Details. Please Check the Details");
        //       return false;
        //       }
            
        //  })
       

       } else{

        alert("Please Fill the Details");
        return false;
        

       }
       
  }

    

}
