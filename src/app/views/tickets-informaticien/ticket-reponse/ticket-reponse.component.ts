import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationService} from '../../common/utils/validation.service';
import {ToasterService} from 'angular2-toaster';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketInformaticienService} from '../ticket-informaticien.service';

@Component({
  selector: 'app-ticket-reponse',
  templateUrl: './ticket-reponse.component.html',
  styleUrls: ['./ticket-reponse.component.css']
})
export class TicketReponseComponent implements OnInit {

  ticketID = null ;
  submitted = false;
  file = null;
  ticketResponseForum: FormGroup;
  ticketDetailsForum: FormGroup;
  ticketCategory = null;
  selectedFile = null;

  constructor(private formBuilder: FormBuilder,
              private ticketInformaticienService: TicketInformaticienService,
              private validationService: ValidationService,
              private toasterService: ToasterService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {

    this.ticketDetailsForum = this.formBuilder.group({
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
      description: [{value: '', disabled : true}]
    });

    this.ticketResponseForum = this.formBuilder.group({
      nom_informaticien: ['', [Validators.required]],
      description_solution: ['', [Validators.required]],
      file_solution: ['', [Validators.required]]
    });

    // pour lire l ID de l'url
    this.ticketID = this.route.snapshot.paramMap.get('id');
    // get data ticket
    this.ticketInformaticienService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });

  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketDetailsForum.patchValue(data);
    this.file = data.file;
    this.ticketCategory = data.categorie;
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketResponseForum.controls; }

  loadSelectedFile(files) {
    if (files.length === 0) {
      return;
    }

    this.selectedFile = files[0];
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketResponseForum.invalid) {
      return;
    }
    // envoyer les données  à la base de données
    const ticketResponseData = new FormData();
    ticketResponseData.append('nom_info', this.ticketResponseForum .get('nom_informaticien').value);
    ticketResponseData.append('description_solution', this.ticketResponseForum .get('description_solution').value);
    // add ticket id ()
    ticketResponseData.append('ticket_id', this.ticketID);
    // le champ solution file
    ticketResponseData.append('file', this.selectedFile, this.selectedFile.name);

    this.ticketInformaticienService.addTicketResponse(ticketResponseData).subscribe(
      (responseBody) => {
        this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }
  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Réponse ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }

}
