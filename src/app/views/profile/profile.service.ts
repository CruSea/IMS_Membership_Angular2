import { Injectable } from '@angular/core';
import {HttpService} from '../http.service';
import {AuthService} from '../auth.service';
import { HttpHeaders} from '@angular/common/http';
import {Profile} from './profile.object';

@Injectable()
export class ProfileService {

  constructor( private  http: HttpService, private  authservice: AuthService) { }

  public change_password( new_data: Profile ){
      const token = this.authservice.getUserToken();
       return this.http.sendPutRequest('password?token=' + token, new_data,
         { headers : new HttpHeaders ({'Content-Type': 'application/json' })} );
  }

}
