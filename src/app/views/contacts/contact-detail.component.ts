import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/contact.interface';
import { ContactObject } from './contact.object';
import { ContactService } from 'app/contact.service';
import { Group } from 'app/group.interface';
import { GroupObject } from './group.object';
import { ContactGroupService } from 'app/contact-group.service';
import { ContactDetailService } from 'app/contact-detail.service';

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
  groupContactlist: any;
  constructor( private contactservice: ContactService, private contactdetailservice: ContactDetailService, private contactgroupservice: ContactGroupService){}

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
               console.log(group_id);
               console.log(contact_id);
    this.contactdetailservice.postTogroup(group_id, contact_id).subscribe(
      () => alert('Contact Added To Group! ') );
  }

}
