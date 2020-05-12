import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategorieApplicatifIndexComponent} from './categorie-applicatif-index/categorie-applicatif-index.component';
import {CategorieMaterielIndexComponent} from './categorie-materiel-index/categorie-materiel-index.component';
import {CategorieApplicatifAddComponent} from './categorie-applicatif-add/categorie-applicatif-add.component';
import {CategorieMaterielAddComponent} from './categorie-materiel-add/categorie-materiel-add.component';
import {CategorieApplicatifShowComponent} from './categorie-applicatif-show/categorie-applicatif-show.component';
import {CategorieMaterielShowComponent} from './categorie-materiel-show/categorie-materiel-show.component';
import {CategorieMaterielUpdateComponent} from './categorie-materiel-update/categorie-materiel-update.component';
import {CategorieApplicatifUpdateComponent} from './categorie-applicatif-update/categorie-applicatif-update.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des catégories'
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
      },
      {
        path: 'applicatif/show/:id',
        component: CategorieApplicatifShowComponent,
        data: {
          title: 'Affichier les détails d\'une catégorie applicatif'
        }
      },
      {
        path: 'materiel/show/:id',
        component: CategorieMaterielShowComponent,
        data: {
          title: 'Afficher les détails d\'une catégorie matériel'
        }
      },
      {
        path: 'applicatif/update/:id',
        component: CategorieApplicatifUpdateComponent,
        data: {
          title: 'Modifier une catégorie applicatif'
        }
      },
      {
        path: 'materiel/update/:id',
        component: CategorieMaterielUpdateComponent,
        data: {
          title: 'Modifier une catégorie matériel'
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
