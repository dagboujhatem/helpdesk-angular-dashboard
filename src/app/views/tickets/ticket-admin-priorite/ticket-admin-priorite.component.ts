import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TiketsService} from '../tikets.service';
import {ValidationService} from '../../common/utils/validation.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-ticket-admin-priorite',
  templateUrl: './ticket-admin-priorite.component.html',
  styleUrls: ['./ticket-admin-priorite.component.css']
})
export class TicketAdminPrioriteComponent implements OnInit {

  ticketAdminPrioriteForm: FormGroup;
  ticketID = null ;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private ticketService: TiketsService,
              private validationService: ValidationService,
              private toasterService: ToasterService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.ticketAdminPrioriteForm = this.formBuilder.group({
      objet: [{value: '', readOnly : true}],
      element: [{value: '', readOnly : true}],
      nom: [{value: '', readOnly : true}],
      date_d_ouverture: [{value: '', readOnly : true}],
      date_d_echeance: [{value: '', readOnly : true}],
      categorie: [{value: '', readOnly : true}],
      impact: [{value: '', readOnly : true}],
      etat: [{value: '', readOnly : true}],
      departement: [{value: '', readOnly : true}],
      num_agence: [{value: '', readOnly : true}],
      commentaire: [{value: '', readOnly : true}],
      lieu: [{value: '', readOnly : true}],
      description: [{value: '', readOnly : true}],
      file: [{value: '', readOnly : true}],
      priorite: ['', [Validators.required]]
    });
    this.ticketID = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }


  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketAdminPrioriteForm.patchValue(data);
  }
  // convenience getter for easy access to form fields
  get f() { return this.ticketAdminPrioriteForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketAdminPrioriteForm.invalid) {
        return;
    }

   const priorite = this.ticketAdminPrioriteForm.get('priorite').value;
    this.ticketService.addPrioriteToTicket(this.ticketID, priorite).subscribe(
      (responseBody) => {
        this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Ticket ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/mestickets']);
  }

}
