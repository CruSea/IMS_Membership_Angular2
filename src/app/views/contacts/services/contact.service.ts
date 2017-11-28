import { Injectable } from '@angular/core';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http'
import { Contact } from 'app/views/contacts/contact.interface';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';

@Injectable()
export class ContactService {
      constructor(private http: HttpService, private authservice: AuthService) { }
// contact list services handled here
     addContact(contacts: Contact ) {
           const token = this.authservice.getUserToken();
             return this.http.sendCustomPostRequest('http://localhost:80/testapp/public/api/Contact-list?token=' + token, contacts ,{
             headers : new HttpHeaders ({'Content-Type': 'application/json' })
                   }); }
     // upload(fileToUpload: any) {
     //       const input = new FormData();
     //       input.append('file', fileToUpload);
     //       return this.http.post('http://localhost:80/testapp/public/api/Contact-list', input); }
     getContact() {
       const token = this.authservice.getUserToken();
              return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/Contact-list?token=' + token) }
     updateContact(id: number, newcontact: Contact ) {
       const token = this.authservice.getUserToken();
              return this.http.sendCustomPutRequest('http://localhost/testapp/public/api/Contact-list/' + id + '?token=' + token ,  + newcontact,
              { headers : new HttpHeaders ({'Content-Type': 'application/json' })
              }); }
     deleteContact(id: number) {
       const token = this.authservice.getUserToken();
              return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/Contact-list/' + id + '?token=' + token); }


  // postTogroup(group_id: number, contact_id: number) {
  //   return this.http.post('http://localhost:80/testapp/public/api/Contact-detail/' + group_id / + contact_id,{
  //     headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //   }); }
}
