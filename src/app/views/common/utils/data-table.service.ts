import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  getDataTableOptions() {
    this.dtOptions =    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
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
      /*language: {
        processing: 'Traitement...',
        search: 'Rechercher :',
        lengthMenu: 'Afficher _MENU_ éléments',
        info: 'Affichage de l\'élément _START_ à _END_ sur _TOTAL_ éléments',
        infoEmpty: 'Affichage de l\'élément 0 à 0 sur 0 élément',
        infoFiltered: '(filtré à partir de _MAX_ éléments au total',
        infoPostFix: '',
        loadingRecords: 'Chargement...',
        zeroRecords: 'Aucun élément correspondant trouvé',
       // emptyTable: 'Aucune donnée disponible dans le tableau',
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
      }*/
    };
    return this.dtOptions;
  }
}
