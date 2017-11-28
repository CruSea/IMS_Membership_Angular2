import { Component,  OnInit } from '@angular/core';
import { ContactGroupService } from 'app/views/contacts/services/contact-group.service';
import { NgForm } from '@angular/forms';
import { Group } from 'app/views/contacts/group.interface';
import { Response } from '@angular/http';
import { GroupObject } from './group.object';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html'
})
export class ContactGroupComponent implements OnInit {
    groups: Group[];

  public groupnew = new GroupObject();
             constructor( private contactgroupservice: ContactGroupService ) {}
// return db groups on page load
     ngOnInit() {
             this.contactgroupservice.getGroup().subscribe(
            grouplist  => { this.groups = grouplist['contactgroup']; },
            (error: Response ) => console.log(error) );
                }
// Create new Group
     onSubmit(g: NgForm ) {
            this.contactgroupservice.addGroup(g.value).subscribe(
            () => alert('Group Created ') );
            // this.onrefresh();
            g.reset();
                         }
     onDetail(id: number) {
       this.groupnew.id = id;
       localStorage.setItem('current_group_id', JSON.stringify(this.groupnew.id))
       // console.log( this.groupnew.id);
     }

  // ondelete(id: number) {
  //   this.groupnew.id = id;
  //
  //   this.contactgroupservice.deleteGroup(this.groupnew.id).subscribe(
  //     () => { alert('Contact Deleted!')} );
  // }
// refresh after method excution
//     onrefresh(){
//             this.contactgroupservice.getGroup().subscribe(
//              grouplist  => { this.groups = grouplist['contactgroup'];},
//              (error: Response ) => console.log(error) );
//                }



}
