import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Settings'
    },
    children: [
      {
        path: 'user',
        component: UserComponent,
        data: {
          title: 'User'
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
export class SettingsRoutingModule { }
