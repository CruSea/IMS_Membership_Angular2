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
         this.updateGroupPage();
            }
  public updateGroupPage(){
          this.contactgroupservice.getGroup().subscribe(
            grouplist  => { this.groups = grouplist['contactgroup']; },
            (error: Response ) => console.log(error) );
                }
// Create new Group
   public  onSubmit(g: NgForm ) {
         this.contactgroupservice.addGroup(g.value).subscribe(
            () =>  {this.updateGroupPage(); swal(' Group Created!', 'success') });
            g.reset();
                         }
  public   onDetail(id: number) {
       this.groupnew.id = id;
       localStorage.setItem('current_group_id', JSON.stringify(this.groupnew.id))
     }



}
