import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '../loginservice.service';
import {Router} from '@angular/router';
//declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listAssignments;
  height2;

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')

  //role = localStorage.getItem('role') === 'CLINIC'  ? true : false
  constructor(private loginService: LoginserviceService,private router:Router) {

    this.loginService.getListOfAssignments().subscribe(assignmentsList =>{
      this.listAssignments = assignmentsList['listOfAssignments']
     
    })



   }

  ngOnInit(): void {

  }


  goToEditPage  = (list) => {
    window.localStorage.setItem("aid", list.id.toString());
    this.router.navigateByUrl(`/editassignment/${list.id}`)


  }

  goToDeleteAssignment = (list):any => {
    window.localStorage.setItem("aid", list.id.toString());
     this.loginService.deleteAssignment().subscribe(res =>{
       window.location.reload();
        //this.router.navigateByUrl('/dashboard')
      
     })

  }

 


}
