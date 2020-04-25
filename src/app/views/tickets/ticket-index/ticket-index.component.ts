import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {TiketsService} from '../tikets.service';

@Component({
  selector: 'app-ticket-index',
  templateUrl: './ticket-index.component.html',
  styleUrls: ['./ticket-index.component.css']
})
export class TicketIndexComponent implements OnInit {

  public ticketsData: any = null ;
  dtOptions: DataTables.Settings = {};

  constructor(private ticketService: TiketsService,
              private toasterService: ToasterService) { }

  ngOnInit(): void {
  }

  deleteTicket(ticketID) {
  }

}
