import { Component, OnInit } from '@angular/core';
import {MessageService} from './services/message.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styles: []
})
export class SentMessagesComponent implements OnInit {
  contact_message: any;
  constructor(private messageservice: MessageService) { }

  ngOnInit() {
     this.messageservice.get_contact_message().subscribe(
              message =>{this.contact_message = message['messages'] }
     );

  }


  onSendmessage(f: NgForm){
        this.messageservice.sendTocontact(f.value ).subscribe(
          () => alert(" message sent!!! ")
        );
  }

}
