import { Component, OnInit } from '@angular/core';
import {MessageService} from './services/message.service';
import {NgForm} from '@angular/forms';
import {MessagePaginator} from "./mesage.object.mapper";
import* as swal from 'sweetalert';
@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',

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
          () => {this.updateMessagePaginator(); swal("Message Sent to contact!", "success");} );
        f.reset();
         }
  public getPaginatedMessage(request_url) {
    this.messageservice.getPaginatedMessage(request_url);
  }

  public onDelete(message_id: number){



    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this message!",
      icon: "warning",
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {

          this.messageservice.deleteContactMessage(message_id).subscribe(
            ()=> { this.updateMessagePaginator()} );
          swal("Message has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your message is safe!");
        }
      });


  }
}
