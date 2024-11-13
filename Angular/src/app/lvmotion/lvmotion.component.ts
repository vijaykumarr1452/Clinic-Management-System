import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
declare let html2canvas: any;

declare function myFunctionAki1() :any
declare function myFunctionAki2() :any
declare function myFunctionAki3() :any
declare function myFunctionAki4() :any
declare function myFunctionAki5() :any
declare function myFunctionAki6() :any
declare function myFunctionAki7() :any
declare function myFunctionAki8() :any
declare function myFunctionAki9() :any
declare function myFunctionAki10() :any
declare function myFunctionAki11() :any
declare function myFunctionAki12() :any
declare function myFunctionAki13() :any
declare function myFunctionAki14() :any
declare function myFunctionAki15() :any
declare function myFunctionAki16() :any
declare function myFunctionAki17() :any
declare function myFunctionAne1() :any
declare function myFunctionAne2() :any
declare function myFunctionAne3() :any
declare function myFunctionAne4() :any
declare function myFunctionAne5() :any
declare function myFunctionAne6() :any
declare function myFunctionAne7() :any
declare function myFunctionAne8() :any
declare function myFunctionAne9() :any
declare function myFunctionAne10() :any
declare function myFunctionAne11() :any
declare function myFunctionAne12() :any
declare function myFunctionAne13() :any
declare function myFunctionAne14() :any
declare function myFunctionAne15() :any
declare function myFunctionAne16() :any
declare function myFunctionAne17() :any
declare function myFunctionDsy1() :any
declare function myFunctionDsy2() :any
declare function myFunctionDsy3() :any
declare function myFunctionDsy4() :any
declare function myFunctionDsy5() :any
declare function myFunctionDsy6() :any
declare function myFunctionDsy7() :any
declare function myFunctionDsy8() :any
declare function myFunctionDsy9() :any
declare function myFunctionDsy10() :any
declare function myFunctionDsy11() :any
declare function myFunctionDsy12() :any
declare function myFunctionDsy13() :any
declare function myFunctionDsy14() :any
declare function myFunctionDsy15() :any
declare function myFunctionDsy16() :any
declare function myFunctionDsy17() :any
declare function myFunctionHyp1() :any
declare function myFunctionHyp2() :any
declare function myFunctionHyp3() :any
declare function myFunctionHyp4() :any
declare function myFunctionHyp5() :any
declare function myFunctionHyp6() :any
declare function myFunctionHyp7() :any
declare function myFunctionHyp8() :any
declare function myFunctionHyp9() :any
declare function myFunctionHyp10() :any
declare function myFunctionHyp11() :any
declare function myFunctionHyp12() :any
declare function myFunctionHyp13() :any
declare function myFunctionHyp14() :any
declare function myFunctionHyp15() :any
declare function myFunctionHyp16() :any
declare function myFunctionHyp17() :any
declare function myFunctionNs1() :any
declare function myFunctionNs2() :any
declare function myFunctionNs3() :any
declare function myFunctionNs4() :any
declare function myFunctionNs5() :any
declare function myFunctionNs6() :any
declare function myFunctionNs7() :any
declare function myFunctionNs8() :any
declare function myFunctionNs9() :any
declare function myFunctionNs10() :any
declare function myFunctionNs11() :any
declare function myFunctionNs12() :any
declare function myFunctionNs13() :any
declare function myFunctionNs14() :any
declare function myFunctionNs15() :any
declare function myFunctionNs16() :any
declare function myFunctionNs17() :any

declare function myFunctionNor2() :any
declare function myFunctionNor3() :any
declare function myFunctionNor4() :any
declare function myFunctionNor5() :any
declare function myFunctionNor6() :any
declare function myFunctionNor7() :any
declare function myFunctionNor8() :any
declare function myFunctionNor9() :any
declare function myFunctionNor10() :any
declare function myFunctionNor11() :any
declare function myFunctionNor12() :any
declare function myFunctionNor13() :any
declare function myFunctionNor14() :any
declare function myFunctionNor15() :any
declare function myFunctionNor16() :any
declare function myFunctionNor17() :any
declare function myFunctionNor1() :any;
@Component({
  selector: 'app-lvmotion',
  templateUrl: './lvmotion.component.html',
  styleUrls: ['./lvmotion.component.scss']
})
export class LvmotionComponent implements OnInit {
f1='normal'
textControl = new FormControl();
form1 :any
imageSource: string;
  url: any;
  isValid:boolean = true;

// f1:string
add : FormGroup
id = localStorage.getItem('id')
  patientDataObject: any;
  clinicDataObject: any;
  lvmotiondata: any;
  lvmotionvalue: any;

  // constructor() { }
  onClickNor1(){
    // console.log('000000000000000')
    myFunctionNor1()
    this.add.get('f1').setValue('Normal');
  }
  onClickNor2(){
    myFunctionNor2()
    this.add.get('f2').setValue('Normal');
  }
  onClickNor3(){
    myFunctionNor3()
    this.add.get('f3').setValue('Normal');
  }
  onClickNor4(){
    myFunctionNor4()
    this.add.get('f4').setValue('Normal');
  }
  onClickNor5(){
    myFunctionNor5()
    this.add.get('f5').setValue('Normal');
  }
  onClickNor6(){
    myFunctionNor6()
    this.add.get('f6').setValue('Normal');
  }
  onClickNor7(){
    myFunctionNor7()
    this.add.get('f7').setValue('Normal');
  }
  onClickNor8(){
    myFunctionNor8()
    this.add.get('f8').setValue('Normal');
  }
  onClickNor9(){
    myFunctionNor9()
    this.add.get('f9').setValue('Normal');
  }
  onClickNor10(){
    myFunctionNor10()
    this.add.get('f10').setValue('Normal');
  }
  onClickNor11(){
    myFunctionNor11()
    this.add.get('f11').setValue('Normal');
  }
  onClickNor12(){
    myFunctionNor12()
    this.add.get('f12').setValue('Normal');
  }
  onClickNor13(){
    myFunctionNor13()
    this.add.get('f13').setValue('Normal');
  }
  onClickNor14(){
    myFunctionNor14()
    this.add.get('f14').setValue('Normal');
  }
  onClickNor15(){
    myFunctionNor15()
    this.add.get('f15').setValue('Normal');
  }
  onClickNor16(){
    myFunctionNor16()
    this.add.get('f16').setValue('Normal');
  }
  onClickNor17(){
    myFunctionNor17()
    this.add.get('f17').setValue('Normal');
  }
onClickAki1(){
  console.log(myFunctionAki1())
  myFunctionAki1()
  this.add.get('f1').setValue('Akinetic');
}
onClickAki2(){
  myFunctionAki2()
  this.add.get('f2').setValue('Akinetic');
}
onClickAki3(){
  myFunctionAki3()
  this.add.get('f3').setValue('Akinetic');
}
onClickAki4(){
  myFunctionAki4()
  this.add.get('f4').setValue('Akinetic');
}
onClickAki5(){
  myFunctionAki5()
  this.add.get('f5').setValue('Akinetic');
}
onClickAki6(){
  myFunctionAki6()
  this.add.get('f6').setValue('Akinetic');
}
onClickAki7(){
  myFunctionAki7()
  this.add.get('f7').setValue('Akinetic');
}
onClickAki8(){
  myFunctionAki8()
  this.add.get('f8').setValue('Akinetic');
}
onClickAki9(){
  myFunctionAki9()
  this.add.get('f9').setValue('Akinetic');
}
onClickAki10(){
  myFunctionAki10()
  this.add.get('f10').setValue('Akinetic');
}
onClickAki11(){
  myFunctionAki11()
  this.add.get('f11').setValue('Akinetic');
}
onClickAki12(){
  myFunctionAki12()
  this.add.get('f12').setValue('Akinetic');
}
onClickAki13(){
  myFunctionAki13()
  this.add.get('f13').setValue('Akinetic');
}
onClickAki14(){
  myFunctionAki14()
  this.add.get('f14').setValue('Akinetic');
}
onClickAki15(){
  myFunctionAki15()
  this.add.get('f15').setValue('Akinetic');
}
onClickAki16(){
  myFunctionAki16()
  this.add.get('f16').setValue('Akinetic');
}
onClickAki17(){
  myFunctionAki17()
  this.add.get('f17').setValue('Akinetic');
}
onClickAne1(){
  myFunctionAne1()
  this.add.get('f1').setValue('Aneurysm');
}
onClickAne2(){
  myFunctionAne2()
  this.add.get('f2').setValue('Aneurysm');
}
onClickAne3(){
  myFunctionAne3()
  this.add.get('f3').setValue('Aneurysm');
}
onClickAne4(){
  myFunctionAne4()
  this.add.get('f4').setValue('Aneurysm');
}
onClickAne5(){
  myFunctionAne5()
  this.add.get('f5').setValue('Aneurysm');
}
onClickAne6(){
  myFunctionAne6()
  this.add.get('f6').setValue('Aneurysm');
}
onClickAne7(){
  myFunctionAne7()
  this.add.get('f7').setValue('Aneurysm');
}
onClickAne8(){
  myFunctionAne8()
  this.add.get('f8').setValue('Aneurysm');
}
onClickAne9(){
  myFunctionAne9()
  this.add.get('f9').setValue('Aneurysm');
}
onClickAne10(){
  myFunctionAne10()
  this.add.get('f10').setValue('Aneurysm');
}
onClickAne11(){
  myFunctionAne11()
  this.add.get('f11').setValue('Aneurysm');
}
onClickAne12(){
  myFunctionAne12()
  this.add.get('f12').setValue('Aneurysm');
}
onClickAne13(){
  myFunctionAne13()
  this.add.get('f13').setValue('Aneurysm');
}
onClickAne14(){
  myFunctionAne14()
  this.add.get('f14').setValue('Aneurysm');
}
onClickAne15(){
  myFunctionAne15()
  this.add.get('f15').setValue('Aneurysm');
}
onClickAne16(){
  myFunctionAne16()
  this.add.get('f16').setValue('Aneurysm');
}
onClickAne17(){
  myFunctionAne17()
  this.add.get('f17').setValue('Aneurysm');
}
onClickDsy1(){
  myFunctionDsy1()
  this.add.get('f1').setValue('Dyskinetic');
}
onClickDsy2(){
  myFunctionDsy2()
  this.add.get('f2').setValue('Dyskinetic');
}
onClickDsy3(){
  myFunctionDsy3()
  this.add.get('f3').setValue('Dyskinetic');
}
onClickDsy4(){
  myFunctionDsy4()
  this.add.get('f4').setValue('Dyskinetic');
}
onClickDsy5(){
  myFunctionDsy5()
  this.add.get('f5').setValue('Dyskinetic');
}
onClickDsy6(){
  myFunctionDsy6()
  this.add.get('f6').setValue('Dyskinetic');
}
onClickDsy7(){
  myFunctionDsy7()
  this.add.get('f7').setValue('Dyskinetic');
}
onClickDsy8(){
  myFunctionDsy8()
  this.add.get('f8').setValue('Dyskinetic');
}
onClickDsy9(){
  myFunctionDsy9()
  this.add.get('f9').setValue('Dyskinetic');
}
onClickDsy10(){
  myFunctionDsy10()
  this.add.get('f10').setValue('Dyskinetic');
}
onClickDsy11(){
  myFunctionDsy11()
  this.add.get('f11').setValue('Dyskinetic');
}
onClickDsy12(){
  myFunctionDsy12()
  this.add.get('f12').setValue('Dyskinetic');
}
onClickDsy13(){
  myFunctionDsy13()
  this.add.get('f13').setValue('Dyskinetic');
}
onClickDsy14(){
  myFunctionDsy14()
  this.add.get('f14').setValue('Dyskinetic');
}
onClickDsy15(){
  myFunctionDsy15()
  this.add.get('f15').setValue('Dyskinetic');
}
onClickDsy16(){
  myFunctionDsy16()
  this.add.get('f16').setValue('Dyskinetic');
}
onClickDsy17(){
  myFunctionDsy17()
  this.add.get('f17').setValue('Dyskinetic');
}
onClickHyp1(){
  myFunctionHyp1()
  this.add.get('f1').setValue('Hypokinetic');
}
onClickHyp2(){
  myFunctionHyp2()
  this.add.get('f2').setValue('Hypokinetic');
}
onClickHyp3(){
  myFunctionHyp3()
  this.add.get('f3').setValue('Hypokinetic');
}
onClickHyp4(){
  myFunctionHyp4()
  this.add.get('f4').setValue('Hypokinetic');
}
onClickHyp5(){
  myFunctionHyp5()
  this.add.get('f5').setValue('Hypokinetic');
}
onClickHyp6(){
  myFunctionHyp6()
  this.add.get('f6').setValue('Hypokinetic');
}
onClickHyp7(){
  myFunctionHyp7()
  this.add.get('f7').setValue('Hypokinetic');
}
onClickHyp8(){
  myFunctionHyp8()
  this.add.get('f8').setValue('Hypokinetic');
}
onClickHyp9(){
  myFunctionHyp9()
  this.add.get('f9').setValue('Hypokinetic');
}
onClickHyp10(){
  myFunctionHyp10()
  this.add.get('f10').setValue('Hypokinetic');
}
onClickHyp11(){
  myFunctionHyp11()
  this.add.get('f11').setValue('Hypokinetic');
}
onClickHyp12(){
  myFunctionHyp12()
  this.add.get('f12').setValue('Hypokinetic');
}
onClickHyp13(){
  myFunctionHyp13()
  this.add.get('f13').setValue('Hypokinetic');
}
onClickHyp14(){
  myFunctionHyp14()
  this.add.get('f14').setValue('Hypokinetic');
}
onClickHyp15(){
  myFunctionHyp15()
  this.add.get('f15').setValue('Hypokinetic');
}
onClickHyp16(){
  myFunctionHyp16()
  this.add.get('f16').setValue('Hypokinetic');
}
onClickHyp17(){
  myFunctionHyp17()
  this.add.get('f17').setValue('Hypokinetic');
}
onClickNs1(){
  myFunctionNs1()
  this.add.get('f1').setValue('Not Seen');
}
onClickNs2(){
  myFunctionNs2()
  this.add.get('f2').setValue('Not Seen');
}
onClickNs3(){
  myFunctionNs3()
  this.add.get('f3').setValue('Not Seen');
}
onClickNs4(){
  myFunctionNs4()
  this.add.get('f4').setValue('Not Seen');
}
onClickNs5(){
  myFunctionNs5()
  this.add.get('f5').setValue('Not Seen');
}
onClickNs6(){
  myFunctionNs6()
  this.add.get('f6').setValue('Not Seen');
}
onClickNs7(){
  myFunctionNs7()
  this.add.get('f7').setValue('Not Seen');
}
onClickNs8(){
  myFunctionNs8()
  this.add.get('f8').setValue('Not Seen');
}
onClickNs9(){
  myFunctionNs9()
  this.add.get('f9').setValue('Not Seen');
}
onClickNs10(){
  myFunctionNs10()
  this.add.get('f10').setValue('Not Seen');
}
onClickNs11(){
  myFunctionNs11()
  this.add.get('f11').setValue('Not Seen');
}
onClickNs12(){
  myFunctionNs12()
  this.add.get('f12').setValue('Not Seen');
}
onClickNs13(){
  myFunctionNs13()
  this.add.get('f13').setValue('Not Seen');
}
onClickNs14(){
  myFunctionNs14()
  this.add.get('f14').setValue('Not Seen');
}
onClickNs15(){
  myFunctionNs15()
  this.add.get('f15').setValue('Not Seen');
}
onClickNs16(){
  myFunctionNs16()
  this.add.get('f16').setValue('Not Seen');
}
onClickNs17(){
  myFunctionNs17()
  this.add.get('f17').setValue('Not Seen');
}

capturedImage;
constructor(private loginService: LoginserviceService,private router:Router, private formBuilder: FormBuilder,private http:HttpClient) { }
  ngOnInit() {
    this.loginService.getLVMotion().subscribe(data => {
      console.log(data)
      this.lvmotiondata = data['lvmotion']
      this.lvmotionvalue = data['lvMotionData']
    
    })
this.add = this.formBuilder.group({
  f1:new FormControl('Normal'),
  f2:new FormControl('Normal'),
  f3:new FormControl('Normal'),
  f4:new FormControl('Normal'),
  f5:new FormControl('Normal'),
  f6:new FormControl('Normal'),
  f7:new FormControl('Normal'),
  f8:new FormControl('Normal'),
  f9:new FormControl('Normal'),
  f10:new FormControl('Normal'),
  f11:new FormControl('Normal'),
  f12:new FormControl('Normal'),
  f13:new FormControl('Normal'),
  f14:new FormControl('Normal'),
  f15:new FormControl('Normal'),
  f16:new FormControl('Normal'),
  f17:new FormControl('Normal'),
 

})
  }
 
  clickme=(data):any=> {
    html2canvas(document.querySelector("#capture")).then(canvas => {

      //  debugger;
      console.log(localStorage)
      /// document.body.appendChild(canvas);
      this.capturedImage = canvas.toDataURL();
      // console.log(this.capturedImage)
      // console.log("canvas.toDataURL() -->" + this.capturedImage);
      // this will contain something like (note the ellipses for brevity), console.log cuts it off 
      // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa0AAAB3CAYAAACwhB/KAAAXr0lEQVR4Xu2dCdiNZf7HP/ZQkpQtaUxDjYYoTSYlURMhGlmKa..."
      this.loginService.getPatientData(localStorage.getItem("pid")).subscribe(doc => {
        //console.log(data); 
        this.patientDataObject = doc['doctor'];
 
        this.loginService.getClinicData(this.patientDataObject.clinicId).subscribe(doc1 => {
          this.clinicDataObject = doc1['doctor'];
      
        })
        var formData = new FormData();
        console.log(data)
        formData.append('base64',this.capturedImage),
        formData.append('f1',JSON.stringify(data))
        let body ={  
          base64: this.capturedImage
        }
        // formData.append("base64",this.capturedImage)
        // let vishal = JSON.stringify(this.capturedImage)

        // console.log(vishal)
        console.log(formData)
        document.getElementById("overlay").style.display = "block";

        this.loginService.postLvMotion(formData).subscribe(d=>{
          console.log(d)
          if (d['message'] == 'lv motion svaed successfully') {
            alert('lv motion svaed successfully');
            document.getElementById("overlay").style.display = "none";

            // this.router.navigateByUrl(`/observations/` + localStorage.getItem('pid'));
          }
        })
      }, error => console.log(error));
     
      canvas.toBlob(function (blob) {
        
        //  just pass blob to something expecting a blob
        // somfunc(blob);

        // Same as canvas.toDataURL(), just longer way to do it.
        var reader = new FileReader();
        // debugger;
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let base64data = reader.result;
           console.log(base64data);
          // console.log(data,base64data)
        }
      
      });


    });
   
  }
 
  addF =():any =>{
   
  }
}
