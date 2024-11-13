import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import * as $ from 'jquery'; 
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.scss']
})
export class HomemenuComponent implements OnInit {

  
  appTitle: string = 'Golden Health Services Pvt. Ltd.';

  isLogin = localStorage.getItem('token')  ? true : false;
  id  = localStorage.getItem('id')
  role  = localStorage.getItem('role')
  name  = localStorage.getItem('name')
  type  = localStorage.getItem('type')
  lat: number = 51.678418;
  lng: number = 7.809007;
  isValid:boolean = true;

  constructor(private router:Router,private actRoute: ActivatedRoute) { 
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng =  15.488144739733197;
        this.lat =  73.81382741534354;
      });
    }
  }

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
