import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AccesService} from '../acces.service';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-acces-add',
  templateUrl: './acces-add.component.html',
  styleUrls: ['./acces-add.component.css']
})
export class AccesAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private accesService: AccesService,
              private toasterService: ToasterService,
              private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.accesAddForm.controls; }

  //  image preview
  public imagePath;
  imgURL: any;
  // form validation
  accesAddForm: FormGroup;
  submitted = false;

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.imgURL = null;
      this.toasterService.pop('error', 'Erreur dans la photo de profil:', 'Seules les images sont prises en charge.');
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }


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

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.accesAddForm.invalid) {
        return;
    }

    const requestBody = {
      identifiant : this.accesAddForm.get('identifiant').value ,
      nom : this.accesAddForm.get('nom').value ,
      prenom : this.accesAddForm.get('prenom').value ,
      email : this.accesAddForm.get('email').value ,
      password : this.accesAddForm.get('password').value ,
      cin : this.accesAddForm.get('cin').value ,
      telephone : this.accesAddForm.get('telephone').value ,
      adresse : this.accesAddForm.get('adresse').value ,
      departement : this.accesAddForm.get('departement').value ,
      lieu_de_travail : this.accesAddForm.get('lieux_de_travail').value ,
      date_d_embauche : this.accesAddForm.get('date_d_embauche').value ,
      photo : this.accesAddForm.get('photo').value ,
      role : this.accesAddForm.get('role').value
    };
    this.accesService.addUser(requestBody).subscribe(responseBody => {
      this.responseBodyProcess(responseBody);
    }, error => {
      this.errorProccess(error);
    });
  }

  private responseBodyProcess(responseBody: any) {
    this.toasterService.pop('success', 'User added successfully!', responseBody.message);
    this.router.navigate(['/home/accès/index']);
  }

  private errorProccess(error: any) {
    this.toasterService.pop('error', 'Please verify your e-mail or password!', error.error.message);
  }
}
