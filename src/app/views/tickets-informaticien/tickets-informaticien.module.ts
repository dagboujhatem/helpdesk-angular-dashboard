import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TicketIndexRelancerInformaticienComponent} from './ticket-index-relancer-informaticien/ticket-index-relancer-informaticien.component';

import {TicketReponseIndexInformaticienComponent} from './ticket-reponse-index-informaticien/ticket-reponse-index-informaticien.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {TicketsInformaticienRoutingModule} from './tickets-informaticien-routing.module';

@NgModule({
  declarations: [
   
    TicketIndexRelancerInformaticienComponent,
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
