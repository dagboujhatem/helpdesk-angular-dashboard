import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionAddComponent} from './mission-add/mission-add.component';
import {MissionIndexComponent} from './mission-index/mission-index.component';

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
        component: MissionIndexComponent,
        data: {
          title: 'Liste des missions'
        }
      },
      {
        path: 'add',
        component: MissionAddComponent,
        data: {
          title: 'Ajouter une mission-add'
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
