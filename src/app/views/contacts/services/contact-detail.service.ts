import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { Group } from 'app/views/contacts/group.interface';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
@Injectable()
export class ContactDetailService {

  constructor(private http: HttpService, private authservice: AuthService) { }
// contact adding and removing service
              postTogroup( group_id: number, contact_id: number){
                const token = this.authservice.getUserToken();
                  return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/Contact-detail/' + group_id, + ' / ' + contact_id + '?token=' + token,{
                              headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
                                 }
// Remove Contact from group
        getGroup(group_id: number){
                     const token = this.authservice.getUserToken();
                  return this.http.sendCustomGetRequest('http://localhost:80/testapp/public/api/Contact-detail/' + group_id + '?token=' + token)
                   }
// remove contact from group
        removeComtact(contact_id: number) {
          return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/Contact-detail/' + contact_id)
        }
}
