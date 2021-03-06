import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import {ModalModule} from 'ngx-bootstrap';

import {SettingsRoutingModule} from './settings-routing.module';

import { UserComponent } from './user.component';
import {AuthService} from '../auth.service';
import {HttpService} from '../http.service';
import {UserService} from './services/user.service';




@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  declarations: [UserComponent],
  providers: [ AuthService, HttpService, UserService]

})
export class SettingsModule { }
