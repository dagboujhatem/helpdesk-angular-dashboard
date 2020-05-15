import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { TiketsService } from '../tikets.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import {Subject} from 'rxjs';
import { AuthorizationService } from '../../common/security/authorization.service';

@Component({
  selector: 'app-ticket-index-avis',
  templateUrl: './ticket-index-avis.component.html',
  styleUrls: ['./ticket-index-avis.component.css']
})
export class TicketIndexAvisComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public AvisData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // auth role
  role = null;

  constructor(private avisService: TiketsService,
              private toasterService: ToasterService,
              private dataTableService: DataTableService,
              private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.role = this.authorizationService.getRole();
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadAvis();
  }

  // pour charger les infor from REST API
  loadAvis() {
    this.avisService.getAllAvis().subscribe(
      (bodyResponse) => { this.getAvisData(bodyResponse); });
  }

  // get avis data from bodyresponse
  getAvisData(bodyResponse) {
    this.AvisData = bodyResponse.data;
    this.dtTrigger.next();
  }

}
