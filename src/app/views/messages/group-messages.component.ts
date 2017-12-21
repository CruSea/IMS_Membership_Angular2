import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from './services/message.service';
import {MessagePaginator} from "./mesage.object.mapper";

@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html'
})
export class GroupMessagesComponent implements OnInit {
groups:any;
group_messages:any;
  public Message_list_paginator = new MessagePaginator();
  constructor( private messageservice: MessageService) { }

  ngOnInit() {
    this.UpdatePagePaginator();
      this.messageservice.Messagelistpaginator.subscribe(
        data => { this.Message_list_paginator = data } );
    this.messageservice.getGroup().subscribe(
        group => {this.groups = group['groups']} );
            }
 public UpdatePagePaginator(){
   this.messageservice.getMessagePaginator();
 }
  onSend(form: NgForm){
         this.messageservice.SendToGroup(form.value).subscribe(
           ()=>{this.UpdatePagePaginator()} );
         form.reset();
  }
  public getPaginatedMessage(request_url) {
    this.messageservice.getPaginatedMessage(request_url);
  }
  onDelete(message_id: number){
    this.messageservice.deleteGroupMessage(message_id).subscribe(
      ()=> {this.UpdatePagePaginator()}
    );
  }
}
