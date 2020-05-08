import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/common/login/login.component';
import { ResetPasswordComponent } from './views/common/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/common/forgot-password/forgot-password.component';
import { P404Component } from './views/common/error/404.component';
import { P500Component } from './views/common/error/500.component';
import {AuthorizationService} from './views/common/security/authorization.service';

export const routes: Routes = [

  //  routing front
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '404',
    component: P404Component
  },
  {
    path: '500',
    component: P500Component
  },
  // end front routing
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Tableau de bord'
    },
    canActivate: [AuthorizationService],
    children: [
      // Angular Lazy loading
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/acces/acces.module').then(m => m.AccesModule)
      },
      {
        path: 'missions',
        loadChildren: () => import('./views/missions/missions.module').then(m => m.MissionsModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./views/tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
