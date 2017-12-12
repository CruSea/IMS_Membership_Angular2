import {Component, OnChanges, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserObject} from './user.object';
import {AuthService} from '../auth.service';
import {UserService} from "./services/user.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit , OnChanges{
  users: UserObject[];
  role:any;
  users_list = new UserObject();
  constructor(private authservice: AuthService, private  userservice: UserService) { }

  ngOnInit() {
        this.userservice.getuser().subscribe(
             users => {this.users = users['users'];} );
    this.userservice.getRole().subscribe(
      roles => {this.role = roles['roles'];} );
  }
  ngOnChanges(){
    // this.authservice.getuser().subscribe(
    //   users => {this.users = users['users'];} );
  }

  onAdduser(form: NgForm) {

        this.userservice.signuUp(form.value).subscribe(
          () => alert('created')
        );
  }
  activate(activated_user){
    this.users_list= activated_user;
    this.userservice.activateUser(this.users_list.id, activated_user).subscribe();
  }


  onEditUser(user){
        this.users_list = user;
  }

  // onUserUpdate(edit: NgForm) {
  //          this.userservice.updateUser(this.users_list.id, edit.value).subscribe(
  //            () => alert('User account Updated Successfully!!')
  //          );
  // }
}
