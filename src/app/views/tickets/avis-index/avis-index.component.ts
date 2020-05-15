import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { TicketsService } from '../tickets.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import {Subject} from 'rxjs';
import { AuthorizationService } from '../../common/security/authorization.service';

@Component({
  selector: 'app-avis-index',
  templateUrl: './avis-index.component.html',
  styleUrls: ['./avis-index.component.css']
})
export class AvisIndexComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public ticketsData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // auth role
  role = null;

  constructor(private ticketsService: TicketsService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.role = this.authorizationService.getRole();
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadTickets();
  }

  // pour charger les infor from REST API
  loadTickets() {
    this.ticketsService.getAllTickets().subscribe(
      (bodyResponse) => { this.getTicketsData(bodyResponse); });
  }

  // get tickets data from bodyresponse
  getTicketsData(bodyResponse) {
    this.ticketsData = bodyResponse.data;
    this.dtTrigger.next();
  }

}
