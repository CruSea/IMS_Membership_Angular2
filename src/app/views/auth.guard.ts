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


    // if( this.authservice.getUserLogedIn()){
    //   return true;
    // }else{
    //
    //   this.router.navigate(['/']);
    // }

    // console.log('authgard activaed', this.authservice.getUserLogedIn());



  }
}
