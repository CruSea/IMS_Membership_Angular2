import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {AuthService} from '../auth.service';

@Injectable()
export class DashboardService {

  constructor(private http: HttpService, private authservice: AuthService) { }

  public contact_count(){
    const token = this.authservice.getUserToken();
           return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/contact_count?token=' + token);
  }
  public sent_message__count(){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/sent_count?token=' + token);
  }



}
