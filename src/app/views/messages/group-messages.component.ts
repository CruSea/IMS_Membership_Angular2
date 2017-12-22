import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from './services/message.service';
import {MessagePaginator} from "./mesage.object.mapper";
import* as swal from 'sweetalert';
@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html',

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
  public onSend(form: NgForm){
     this.messageservice.SendToGroup(form.value).subscribe(
            ()=>{this.UpdatePagePaginator()} );
          form.reset();
        swal("Message Sent to group!", "success");
 }
  public getPaginatedMessage(request_url) {
    this.messageservice.getPaginatedMessage(request_url);
  }
  onDelete(message_id: number){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this message!",
      icon: "warning",
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.messageservice.deleteGroupMessage(message_id).subscribe(
            ()=> { this.UpdatePagePaginator()} );
          swal("Message has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your message is safe!");
        }
      });

  }
}
