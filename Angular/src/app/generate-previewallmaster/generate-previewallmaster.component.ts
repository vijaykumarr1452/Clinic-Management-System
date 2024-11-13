import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-generate-previewallmaster',
  templateUrl: './generate-previewallmaster.component.html',
  styleUrls: ['./generate-previewallmaster.component.scss']
})
export class GeneratePreviewallmasterComponent implements OnInit {
  AllMastersList;
  p: number = 1; 
  filter;
  ttype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute) { }

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  gtype  = localStorage.getItem('gtype')

  
  ngOnInit(): void {


  //   this.actRoute.paramMap.subscribe(params => {
  //     this.gtype = params.get('gtype');
  //     console.log('---------');
  //     console.log(this.gtype);
  //  });

    this.loginService.getGeneralMaster(this.gtype).subscribe(master =>{
      //console.log(master);
      this.AllMastersList = master['master']
     //console.log(this.AllClinicList)
    })
    this.ttype = this.gtype.replace(/([A-Z])/g, ' $1')
  }

  goToAdd  = (gtype) => {
    
    this.router.navigateByUrl(`/general-addmaster/`+gtype);
  }
delete =(list,gtype)=>{
  
  window.localStorage.setItem("ggmid", list.id.toString())
  console.log(localStorage)
  
  this.loginService.deleteGeneralMaster(this.gtype).subscribe(data=>{
    alert('Master Data deleted Successfully');
    window.location.reload();
  })

}
  goToEditMaster  = (list,gtype) => {
    console.log(list);
    //alert(gtype);
    //alert(list.id);
    window.localStorage.setItem("ggmid", list.id.toString());
    
    this.actRoute.paramMap.subscribe(params => {
      this.gtype = params.get('gtype');

   });

    this.router.navigateByUrl(`/general-editmaster/${list.id}`);
    
    //this.router.navigateByUrl(`/editmastertable/`+gtype+`/${list.id}`);
    //this.router.navigateByUrl(`/editmastertable/`+mid);
  }

}
