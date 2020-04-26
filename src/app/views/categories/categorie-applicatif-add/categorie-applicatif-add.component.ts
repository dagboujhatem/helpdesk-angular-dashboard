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
  constructor(private formBuilder: FormBuilder

  ) { }

  ngOnInit() {this.categorieApplicatifAddForm = this.formBuilder.group({
    description: ['', [Validators.required],
    ]
});
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.categorieApplicatifAddForm.invalid) {
        return;
    }}}
