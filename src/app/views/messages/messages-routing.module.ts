import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {GroupMessagesComponent} from './group-messages.component';
import {SentMessagesComponent} from './sent-messages.component';
import {ReceivedMessagesComponent} from './received-messages.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Messages'
    },
    children: [

      {
        path: 'group-messages',
        component: GroupMessagesComponent,
        data: {
          title: 'Group-messages'
        }
      },
      {
        path: 'sent-messages',
        component: SentMessagesComponent ,
        data: {
          title: 'sent-messages'
        }
      },
      {
        path: 'received-messages',
        component: ReceivedMessagesComponent,
        data: {
          title: 'received-messages'
        }
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MessagesRoutingModule { }
