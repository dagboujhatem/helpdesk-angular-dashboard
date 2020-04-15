import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategorieAddComponent} from './categorie-add/categorie-add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'add'
      },
      {
        path: 'add',
        component: CategorieAddComponent,
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
export class CategoriesRoutingModule {}
