import { Component, ElementRef } from '@angular/core';
import {UserService} from '../../views/settings/services/user.service';
import {UserPaginator} from '../../views/settings/user.object.mapper';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  providers:[UserService]
})
export class AppSidebar {
  public User_list_paginator = new UserPaginator();
  constructor(private el: ElementRef, private userservice: UserService) { }

  //wait for the component to render completely
  ngOnInit(): void {
    this.userservice.getUserPaginator();
    this.userservice.Userlistpaginator.subscribe(
      data => { this.User_list_paginator = data } );

    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
