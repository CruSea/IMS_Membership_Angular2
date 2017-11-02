import { Component,ViewChild,Input,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from "app/contact.interface";
import { ContactService } from "app/contact.service";

import { Response } from '@angular/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',

})
export class ContactListComponent implements OnInit{
  public infoModal;
  
  //  contact:Contact;

  contacts: Contact[];

 constructor(private contactservice: ContactService){}
ngOnInit(){

    this.contactservice.getContact().subscribe(
  (contactslist:Contact[])=>this.contacts=contactslist,
  (error:Response)=>console.log(error)
);

}
  onSubmit(f:NgForm){
      //  this.contactservice.addContact(contact).subscribe(
      //    () => alert("Contact Created")
      //  );
    console.log()
  }

}
