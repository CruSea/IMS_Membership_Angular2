import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { Group } from 'app/group.interface';
@Injectable()
export class ContactDetailService {

  constructor(private http: HttpClient) { }
// contact adding and removing service
              postTogroup( group_id: number, contact_id: number){
              return this.http.post('http://localhost:80/testapp/public/api/Contact-detail/' + group_id + ' / ' + contact_id,{
                              headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
                                 }
// Remove Contact from group
        getGroup(group_id: number){
                  return this.http.get<Group>('http://localhost/testapp/public/api/Contact-detail/' + group_id)
                   }
// remove contact from group
        removeComtact(contact_id: number) {
          return this.http.delete('http://localhost/testapp/public/api/Contact-detail/' + contact_id)
        }
}
