import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from  '@angular/http';
//contact components
import { ContactGroupComponent } from './contact-group.component';
import { ContactListComponent } from './contact-list.component';
// contact routing
import { ContactsRoutingModule } from './contacts-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ContactService } from 'app/contact.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    ContactsRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule
  ],
  declarations: [ContactListComponent, ContactGroupComponent ],
  providers:[ContactService]
})
export class ContactsModule { }
