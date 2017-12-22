import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    input.ng-invalid.ng-dirty {
      border: 1px solid #ff0f55;
    }
  `]
})
export class LoginComponent implements OnInit {
   public isauthenticated: boolean;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }


  public onsignIn(form: NgForm) {
       this.authservice.authenticate(form.value.email, form.value.password);
       this.authservice.autheticate_emiter.subscribe( res => {
         this.isauthenticated = res;
         console.log(this.isauthenticated);
         if(this.isauthenticated){
           this.router.navigate(['/dashboard']);
         }else{
             this.isauthenticated = false;
         }

    } );


  }
}
