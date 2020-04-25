import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketAdminPrioriteComponent} from './ticket-admin-priorite/ticket-admin-priorite.component';


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
        path: 'add',
        component: TicketAddComponent,
        data: {
          title: 'Ajouter un ticket'
        }
      },
      {
        path: 'update',
        component: TicketUpdateComponent,
        data: {
          title: 'Modifier un ticket'
        }
      },
      {
        path: 'priorité',
        component: TicketAdminPrioriteComponent,
        data: {
          title: 'Affecter la priorité'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule {}
