import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
   isLogedin;
  constructor( private authservice: AuthService, private router : Router){}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authservice.getUserLogedIn();
// if(this.authservice.getUserLogedIn()){
//   console.log('from auth guard!!', this.authservice.getUserLogedIn());
//     return true;
// }

  // return this.authservice.autheticate_emiter.subscribe(
  //      data => console.log(data),
  //   console.log('from auth ?' , this.authservice.getUserLogedIn())
  // );

  }
}
