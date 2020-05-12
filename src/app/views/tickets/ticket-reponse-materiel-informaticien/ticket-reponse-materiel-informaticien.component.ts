import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from '../../common/utils/validation.service';
import { TiketsService } from '../tikets.service';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'app-ticket-reponse-materiel-informaticien',
  templateUrl: './ticket-reponse-materiel-informaticien.component.html',
  styleUrls: ['./ticket-reponse-materiel-informaticien.component.css']
})
export class TicketReponseMaterielInformaticienComponent implements OnInit {
  ticketID = null ;
  submitted = false;
  file_solution = null;
  ticketAdminPrioriteForm: FormGroup;
  reponeMatForum: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private ticketService: TiketsService,
              private validationService: ValidationService,
              private toasterService: ToasterService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.reponeMatForum = this.formBuilder.group({
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
        nominfo: ['', [Validators.required]],
        description_solution: ['', [Validators.required]],
        file_solution: ['', [Validators.required]],
    });
     // pour lire l ID de l'url
     this.ticketID = this.route.snapshot.paramMap.get('id');
     // get data ticket
     this.ticketService.getTicketById(this.ticketID).subscribe(
       (bodyResponse) => { this.loadTicketData(bodyResponse); });
      
      // this.ticketService.getPrioriteToTicket(this.ticketID).subscribe(
       // (bodyResponse) => { this.loadTicketData(bodyResponse); });
       
  }
  loadTicketData(bodyResponse) {
    const data = bodyResponse.data;
    this.reponeMatForum.patchValue(data);
    this.file_solution= data.file_solution;
  }
  // convenience getter for easy access to form fields
  get f() { return this.reponeMatForum .controls;}

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reponeMatForum .invalid) {
        return;
    }
      // envoyer les données  à la base de données
      const ticketData = new FormData();
      ticketData.append('nominfo', this.reponeMatForum .get('nominfo').value);
    ticketData.append('description_solution', this.reponeMatForum .get('description_solution').value);
    // add ticket id ()
    ticketData.append('ticket_id', this.ticketID);
    // le champ solution file lezem ykoun file ( thabet fiha )hethi lezem tzida fi les deux mat et app
    ticketData.append(' file_solution', this.reponeMatForum.get('file_solution').value);

    this.ticketService.addTicketMaterielResponse(ticketData).subscribe(
      (responseBody) => {
      this.responseBodyProcess(responseBody); },
      (error) => {  this.validationService.showValidationsMessagesInToast(error); });
  }
  private responseBodyProcess(responseBody) {
    this.toasterService.pop('success', 'Réponse ajouté:', responseBody.message);
    this.router.navigate(['/home/tickets/index']);
  }

  }


