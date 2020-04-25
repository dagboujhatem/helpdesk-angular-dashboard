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
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: MissionComponent,
        data: {
          title: 'Ajouter une mission'
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
