import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import * as $ from 'jquery'; 
import {Router, ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Golden Health Services Pvt. Ltd.';

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  type  = localStorage.getItem('type')

  constructor(private router:Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    
  /********************************/

  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })($); // end jQuery

  /******************************** */

  //   setTimeout((router: Router) => {
  //     localStorage.clear();
  //   this.router.navigateByUrl('/')
  //   this.isLogin = localStorage.getItem('token')  ? true : false;
  //   this.id  = localStorage.getItem('id')
  //   this.role  = localStorage.getItem('role')
  // }, 500000);  //200s
    
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  logout = ()  => {
    localStorage.clear();
    this.router.navigateByUrl('/')
    this.isLogin = localStorage.getItem('token')  ? true : false;
    this.id  = localStorage.getItem('id')
    this.role  = localStorage.getItem('role')
console.log(this.isLogin)
  }
  

  getAddPage  = (type) => {
    //console.log(type);
    window.localStorage.setItem("type", type.toString());
    this.router.navigateByUrl(`/mastertable/`+type);
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('type');

   });


  }

  
  getgeneralAddPage  = (gtype) => {
    console.log(gtype);
    window.localStorage.setItem("gtype", gtype.toString());
    this.router.navigateByUrl(`/general-previewmasterall/`+gtype);
   
    this.actRoute.paramMap.subscribe(params => {
      this.type = params.get('gtype');
   });


  }
 
 
}