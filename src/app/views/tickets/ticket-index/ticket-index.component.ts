import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {TicketsService} from '../tickets.service';
import { DataTableDirective } from 'angular-datatables';
import { DataTableService } from '../../common/utils/data-table.service';
import {Subject} from 'rxjs';
import { AuthorizationService } from '../../common/security/authorization.service';


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
  // auth role
  role = null;
  constructor(private ticketService: TicketsService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.role = this.authorizationService.getRole();
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadtickets();
  }

  // pour charger les tickets from REST API
  loadtickets() {
    this.ticketService.getAllTickets().subscribe(
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

  calculateDiff(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes())
      - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes()) )
      / (1000 * 60));
  }
}
