import { Component, OnInit } from '@angular/core';
import { SharedService } from '../event-emitter.service';

@Component({
  selector: 'app-clnic-dashboard-tab',
  templateUrl: './clnic-dashboard-tab.component.html',
  styleUrls: ['./clnic-dashboard-tab.component.scss']
})
export class ClnicDashboardTabComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.sendClickEvent();
  }

}
