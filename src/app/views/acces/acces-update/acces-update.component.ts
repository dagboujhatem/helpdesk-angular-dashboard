import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-acces-update',
  templateUrl: './acces-update.component.html',
  styleUrls: ['./acces-update.component.css']
})
export class AccesUpdateComponent implements OnInit {

  accesUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.accesUpdateForm = this.formBuilder.group({
      photo: ['', [Validators.required]],
      identifiant: ['', [Validators.required]],
      role: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cin: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      departement: ['', [Validators.required]],
      lieux_de_travail: ['', [Validators.required]],
      date_d_embauche: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.accesUpdateForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accesUpdateForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.accesUpdateForm.value, null, 4));
  } 

}
