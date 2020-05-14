import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-reponse-fournisseur',
  templateUrl: './ticket-reponse-fournisseur.component.html',
  styleUrls: ['./ticket-reponse-fournisseur.component.css']
})
export class TicketReponseFournisseurComponent implements OnInit {
  reponseFrsAddForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.reponseFrsAddForum = this.formBuilder.group({
      observateur: ['', [Validators.required]],
        description: ['', [Validators.required]],
        file: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.reponseFrsAddForum .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reponseFrsAddForum .invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reponseFrsAddForum .value, null, 4));
  }


}
