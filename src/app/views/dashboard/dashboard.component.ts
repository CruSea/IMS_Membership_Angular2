import {Component, OnInit} from '@angular/core';
import {DashboardService} from './dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  contact_count: any;
  sent_message_count:any;
  constructor(private dashboardservice: DashboardService) { }
  ngOnInit(){
        this.dashboardservice.contact_count().subscribe(
              count => {this.contact_count = count},

        );

    this.dashboardservice.sent_message__count().subscribe(
      count => {this.sent_message_count = count},

    );
  }

}
