import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient, HttpHeaders,HttpEventType }  from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-referral-image',
  templateUrl: './referral-image.component.html',
  styleUrls: ['./referral-image.component.scss']
})
export class ReferralImageComponent implements OnInit {

  addform = {
    comment:''
  };
  comment;
  getReferralImages: any;
  referralImage: any;
  constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }


  ngOnInit(): void {

  this.loginService.getReferralCommentPatientId().subscribe(data => {    
    console.log(data);
    this.comment = data['referralcomment']
  }, error => console.log(error));
  this.loginService.getReferralImages().subscribe(data => {
    console.log(data['referralImages'])
    this.referralImage = data['referralImages']
    this.getReferralImages = `data:image/jpeg;base64,${data['referralImages']}`
    // this.lvmotionvalue = data['lvMotionData']
  })
  }

 


  //////////////////////////////////////////
  
  addComment = (data):any => {
    
    const referralComment = {
      "comment": data.comment
    }

    this.loginService.referralCommentInsert(referralComment).subscribe(res =>{  
       if(res['message'] ==  'referral comment submitted successfully' ) {
        alert('Referral Comment Successfully');
        //this.router.navigate(['/previewregkin']);
        window.location.reload();
      } 
   })

  }


}
