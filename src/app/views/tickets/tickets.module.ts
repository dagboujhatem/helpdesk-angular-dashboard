import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketAddComponent} from './ticket-add/ticket-add.component';
import {TicketUpdateComponent} from './ticket-update/ticket-update.component';
import {TicketAdminPrioriteComponent} from './ticket-admin-priorite/ticket-admin-priorite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Import routing module
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketShowComponent } from './ticket-show/ticket-show.component';
import {DataTablesModule} from 'angular-datatables';
import { TicketReponseInformaticienComponent } from './ticket-reponse-informaticien/ticket-reponse-informaticien.component';
import { TicketReponseFournisseurComponent } from './ticket-reponse-fournisseur/ticket-reponse-fournisseur.component';
import { TicketIndexFournisseurComponent } from './ticket-index-fournisseur/ticket-index-fournisseur.component';
import { TicketIndexInformaticienComponent } from './ticket-index-informaticien/ticket-index-informaticien.component';
import { TicketRelanceIndexInformaticienComponent } from './ticket-relance-index-informaticien/ticket-relance-index-informaticien.component';
import { TicketRelanceAddComponent } from './ticket-relance-add/ticket-relance-add.component';
import { TicketIndexAvisComponent } from './ticket-index-avis/ticket-index-avis.component';
import { TicketIndexAvisAddComponent } from './ticket-index-avis-add/ticket-index-avis-add.component';

@NgModule({
  declarations: [
    TicketIndexComponent,
    TicketAddComponent,
    TicketUpdateComponent,
    TicketAdminPrioriteComponent,
    TicketShowComponent,
    TicketReponseInformaticienComponent,
    TicketReponseFournisseurComponent,
    TicketIndexFournisseurComponent,
    TicketIndexInformaticienComponent,
    TicketRelanceIndexInformaticienComponent,
    TicketRelanceAddComponent,
    TicketIndexAvisComponent,
    TicketIndexAvisAddComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsModule { }
