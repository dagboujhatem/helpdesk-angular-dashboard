import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { DataTableDirective } from 'angular-datatables';
import { MissionService } from '../../missions/mission.service';
import {Subject} from 'rxjs';
import {AuthorizationService} from '../../common/security/authorization.service';

@Component({
  selector: 'app-mission-index',
  templateUrl: './mission-index.component.html',
  styleUrls: ['./mission-index.component.css']
})
export class MissionIndexComponent implements OnDestroy, OnInit {

  // datatabale triggers
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  // datatable data
  missionsData: Array<any> = [];
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // datatable options
  dtOptions: DataTables.Settings = {};
  // auth role
  role = null;

  constructor(
    private missionService: MissionService,
    private toasterService: ToasterService,
    private dataTableService: DataTableService,
    private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
    this.role = this.authorizationService.getRole();
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadMissionReponse();
  }

  // pour charger les missions from REST API
  loadMissionReponse() {
      this.missionService.getMissionReponse().subscribe(
  (bodyResponse) => { this.getMissionReponseData(bodyResponse); });
  }

  // get mission data from body response
  getMissionReponseData(bodyResponse) {
      this.missionsData = bodyResponse.data;
      this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
