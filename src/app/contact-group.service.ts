import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Group } from 'app/group.interface';
@Injectable()
export class ContactGroupService {
public myid: Group;
      constructor(private http: HttpClient) { }
         addGroup(groups: Group ) {
            return this.http.post('http://localhost:80/testapp/public/api/Contact-group', groups,{
              headers : new HttpHeaders ({'Content-Type': 'application/json' })
            });
          }
  getGroup() {
    return this.http.get<Group>('http://localhost/testapp/public/api/Contact-group')
  }
          getGrouplist() {
            return this.http.get<Group>('http://localhost/testapp/public/api/Contact-group').subscribe(
              data => localStorage.setItem('group', JSON.stringify(data))
            )
                     }

  // deleteGroup(id: number) {
  //   return this.http.delete('http://localhost/testapp/public/api/Contact-group/' + id);
  // }
  // pushingId(group: Group) {
  //      this.pushedgroup.emit(group);
  // }

}
