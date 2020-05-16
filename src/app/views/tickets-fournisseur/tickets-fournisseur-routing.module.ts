import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketReponseFournisseurComponent } from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import { TicketIndexComponent } from './ticket-index/ticket-index.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestion des tickets'
    },
    children: [
      {
        path: '',
        redirectTo: 'index'
      },
      {
        path: 'index',
        component: TicketIndexComponent,
        data: {
          title: 'Liste des tickets'
        }
      },
      {
        path: 'reponse/:id',
        component: TicketReponseFournisseurComponent,
        data: {
          title: 'Répondre à un ticket'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsFournisseurRoutingModule {}
