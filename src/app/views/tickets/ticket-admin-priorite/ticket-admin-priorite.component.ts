import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TiketsService} from '../tikets.service';
import {ValidationService} from '../../common/utils/validation.service';
import {ToasterService} from 'angular2-toaster';
import {AuthorizationService} from '../../common/security/authorization.service';

@Component({
  selector: 'app-ticket-admin-priorite',
  templateUrl: './ticket-admin-priorite.component.html',
  styleUrls: ['./ticket-admin-priorite.component.css']
})
export class TicketAdminPrioriteComponent implements OnInit {
  ticketShowForm: FormGroup;
  ticketAdminPrioriteForm: FormGroup;
  ticketID = null ;
  submitted = false;
  file = null;

  constructor(private formBuilder: FormBuilder,
              private ticketService: TiketsService,
              private validationService: ValidationService,
              private toasterService: ToasterService,
              private router: Router,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.ticketAdminPrioriteForm = this.formBuilder.group({
      objet: [{value: '',disabled : true}],
      element: [{value: '',disabled : true}],
      nom: [{value: '',disabled : true}],
      date_d_ouverture: [{value: '',disabled : true}],
      date_d_echeance: [{value: '',disabled : true}],
      categorie: [{value: '',disabled : true}],
      impact: [{value: '',disabled : true}],
      etat: [{value: '',disabled : true}],
      departement: [{value: '',disabled : true}],
      num_agence: [{value: '',disabled : true}],
      commentaire: [{value: '',disabled : true}],
      lieu: [{value: '',disabled : true}],
      description: [{value: '',disabled : true}],
      file: [{value: '',disabled : true}],
      priorite: ['', [Validators.required]]
    });
    // pour lire l ID de l'url 
    this.ticketID = this.route.snapshot.paramMap.get('id');
    // get data ticket 
    this.ticketService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketAdminPrioriteForm.patchValue(data);
    this.file = data.file;
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketAdminPrioriteForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketAdminPrioriteForm.invalid) {
        return;
    }
     // envoyer les données  à la base 
   const priorite = this.ticketAdminPrioriteForm.get('priorite').value;
    this.ticketService.addPrioriteToTicket(this.ticketID, priorite).subscribe(
      (responseBody) => {
        this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'priorité affectée', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }

}
