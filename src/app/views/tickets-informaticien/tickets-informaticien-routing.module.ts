import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketIndexMaterielInformaticienComponent } from './ticket-index-materiel-informaticien/ticket-index-materiel-informaticien.component';
import { TicketIndexApplicatifInformaticienComponent } from './ticket-index-applicatif-informaticien/ticket-index-applicatif-informaticien.component';
import { TicketIndexRelancerInformaticienComponent } from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import { TicketReponseMaterielInformaticienComponent } from './ticket-reponse-materiel-informaticien/ticket-reponse-materiel-informaticien.component';
import { TicketReponseApplicatifInformaticienComponent } from './ticket-reponse-applicatif-informaticien/ticket-reponse-applicatif-informaticien.component';
import { TicketReponseRelanceInformaticienComponent } from './ticket-reponse-relance-informaticien/ticket-reponse-relance-informaticien.component';
// tslint:disable-next-line:max-line-length
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
        path: 'applicatifs',
        component: TicketIndexApplicatifInformaticienComponent,
        data: {
          title: 'Liste des tickets applicatifs'
        }

      },
      {
        path: 'materiels',
        component: TicketIndexMaterielInformaticienComponent,
        data: {
          title: ' Liste des tickets matériels'
        }

      },
      {
        path: 'ticketsrelances',
        component: TicketIndexRelancerInformaticienComponent,
        data: {
          title: ' Liste des tickets relancés'
        }

      },
      {
        path: 'reponsemat/:id',
        component: TicketReponseMaterielInformaticienComponent,
        data: {
          title: 'Formulaire de la réponse'
        }

      },
      {
        path: 'reponseapp/:id',
        component:  TicketReponseApplicatifInformaticienComponent,
        data: {
          title: 'Formulaire de la réponse'
        }

      },

      {
        path: 'reponserelance',
        component:     TicketReponseRelanceInformaticienComponent,
        data: {
          title: 'Répondre'
        }

      },
      {
        path: 'indexreponseinfo',
        component: TicketReponseIndexInformaticienComponent,
        data: {
          title: 'Index des  tickets résolu par fournnisseur '
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
