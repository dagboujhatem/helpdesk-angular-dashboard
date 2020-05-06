import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { CategorieMaterielService } from '../categorie-materiel.service';

@Component({
  selector: 'app-categorie-materiel-index',
  templateUrl: './categorie-materiel-index.component.html',
  styleUrls: ['./categorie-materiel-index.component.css']
})
export class CategorieMaterielIndexComponent implements OnInit {
  categoriesMaterielsData = null;
  constructor(private categorieMaterielService: CategorieMaterielService,
    private toasterService: ToasterService) { }

ngOnInit(): void {
this.loadCategorieMateriel();
}

// pour charger les catégories Materielfrom REST API
loadCategorieMateriel() {
this.categorieMaterielService.getAllCategorieMateriel().subscribe(
(bodyResponse) => { this.getCategorieMaterielData(bodyResponse); });
}

// get catégorie data from bodyresponse
getCategorieMaterielData(bodyResponse) {
this.categoriesMaterielsData = bodyResponse.data;
}
// delete catégorie
deleteCategorieMateriel (id) {
this.categorieMaterielService.deleteCategorieMateriel(id).subscribe(
(bodyResponse) => { this.getMessage(bodyResponse); });
}

getMessage(bodyResponse) {
this.toasterService.pop('success', 'Supprimé avec succès!', bodyResponse.message);
}
}
