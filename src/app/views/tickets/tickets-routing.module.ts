import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketPrioriteComponent} from './ticket-priorite/ticket-priorite.component';
import {TicketShowComponent} from './ticket-show/ticket-show.component';
import { AvisAddComponent } from './avis-add/avis-add.component';
import { TicketRelanceAddComponent } from './ticket-relance-add/ticket-relance-add.component';
import { TicketResoluIndexComponent } from './ticket-resolu-index/ticket-resolu-index.component';
import { TicketRelanceIndexComponent } from './ticket-relance-index/ticket-relance-index.component';


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
        path: 'show/:id',
        component: TicketShowComponent,
        data: {
          title: 'Afficher les détails d\'un ticket'
        }
      },
      {
        path: 'update/:id',
        component: TicketUpdateComponent,
        data: {
          title: 'Modifier un ticket'
        }
      },
      {
        path: 'priorite/:id',
        component: TicketPrioriteComponent,
        data: {
          title: 'Affecter la priorité'
        }
      },
      {
        path: 'avis/add/:ticketID',
        component: AvisAddComponent,
        data: {
          title: 'Ajouter un avis'
        }
      },
      {
        path: 'relance',
        component:  TicketRelanceAddComponent,
        data: {
          title: 'relancer'
        }
      },
      {
        path: 'indexresolu',
        component:      TicketResoluIndexComponent,
        data: {
          title: 'Répondre'
        }
      },
      {
        path: 'indexrelance',
        component:     TicketRelanceIndexComponent,
        data: {
          title: 'Répondre'
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
