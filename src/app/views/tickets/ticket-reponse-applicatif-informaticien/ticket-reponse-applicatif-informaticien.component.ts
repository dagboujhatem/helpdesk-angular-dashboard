import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-reponse-applicatif-informaticien',
  templateUrl: './ticket-reponse-applicatif-informaticien.component.html',
  styleUrls: ['./ticket-reponse-applicatif-informaticien.component.css']
})
export class TicketReponseApplicatifInformaticienComponent implements OnInit {

  reponeMatForum: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.reponeMatForum = this.formBuilder.group({
        nom: ['', [Validators.required]],
        description: ['', [Validators.required]],
        file: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.reponeMatForum .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reponeMatForum .invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reponeMatForum.value, null, 4));
  }
}
