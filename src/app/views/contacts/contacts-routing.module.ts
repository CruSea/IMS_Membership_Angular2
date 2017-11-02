import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactGroupComponent } from './contact-group.component';
import { ContactListComponent } from './contact-list.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contacts'
    },
    children: [
      
      {
        path: 'contact-list',
        component: ContactListComponent,
        data: {
          title: 'Contact-list'
        }
      },
      {
        path: 'contact-group',
        component: ContactGroupComponent,
        data: {
          title: 'Contact-group'
        }
      }
    ]
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ContactsRoutingModule { }
