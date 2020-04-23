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
          title: 'Cards'
        }
      },
      {
        path: 'add',
        component: AccesAddComponent
      },
      {
        path: 'update/:id',
        component: AccesUpdateComponent
      },
      {
        path: 'show/:id',
        component: AccesShowComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesRoutingModule {}
