import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './categorie-add.component.html',
  styleUrls: ['./categorie-add.component.css']
})
export class CategorieAddComponent implements OnInit {

  categorieAddForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.categorieAddForum = this.formBuilder.group({
        element: ['', [Validators.required]],
        type: ['', [Validators.required]],
         description: ['', [Validators.required]],
        solution: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.categorieAddForum.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.
      categorieAddForum.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this. categorieAddForum.value, null, 4));
  }

}
