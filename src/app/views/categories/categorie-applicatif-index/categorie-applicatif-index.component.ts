import { Component, OnInit } from '@angular/core';
import {CategorieApplicatifService} from '../categorie-applicatif.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-categorie-applicatif-index',
  templateUrl: './categorie-applicatif-index.component.html',
  styleUrls: ['./categorie-applicatif-index.component.css']
})
export class CategorieApplicatifIndexComponent implements OnInit {
  categoriesApplicatifsData = null;
  constructor(private categorieApplicatifService: CategorieApplicatifService,
              private toasterService: ToasterService) { }

  ngOnInit(): void {
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
  }
  // delete catégorie
  deleteCategorieApplicatif (id) {
    this.categorieApplicatifService.deleteCategorieApplicatif(id).subscribe(
      (bodyResponse) => { this.getMessage(bodyResponse); });
  }

  getMessage(bodyResponse) {
    this.toasterService.pop('success', 'Supprimé avec succès!', bodyResponse.message);
  }
}
