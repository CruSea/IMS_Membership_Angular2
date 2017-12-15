import { Component, OnInit } from '@angular/core';
import {MessageService} from './services/message.service';
import {NgForm} from '@angular/forms';
import {MessagePaginator} from "./mesage.object.mapper";

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styles: []
})
export class SentMessagesComponent implements OnInit {
  contact_message: any;
  public Contact_message_list_paginator = new MessagePaginator();
  constructor(private messageservice: MessageService) { }

  ngOnInit() {
     this.updateMessagePaginator();
     this.messageservice.Messagelistpaginator.subscribe(
      data => { this.Contact_message_list_paginator = data } );
              }
  public updateMessagePaginator() {
    this.messageservice.getContactMessagePaginator();
              }
  public onSendmessage(f: NgForm){
        this.messageservice.sendTocontact(f.value ).subscribe(
          () => {this.updateMessagePaginator()} );
        f.reset();
         }
  public getPaginatedMessage(request_url) {
    this.messageservice.getPaginatedMessage(request_url);
  }

  public onDelete(message_id: number){
      this.messageservice.deleteContactMessage(message_id).subscribe(
        ()=> { this.updateMessagePaginator()}
      );
  }
}
