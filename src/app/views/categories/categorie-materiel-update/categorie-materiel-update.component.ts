import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { CategorieMaterielService } from '../categorie-materiel.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-categorie-materiel-update',
  templateUrl: './categorie-materiel-update.component.html',
  styleUrls: ['./categorie-materiel-update.component.css']
})
export class CategorieMaterielUpdateComponent implements OnInit {

  selectedFile = null;
  categirieMaterielID = null ;
  categorieMaterielUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private categorieMaterielService: CategorieMaterielService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }
   ngOnInit() {
      this.categirieMaterielID = this.route.snapshot.paramMap.get('id');
      this.categorieMaterielService.getCategorieMaterielById(this.categirieMaterielID).subscribe(
        (bodyResponse) => { this.loadCategorieData(bodyResponse); }
      );
      this.categorieMaterielUpdateForm = this.formBuilder.group({
        objet: ['', Validators.required],
        probleme: ['', Validators.required],
        description: ['', Validators.required],
        solutionFile: ['', ]
      });
  }

  loadCategorieData(bodyResponse) {
    const data = bodyResponse.data;
    this.categorieMaterielUpdateForm.patchValue(data);
  }

  changeSelectedFile(files) {
    if (files.length === 0) {
      return;
    }
    this.selectedFile = files[0];
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieMaterielUpdateForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieMaterielUpdateForm.invalid) {
      return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('_method', 'put');
    requestBody.append('objet', this.categorieMaterielUpdateForm.get('objet').value);
    requestBody.append('probleme', this.categorieMaterielUpdateForm.get('probleme').value);
    requestBody.append('description', this.categorieMaterielUpdateForm.get('description').value);
    if (this.selectedFile !== undefined && this.selectedFile !== null) {
      requestBody.append('solution_file', this.selectedFile, this.selectedFile.name);
    }

    this.categorieMaterielService.updateCategorieMateriel(this.categirieMaterielID, requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); }
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Catégorie matériel modifiée:', bodyResponse.message);
    this.router.navigate(['/home/categories/materiel/index']);
  }

}
