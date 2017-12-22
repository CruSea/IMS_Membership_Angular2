import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Contact, ContactsPaginator  } from './contact.object.mapper';
import { ContactService } from 'app/views/contacts/services/contact.service';
import { Group } from 'app/views/contacts/group.interface';
import { GroupObject } from './group.object';
import { ContactGroupService } from 'app/views/contacts/services/contact-group.service';
import { ContactDetailService } from 'app/views/contacts/services/contact-detail.service';
import {AuthService} from "../auth.service";
import {ContactDetailPaginator} from "./group_members.object.mapper";
import* as swal from 'sweetalert';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
 contact:Contact[];
  // public contactnew = new Contact();
  @Output() group_count = new EventEmitter();
  @Input() groupContactlist: any;
  public contact_list_paginator = new ContactsPaginator();
  public group_list_paginator = new ContactDetailPaginator();
  constructor( private contactservice: ContactService, private contactdetailservice: ContactDetailService ){}

  ngOnInit() {
// Get contacts on page load
      this.updatePagesContactList();
      this.contactservice.getContactPaginator();
      this.contactdetailservice.Contactlistpaginator.subscribe(
           data => { this.contact_list_paginator = data }
      );
// Get groups on page load
      this.UpdatePagePaginator();
      this.contactdetailservice.Grouplistpaginator.subscribe(
         data => {this.group_list_paginator = data; } );
       }
  public UpdatePagePaginator(){
    const group_list_id = JSON.parse(localStorage.getItem('current_group_id' ));
    this.contactdetailservice.getGroupDetailPaginator(group_list_id);
  }
  public updatePagesContactList(){
    const group_list_id = JSON.parse(localStorage.getItem('current_group_id' ));
    console.log(group_list_id);
    this.contactdetailservice.getContactPaginator(group_list_id);
  }
  public getPaginatedGroup(request_url) {
    this.contactdetailservice.getPaginatedGroup(request_url);
  }
  public getPaginatedContact(request_url) {
    this.contactdetailservice.getPaginatedContact(request_url);
  }
 public addTogroup( contact_id: number) {
    const group_add_id = JSON.parse(localStorage.getItem('current_group_id' ));
    this.contactdetailservice.addTogroup(group_add_id, contact_id).subscribe(
      () => { this.UpdatePagePaginator(); this.updatePagesContactList(); swal("Contact Added To Group!", "success"); } );
  }
 public removeFromgroup(id: number){
   swal({
     title: "Are you sure?",
     text: "Do you really want to remove this contact? think about it again!!",
     icon: "warning",
     dangerMode: true,
   })
     .then((willDelete) => {
       if (willDelete) {
         this.contactdetailservice.removeContact(id).subscribe(
           () => { this.UpdatePagePaginator(); this.updatePagesContactList() } );
         swal("Contact has been removed!", {
           icon: "success",
         });
       } else {
         swal("Your Contact is safe!");
       }
     });

   }

}
