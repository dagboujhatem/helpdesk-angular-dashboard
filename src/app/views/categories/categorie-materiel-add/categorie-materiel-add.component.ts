import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-categorie-materiel-add',
  templateUrl: './categorie-materiel-add.component.html',
  styleUrls: ['./categorie-materiel-add.component.css']
})
export class CategorieMaterielAddComponent implements OnInit {
  CategorieMaterielAddForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder
  
    ) { }
  
    ngOnInit() {this. CategorieMaterielAddForm = this.formBuilder.group({
      description: ['', [Validators.required],
      ]
  });
    }
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this. CategorieMaterielAddForm.invalid) {
          return;
      }}}
  
