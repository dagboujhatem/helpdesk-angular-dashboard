import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TiketsService } from '../tikets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ValidationService } from '../../common/utils/validation.service';

@Component({
  selector: 'app-ticket-reponse-applicatif-informaticien',
  templateUrl: './ticket-reponse-applicatif-informaticien.component.html',
  styleUrls: ['./ticket-reponse-applicatif-informaticien.component.css']
})
export class TicketReponseApplicatifInformaticienComponent implements OnInit {
  ticketID = null;
  reponeAppform: FormGroup;
  submitted = false;
  file = null;

  constructor(private formBuilder: FormBuilder ,
             private ticketService: TiketsService,
            private validationService: ValidationService,
            private toasterService: ToasterService,
            private router: Router,
            private route: ActivatedRoute){}

  ngOnInit() {
    this.reponeAppform = this.formBuilder.group({
        objet: [{value: '', disabled : true}],
        element: [{value: '', disabled : true}],
        nom: [{value: '', disabled : true}],
        date_d_ouverture: [{value: '', disabled : true}],
        date_d_echeance: [{value: '', disabled : true}],
        categorie: [{value: '', disabled : true}],
        impact: [{value: '', disabled : true}],
        etat: [{value: '', disabled : true}],
        departement: [{value: '', disabled : true}],
        num_agence: [{value: '', disabled : true}],
        commentaire: [{value: '' , disabled : true}],
        lieu: [{value: '', disabled : true}],
        description: [{value: '', disabled : true}],
        nom_info: ['', [Validators.required]],
        description_solution: ['', [Validators.required]],
        file: ['', [Validators.required]],
        informaticien: ['', [Validators.required]],
        element_info: ['', [Validators.required]],
        impact_info: ['', [Validators.required]],
        description_info: ['', [Validators.required]],
        file_info: ['', [Validators.required]],

    });
     // pour lire l ID de l'url
     this.ticketID = this.route.snapshot.paramMap.get('id');
     // get data ticket
     this.ticketService.getTicketById(this.ticketID).subscribe(
       (bodyResponse) => { this.loadTicketData(bodyResponse); });
       
  }
  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.reponeAppform.patchValue(data);
    this.file = data.file;
  }
  // convenience getter for easy access to form fields
  get f() { return this.reponeAppform .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reponeAppform.invalid) {
        return;
    }
    // envoyer les données  à la base de données
    const ticketData = new FormData();
    ticketData.append('nom_info', this.reponeAppform .get('nom_info').value);
  ticketData.append('description_solution', this.reponeAppform .get('description_solution').value);
  // add ticket id ()
  ticketData.append('ticket_id', this.ticketID);
  // le champ solution file lezem ykoun file ( thabet fiha )hethi lezem tzida fi les deux mat et app
  ticketData.append(' file', this.reponeAppform.get('file').value);

  this.ticketService.addTicketApplicatifResponse(ticketData).subscribe(
    (responseBody) => {
    this.responseBodyProcess(responseBody); },
    (error) => {  this.validationService.showValidationsMessagesInToast(error); });
}
private responseBodyProcess(responseBody) {
  this.toasterService.pop('success', 'Réponse ajouté:', responseBody.message);
  this.router.navigate(['/home/tickets/index']);

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reponeAppform.value, null, 4));
  }
}
