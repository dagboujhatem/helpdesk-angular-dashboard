import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from 'rxjs';
import {SolutionService} from '../solution.service';


@Component({
  selector: 'app-solution-materiel-index',
  templateUrl: './solution-materiel-index.component.html',
  styleUrls: ['./solution-materiel-index.component.css']
})
export class SolutionMaterielIndexComponent implements OnDestroy, OnInit {
  // datatabale triggers
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  // datatable data
  solutionsMaterielsData: Array<any> = [];
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // datatable options
  dtOptions: DataTables.Settings = {};

  constructor(
    private solutionService: SolutionService,
    private toasterService: ToasterService,
    private dataTableService: DataTableService) { }

  ngOnInit(): void {
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadSolutionsMateriel();
  }

  // pour charger les solutions Materiel from REST API
  loadSolutionsMateriel() {
      this.solutionService.getAllSolutionMateriel().subscribe(
  (bodyResponse) => { this.getSolutionMaterielData(bodyResponse); });
  }

  // get solutions data from body response
  getSolutionMaterielData(bodyResponse) {
      this.solutionsMaterielsData = bodyResponse.data;
      this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
