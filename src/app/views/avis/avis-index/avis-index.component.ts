import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import {Subject} from 'rxjs';
import { AuthorizationService } from '../../common/security/authorization.service';
import {AvisService} from '../avis.service';

@Component({
  selector: 'app-avis-index',
  templateUrl: './avis-index.component.html',
  styleUrls: ['./avis-index.component.css']
})
export class AvisIndexComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  public avisData: Array<any> = [];
  dtOptions: DataTables.Settings = {};
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // auth role
  role = null;

  constructor(private avisService: AvisService,
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

  // get avis data from body response
  getAvisData(bodyResponse) {
    this.avisData = bodyResponse.data;
    this.dtTrigger.next();
  }

}
