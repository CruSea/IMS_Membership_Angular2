import {Component, OnChanges, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {User, UserPaginator} from './user.object.mapper';
import {AuthService} from '../auth.service';
import {UserService} from "./services/user.service";
import* as swal from 'sweetalert';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[];
  role:any;
  public User_list_paginator = new UserPaginator();
  users_list = new User();
  constructor(private authservice: AuthService, private  userservice: UserService) { }

  ngOnInit() {
     this.updatePagepaginator();
        this.userservice.Userlistpaginator.subscribe(
            data => { this.User_list_paginator = data } );
    this.userservice.getRole().subscribe(
      roles => {this.role = roles['roles'];} );
  }
 public updatePagepaginator(){
    this.userservice.getUserPaginator();
 }
 public onAdduser(form: NgForm) {
      this.userservice.signuUp(form.value).subscribe(
          () => { this.updatePagepaginator();  swal("New User Created!", "success");} );
    form.reset();
  }
 public activate(activated_user){
    this.users_list= activated_user;
    this.userservice.activateUser(this.users_list.id, activated_user).subscribe();
  }
  public onEditUser(user){
        this.users_list = user;
  }
  public onUserUpdate() {
         this.userservice.updateUser(this.users_list.id,this.users_list).subscribe(
             () => {this.updatePagepaginator();  swal("User Account updated Successfully!", "success");} );
  }
  public getPaginatedUser(request_full_url){
    this.userservice.getPaginatedUser(request_full_url);
  }

  public  ondelete(user_id: number) {


    swal({
      title: "Are you sure?",
      text: " you want to delete this user?!",
      icon: "warning",
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
           this.userservice.deleteUser(user_id).subscribe(
            () => { this.updatePagepaginator() } );
          swal("User has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your message is safe!");
        }
      });




  }
}
