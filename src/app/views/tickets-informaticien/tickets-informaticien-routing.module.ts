import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketIndexRelancerInformaticienComponent } from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import { TicketReponseIndexInformaticienComponent } from './ticket-reponse-index-informaticien/ticket-reponse-index-informaticien.component';


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
        path: 'indexreponseinformaticien',
        component: TicketReponseIndexInformaticienComponent,
        data: {
          title: 'Index des  tickets '
        }
      },
      {
        path: 'ticketsrelances',
        component: TicketIndexRelancerInformaticienComponent,
        data: {
          title: ' Liste des tickets relancés'
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
