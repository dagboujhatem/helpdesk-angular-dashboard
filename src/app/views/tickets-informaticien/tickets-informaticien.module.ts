import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketIndexApplicatifInformaticienComponent} from './ticket-index-applicatif-informaticien/ticket-index-applicatif-informaticien.component';
import {TicketIndexMaterielInformaticienComponent} from './ticket-index-materiel-informaticien/ticket-index-materiel-informaticien.component';
import {TicketReponseMaterielInformaticienComponent} from './ticket-reponse-materiel-informaticien/ticket-reponse-materiel-informaticien.component';
import {TicketIndexRelancerInformaticienComponent} from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';
import {TicketReponseApplicatifInformaticienComponent} from './ticket-reponse-applicatif-informaticien/ticket-reponse-applicatif-informaticien.component';
import {TicketReponseRelanceInformaticienComponent} from './ticket-reponse-relance-informaticien/ticket-reponse-relance-informaticien.component';
import {TicketReponseIndexInformaticienComponent} from './ticket-reponse-index-informaticien/ticket-reponse-index-informaticien.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {TicketsInformaticienRoutingModule} from './tickets-informaticien-routing.module';

@NgModule({
  declarations: [
    TicketIndexApplicatifInformaticienComponent,
    TicketIndexMaterielInformaticienComponent,
    TicketReponseMaterielInformaticienComponent,
    TicketIndexRelancerInformaticienComponent,
    TicketReponseApplicatifInformaticienComponent,
    TicketReponseRelanceInformaticienComponent,
    TicketReponseIndexInformaticienComponent,
  ],
  imports: [
    CommonModule,
    TicketsInformaticienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsInformaticienModule { }
