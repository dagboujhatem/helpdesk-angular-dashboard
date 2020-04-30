import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mission-reponse',
  templateUrl: './mission-reponse.component.html',
  styleUrls: ['./mission-reponse.component.css']
})
export class MissionReponseComponent implements OnInit {
  missionReponseForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.missionReponseForm = this.formBuilder.group({
      nom: ['', Validators.required],
      collaborateurs: ['', Validators.required],
      mission: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      reponse: ['', Validators.required]
    });
  }

// convenience getter for easy access to form fields
get f() { return this.missionReponseForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.missionReponseForm.invalid) {
        return;
    }
  }

}
