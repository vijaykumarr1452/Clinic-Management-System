import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, FormControl,Validators} from "@angular/forms";
import * as $ from 'jquery';
import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  username: string;
  password: string;
  name:string;
  phoneno:string;
  emailId:string;
  purpose:string;
  loginForm: FormGroup;
  contactForm: FormGroup
  message;
  isValid:boolean = true;
  //invalidLogin: boolean = false;

  // isLogin = localStorage.getItem('token')  ? true : false;
  // id  = localStorage.getItem('id')
  // role  = localStorage.getItem('role')

  ///////////////////////////////
  loginform = {
    username: '',
    password:'',
    
  };
  contactform = {
    name: '',
    phoneno:'',
    purpose:'',
    emailId:''
  };
  ////////////////////////////
  constructor(private loginService: LoginserviceService,private router:Router,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    $('#myModal').submit(function() {
      $('.modal-backdrop').remove();
      $('.modal-open').css('overflow','auto')

      // var b = $('body');
      // var normalw = 0;
      // var scrollw = 0;
      // if(b.prop('scrollHeight')>b.height()){
      //     normalw = window.innerWidth;
      //     scrollw = normalw - b.width();
      //     $('.modal-backdrop').remove();
      //     $('.modal-open').css('overflow-y','auto')
      //     $('.modal-open').css({marginRight:'-'+scrollw+'px'});
      // }
    });
  

    
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.compose([
         Validators.required,
         //Validators.minLength(6)
      ])),
      password: new FormControl("", this.passwordvalidation)
   });

  
   this.contactForm = new FormGroup({
    name: new FormControl("", Validators.compose([
       Validators.required,
       //Validators.minLength(6)
    ])),
    phoneno: new FormControl("", Validators.compose([
      Validators.required,
      //Validators.minLength(6)
   ])),
   emailId: new FormControl("", Validators.compose([
    Validators.required,
    //Validators.minLength(6)
 ])),
 purpose: new FormControl("", Validators.compose([
  Validators.required,
  //Validators.minLength(6)
]))
 });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
       return {"password" : true};
    }
 }

   submit =(data):any=>{
    console.log(this.contactForm)
    this.loginService.contactUS(data).subscribe(res=>{
      if(res['message']==='contact saved sucessfully'){
        alert('Mail Sent Sucessfully Wait for Response')
      }
      console.log(this.contactForm)
    })
   }
  login = (data):any => {
    
    if(data.username === '' || data.username === null){
      alert('Please Enter Valid User Name');
     }
     if(data.password === '' || data.password === null){
      alert('Please Enter Valid Password');
     }
     
     if( data.username == '' && data.password == ''){
      alert("Invalid Login. Please Check the Details");
         return false;
     }

    const  loginBody = {
      "username": data.username,
      "password": data.password
    }
    
     this.loginService.login(loginBody).subscribe(res =>{
      
        if(res['accessToken'] !=  '' ) {
         //console.log(res);;
        localStorage.setItem('token',res['accessToken'])
        localStorage.setItem('role',res['role'])
        localStorage.setItem('id',res['id'])
        localStorage.setItem('name',res['name'])
        alert("Login Successful");

        if( localStorage.getItem('role') === "CLINIC" ){
        this.router.navigate(['/clinicdashboard']);
        }  
        else if( localStorage.getItem('role') === "DOCTOR" ){
          this.router.navigate(['/doctordashboard']);
          }
          else{
        this.router.navigate(['/dashboard']);
        }

      

       } else  if(res['message'] ===  'Please check the details' || res['status'] === '401' ) {
        alert("Invalid Login. Please Check the Details");
        return false;

        }else{
        alert("Invalid Login. Please Check the Details");
        return false;
       }

       
     },
     err => {
        //console.log(err);
        alert("Invalid Login. Please Check the Details");
        return false;
     }
     ) 
     
   
    } 
    
    logout = ()  => {
      localStorage.clear();
      this.router.navigateByUrl('/')
      this.isLogin = localStorage.getItem('token')  ? true : false;
      this.id  = localStorage.getItem('id')
      this.role  = localStorage.getItem('role')
  
    }
  

}
