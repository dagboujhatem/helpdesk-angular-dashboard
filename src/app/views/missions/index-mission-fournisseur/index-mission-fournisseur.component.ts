import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {MissionService} from '../mission.service';
import {ToasterService} from 'angular2-toaster';
import {DataTableService} from '../../common/utils/data-table.service';

@Component({
  selector: 'app-index-mission-fournisseur',
  templateUrl: './index-mission-fournisseur.component.html',
  styleUrls: ['./index-mission-fournisseur.component.css']
})
export class IndexMissionFournisseurComponent implements OnDestroy, OnInit {

  // datatabale triggers
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  // datatable data
  missionsData: Array<any> = [];
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // datatable options
  dtOptions: DataTables.Settings = {};

  constructor(
    private missionService: MissionService,
    private toasterService: ToasterService,
    private dataTableService: DataTableService) { }

  ngOnInit(): void {
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
