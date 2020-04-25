import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategorieApplicatifIndexComponent} from './categorie-applicatif-index/categorie-applicatif-index.component';
import {CategorieMaterielIndexComponent} from './categorie-materiel-index/categorie-materiel-index.component';
import {CategorieApplicatifAddComponent} from './categorie-applicatif-add/categorie-applicatif-add.component';
import {CategorieMaterielAddComponent} from './categorie-materiel-add/categorie-materiel-add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'applicatif/index'
      },
      {
        path: 'applicatif/index',
        component: CategorieApplicatifIndexComponent,
        data: {
          title: 'Liste des catégories applicatifs'
        }
      },
      {
        path: 'materiel/index',
        component: CategorieMaterielIndexComponent,
        data: {
          title: 'Liste des catégories matériels'
        }
      },
      {
        path: 'applicatif/add',
        component: CategorieApplicatifAddComponent,
        data: {
          title: 'Ajouter une catégorie applicatif'
        }
      },
      {
        path: 'materiel/add',
        component: CategorieMaterielAddComponent,
        data: {
          title: 'Ajouter une catégorie matériel'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
