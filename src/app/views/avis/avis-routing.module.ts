import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvisIndexComponent } from '../avis/avis-index/avis-index.component';
import { AvisShowComponent } from '../avis/avis-show/avis-show.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des avis'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component:  AvisIndexComponent,
        data: {
          title: 'Liste des avis'
        }
      },
      {
        path: 'show/:id',
        component:  AvisShowComponent,
        data: {
          title: 'Détails d\'une avis'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisRoutingModule {}
