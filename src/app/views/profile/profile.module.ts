import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {FormsModule} from '@angular/forms';
import {ProfileService} from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ],
  declarations: [ EditProfileComponent],
  providers:[ ProfileService ]
})
export class ProfileModule { }
