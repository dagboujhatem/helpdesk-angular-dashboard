import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/common/login/login.component';
import { ResetPasswordComponent } from './views/common/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './views/common/forgot-password/forgot-password.component';
import { P404Component } from './views/common/error/404.component';
import { P500Component } from './views/common/error/500.component';
import { AccesIndexComponent } from './views/acces/acces-index/acces-index.component';
import { AccesAddComponent } from './views/acces/acces-add/acces-add.component';
import { AccesUpdateComponent } from './views/acces/acces-update/acces-update.component';
import { MissionComponent } from './views/mission/mission.component';
import { TicketIndexComponent } from './views/ticket/ticket-index/ticket-index.component';
import { TicketAddComponent } from './views/ticket/ticket-add/ticket-add.component';
import { TicketAdminPrioriteComponent } from './views/ticket/ticket-admin-priorite/ticket-admin-priorite.component';
import { TicketUpdateComponent } from './views/ticket/ticket-update/ticket-update.component';

export const routes: Routes = [

  //  routing added by oumaima
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset password Page'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot password Page'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
      
    }
  },
  // end routing
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path:'accès', 
        component: AccesIndexComponent, 
        children: [
       
        ]
      },
      {
        path: 'accès/add', 
        component: AccesAddComponent
      },
      {
        path: 'accès/update', 
        component: AccesUpdateComponent
      },
      {
        path: 'mission', 
        component: MissionComponent

      },
      {
        path: 'ticket', 
        component: TicketAddComponent

      },
      {
        path: 'priorite', 
        component:  TicketAdminPrioriteComponent

      },
      
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
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
