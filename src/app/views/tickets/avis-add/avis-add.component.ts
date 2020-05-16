import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { ToasterService } from 'angular2-toaster';
import { DataTableService } from '../../common/utils/data-table.service';
import { ValidationService } from '../../common/utils/validation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-avis-add',
  templateUrl: './avis-add.component.html',
  styleUrls: ['./avis-add.component.css']
})
export class AvisAddComponent implements OnInit {

  avisAddForum: FormGroup;
  submitted = false;
  ticketID = null ;

  constructor( private formBuilder: FormBuilder,
               private ticketsService: TicketsService,
               private toasterService: ToasterService,
               private dataTableService: DataTableService,
               private validationService: ValidationService,
               private router: Router,
               private route: ActivatedRoute) {}

  ngOnInit() {
    this.avisAddForum = this.formBuilder.group({
      nom: [{value: '', disabled: true}, ],
      prenom: [{value: '', disabled: true}, ],
      departement: [{value: '', disabled: true}, ],
      avis: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.ticketID = this.route.snapshot.paramMap.get('ticketID');
    this.loadTicket();
  }

  loadTicket() {
    this.ticketsService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }

  private loadTicketData(bodyResponse) {
    // pour ingorer la confusion entre la description de ticket
    const data = bodyResponse.data;
    data.description = '';
    this.avisAddForum.patchValue(data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.avisAddForum .controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.avisAddForum .invalid) {
        return;
    }

    const avisData = new FormData();
    avisData.append('avis', this.avisAddForum .get('avis').value);
    avisData.append('description', this.avisAddForum .get('description').value);
    avisData.append('ticket_id', this.ticketID);


    this.ticketsService.addAvis(avisData).subscribe(
      (responseBody) => { this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }
  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Avis ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }


}
