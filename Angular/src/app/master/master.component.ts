import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute) { }
  type  = localStorage.getItem('type')
  gtype  = localStorage.getItem('gtype')
  ngOnInit(): void {
  }
  getAddPage  = (type) => {
    console.log(type);
    window.localStorage.setItem("type", type.toString());
    this.router.navigateByUrl(`/mastertable/`+type);
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
   });


  }
  delete =(list,gtype)=>{
  
    window.localStorage.setItem("ggmid", list.id.toString())
    console.log(localStorage)
    
    this.loginService.deleteGeneralMaster(gtype).subscribe(data=>{
      alert('Master Data deleted Successfully');
      window.location.reload();
    })
  
  }
  goToAdd  = (type) => {
    
    this.router.navigateByUrl(`/addmastertable/`+type);
  }
}
