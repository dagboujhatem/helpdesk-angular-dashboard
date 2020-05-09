import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {TiketsService} from '../tikets.service';
import {ValidationService} from '../../common/utils/validation.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  ticketAddForm: FormGroup;
  submitted = false;
  selectedFile = null;

  constructor(private formBuilder: FormBuilder,
              private ticketService: TiketsService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }


  ngOnInit() {
    this.ticketAddForm = this.formBuilder.group({
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
        description: ['', [Validators.required]],
        file: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketAddForm.controls; }

  loadSelectedFile(files) {
    if (files.length === 0) {
      return;
    }

    this.selectedFile = files[0];
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketAddForm.invalid) {
        return;
    }

    const ticketData = new FormData();
    ticketData.append('file', this.selectedFile, this.selectedFile.name);
    ticketData.append('objet', this.ticketAddForm.get('objet').value);
    ticketData.append('element', this.ticketAddForm.get('element').value);
    ticketData.append(' nom', this.ticketAddForm.get('nom').value);
    ticketData.append(' date_d_ouverture', this.ticketAddForm.get('date_d_ouverture').value);
    ticketData.append(' date_d_echeance', this.ticketAddForm.get('date_d_echeance').value);
    ticketData.append(' categorie', this.ticketAddForm.get('categorie').value);
    ticketData.append(' impact', this.ticketAddForm.get('impact').value);
    ticketData.append(' etat', this.ticketAddForm.get('etat').value);
    ticketData.append(' departement', this.ticketAddForm.get('departement').value);
    ticketData.append(' num_agence', this.ticketAddForm.get('num_agence').value);
    ticketData.append(' commentaire', this.ticketAddForm.get('commentaire').value);
    ticketData.append(' lieu', this.ticketAddForm.get('lieu').value);
    ticketData.append(' description', this.ticketAddForm.get('description').value);

    this.ticketService.addTicket(ticketData).subscribe(
      (responseBody) => {
      this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Ticket ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/mestickets']);
  }
}
