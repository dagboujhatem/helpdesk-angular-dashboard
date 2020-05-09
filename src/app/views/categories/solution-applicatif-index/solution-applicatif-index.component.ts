import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import {CategorieApplicatifService} from '../categorie-applicatif.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-ticket-index-solution-applicatif',
  templateUrl: './solution-applicatif-index.component.html',
  styleUrls: ['./solution-applicatif-index.component.css']
})
export class SolutionApplicatifIndexComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    public categoriesApplicatifsData: Array<any> = [];
    dtOptions: DataTables.Settings = {};
    // @ts-ignore
    dtTrigger: Subject = new Subject();
  
    constructor(private categorieApplicatifService: CategorieApplicatifService,
                private toasterService: ToasterService,
                private dataTableService: DataTableService) { }
  
    ngOnInit(): void {
      this.dtOptions = this.dataTableService.getDataTableOptions();
      this.loadCategorieApplicatif();
    }
  
    // pour charger les catégories applicatif from REST API
    loadCategorieApplicatif() {
      this.categorieApplicatifService.getAllCategorieApplicatif().subscribe(
        (bodyResponse) => { this.getCategorieApplicatifData(bodyResponse); });
    }
  
    // get catégorie data from bodyresponse
    getCategorieApplicatifData(bodyResponse) {
      this.categoriesApplicatifsData = bodyResponse.data;
      this.dtTrigger.next();
    }
    // delete catégorie
    deleteCategorieApplicatif (id) {
      this.dataTableService.confirmDeleteMessage().then((result) => {
        // delete the user from rest api
        this.categorieApplicatifService.deleteCategorieApplicatif(id).subscribe(
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
        this.loadCategorieApplicatif();
      });
    }
}
