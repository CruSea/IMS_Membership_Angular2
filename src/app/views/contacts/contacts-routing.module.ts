import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactGroupComponent } from './contact-group.component';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';

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
      },
      {
        path: 'contact-detail',
        component: ContactDetailComponent,
        data: {
          title: 'Contact-detail'
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
