import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketReponseComponent} from './ticket-reponse/ticket-reponse.component';
import {TicketIndexComponent} from './ticket-index/ticket-index.component';
import {TicketsFournisseurRoutingModule} from './tickets-fournisseur-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
  declarations: [
    TicketReponseComponent,
    TicketIndexComponent,
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
