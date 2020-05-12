import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SolutionApplicatifShowComponent} from './solution-applicatif-show/solution-applicatif-show.component';
import {SolutionMaterielShowComponent} from './solution-materiel-show/solution-materiel-show.component';
import {SolutionApplicatifIndexComponent} from './solution-applicatif-index/solution-applicatif-index.component';
import {SolutionMaterielIndexComponent} from './solution-materiel-index/solution-materiel-index.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des solutions'
    },
    children: [
      {
        path: '',
        redirectTo: 'applicatifs/index'
      },
      {
        path: 'applicatifs/index',
        component: SolutionApplicatifIndexComponent,
        data: {
          title: ' Liste des solutions applicatifs'
        }
      },
      {
        path: 'materiels/index',
        component: SolutionMaterielIndexComponent,
        data: {
          title: ' Liste des solutions matériels'
        }
      },
      {
        path: 'applicatif/show/:id',
        component: SolutionApplicatifShowComponent,
        data: {
          title: 'Affichier les détails d\'une solution applicatif'
        }
      },
      {
        path: 'materiel/show/:id',
        component: SolutionMaterielShowComponent,
        data: {
          title: 'Afficher les détails d\'une solution matériel'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsRoutingModule {}
