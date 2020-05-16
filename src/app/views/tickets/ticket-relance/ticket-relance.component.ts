import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../tickets.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket-relance',
  templateUrl: './ticket-relance.component.html',
  styleUrls: ['./ticket-relance.component.css']
})
export class TicketRelanceComponent implements OnInit {
  ticketRelanceForm: FormGroup;
  submitted = false;
  ticketID = null ;
  priorite = null ;
  selectedFile = null;

  constructor(private formBuilder: FormBuilder,
              private ticketService: TicketsService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ticketRelanceForm = this.formBuilder.group({
      nouvelle_anomalie: ['', [Validators.required]],
      objet: ['', [Validators.required]],
      element: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      date_d_ouverture: ['', [Validators.required]],
      date_d_echeance: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      impact: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      departement: ['', ],
      num_agence: ['', ],
      commentaire: ['', ],
      lieu: ['', Validators.required],
      description: ['', [Validators.required]]
    });
    this.ticketID = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.priorite = data.priorite;
    console.log(this.priorite);
    this.ticketRelanceForm.patchValue(data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketRelanceForm.controls; }

  loadSelectedFile(files) {
    if (files.length === 0) {
      return;
    }

    this.selectedFile = files[0];
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketRelanceForm.invalid) {
      return;
    }

    const ticketData = new FormData();
    ticketData.append('objet', this.ticketRelanceForm.get('objet').value);
    ticketData.append('element', this.ticketRelanceForm.get('element').value);
    ticketData.append(' nom', this.ticketRelanceForm.get('nom').value);
    ticketData.append(' date_d_ouverture', this.ticketRelanceForm.get('date_d_ouverture').value);
    ticketData.append(' date_d_echeance', this.ticketRelanceForm.get('date_d_echeance').value);
    ticketData.append(' categorie', this.ticketRelanceForm.get('categorie').value);
    ticketData.append(' impact', this.ticketRelanceForm.get('impact').value);
    ticketData.append(' etat', this.ticketRelanceForm.get('etat').value);
    ticketData.append(' departement', this.ticketRelanceForm.get('departement').value);
    ticketData.append(' num_agence', this.ticketRelanceForm.get('num_agence').value);
    ticketData.append(' commentaire', this.ticketRelanceForm.get('commentaire').value);
    ticketData.append(' lieu', this.ticketRelanceForm.get('lieu').value);
    ticketData.append(' description', this.ticketRelanceForm.get('description').value);
    // priorite
    ticketData.append(' priorite', this.priorite);
    // nouvelle_anomalie
    ticketData.append(' nouvelle_anomalie', this.ticketRelanceForm.get('nouvelle_anomalie').value);
    ticketData.append(' ticket_status', '1');
    // file not required
    if (this.selectedFile !== undefined && this.selectedFile !== null) {
      ticketData.append('file', this.selectedFile, this.selectedFile.name);
    }
    this.ticketService.relancerTicket(this.ticketID, ticketData).subscribe(
      (responseBody) => {
        this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Ticket relancé:', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }
}
