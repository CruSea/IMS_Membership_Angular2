import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor(private authservice: AuthService) { }
  // ngOnInit(){
  //      console.log('sucessfull!',this.authservice.getUserLogedIn());
  // }

}
