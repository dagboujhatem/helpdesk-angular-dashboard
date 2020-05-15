import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { ValidationService } from '../../common/utils/validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avis-add',
  templateUrl: './avis-add.component.html',
  styleUrls: ['./avis-add.component.css']
})
export class AvisAddComponent implements OnInit {

  avisAddForum: FormGroup;
  submitted = false;

  constructor(
                 private formBuilder: FormBuilder,
                 private avisService: TicketsService,
                 private toasterService: ToasterService,
                 private dataTableService: DataTableService,
                 private validationService: ValidationService,
                 private router: Router){}

  ngOnInit() {
    this.avisAddForum = this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
       prenom: [{value: '', disabled: true}, ],
      depratement: [{value: '', disabled: true}, ],
      avis: ['', [Validators.required]],
      descriptionavis: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.avisAddForum .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.avisAddForum .invalid) {
        return;
    }
    const avisData = new FormData();

    avisData.append('avis', this.avisAddForum .get('avis').value);
    avisData.append('descriptionavis', this.avisAddForum .get('descriptionavis').value);


    this.avisService.addTicket(avisData).subscribe(
      (responseBody) => {
      this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });



    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.avisAddForum .value, null, 4));
  }
  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Ticket ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }


}
