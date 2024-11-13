import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mastertable',
  templateUrl: './mastertable.component.html',
  styleUrls: ['./mastertable.component.scss']
})
export class MastertableComponent implements OnInit {
  AllMastersList;
  p: number = 1; 
  filter;
  ttype: string;

  constructor(private loginService: LoginserviceService,private router:Router,private actRoute: ActivatedRoute) { }

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  type  = localStorage.getItem('type')

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
      this.ttype = this.type.replace(/([A-Z])/g, ' $1')

   });

    this.loginService.getMaster(this.type).subscribe(master =>{
      //console.log(master);
      this.AllMastersList = master['master']
     //console.log(this.AllClinicList)
    })

  }

  goToAdd  = (type) => {
    
    this.router.navigateByUrl(`/addmastertable/`+type);
  }

  goToEditMaster  = (list,type) => {
    //console.log(type);
    window.localStorage.setItem("mid", list.id.toString());

    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');
      window.localStorage.setItem("type", this.type.toString());
   });

    this.router.navigateByUrl(`/editmastertable/${list.id}`);
    
    //this.router.navigateByUrl(`/editmastertable/`+type+`/${list.id}`);
    //this.router.navigateByUrl(`/editmastertable/`+mid);
  }
  delete =(list,gtype)=>{
  
    window.localStorage.setItem("ggmid", list.id.toString())
    console.log(localStorage)
    
    this.loginService.deleteGeneralMaster(gtype).subscribe(data=>{
      alert('Master Data deleted Successfully');
      window.location.reload();
    })
  
  }
}
