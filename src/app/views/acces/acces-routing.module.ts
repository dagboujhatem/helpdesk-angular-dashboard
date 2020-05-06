import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccesIndexComponent} from './acces-index/acces-index.component';
import {AccesAddComponent} from './acces-add/acces-add.component';
import {AccesUpdateComponent} from './acces-update/acces-update.component';
import {AccesShowComponent} from './acces-show/acces-show.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des accès'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component: AccesIndexComponent,
        data: {
          title: 'Liste des utilisateurs'
        }
      },
      {
        path: 'add',
        component: AccesAddComponent,
        data: {
          title: 'Ajouter un utilisateur'
        }
      },
      {
        path: 'update/:id',
        component: AccesUpdateComponent,
        data: {
          title: 'Modifier un utilisateur'
        }
      },
      {
        path: 'show/:id',
        component: AccesShowComponent,
        data: {
          title: 'Afficher un utilisateur'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesRoutingModule {}
