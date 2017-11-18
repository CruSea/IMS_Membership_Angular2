import {Component, OnInit, Output , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'app/contact.interface';
import { ContactService } from 'app/contact.service';
import { Response } from '@angular/http';
import { ContactObject } from './contact.object';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
   contactnew = new ContactObject;
          constructor(private contactservice: ContactService){}
// get contact list when page loads
        ngOnInit() {
                    this.contactservice.getContact().subscribe(
                   contactslist => { this.contacts = contactslist['contacts']; },
                   (error: Response ) => console.log(error));
                    }
 // add contact on modal form submit
        onSubmit(form: NgForm ){
                    this.contactservice.addContact(form.value).subscribe(
                   () => alert('Contact Created ') );
                    this.onrefresh();
                    form.reset();
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
         onupdate( edit: NgForm ) {
                     this.contactservice.updateContact(this.contactnew.id, this.contactnew).subscribe(
                    () => alert('Contact Info updated!!'));
                                  }

      // delete contact information

         ondelete() {
                     this.contactservice.deleteContact(this.contactnew.id).subscribe(
                    () => {
                     // this.contactdeleted.emit(this.contactnew);
                     alert('Contact Deleted!')} );
                    }
         onrefresh(){
                     this.contactservice.getContact().subscribe(
                    contactslist => { this.contacts = contactslist['contacts']; },
                    (error: Response ) => console.log(error) );
                    }
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
