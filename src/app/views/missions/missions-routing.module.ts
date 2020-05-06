import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MissionAddComponent} from './mission-add/mission-add.component';
import {MissionIndexComponent} from './mission-index/mission-index.component';
import {MissionReponseComponent} from './mission-reponse/mission-reponse.component';
import { MissionConfirmerComponent } from './mission-confirmer/mission-confirmer.component';
import { IndexMissionFournisseurComponent } from './index-mission-fournisseur/index-mission-fournisseur.component';

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
          title: 'Ajouter une mission'
        }
      },
      {
        path: 'repondre',
        component: MissionReponseComponent,
        data: {
          title: 'Répondre à une mission'
        }
      },
      {
        path: 'confirmer',
        component: MissionConfirmerComponent,
        data: {
          title: 'Répondre à une mission'
        }
      },
      {
        path: 'missionindexfrs',
        component: IndexMissionFournisseurComponent,
        data: {
          title: 'liste des missions à répondre'
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
