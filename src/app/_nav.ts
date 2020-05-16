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
    name: 'Les catégories',
    url: '/home/categories',
    icon: 'icon-list',
    children: [
      {
        name: 'Catégories applicatifs',
        url: '/home/categories/applicatif/index',
        icon: 'icon-screen-desktop'
      },
      {
        name: 'Catégories matériels',
        url: '/home/categories/materiel/index',
        icon: 'icon-layers'
      }
    ]
  },
  {
    name: 'Les solutions',
    url: '/home/solutions',
    icon: 'icon-list',
    children: [
      {
        name: 'Solutions applicatifs',
        url: '/home/solutions/applicatifs/index',
        icon: 'icon-screen-desktop'
      },
      {
        name: 'Solutions matériels',
        url: '/home/solutions/materiels/index',
        icon: 'icon-layers'
      }
    ]
  },
  {
    name: 'Les missions',
    url: '/home/missions',
    icon: 'icon-bubbles'
  },
  {
    name: 'Gestion des tickets',
    url: '/home/tickets',
    icon: 'icon-credit-card'
  },
  {
    name: 'Gestion des tickets',
    url: '/home/tickets/informaticien',
    icon: 'icon-credit-card'
  },
  {
    name: 'Mes tickets',
    url: '/home/tickets/index',
    icon: 'icon-credit-card',
  },
  {
    name: 'Gestion des tickets',
    url: '/home/tickets/fournisseur',
    icon: 'icon-credit-card'
  },
  {
    name: 'Avis',
    url: '/home/avis',
    icon: 'icon-list'
  },
  {
    name: 'Paramètres',
    url: '/home/settings',
    icon: 'icon-wrench'
  }
];
