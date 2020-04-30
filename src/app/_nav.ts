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
  }
];
