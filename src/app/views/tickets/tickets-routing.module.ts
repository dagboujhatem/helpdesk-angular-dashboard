import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketPrioriteComponent} from './ticket-priorite/ticket-priorite.component';
import {TicketShowComponent} from './ticket-show/ticket-show.component';
import { AvisAddComponent } from './avis-add/avis-add.component';
import { TicketRelanceComponent } from './ticket-relance/ticket-relance.component';
import {TicketReponseShowComponent} from './ticket-reponse-show/ticket-reponse-show.component';


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
        path: 'reponse/show/:id',
        component: TicketReponseShowComponent,
        data: {
          title: 'Réponse du ticket'
        }
      },
      {
        path: 'relance/:id',
        component: TicketRelanceComponent,
        data: {
          title: 'relancer'
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
