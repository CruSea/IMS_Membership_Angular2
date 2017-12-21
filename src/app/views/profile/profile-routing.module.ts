import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EditProfileComponent} from './edit-profile.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'profile'
    },
    children: [

      {
        path: 'edit-profile',
        component: EditProfileComponent,
        data: {
          title: 'profile'
        }
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
