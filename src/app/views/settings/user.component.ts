import {Component, OnChanges, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserObject} from './user.object';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit , OnChanges{
  users: UserObject[];
  users_list = new UserObject();
  constructor(private authservice: AuthService) { }

  ngOnInit() {
        // this.authservice.getuser().subscribe(
        //      users => {this.users = users['users'];} );
  }
  ngOnChanges(){
    // this.authservice.getuser().subscribe(
    //   users => {this.users = users['users'];} );
  }

  onAdduser(form: NgForm) {
        this.authservice.signuUp(form.value);
  }

  // onEditUser(user){
  //       this.users_list = user;
  // }
  //
  // onUserUpdate(edit: NgForm) {
  //          this.authservice.updateUser(this.users_list.id, edit.value).subscribe(
  //            () => alert('User account Updated Successfully!!')
  //          );
  // }
}
