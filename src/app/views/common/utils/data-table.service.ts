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
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      dom: 'Bfrtip',
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
