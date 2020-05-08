import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketAdminPrioriteComponent} from './ticket-admin-priorite/ticket-admin-priorite.component';
import {TicketShowComponent} from './ticket-show/ticket-show.component';
import { TicketIndexMesticketsComponent } from './ticket-index-mestickets/ticket-index-mestickets.component';
import { TicketIndexAvisAddComponent } from './ticket-index-avis-add/ticket-index-avis-add.component';
import { TicketIndexAvisComponent } from './ticket-index-avis/ticket-index-avis.component';
import { TicketIndexMaterielInformaticienComponent } from './ticket-index-materiel-informaticien/ticket-index-materiel-informaticien.component';
import { TicketIndexApplicatifInformaticienComponent } from './ticket-index-applicatif-informaticien/ticket-index-applicatif-informaticien.component';
import { TicketIndexRelancerInformaticienComponent } from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import { TicketIndexSolutionApplicatifComponent } from './ticket-index-solution-applicatif/ticket-index-solution-applicatif.component';
import { TicketIndexSolutionMaterielComponent } from './ticket-index-solution-materiel/ticket-index-solution-materiel.component';
import { TicketReponseMaterielInformaticienComponent } from './ticket-reponse-materiel-informaticien/ticket-reponse-materiel-informaticien.component';
import { TicketReponseApplicatifInformaticienComponent } from './ticket-reponse-applicatif-informaticien/ticket-reponse-applicatif-informaticien.component';
import { TicketRelanceAddComponent } from './ticket-relance-add/ticket-relance-add.component';
import { TicketReponseRelanceInformaticienComponent } from './ticket-reponse-relance-informaticien/ticket-reponse-relance-informaticien.component';
import { TicketResoluIndexComponent } from './ticket-resolu-index/ticket-resolu-index.component';
import { TicketRelanceIndexComponent } from './ticket-relance-index/ticket-relance-index.component';
import { TicketReponseFournisseurComponent } from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import { TicketIndexFournisseurComponent } from './ticket-index-fournisseur/ticket-index-fournisseur.component';
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
        component: TicketAdminPrioriteComponent,
        data: {
          title: 'Affecter la priorité'
        }
        
      },
      {
        path: 'mestickets',
        component:  TicketIndexMesticketsComponent,
        data: {
          title: 'La liste des tickets'
        }
        
      },
      {
        path: 'addavis',
        component: TicketIndexAvisAddComponent,
        data: {
          title: 'Ajouter un avis'
        }
        
      },
      {
        path: 'indexavis',
        component:  TicketIndexAvisComponent,
        data: {
          title: 'Liste des avis du personnel'
        }
        
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
        component:TicketIndexMaterielInformaticienComponent,
        data: {
          title: ' Liste des tickets matériels'
        }
        
      },
      {
        path: 'ticketsrelances',
        component:TicketIndexRelancerInformaticienComponent,
        data: {
          title: ' Liste des tickets relancés'
        }
        
      },
      {
        path: 'solutionsapplicatifs',
        component:TicketIndexSolutionApplicatifComponent,
        data: {
          title: ' Liste des solutions applicatifs'
        }
        
      },
      {
        path: 'solutionsmateriels',
        component:TicketIndexSolutionMaterielComponent,
        data: {
          title: ' Liste des solutions matériels'
        }
        
      },
      {
        path: 'reponsemat',
        component:TicketReponseMaterielInformaticienComponent,
        data: {
          title: 'Formulaire de la réponse'
        }
        
      },
      {
        path: 'reponseapp',
        component:  TicketReponseApplicatifInformaticienComponent,
        data: {
          title: 'Formulaire de la réponse'
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
        path: 'reponserelance',
        component:     TicketReponseRelanceInformaticienComponent,
        data: {
          title: 'Répondre'
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
        
      },
      {
        path: 'reponsefrs',
        component:     TicketReponseFournisseurComponent,
        data: {
          title: 'Répondre'
        }
        
      },
      {
        path: 'indexticketfrs',
        component:     TicketIndexFournisseurComponent,
        data: {
          title: 'Index des tickets'
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
export class TicketsRoutingModule {}
