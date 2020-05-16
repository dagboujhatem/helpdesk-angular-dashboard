import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {TicketFournisseurService} from '../ticket-fournisseur.service';
import {ToasterService} from 'angular2-toaster';
import {ValidationService} from '../../common/utils/validation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ticket-reponse',
  templateUrl: './ticket-reponse.component.html',
  styleUrls: ['./ticket-reponse.component.css']
})
export class TicketReponseComponent implements OnInit {
  ticketReponseForum: FormGroup;
  ticketDetailsForum: FormGroup;
  ticketID = null ;
  submitted = false;
  selectedFile = null;
  ticketData = null;

  constructor(private formBuilder: FormBuilder,
              private ticketFournisseurService: TicketFournisseurService,
              private validationService: ValidationService,
              private toasterService: ToasterService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.ticketDetailsForum = this.formBuilder.group({
      element: [{value: '', disabled : true}],
      categorie: [{value: '', disabled : true}],
      impact: [{value: '', disabled : true}],
      description: [{value: '', disabled : true}]
    });
    this.ticketReponseForum = this.formBuilder.group({
        observateur: ['', [Validators.required]],
        description: ['', [Validators.required]],
        file: ['', [Validators.required]]
    });
    // pour lire l ID de l'url
    this.ticketID = this.route.snapshot.paramMap.get('id');
    // get data ticket
    this.ticketFournisseurService.getTicketById(this.ticketID).subscribe(
      (bodyResponse) => { this.loadTicketData(bodyResponse); });
  }

  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.ticketDetailsForum.patchValue(data);
    this.ticketData = data;
  }

  // convenience getter for easy access to form fields
  get f() { return this.ticketReponseForum.controls; }

  loadSelectedFile(files) {
    if (files.length === 0) {
      return;
    }

    this.selectedFile = files[0];
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.ticketReponseForum.invalid) {
        return;
    }

    // envoyer les données  à la base de données
    const ticketResponseData = new FormData();
    ticketResponseData.append('nom_info', this.ticketReponseForum .get('observateur').value);
    ticketResponseData.append('description_solution', this.ticketReponseForum .get('description').value);
    // add ticket id ()
    ticketResponseData.append('ticket_id', this.ticketID);
    // le champ solution file
    ticketResponseData.append('file', this.selectedFile, this.selectedFile.name);

    this.ticketFournisseurService.addTicketResponse(ticketResponseData).subscribe(
      (responseBody) => {
        this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }

  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Réponse ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/fournisseur/index']);
  }

}
