import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http'
import { Contact } from 'app/views/contacts/contact.interface';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import {  ContactsPaginator} from "../contact.object.mapper";

@Injectable()
export class ContactService {
 public Contactlistpaginator = new EventEmitter<ContactsPaginator>();
      constructor(private http: HttpService, private authservice: AuthService) { }
// contact list services handled here
     public addContact(contacts: Contact ) {
                const token = this.authservice.getUserToken();
                return this.http.sendPostRequest('Contact-list?token=' + token, contacts ,
               { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); }
     // upload(fileToUpload: any) {
     //       const input = new FormData();
     //       input.append('file', fileToUpload);
     //       return this.http.post('http://localhost:80/testapp/public/api/Contact-list', input); }
     // getContact() {
     //   const token = this.authservice.getUserToken();
     //          return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/Contact-list?token=' + token) }


     public getContactPaginator(){
             const token = this.authservice.getUserToken();
             return this.http.sendGetRequest('Contact-list?token=' + token).subscribe(
                data => {this.processGetContactPaginator(data)},
                error => {console.log(error)} );
               }
          processGetContactPaginator(contact_data){
              if(contact_data && contact_data.contacts){
                  this.Contactlistpaginator.emit(contact_data.contacts);
              } else{
                console.log(' errror has Ocured!!');
              }
         }
  public getPaginatedContact(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetContactPaginator(data)}
    );
  }
     updateContact(id: number, newcontact: Contact ) {
       const token = this.authservice.getUserToken();
              return this.http.sendPutRequest('Contact-list/' + id + '?token=' + token , newcontact,
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
