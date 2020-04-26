import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-categorie-materiel-add',
  templateUrl: './categorie-materiel-add.component.html',
  styleUrls: ['./categorie-materiel-add.component.css']
})
export class CategorieMaterielAddComponent implements OnInit {
  categorieMaterielAddForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }


    ngOnInit() {
      this.categorieMaterielAddForm = this.formBuilder.group({
        objet: ['', Validators.required],
        probleme: ['', Validators.required],
        description: ['', Validators.required],
        solutionFile: ['', Validators.required]
      });
    }

  // convenience getter for easy access to form fields
  get f() { return this.categorieMaterielAddForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.categorieMaterielAddForm.invalid) {
          return;
      }
    }
}
