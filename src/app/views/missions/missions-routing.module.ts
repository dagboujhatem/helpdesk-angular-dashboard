import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionComponent} from './mission/mission.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des missions'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component: MissionComponent,
        data: {
          title: 'Cards'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule {}
