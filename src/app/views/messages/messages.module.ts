import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupMessagesComponent } from './group-messages.component';
import {MessagesRoutingModule} from './messages-routing.module';
import {FormsModule} from '@angular/forms';
import { SentMessagesComponent } from './sent-messages.component';
import { ReceivedMessagesComponent } from './received-messages.component';


@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule
  ],
  declarations: [GroupMessagesComponent, SentMessagesComponent, ReceivedMessagesComponent]
})
export class MessagesModule { }
