import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx';
import {HttpService} from '../../http.service';
import {AuthService} from '../../auth.service';
import {UserObject} from '../user.object';
@Injectable()
export class UserService {
  constructor(private  authservice: AuthService , private http: HttpService) { }

  signuUp(user: UserObject) {
    const token = this.authservice.getUserToken();
    return this.http.sendCustomPostRequest('http://localhost/testapp/public/api/signup?token=' + token, user,
      {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})}
    );
  }

  getuser(){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/signup?token=' + token)
  }
  activateUser(user_id: number, UpdatedUser ){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomPutRequest('http://localhost/testapp/public/api/status/' + user_id + '?token=' + token , UpdatedUser,
        { headers : new HttpHeaders ({'Content-Type': 'application/json' })
        }
      );
  }
  getRole(){
    const token = this.authservice.getUserToken();
    return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/role?token=' + token)
  }
  // updateUser(user_id: number, UpdatedUser: UserObject) {
  //   const token = this.authservice.getUserToken();
  //    return this.http.sendCustomPutRequest('http://localhost/testapp/public/api/signup/' + user_id + '?token=' + token, UpdatedUser,
  //     { headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //     }
  //   );
  // }
}
