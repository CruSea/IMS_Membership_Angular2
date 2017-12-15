import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'app/views/contacts/services/contact.service';
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
    this.UpdatepagePaginator();
    this.contactservice.Contactlistpaginator.subscribe(
         data => {  this.contact_list_paginator = data } );
            }
  public UpdatepagePaginator(){
    this.contactservice.getContactPaginator();
  }
  public getPaginatedContact(request_url) {
    this.contactservice.getPaginatedContact(request_url);
  }
 // add contact on modal form submit
   public onSubmit(form: NgForm ){
                    this.contactservice.addContact(form.value).subscribe(
                   data => { this.UpdatepagePaginator()} );
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
      public  onupdate() {
     console.log(this.contactnew.id, this.contactnew);
                this.contactservice.updateContact(this.contactnew.id, this.contactnew).subscribe(
                    () => { this.UpdatepagePaginator();});
                        // this.contacts = this.contactnew;
                                  }
// delete contact information
      public  ondelete(contacts) {
               this.contactservice.deleteContact(this.contactnew.id).subscribe(
                       () => { this.UpdatepagePaginator() } );

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
