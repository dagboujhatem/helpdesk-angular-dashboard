import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

 
  ticketAddForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.
    ticketAddForm = this.formBuilder.group({
        objet: ['', [Validators.required]],
        element: ['', [Validators.required]],
        nom: ['', [Validators.required]],
        date_d_ouverture: ['', [Validators.required]],
        date_d_echeance: ['', [Validators.required]],
        categorie: ['', [Validators.required]],
        impact: ['', [Validators.required]],
        etat: ['', [Validators.required]],
        departement: ['', ],
        lieu: ['',Validators.required],
        description: ['', [Validators.required]],
        photo: ['', [Validators.required]],
     
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketAddForm.controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketAddForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.ticketAddForm.value, null, 4));
  }

}
