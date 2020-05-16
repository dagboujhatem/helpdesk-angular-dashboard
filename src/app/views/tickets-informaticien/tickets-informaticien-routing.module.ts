import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketIndexRelancerInformaticienComponent } from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import { TicketIndexComponent } from './ticket-index/ticket-index.component';
import {TicketReponseComponent} from './ticket-reponse/ticket-reponse.component';


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
        component: TicketReponseComponent,
        data: {
          title: 'Répondre à un ticket'
        }
      },
      {
        path: 'ticketsrelances',
        component: TicketIndexRelancerInformaticienComponent,
        data: {
          title: 'Liste des tickets relancés'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsInformaticienRoutingModule {}
