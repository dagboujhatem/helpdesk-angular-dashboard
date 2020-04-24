import { Component, OnInit, ViewChild } from '@angular/core';
import {AccesService} from '../acces.service';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-acces-index',
  templateUrl: './acces-index.component.html',
  styleUrls: ['./acces-index.component.css']
})
export class AccesIndexComponent implements OnInit {

  public usersData: any = null ;

  constructor(private accesService: AccesService,
              private toasterService: ToasterService,
              ) { }

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
    // @ts-ignore
    // @ts-ignore
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      data: this.usersData,
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      // buttons: [
      //   'print',
      //   'excel',
      // ],
      // Use this attribute to enable the responsive extension
      responsive: false,
      /* below is the relevant part, e.g. translated to spanish */
      language: {
        processing: 'Traitement...',
        search: 'Rechercher :',
        lengthMenu: 'Afficher _MENU_ éléments',
        info: 'Affichage de l\'élément _START_ à _END_ sur _TOTAL_ éléments',
        infoEmpty: 'Affichage de l\'élément 0 à 0 sur 0 élément',
        infoFiltered: '(filtré à partir de _MAX_ éléments au total',
        infoPostFix: '',
        loadingRecords: 'Chargement...',
        zeroRecords: 'Aucun élément correspondant trouvé',
        emptyTable: 'Aucune donnée disponible dans le tableau',
        paginate: {
          first: 'Premier',
          previous: 'Dernier',
          next: 'Suivant',
          last: 'Précédent'
        },
        aria: {
          sortAscending: ': activer pour trier la colonne par ordre croissant',
          sortDescending: ': activer pour trier la colonne par ordre décroissant'
        }
      }
    };
    this.getAllUsers();
  }

  private getAllUsers() {
    this.accesService.getAllUsers().subscribe(
      responseBody => {  this.loadUsersFromResponseBody(responseBody); },
      error => { console.log(error); }
    );
  }

  private loadUsersFromResponseBody(responseBody) {
    this.usersData = responseBody.data;
  }

  private deleteUser(userId) {
    this.accesService.deleteUser(userId).subscribe(responseBody => {
      this.deleteResponseBody(responseBody);
      }, error => {});
  }

  private deleteResponseBody(responseBody) {
    this.toasterService.pop('success', 'Supprimé avec succès!', responseBody.message);
  }
}
