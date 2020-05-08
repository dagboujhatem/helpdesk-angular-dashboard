import { Component, OnInit, ViewChild } from '@angular/core';
import { TiketsService } from '../tikets.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-ticket-index-mestickets',
  templateUrl: './ticket-index-mestickets.component.html',
  styleUrls: ['./ticket-index-mestickets.component.css']
})
export class TicketIndexMesticketsComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective; 
  public ticketData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();

  constructor(private ticketService: TiketsService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService) { }

  ngOnInit(): void {
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadticket();
  }

  // pour charger les catégories applicatif from REST API
  loadticket() {
    this.ticketService.getAllTickets().subscribe(
      (bodyResponse) => { this.getTicketData(bodyResponse); });
  }

  // get catégorie data from bodyresponse
  getTicketData(bodyResponse) {
    this.ticketData = bodyResponse.data;
    this.dtTrigger.next();
  }



  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the rest api again
      this.loadticket();
    });
  }

}
