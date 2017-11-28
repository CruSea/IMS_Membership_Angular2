import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'app/views/contacts/contact.interface';
import { ContactObject } from './contact.object';
import { ContactService } from 'app/views/contacts/services/contact.service';
import { Group } from 'app/views/contacts/group.interface';
import { GroupObject } from './group.object';
import { ContactGroupService } from 'app/views/contacts/services/contact-group.service';
import { ContactDetailService } from 'app/views/contacts/services/contact-detail.service';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
// public myId: number;
  contacts: any;
//   groups: Group[];
  contactnew = new ContactObject;
  // groupContactlist = new GroupObject;
  @Input() groupContactlist: any;
  constructor( private contactservice: ContactService, private contactdetailservice: ContactDetailService ){}

  ngOnInit() {
// Get contacts on page load

                this.contactservice.getContact().subscribe(
                contact => {this.contacts = contact['contacts'];},
                (error: Response ) => console.log(error) );
// Get groups on page load
              const group_list_id = JSON.parse(localStorage.getItem('current_group_id' ));
                  this.contactdetailservice.getGroup(group_list_id).subscribe(
                  group => {this.groupContactlist = group['groupmembers']; },
                  (error: Response ) => console.log(error) );
  }

  // removeFromgroup(){
  //
  // }

  addTogroup( contacts, group_id: number , contact_id: number ) {
            this.contactnew = contacts;
    const group_add_id = JSON.parse(localStorage.getItem('current_group_id' ));
                group_id = group_add_id;
                contact_id = this.contactnew.id;
    this.contactdetailservice.postTogroup(group_id, contact_id).subscribe(
      () => alert('Contact Added To Group! ') );
  }
  removeFromgroup(contact_id: number){
          this.contactdetailservice.removeComtact(contact_id).subscribe(
            () => alert('Contact Removed from group!!!') );
   }

}
