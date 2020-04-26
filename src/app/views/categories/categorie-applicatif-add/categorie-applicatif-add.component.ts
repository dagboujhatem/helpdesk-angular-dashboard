import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorie-applicatif-add',
  templateUrl: './categorie-applicatif-add.component.html',
  styleUrls: ['./categorie-applicatif-add.component.css']
})
export class CategorieApplicatifAddComponent implements OnInit {
  categorieApplicatifAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categorieApplicatifAddForm = this.formBuilder.group({
      type: ['', Validators.required],
      probleme: ['', Validators.required],
      description: ['', Validators.required],
      solutionFile: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieApplicatifAddForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieApplicatifAddForm.invalid) {
        return;
    }
  }
}
