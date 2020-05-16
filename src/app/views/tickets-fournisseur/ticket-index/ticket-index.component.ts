import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {TicketInformaticienService} from '../../tickets-informaticien/ticket-informaticien.service';
import {ToasterService} from 'angular2-toaster';
import {DataTableService} from '../../common/utils/data-table.service';
import {TicketFournisseurService} from '../ticket-fournisseur.service';

@Component({
  selector: 'app-ticket-index',
  templateUrl: './ticket-index.component.html',
  styleUrls: ['./ticket-index.component.css']
})
export class TicketIndexComponent implements OnDestroy, OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public ticketsData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  constructor(private ticketFournisseurService: TicketFournisseurService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService) { }

  ngOnInit(): void {
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadtickets();
  }

  // pour charger les tickets from REST API
  loadtickets() {
    this.ticketFournisseurService.getAllTickets().subscribe(
      (bodyResponse) => { this.getTicketsData(bodyResponse); });
  }

  // get tickets data from body response
  getTicketsData(bodyResponse) {
    this.ticketsData = bodyResponse.data;
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
