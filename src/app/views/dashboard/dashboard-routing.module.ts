import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AccesIndexComponent } from '../acces/acces-index/acces-index.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    }/*,
    children: [
      {
        path: 'accès', 
        component: AccesIndexComponent, 
        data: {
          title: 'Accès'
        }
      }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
