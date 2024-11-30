import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
// import { constructor } from 'jquery';
import { LoginserviceService } from '../loginservice.service';

import {
  Gallery,
  GalleryItem,
  ThumbnailsPosition,
  ImageSize
} from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import VideoSnapshot from 'video-snapshot';
@Component({
  selector: 'app-experts-opinion',
  templateUrl: './experts-opinion.component.html',
  styleUrls: ['./experts-opinion.component.scss']
})
export class ExpertsOpinionComponent implements OnInit {

  
 text
    public localImg: any = [];
    grid = true;
    item1s = ['item 1', 'item 2', 'item 3'];
    imageObject = [{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
    }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
    }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
    }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
    }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
    },
    {
      video: 'https://www.youtube.com/watch?v=wLqTEr3Fs90'
    }];
    imageSrc = "";
    messageText = "";
    imgType = "";
    image = [
      { src: "https://i.imgur.com/weXVL8M.jpg", name: "image-1" },
      {
        src:
          "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
        name: "image-2"
      },]
    imageButton = [
  
      {
        src:
          "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
        name: "image-2"
      },
      // {
      //   src:
      //     "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      //   name: "image-3"
      // }
    ];
    vidsrc: any;
    imageName: Object;
    v: any;
    imageData: any;
    length: any;
    localImg1: any;
    imageName1: any;
    gens: any;
  doctor: any;
    click(imageNameObject) {
      this.imageSrc = imageNameObject.src;
      
  
    }
    onClick(imageNameObject) {
      console.log(imageNameObject.src)
      this.imageSrc = imageNameObject.src;
      this.vidsrc = imageNameObject.src;
      this.messageText = imageNameObject.name;
      this.imgType = imageNameObject.type
      // console.log(this.result,this.messageText)
    }
    onClick1() {
      // console.log(imageNameObject)
     let imageNameObject = {src: `../../assets/images/heart-referral.jpg`, type: `image`}
      this.imageSrc = imageNameObject.src;
      this.vidsrc = imageNameObject.src;
      // this.messageText = imageNameObject.name;
      this.imgType = imageNameObject.type
  
    }
   
    showModal: boolean;
    show() {
      this.showModal = true; // Show-Hide Modal Check
  
    }
    //Bootstrap Modal Close event
    hide() {
      this.showModal = false;
    }
  
  
  
    public getExtension(filename) {
      var parts = filename.split('.');
      return parts[parts.length - 1];
    }
  
    public isImage(filename) {
      var ext = this.getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'bmp':
        case 'png':
          return true;
      }
      return false;
    }
  
    public isVideo(filename) {
      var ext = this.getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'm4v':
        case 'avi':
        case 'mpg':
        case 'mp4':
          return true;
      }
      return false;
    }
  
    public assigntype() {
      this.localImg.forEach(element => {
        console.log(element)
        if(this.isImage(element.src)) {
          element.type = "image"
        } else if (this.isVideo(element.src)) {
          element.type = "video"
        }
        
      });
    }
    
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    items: GalleryItem[];
    @ViewChild("itemTemplate", { static: true }) itemTemplate: TemplateRef<any>;
  
  
  
    constructor(public gallery: Gallery, public lightbox: Lightbox,private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }
    onSelect(reasonId) {
      this.text = reasonId
    console.log(reasonId)
    }
    ngOnInit(): void {
      this.loginService.getAllDoctorsList().subscribe(data=>{
        this.doctor = data['clinic']
        console.log(data,this.doctor)
      })
      this.loginService.getCritialImages().subscribe(data => {
        console.log(data)
        this.gens = data['g']
      })
  this.loginService.getImageNames().subscribe((data:any)=>{
    console.log(localStorage,173)
    const id = localStorage.getItem('pid')
    console.log(data)
    const {v1} = data
    this.imageName = data
    console.log(v1)
    for(let i in data)
    this.localImg = v1.map(data1=>{
    
     
        console.log(data1.type)
      return {src:`http://localhost:8080/api/get1/${id}/${data1.v1}`,fileName:data1.v1,type:data1.type}
      
    })
  
    console.log(this.localImg)
    this.length = this.localImg.length
    this.localImg.forEach(element => {
      console.log(element.type)
      if(this.isImage(element.src)) {
        element.type = "image"
      } else if (this.isVideo(element.src)) {
        element.type = "video"
      }
      
    });
    
    console.log(this.localImg)
  // for(let i in this.imageName){
    
  //     this.localImg = [
  //       {
  //         src: `http://localhost:8080/api/get1/790/${this.imageName[i]}`,
  //         name:"image-1"
  //       },
  //       {
  //         src:
  //           "assets/1/1.2.840.113619.2.400.40518272.1591077382.0.6.dcm.jpg",
  //         name: "image-2",
          
  //       },
  //       // {
  //       //   src:
  //       //     "assets/1/1.2.840.113619.2.400.40518272.1591077382.0.7.dcm.jpg",
  //       //   name: "image-3",
          
  //       // },
  //       // {
  //       //   src: "assets/1/1.2.840.113619.2.400.40518272.1591077382.0.9.dcm.jpg",
  //       //   name: "image-1",
          
  //       // },
  //       // {
  //       //   src:
  //       //     "assets/1/1.2.840.113619.2.400.40518272.1591077382.0.11.dcm.jpg",
  //       //   name: "image-2",
          
  //       // },
  //       // {
  //       //   src: "assets/1/mp.mp4",
  
  //       // }
  
  
  //       // {id:0,name:"img0",url:'assets/img/img0.png'},
  //       // {id:1,name:"img0",url:'assets/img/img1.png'},
  //       // {id:2,name:"img0",url:'assets/img/img2.png'},
  //       // {id:3,name:"img0",url:'assets/img/img3.png'},
  //       // {id:4,name:"img0",url:'assets/img/img4.png'},     
  //     ]
  //     console.log(this.localImg)
  //   }
  })
      
      
      this.assigntype()
      console.log("image", this.localImg)
      this.galleryOptions = [
        {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        }
      ];
  
      this.galleryImages = [
        {
          small: 'assets/1-small.jpg',
          medium: 'assets/1-medium.jpg',
          big: 'assets/1-big.jpg'
        },
        {
          small: 'assets/2-small.jpg',
          medium: 'assets/2-medium.jpg',
          big: 'assets/2-big.jpg'
        },
        {
          small: 'assets/3-small.jpg',
          medium: 'assets/3-medium.jpg',
          big: 'assets/3-big.jpg'
        }
      ];
  
      this.items = this.imageData.map(item => {
        return {
          type: "imageViewer",
          data: {
            src: item.srcUrl,
            thumb: item.previewUrl
          }
        };
      });
    }
    onsubmit=(data,text):any=>{

 
      // When you want to record the image
      // const frame = captureVideoFrame("http://localhost:8080/api/get1/53/L61GT382.webm", "jpeg");
      //  console.log(frame)
      // Show the image
      // const img = document.getElementById("my-screenshot");
      // img.setAttribute("src", frame);
       
      // Upload the image...
      // const formData = new FormData();
      // formData.append("file", frame.blob, `my-screenshot.${frame.format}`);
       
      // ...with plain JS
     console.log(data,text)
      const image = data.map(d=>{
        
        return{"data":data,"gmail":text}
      })
      console.log(image)
      var formData = new FormData();
      formData.append("data",data)
      formData.append("email",text)
      console.log(formData)
      this.loginService.postCriticalImages(data).subscribe((data:any)=>{
        document.getElementById("overlay").style.display = "block";
        if(data['message'] ==  'Crirical Images uploaded successfully' ) {
          alert('Crirical Images uploaded successfully');
          document.getElementById("overlay").style.display = "none";
          // this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
        } 
        // else if(data['message'] ==  ' updated successfully' ) {
        //   alert('Observation Updated Successfully');
        //   this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
        // } 
        this.loginService.postExpertOpinion(image).subscribe(data=>{
          console.log(data)
        })
        // this.loginService.expertsOpinoinImages(image).subscribe()
        document.getElementById("overlay").style.display = "none";
        console.log(data)
      })
     
  
    }
    get result() {
      this.localImg1 = this.localImg.map(data1=>{
    
     
        console.log(data1)
      return {src:`${data1.v1}`,type:data1.type}
      
    })
    console.log(this.localImg1)
      // this.localImg.filter(data=>console.log(data.checked))
      return this.localImg.filter(item => item.checked);
    }
    
}
function captureVideoFrame(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

