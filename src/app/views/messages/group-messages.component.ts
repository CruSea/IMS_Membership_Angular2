import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from './services/message.service';

@Component({
  selector: 'app-group-messages',
  templateUrl: './group-messages.component.html'
})
export class GroupMessagesComponent implements OnInit {
groups:any;
group_messages:any;

  constructor( private messageservice: MessageService) { }

  ngOnInit() {
    this.messageservice.getGroup().subscribe(
        group => {this.groups = group['groups']}
    );
    this.messageservice.get_group_message().subscribe(
        messages => {this.group_messages = messages['messages']}
    );
  }



  onSend(form: NgForm){
         this.messageservice.SendToGroup(form.value).subscribe(
           ()=>alert('message sent!!!')
         );
  }

  // onDelete(){
  //   this.messageservice.deleteMessage(this.group_messages.id).subscribe(
  //     ()=> alert('Message Deleted!!!')
  //   );
  // }
}
