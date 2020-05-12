import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorieMaterielService } from '../categorie-materiel.service';
import {AuthorizationService} from '../../common/security/authorization.service';

@Component({
  selector: 'app-categorie-materiel-show',
  templateUrl: './categorie-materiel-show.component.html',
  styleUrls: ['./categorie-materiel-show.component.css']
})
export class CategorieMaterielShowComponent implements OnInit {
  categirieMaterielID = null ;
  categorieMaterielShowForm: FormGroup;
  solutionFile = null;
  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private categorieMaterielService: CategorieMaterielService) { }

  ngOnInit(): void {
    this.categorieMaterielShowForm = this.formBuilder.group({
      objet: [{value: '', disabled: true}, ],
      probleme: [{value: '', disabled: true}, ],
      description: [{value: '', disabled: true}, ]
    });
    this.categirieMaterielID = this.route.snapshot.paramMap.get('id');
    this.categorieMaterielService.getCategorieMaterielById(this.categirieMaterielID).subscribe(
      (bodyResponse) => { this.loadCategorieData(bodyResponse); });
  }

  loadCategorieData(bodyResponse) {
    const data = bodyResponse.data;
    this.categorieMaterielShowForm.patchValue(data);
    this.solutionFile = data.solution_file;
  }
}
