import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/common/login/login.component';
import { ResetPasswordComponent } from './views/common/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/common/forgot-password/forgot-password.component';
import { P404Component } from './views/common/error/404.component';
import { P500Component } from './views/common/error/500.component';
import {RegisterComponent} from './views/common/register/register.component';
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
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
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
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      // Angular Lazy loading
      {
        path: 'accès',
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
        path: 'catégories',
        loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule)
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
