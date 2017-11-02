import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Contact } from "app/contact.interface";

@Injectable()
export class ContactService {

  constructor(private http:Http) { }

   addContact(contact:Contact){
     const body = JSON.stringify({contact:contact});
    //  const headers = new Headers ({'Content-Type':'application/jsaon'});
       return this.http.post('http://localhost/testapp/public/api/Contact-list', body
      );
   }

  getContact(): Observable<any>{
    return this.http.get('http://localhost/testapp/public/api/Contact-list')
    .map(
      (response: Response)=>{
        return response.json().contacts;
      }
    );
  }
}
