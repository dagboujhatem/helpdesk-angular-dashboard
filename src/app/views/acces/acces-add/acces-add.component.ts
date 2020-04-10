import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-acces-add',
  templateUrl: './acces-add.component.html',
  styleUrls: ['./acces-add.component.css']
})
export class AccesAddComponent implements OnInit {

  //  image preview 
  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    } else {
      this.message = '';
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  // form validation 
  accesAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.accesAddForm = this.formBuilder.group({
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
  get f() { return this.accesAddForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accesAddForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.accesAddForm.value, null, 4));
  }

}
