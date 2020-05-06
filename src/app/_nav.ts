import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Tableau de bord',
    url: '/home/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Gestion des accès',
    url: '/home/users',
    icon: 'icon-people'
  },
  {
    name: 'Gestion des tickets',
    url: '/home/tickets',
    icon: 'icon-list'
  },
  {
    name: 'Catégories',
    url: '/home/categories',
    icon: 'icon-list',
    children: [
      {
        name: 'Catégories applicatifs',
        url: '/home/categories/applicatif/index',
        icon: 'icon-list'
      },
      {
        name: 'Catégories matériels',
        url: '/home/categories/materiel/index',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Gestion des missions',
    url: '/home/missions',
    icon: 'icon-list',
    children: [
      {
        name: 'Liste des missions',
        url: '/home/missions',
        icon: 'icon-list'
      },
      {
        name: 'Les missions',
        url: '/home/missions/missionindexfrs',
        icon: 'icon-list'
      }
    ]
  },
  {
    name: 'Mes tickets',
    url: '/home/tickets/mestickets',
    icon: 'icon-list',
  },
  {
    name: 'Tickets applicatifs',
    url: '/home/tickets/applicatifs',
    icon: 'icon-list',
  },
  {
    name: 'Tickets matériels',
    url: '/home/tickets/materiels',
    icon: 'icon-list',
  },
  {
    name: 'Tickets relancés',
    url: '/home/tickets/ticketsrelances',
    icon: 'icon-list'
  },
  {
    name: 'Avis',
    url: '/home/tickets/indexavis',
    icon: 'icon-list'
  },
  {
    name: 'Les solutions',
    url: '/home/solutions',
    icon: 'icon-list',
    children: [
      {
        name: 'Solutions applicatifs',
        url: '/home/tickets/solutionsapplicatifs',
        icon: 'icon-list'
      },
      {
        name: 'Solutions matériels',
        url: '/home/tickets/solutionsmateriels',
        icon: 'icon-list'
      }
     ]
  },
  {
    name: 'Mes tickets résolus',
    url: '/home/tickets/indexresolu',
    icon: 'icon-list'
  },
  {
    name: 'Mes tickets relancés',
    url: '/home/tickets/indexrelance',
    icon: 'icon-list'
  },
  {
    name: 'Bna Bank',
    url: '/home/tickets/indexticketfrs',
    icon: 'icon-list'
  },
  {
    name: 'Bna Bank',
    url: '/home/tickets/indexticketfrs',
    icon: 'icon-list'
  },
  {
    name: 'Tickets fournisseur',
    url: '/home/tickets/indexreponseinfo',
    icon: 'icon-list'
  },
  {
    name: 'Paramètres',
    url: '/home/settings',
    icon: 'icon-wrench'
  }
];
