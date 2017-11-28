import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from  '@angular/http';
 // contact components
import { ContactGroupComponent } from './contact-group.component';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
// contact routing
import { ContactsRoutingModule } from './contacts-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';


import { ContactService } from 'app/views/contacts/services/contact.service';
import { ContactGroupService } from 'app/views/contacts/services/contact-group.service';
import { ContactDetailService } from 'app/views/contacts/services/contact-detail.service';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import {AuthService} from '../auth.service';
import {HttpService} from '../http.service';



@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule,
    // PopupModule.forRoot()
  ],
  declarations: [ContactListComponent, ContactGroupComponent, ContactDetailComponent, FilterPipe ],
  providers:[ContactService, ContactGroupService , ContactDetailService , AuthService, HttpService]
})
export class ContactsModule { }
