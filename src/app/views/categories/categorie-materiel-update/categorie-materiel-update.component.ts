import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorieMaterielService } from '../categorie-materiel.service';

@Component({
  selector: 'app-categorie-materiel-update',
  templateUrl: './categorie-materiel-update.component.html',
  styleUrls: ['./categorie-materiel-update.component.css']
})
export class CategorieMaterielUpdateComponent implements OnInit {

  categirieMaterielID = null ;
  categorieMaterielUpdateForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private categorieMaterielService: CategorieMaterielService) { }
   ngOnInit() {
  this.categirieMaterielID = this.route.snapshot.paramMap.get('id');
  this.categorieMaterielService.getCategorieMaterielById(this.categirieMaterielID).subscribe(
    (bodyResponse) => { this.loadCategorieData(bodyResponse); }
  );
  this.categorieMaterielUpdateForm = this.formBuilder.group({
    type: ['', Validators.required],
    probleme: ['', Validators.required],
    description: ['', Validators.required],
    solutionFile: ['', ]
  });
}

loadCategorieData(bodyResponse) {
  const data = bodyResponse.data;
  this.categorieMaterielUpdateForm.patchValue(data);
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
}

}
