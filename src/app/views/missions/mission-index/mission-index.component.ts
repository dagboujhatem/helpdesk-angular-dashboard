import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { DataTableDirective } from 'angular-datatables';
import { MissionService } from '../../missions/mission.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-mission-index',
  templateUrl: './mission-index.component.html',
  styleUrls: ['./mission-index.component.css']
})
export class MissionIndexComponent implements OnInit {

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

  // pour charger les catégories Materiel from REST API
  loadMissionReponse() {
      this.missionService.getMissionReponse().subscribe(
  (bodyResponse) => { this.getMissionReponseData(bodyResponse); });
  }

  // get catégorie data from bodyresponse
  getMissionReponseData(bodyResponse) {
      this.missionsData = bodyResponse.data;
      this.dtTrigger.next();
  }
  // delete catégorie
  deleteMissionReponse (id) {
    this.dataTableService.confirmDeleteMessage().then((result) => {
      // delete the category from rest api
      this.missionService.deleteMissionReponse(id).subscribe(
        (bodyResponse) => { this.getMessage(bodyResponse); });
    }).catch(() => {});
  }

  getMessage(bodyResponse) {
      this.toasterService.pop('success', 'Supprimé avec succès!', bodyResponse.message);
      this.rerender();
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the rest api again
      this.loadMissionReponse();
    });
  }

}
