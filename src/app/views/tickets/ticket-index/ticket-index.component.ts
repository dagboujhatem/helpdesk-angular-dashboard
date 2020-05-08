import { Component, OnInit, ViewChild } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {TiketsService} from '../tikets.service';
import { DataTableDirective } from 'angular-datatables';
import { DataTableService } from '../../common/utils/data-table.service';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-ticket-index',
  templateUrl: './ticket-index.component.html',
  styleUrls: ['./ticket-index.component.css']
})
export class TicketIndexComponent implements OnInit {

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
