import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TiketsService } from '../tikets.service';
import { ToasterService } from 'angular2-toaster';
import { ValidationService } from '../../common/utils/validation.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent implements OnInit {

  ticketID = null ;
  file = null;
    ticketUpdateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private ticketService: TiketsService,
              private toasterService: ToasterService,
              private validationService: ValidationService,
              private router: Router) { }

  ngOnInit() {
    this.ticketID = this.route.snapshot.paramMap.get('id');
    this.ticketService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); }
    );
    this.ticketUpdateForm = this.formBuilder.group({
      objet: ['', Validators.required],
      element: ['', Validators.required],
      nom: ['', Validators.required],
       etat: ['', Validators.required],
       date_d_ouverture: ['', Validators.required],
      date_d_echeance: ['', Validators.required],
      categorie: ['', Validators.required],
      impact: ['', Validators.required],
      lieu: ['', Validators.required],
      commentaire: ['', ],
      num_agence: ['', ],
      departement: ['', ],
      description: ['', Validators.required],
      file: ['',Validators.required ]
    });
  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketUpdateForm.patchValue(data);
  }

  changeSelectedFile(files) {
    if (files.length === 0) {
      return;
    }
    this.file = files[0];
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketUpdateForm.controls; }

  // on submit
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketUpdateForm.invalid) {
      return;
    }

    // Create a request body data
    const requestBody = new FormData();
    requestBody.append('_method', 'put');
    requestBody.append('objet', this.ticketUpdateForm.get('objet').value);
    requestBody.append('element', this.ticketUpdateForm.get('nom').value);
    requestBody.append('nom', this.ticketUpdateForm.get('element').value);
    requestBody.append('etat', this.ticketUpdateForm.get('etat').value);
    requestBody.append('date_d_ouverture', this.ticketUpdateForm.get('date_d_ouverture').value);
    requestBody.append('date_d_echeance', this.ticketUpdateForm.get('date_d_echeance').value);
    requestBody.append('categorie', this.ticketUpdateForm.get('categorie').value);
    requestBody.append('num_agence', this.ticketUpdateForm.get('num_agence').value);
    requestBody.append('departement', this.ticketUpdateForm.get('departement').value);
    requestBody.append('impact', this.ticketUpdateForm.get('impact').value);
    requestBody.append('lieu', this.ticketUpdateForm.get('lieu').value);
    requestBody.append('commentaire', this.ticketUpdateForm.get('commentaire').value);
    requestBody.append('description', this.ticketUpdateForm.get('description').value);
    requestBody.append('file', this.ticketUpdateForm.get('file').value);
    if (this.file !== undefined && this.file !== null) {
      requestBody.append('solution_file', this.file, this.file.name);
    }
    this.ticketService.updateTicket(this.ticketID, requestBody).subscribe(
      (bodyResponse) => { this.processResponse(bodyResponse); },
      (error) => { this.validationService.showValidationsMessagesInToast(error); }
    );
  }

  processResponse(bodyResponse) {
    this.toasterService.pop('success', 'Ticket modifiée:', bodyResponse.message);
    this.router.navigate(['/home/tickets/mestickets']);
  }

}
