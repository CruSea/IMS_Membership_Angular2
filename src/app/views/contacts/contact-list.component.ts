import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'app/views/contacts/services/contact.service';
import { Response } from '@angular/http';
import { Contact, ContactsPaginator  } from './contact.object.mapper';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: [`
       input.ng-invalid.ng-dirty{
            border: 1px solid red;
       }
  `]
})
export class ContactListComponent implements OnInit {

    contacts: any;
   public contactnew = new Contact;
   public contact_list_paginator = new ContactsPaginator();

          constructor(private contactservice: ContactService ){ }
// get contact list when page loads
       ngOnInit() {
                   //  this.contactservice.getContact().subscribe(
                   // contactslist => { this.contacts = contactslist['contacts']; console.log(this.contacts) },
                   // (error: Response ) => console.log(error));

                      this.contactservice.getContactPaginator();
                      this.contactservice.Contactlistpaginator.subscribe(
                           data => {  this.contact_list_paginator = data }
                      );
                    }
  public getPaginatedContact(request_url) {
    this.contactservice.getPaginatedContact(request_url);
  }
 // add contact on modal form submit
        onSubmit(form: NgForm ){
                    this.contactservice.addContact(form.value).subscribe(
                   data => alert('Contact Created ') );
                    form.reset();
                     // this.onrefresh();
                               }

  //
  // addFile(): void {
  //   const fi = this.fileInput.nativeElement;
  //   if (fi.files && fi.files[0]) {
  //     const fileToUpload = fi.files[0];
  //     this.contactservice.upload(fileToUpload)
  //       .subscribe(res => {
  //         console.log(res);
  //       });
  //   }
  // }
  // pre-populate existing data on edit button
         onedit(contacts) {
                     this.contactnew = contacts;
                          }
// update contact information
         onupdate() {
                     this.contactservice.updateContact(this.contactnew.id, this.contactnew).subscribe(
                    () => alert('Contact Info updated!!'));
                        // this.contacts = this.contactnew;
                                  }

      // delete contact information

         ondelete(contacts) {

                     this.contactservice.deleteContact(this.contactnew.id).subscribe(
                       () => { alert('Contact Deleted')

                      // const postion  = this.contactnew.indexOf(contacts, 0);
                      // if (postion > -1){
                      //   this.contactnew.splice(postion, 1);
                      // }

                    } );
           // this.onrefresh();
                    }
         // onrefresh(){
         //             this.contactservice.getContact().subscribe(
         //            contactslist => { this.contacts = contactslist['contacts']; },
         //            (error: Response ) => console.log(error) );
         //            }
              // onremoved(contactnew: Contact){
              //         const postion = this.contactnew.

                      //   (contactEl: Contact) => {
                      //      return contactEl.id == contactnew.id;
                      //   }
                      // );

              // }

// onedit(contacts) {
//     this.contactnew = contacts;
//     console.log(contacts);
//
//  }


}
