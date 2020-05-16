import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketReponseComponent} from './ticket-reponse/ticket-reponse.component';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketsFournisseurRoutingModule} from './tickets-fournisseur-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {TicketReponseShowComponent} from './ticket-reponse-show/ticket-reponse-show.component';

@NgModule({
  declarations: [
    TicketReponseComponent,
    TicketIndexComponent,
    TicketReponseShowComponent,
  ],
  imports: [
    CommonModule,
    TicketsFournisseurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class TicketsFournisseurModule { }
