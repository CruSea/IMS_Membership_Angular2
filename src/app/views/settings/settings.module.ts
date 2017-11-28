import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import {ModalModule} from 'ngx-bootstrap';

import {SettingsRoutingModule} from './settings-routing.module';

import { UserComponent } from './user.component';
import {AuthService} from '../auth.service';
import {HttpService} from '../http.service';




@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthService, HttpService],
  declarations: [UserComponent]
})
export class SettingsModule { }
