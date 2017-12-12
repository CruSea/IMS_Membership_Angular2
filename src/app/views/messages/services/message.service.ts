import { Injectable } from '@angular/core';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class MessageService {

  constructor(private  http: HttpService, private authservice: AuthService) { }

    getGroup(){
    const token = this.authservice.getUserToken();
         return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/groups?token=' + token)
    }

    SendToGroup(message: string){
      const token = this.authservice.getUserToken();
          return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/group-message?token=' + token, message,
            { headers : new HttpHeaders ({'Content-Type': 'application/json' })}
            );
    }

    get_group_message(){
      const token = this.authservice.getUserToken();
      return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/group-message?token=' + token)
    }
    get_contact_message(){
      const token = this.authservice.getUserToken();
      return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/contact-message?token=' + token)
    }

    sendTocontact(message: string ){
      const token = this.authservice.getUserToken();
      return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/contact-message?token=' + token, message,
        { headers : new HttpHeaders ({'Content-Type': 'application/json' })}
      );
    }


  // deleteMessage(id: number){
  //   const token = this.authservice.getUserToken();
  //   return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/group-message/' + id + '?token=' + token)
  // }

}
