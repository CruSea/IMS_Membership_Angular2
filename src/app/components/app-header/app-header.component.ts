import { Component, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {
public user: any;
  constructor(private el: ElementRef, private router: Router) { }

  //wait for the component to render completely
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user.fullname);
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }


  onlogout(){
      window.localStorage.removeItem('token_auth_key');
      this.router.navigate(['auth/login']);
  }
  onMessage(){
    this.router.navigate(['messages/received-messages']);
  }
}
