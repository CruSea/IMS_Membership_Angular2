import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import {AuthGuard} from "./views/auth.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'auth',
        loadChildren: './views/login/login.module#LoginModule'
      },
    ]
  },
  {
    path: '',
    component: FullLayout,

    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        // canActivate: [ AuthGuard ],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'messages',
        // canActivate: [ AuthGuard ],
        loadChildren: './views/messages/messages.module#MessagesModule'
      },
      {
        path: 'contacts',
        // canActivate: [ AuthGuard ],
        loadChildren: './views/contacts/contacts.module#ContactsModule'
      },
      {
        path: 'settings',
        // canActivate: [ AuthGuard ],
        loadChildren: './views/settings/settings.module#SettingsModule'
      },
      {
        path: 'profile',
        // canActivate: [ AuthGuard ],
        loadChildren: './views/profile/profile.module#ProfileModule'
      },

    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
