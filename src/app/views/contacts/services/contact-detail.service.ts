import {EventEmitter, Injectable} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http'
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import {ContactDetailPaginator} from '../group_members.object.mapper';
import {ContactsPaginator} from "../contact.object.mapper";

@Injectable()
export class ContactDetailService {
  public Grouplistpaginator = new EventEmitter<ContactDetailPaginator>();
  public Contactlistpaginator = new EventEmitter<ContactsPaginator>();
  constructor(private http: HttpService, private authservice: AuthService) { }
// contact adding and removing service
      public addTogroup( group_id: number, contact_id: number){
                const token = this.authservice.getUserToken();
                  return this.http.sendGetRequest('Contact-detail/' + group_id + '/' + contact_id + '?token=' + token );
                        }
  //get paginated group
      public getGroupDetailPaginator(group_id: number){
              const token = this.authservice.getUserToken();
              return this.http.sendGetRequest('Contact-detail/' + group_id + '?token=' + token).subscribe(
                data => {this.processGetGroupPaginator(data)},
                error => {console.log(error)} ); }
           private  processGetGroupPaginator(group_data){
              if(group_data && group_data.members){
                this.Grouplistpaginator.emit(group_data.members);
              } else{
                console.log(' errror has Ocured!!');
              }
            }
          public getPaginatedGroup(request_full_url) {
            const token = this.authservice.getUserToken();
            this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
              data => {this.processGetGroupPaginator(data)} );
          }

//get paginated contact list
           public getContactPaginator(group_id: number){
                const token = this.authservice.getUserToken();
                return this.http.sendGetRequest('Contact-show/' + group_id +' ?token=' + token).subscribe(
                  data => {this.processGetContactPaginator(data)},
                  error => {console.log(error)} );
              }
            private processGetContactPaginator(contact_data){
                if(contact_data && contact_data.contact_lists){
                  this.Contactlistpaginator.emit(contact_data.contact_lists);
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
// remove contact from group
       public removeContact(id: number) {
         const token = this.authservice.getUserToken();
          return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/Contact-detail/' + id + '?token=' + token);
        }
}
