import { Injectable } from '@angular/core';
import {SweetAlertService} from 'angular-sweetalert-service';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  dtOptions: DataTables.Settings = {};

  constructor(private alertService: SweetAlertService) { }

  getDataTableOptions() {
    this.dtOptions =    this.dtOptions = {
      ordering: true,               // Allows ordering
      searching: true,              // Searchbox
      paging: true,                 // Pagination
      info: false,                  // Shows 'Showing X of X' information
      pagingType: 'simple_numbers', // Shows Previous, page numbers & next buttons only
      pageLength: 5,                // Defaults number of rows to display in table
      processing: true,
      dom: 'Bfrtip',
      language: {
        processing: 'Traitement...',
        search: '_INPUT_',                      // Removes the 'Search' field label
        searchPlaceholder: 'Chercher ici ...',  // Placeholder for the search box
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
          last: '<i class="fa fa-step-forward"></i>'
        },
        aria: {
          sortAscending: ': activer pour trier la colonne par ordre croissant',
          sortDescending: ': activer pour trier la colonne par ordre décroissant'
        }
      }
    };
    return this.dtOptions;
  }

  confirmDeleteMessage() {
    const options = {
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment supprimer cette enregistrement?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4dbd74',
      cancelButtonColor: '#f86c6b',
      confirmButtonText: '<i class="fa fa-check" aria-hidden="true"></i> Oui, supprimez-le',
      cancelButtonText: '<i class="fa fa-times" aria-hidden="true"></i> Non, annuler'
    };
   return this.alertService.confirm(options);
  }
}
