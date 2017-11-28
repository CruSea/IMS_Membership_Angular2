import {EventEmitter, Injectable, Output} from '@angular/core';
import { UserObject} from './settings/user.object';
import 'rxjs/Rx';
import {HttpService} from './http.service';
import {HttpHeaders} from '@angular/common/http';
@Injectable()
export class AuthService {
  @Output() autheticate_emiter = new EventEmitter<boolean>();
  private is_authenticated: boolean;
  constructor(private httpRequest: HttpService) {
    this.is_authenticated=false;
  }

  signuUp(user: UserObject) {
     this.httpRequest.sendPostRequest('signup', user,
      {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})} ).subscribe(
       () => alert('created')
     );
  }
  authenticate(Email: string, Password: string) {
     this.httpRequest.sendPostRequest('signin', {email: Email, password: Password},
      {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})} ) .subscribe(
          data => { this.authenticate_user(data, true )},
                error => { this.authenticate_user(error, false ) }
     );
  }
  // public isAuthenticated(){
  //    return this.is_authenticated;
  // }
   public  login(){
          if(this.getUserToken() != null){
              this.httpRequest.sendGetRequest('signin?token=' + this.getUserToken()).subscribe(
                   data => {this.login_status(data)},
                   error => {this.login_status(error)}

              );
          }
   }

   login_status(login_data){
     if(login_data){
       console.log(login_data);
       this.autheticate_emiter.emit(true);
       this.is_authenticated = true;
       console.log('sccessfull!');
     }else {
       this.autheticate_emiter.emit(false);
       this.is_authenticated = false;
     }

   }
   getUserLogedIn(){
      return this.is_authenticated;


   }
  private authenticate_user(response: any, status) {
           if ( status) {
                 if (response && response.token) {
                      this.storeUserToken(response.token);
                      this.login();
                   this.is_authenticated = true;
                 }
           }
  }
public storeUserToken( user_token: string ) {
       localStorage.setItem('token_auth_key', user_token);
}
public getUserToken() {
   return localStorage.getItem('token_auth_key');
   // console.log(localStorage.getItem('token_auth_key'))

}





  // getuser(){
  //    this.httpRequest.sendGetRequest<UserObject>('signup');
  // }

  // updateUser(user_id: number, UpdatedUser: UserObject) {
  //    this.httpRequest.sendPutRequest('signup' + user_id, UpdatedUser,
  //     { headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //     }
  //   );
  // }
}








// import { Injectable } from '@angular/core';
//
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { UserObject} from './settings/user.object';
// import 'rxjs/Rx';
// @Injectable()
// export class AuthService {
//
//   constructor(private http: HttpClient) { }
//
//       signuUp(user: UserObject) {
//     return this.http.post('http://localhost/testapp/public/api/signup', user,
//       {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})} );
//             }
//       signIn(Email: string, Password: string) {
//         return this.http.post('http://localhost/testapp/public/api/signin', {email: Email, password: Password},
//           {headers : new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'})} );
//       }
//
//
//
//        getuser(){
//             return this.http.get<UserObject>('http://localhost/testapp/public/api/signup');
//        }
//
//        updateUser(user_id: number, UpdatedUser: UserObject) {
//             return this.http.put('http://localhost/testapp/public/api/Users/signup' + user_id, UpdatedUser,
//               { headers : new HttpHeaders ({'Content-Type': 'application/json' })
//               }
//               );
//        }
// }





