import { Component, OnInit, ViewChild } from '@angular/core';
import { CategorieMaterielService } from '../categorie-materiel.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-ticket-index-solution-materiel',
  templateUrl: './solution-materiel-index.component.html',
  styleUrls: ['./solution-materiel-index.component.css']
})
export class SolutionMaterielIndexComponent implements OnInit {
  // datatabale triggers
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  // datatable data
  categoriesMaterielsData: Array<any> = [];
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // datatable options
  dtOptions: DataTables.Settings = {};

  constructor(
    private categorieMaterielService: CategorieMaterielService,
    private toasterService: ToasterService,
    private dataTableService: DataTableService) { }

  ngOnInit(): void {
    this.dtOptions = this.dataTableService.getDataTableOptions();
    this.loadCategorieMateriel();
  }

  // pour charger les catégories Materiel from REST API
  loadCategorieMateriel() {
      this.categorieMaterielService.getAllCategorieMateriel().subscribe(
  (bodyResponse) => { this.getCategorieMaterielData(bodyResponse); });
  }

  // get catégorie data from bodyresponse
  getCategorieMaterielData(bodyResponse) {
      this.categoriesMaterielsData = bodyResponse.data;
      this.dtTrigger.next();
  }
  // delete catégorie
  deleteCategorieMateriel (id) {
    this.dataTableService.confirmDeleteMessage().then((result) => {
      // delete the category from rest api
      this.categorieMaterielService.deleteCategorieMateriel(id).subscribe(
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
      this.loadCategorieMateriel();
    });
  }

}
