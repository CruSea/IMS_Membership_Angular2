import {EventEmitter, Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import { User, UserPaginator} from '../user.object.mapper';
@Injectable()
export class UserService {
  public Userlistpaginator = new EventEmitter<UserPaginator>();
  constructor(private  authservice: AuthService , private http: HttpService) { }

  signuUp(user: User) {
    const token = this.authservice.getUserToken();
    return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/signup?token=' + token, user,
      {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})}
    );
  }

            public getUserPaginator(){
              const token = this.authservice.getUserToken();
              return this.http.sendGetRequest('signup?token=' + token).subscribe(
                data => {this.processGetUserPaginator(data)},
                error => {console.log(error)} );
            }
            processGetUserPaginator(user_data){
              if(user_data && user_data.users){
                this.Userlistpaginator.emit(user_data.users);
              } else{
                console.log(' errror has Ocured!!');
              }
            }
            public getPaginatedUser(request_full_url) {
              const token = this.authservice.getUserToken();
              this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
                data => {this.processGetUserPaginator(data)}
              );
            }

            public activateUser(user_id: number, UpdatedUser ){
            const token = this.authservice.getUserToken();
            return this.http.sendCustomPutRequest('http://localhost/testapp/public/api/status/' + user_id + '?token=' + token , UpdatedUser,
                { headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
                  }
          getRole(){
            const token = this.authservice.getUserToken();
            return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/role?token=' + token)
                }
        updateUser(user_id: number, UpdatedUser: User) {
          const token = this.authservice.getUserToken();
           return this.http.sendCustomPutRequest('http://localhost/testapp/public/api/signup/' + user_id + '?token=' + token, UpdatedUser,
            { headers : new HttpHeaders ({'Content-Type': 'application/json' }) });
        }

        public deleteUser(id: number){
          const token = this.authservice.getUserToken();
          return this.http.sendCustomDeleteRequest('http://localhost/testapp/public/api/signup/' + id + '?token=' + token)
        }
}
