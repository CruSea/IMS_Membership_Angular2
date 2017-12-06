import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
   isauthenticated: boolean;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }


  onsignIn(form: NgForm) {
       this.authservice.authenticate(form.value.email, form.value.password);
    this.authservice.autheticate_emiter.subscribe( res => {
      if (res) {
        this.router.navigate(['/dashboard']);
        // console.log('what now?' , this.authservice.getUserLogedIn());

      }
    } );


  }
}
