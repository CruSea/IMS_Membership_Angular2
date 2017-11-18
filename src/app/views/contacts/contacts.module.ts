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
// import {PopupModule} from 'ng2-opd-popup';

import { ContactService } from 'app/contact.service';
import { ContactGroupService } from 'app/contact-group.service';
import { ContactDetailService } from 'app/contact-detail.service';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';



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
  declarations: [ContactListComponent, ContactGroupComponent, ContactDetailComponent ],
  providers:[ContactService, ContactGroupService , ContactDetailService]
})
export class ContactsModule { }
