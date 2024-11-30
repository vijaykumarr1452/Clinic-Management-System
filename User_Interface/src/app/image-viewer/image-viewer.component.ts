import { ElementRef, HostListener, Input, Output, ViewChild } from '@angular/core';
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
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { pid } from 'node:process';
declare let html2canvas: any;
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
}) 
export class ImageViewerComponent implements OnInit {
  isValid:boolean = true;
  referral : boolean = true;

  isOpen = true;
  @ViewChild('videoElement') public videoElement: ElementRef;
  @Input('snapshotName') public snapshotName: string;
  @Input('downloadImageType') public userImageType: string;

  public snapshotImageName: string = 'sample_snapshot';
  public snapshotImageType: string = 'JPG';
  public videoUrl: any;
  public videoLoaded = false;
  public loadingState = false;
  public imageTypes = [
    'JPG',
    'PNG',
    'BMP',
    'TIFF',
    'GIF',
    'PPM',
    'PGM',
    'PBM',
    'PNM',
    'WebP',
    'HEIF',
    'BPG',
    'ECW',
    'FITS',
    'FLIP',
    'PAM',
    'CD5',
    'CPT',
    'PSD',
    'PSP',
    'XCF',
    'PDN'
  ];
  screenshot: string;
  fileName: any;
  img: any;
  base64data: any;
  patientDataObject: any;
  clinicDataObject: any;
  nameOfFile: any;
  vidType: any;
  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  type  = localStorage.getItem('type')
  logout = ()  => {
    localStorage.clear();
    this.router.navigateByUrl('/')
    this.isLogin = localStorage.getItem('token')  ? true : false;
    this.id  = localStorage.getItem('id')
    this.role  = localStorage.getItem('role')

  }
  public readUrl(event, linkUrl) {
    linkUrl.value = '';
    this.loadingState = true;
    this.videoLoaded = false;
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (data: any) => {
        this.playVideo(data.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  public getLink(linkUrl, fileElement) {
    fileElement.value = '';
    if (linkUrl.value.trim() !== '') {
      this.loadingState = true;
      this.videoLoaded = false;
      this.http.get(linkUrl.value.trim(), { responseType: 'blob' }).subscribe(
        res => {
          const reader = new FileReader();
          reader.readAsDataURL(res);
          reader.onload = (data: any) => {
            this.playVideo(data.target.result);
          };
        },
        err => {
          linkUrl.value = '';
          alert('Invalid URL');
          this.loadingState = false;
          this.videoLoaded = false;
        }
      );
    }
  }
  toggle(){
  	this.isOpen = !this.isOpen;
  }
  takeSnapshot(imageNameObject) {
    console.log(imageNameObject)
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    //console.log(this.result)
    this.isValid = false
     this.imageUrl = imageNameObject;
console.log(this.isValid)
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + `http://localhost:8080/api/getImagePath/4`);

    //console.log(this.isValid)
    //console.log(this.fileName)
    const canvasElement = <HTMLCanvasElement>document.createElement('CANVAS');
    const video = this.videoElement.nativeElement;
    // //console.log(canvasElement.toDataURL("image/png"));
    const context = canvasElement.getContext('2d');
    let w: number, h: number, ratio: number;
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = w / ratio;
    canvasElement.width = w;
    canvasElement.height = h;
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
    const link = document.createElement('a');
    this.snapshotName =
      this.snapshotName !== '' ? this.snapshotName : 'snapshot';
    this.userImageType =
      this.imageTypes.indexOf(this.userImageType) >= 0
        ? this.userImageType
        : 'png';
    // link.setAttribute('download', this.snapshotName + '.' + this.userImageType);
    // const dataURL = canvasElement.toDataURL();
    this.screenshot = canvasElement.toDataURL("image/png")
    var formData = new FormData();
      // console.log(this.screenshot)
    formData.append('base64',JSON.stringify(this.screenshot))
    formData.append('filename',JSON.stringify(this.fileName))
    // //console.log(formData)
    this.loginService.postScreenshot(formData).subscribe(data=>{
// //console.log(data)
    })
    const id = localStorage.getItem('pid')
console.log(this.nameOfFile,`http://localhost:8080/api/getImagePath/${id}/${this.nameOfFile}`)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + `http://localhost:8080/api/getImagePath/${id}/${this.nameOfFile}`);

    // //console.log(canvasElement.toDataURL("image/png"))
    
    // link.href = dataURL;
    // //console.log(canvasElement.toDataURL());
    // document.body.appendChild(link);
    // link.click();
  }
  
  public playVideo(url) {
    this.loadingState = false;
    this.videoLoaded = true;
    this.videoUrl = url;
    if (this.videoElement !== undefined) {
      this.videoElement.nativeElement.load();
    }
  }
  public localImg: any = [];
  urlString = "../assets/editor.html";
  add : FormGroup
  url : SafeResourceUrl 
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
  imageUrl: any;
  capturedImage: any;
  click(imageNameObject) {
    this.imageSrc = imageNameObject.src;

  }
  @ViewChild('video')
  public video: ElementRef;
  onClick(imageNameObject) {
   
    console.log(imageNameObject,imageNameObject.src,imageNameObject.src,imageNameObject.type,imageNameObject.type.mime)
  if(this.referral == true){
this.img = imageNameObject
    this.fileName = imageNameObject.fileName
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    this.vidType =imageNameObject.type.mime
    this.nameOfFile = imageNameObject.fileName
    console.log(this.imageSrc,this.vidsrc,this.imgType,this.vidType)
  }
  else{
    this.img = imageNameObject
    this.fileName = imageNameObject.fileName
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    this.vidType =imageNameObject.type.mime
    this.nameOfFile = imageNameObject.fileName
    this.referral = true
    console.log(this.imageSrc,this.vidsrc,this.imgType,this.vidType)
  }
  }
  onClick1() {
    // //console.log(imageNameObject)
   let imageNameObject = {src: `../../assets/images/heart-referral.jpg`, type: `image`}
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    // this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type

  }
  onEdit(imageNameObject) {
    //console.log(imageNameObject)
    this.img = imageNameObject
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    //console.log(this.result)
     this.imageUrl = imageNameObject;
console.log(this.isValid)
 this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + this.imageUrl);
// this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + `http://localhost:8080/api/getImagePath/4`);
  
}
  onediii(imageNameObject){
    //console.log(imageNameObject)
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    //console.log(this.result)
     this.imageUrl = imageNameObject;
//console.log(this.isValid)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + `http://localhost:8080/api/getImagePath/4`);

  }
  onEdit1() {
    let imageNameObject = {src: `../../assets/images/heart-referral.jpg`, type: `image`,fileName:'referralImage.jpeg'}
    this.imageSrc = imageNameObject.src;
    this.vidsrc = imageNameObject.src;
    // this.messageText = imageNameObject.name;
    this.imgType = imageNameObject.type
    console.log(this.isValid,this.referral)
    this.imageUrl = imageNameObject.src;
    this.fileName = imageNameObject.fileName
//console.log(this.imageUrl)
this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlString + "?&&" + this.imageUrl);

  }
  showModal: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  clickme=(data):any=> {
    html2canvas(document.querySelector("#capture")).then(canvas => {

      //  debugger;
      //console.log(canvas.toDataURL())
      /// document.body.appendChild(canvas);
      this.capturedImage = canvas.toDataURL();})}


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
      //console.log(element)
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



  constructor(public gallery: Gallery, public lightbox: Lightbox,private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient,public sanitizer:DomSanitizer) { 
    window.document.addEventListener('saveimage', this.receiveImage, false);
    //console.log(this.receiveImage)

    

  }
  goToViewObservations = ():any => {
    // window.localStorage.setItem("pid", alllist.id.toString());
    this.router.navigateByUrl(`/observations/${localStorage.getItem('pid')}`)
  }
  goToImageViewer =():any=>{
    // window.localStorage.setItem("pid", alllist.id.toString());
    console.log(localStorage.getItem('pid'))
    this.router.navigateByUrl(`/gallary/${localStorage.getItem('pid')}`)
  }
  @HostListener('document:saveimage', ['$event'])

  receiveImage(event) {
    //console.log(Date.now());
  
    //  //console.log(this.screenshot)
    this.base64data = event.detail
    //console.log(this.base64data)
   
    var formData = new FormData();
    formData.append('base64',JSON.stringify(this.base64data))
    formData.append('filename',JSON.stringify(this.fileName))
      //console.log(this.loginService)
    this.loginService.postEditedImages(formData).subscribe(data=>{
      console.log(data)
      document.getElementById("overlay").style.display = "block";
      if(data['message'] ==  'Saved Edited Images' ) {
        document.getElementById("overlay").style.display = "none";
        alert('Saved Edited Images');
        // this.router.navigateByUrl(`/observations/`+localStorage.getItem('pid'));
      }
      
    })
    
  }
  saveImage(formData, base64data) {

  }
  
  async ngOnInit() {
    this.loginService.getPatientData(localStorage.getItem("pid")).subscribe(data => {
      //console.log(localStorage);
      this.patientDataObject = data['doctor'];

      this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(data => {
        this.clinicDataObject = data['doctor'];
        //console.log(this.updform)
      })

    }, error => console.log(error));
    window.document.addEventListener('saveimage', this.receiveImage, false);
    //console.log(this.base64data)
    this.add = this.formBuilder.group({
      f1:new FormControl(''),})
  //console.log(this.imageUrl)

this.loginService.getImageNames().subscribe((data:any)=>{
  console.log(data,localStorage)
  const id = localStorage.getItem('pid')
  //console.log(id)
  const {v1} = data
  this.imageName = data
  //console.log(v1)
  for(let i in data)
  this.localImg = v1.map(data1=>{
  
   
      console.log(data1.type)  
    return {src:`http://localhost:8080/api/get1/${id}/${data1.v1}`,type:data1.type,fileName:data1.v1}
    
  })

  // console.log(this.localImg)
  this.length = this.localImg.length
  this.localImg.forEach(element => {
    //console.log(element.type)
    if(this.isImage(element.src)) {
      element.type = "image"
    } else if (this.isVideo(element.src)) {
      element.type = "video"
    }
    
  });
  
  //console.log(this.localImg)
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
//     //console.log(this.localImg)
//   }
})

    for(let i in this.localImg)
    {
      //console.log(this.localImg[i])
    }
    this.assigntype()
    //console.log("image", this.localImg)
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

    // this.items = this.imageData.map(item => {
    //   return {
    //     type: "imageViewer",
    //     data: {
    //       src: item.srcUrl,
    //       thumb: item.previewUrl
    //     }
    //   };
    // });

  }
  updform(updform: any) {
    throw new Error('Method not implemented.');
  }
  
  get result() {
    return this.localImg.filter(item => item.checked);
  }
 
 
  
}



const data = [
  {
    srcUrl: "https://preview.ibb.co/jrsA6R/img12.jpg",
    previewUrl: "https://preview.ibb.co/jrsA6R/img12.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg",
    previewUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/mwsA6R/img7.jpg",
    previewUrl: "https://preview.ibb.co/mwsA6R/img7.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/kZGsLm/img8.jpg",
    previewUrl: "https://preview.ibb.co/kZGsLm/img8.jpg"
  },
  {
    srcUrl: 'https://youtu.be/tYa6OLQHrEc',
    title: 'Youtube example one with title.',
    alt: 'youtube video'
  },
];

