import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import {HttpHeaders} from '@angular/common/http';
import {MessagePaginator} from '../mesage.object.mapper';

@Injectable()
export class MessageService {
public  Messagelistpaginator = new EventEmitter<MessagePaginator>();
  constructor(private  http: HttpService, private authservice: AuthService) { }

    getGroup(){
    const token = this.authservice.getUserToken();
         return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/groups?token=' + token)
    }

    SendToGroup(message: string){
      const token = this.authservice.getUserToken();
          return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/group-message?token=' + token, message,
            { headers : new HttpHeaders ({'Content-Type': 'application/json' })} );
    }
       public getMessagePaginator(){
        const token = this.authservice.getUserToken();
        return this.http.sendGetRequest('group-message?token=' + token).subscribe(
          data => {this.processGetMessagePaginator(data)},
          error => {console.log(error)} );
      }
      getContactMessagePaginator(){
        const token = this.authservice.getUserToken();
        return this.http.sendGetRequest('contact-message?token=' + token).subscribe(
          data => {this.processGetMessagePaginator(data)},
          error => {console.log(error)} );
      }
      processGetMessagePaginator(message_data){
        if(message_data && message_data.messages){
          this.Messagelistpaginator.emit(message_data.messages);
        } else{
          console.log(' errror has Ocured!!');
        }
      }
  public getPaginatedMessage(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetMessagePaginator(data)}
    );
  }




    sendTocontact(message: string ){
      const token = this.authservice.getUserToken();
      return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/contact-message?token=' + token, message,
        { headers : new HttpHeaders ({'Content-Type': 'application/json' })}
      );
    }


  deleteGroupMessage(id: number){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/group-message/' + id + '?token=' + token);
  }
  deleteContactMessage(id: number){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/contact-message/' + id + '?token=' + token)
  }

}
