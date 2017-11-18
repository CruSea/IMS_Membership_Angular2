import { Injectable } from '@angular/core';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { Contact } from 'app/contact.interface';

@Injectable()
export class ContactService {
      constructor(private http: HttpClient) { }
// contact list services handled here
     addContact(contacts: Contact ) {
             return this.http.post('http://localhost:80/testapp/public/api/Contact-list', contacts ,{
             headers : new HttpHeaders ({'Content-Type': 'application/json' })
                   }); }
     // upload(fileToUpload: any) {
     //       const input = new FormData();
     //       input.append('file', fileToUpload);
     //       return this.http.post('http://localhost:80/testapp/public/api/Contact-list', input); }
     getContact() {
              return this.http.get<Contact>('http://localhost/testapp/public/api/Contact-list') }
     updateContact(id: number, newcontact: Contact ) {
              return this.http.put('http://localhost/testapp/public/api/Contact-list/' + id, newcontact,
              { headers : new HttpHeaders ({'Content-Type': 'application/json' })
              }); }
     deleteContact(id: number) {
              return this.http.delete('http://localhost/testapp/public/api/Contact-list/' + id); }
  // postTogroup(group_id: number, contact_id: number) {
  //   return this.http.post('http://localhost:80/testapp/public/api/Contact-detail/' + group_id / + contact_id,{
  //     headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //   }); }
}
