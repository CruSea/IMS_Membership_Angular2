import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {SettingsRoutingModule} from './settings-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [UserComponent]
})
export class SettingsModule { }
