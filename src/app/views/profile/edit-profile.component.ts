import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styles: []
})
export class EditProfileComponent implements OnInit {
  constructor(private profileservice: ProfileService) { }

  ngOnInit() {
  }

  public change_password(form: NgForm){
       this.profileservice.change_password(form.value).subscribe(
         () => alert('password changed')
       );
  }
}
