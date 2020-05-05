import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CategorieApplicatifService} from '../categorie-applicatif.service';

@Component({
  selector: 'app-categorie-applicatif-update',
  templateUrl: './categorie-applicatif-update.component.html',
  styleUrls: ['./categorie-applicatif-update.component.css']
})
export class CategorieApplicatifUpdateComponent implements OnInit {
  categirieApplicatifID = null ;
  categorieApplicatifUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private categorieApplicatifService: CategorieApplicatifService) { }

  ngOnInit() {
    this.categirieApplicatifID = this.route.snapshot.paramMap.get('id');
    this.categorieApplicatifService.getCategorieApplicatifById(this.categirieApplicatifID).subscribe(
      (bodyResponse) => { this.loadCategorieData(bodyResponse); }
    );
    this.categorieApplicatifUpdateForm = this.formBuilder.group({
      type: ['', Validators.required],
      probleme: ['', Validators.required],
      description: ['', Validators.required],
      solutionFile: ['', ]
    });
  }

  loadCategorieData(bodyResponse) {
    const data = bodyResponse.data;
    this.categorieApplicatifUpdateForm.patchValue(data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieApplicatifUpdateForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieApplicatifUpdateForm.invalid) {
      return;
    }
  }
}
