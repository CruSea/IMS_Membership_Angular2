import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Group } from 'app/views/contacts/group.interface';
import {AuthService} from '../../auth.service';
import {HttpService} from '../../http.service';
@Injectable()
export class ContactGroupService {
public myid: Group;
      constructor(private http: HttpService, private authservice: AuthService) { }
         addGroup(groups: Group ) {
            const token = this.authservice.getUserToken();
            return this.http.sendCustomPostRequest('http://localhost:80/testapp/public/api/Contact-group?token=' + token, groups,{
              headers : new HttpHeaders ({'Content-Type': 'application/json' })
            });
          }
  getGroup() {
    const token = this.authservice.getUserToken();
     return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/Contact-group?token=' + token)
  }
  //         getGrouplist() {
  //           return this.http.get<Group>('http://localhost/testapp/public/api/Contact-group').subscribe(
  //             data => localStorage.setItem('group', JSON.stringify(data))
  //           )
  //                    }

  // deleteGroup(id: number) {
  //   return this.http.delete('http://localhost/testapp/public/api/Contact-group/' + id);
  //                       }
  // pushingId(group: Group) {
  //      this.pushedgroup.emit(group);
  // }

}
