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
    icon: 'icon-people',
    children: [
      {
        name: 'Liste des utilisateurs',
        url: '/home/users/index',
        icon: 'icon-list'
      },
      {
        name: 'Ajouter un utilisateur',
        url: '/home/users/add',
        icon: 'icon-user-follow'
      }
    ]
  },
  {
    name: 'Gestion des tickets',
    url: '/home/tickets',
    icon: 'icon-list',
    children: [
      {
        name: 'Liste des tickets',
        url: '/home/tickets/index',
        icon: 'icon-list'
      },
      {
        name: 'Ajouter un ticket',
        url: '/home/tickets/add',
        icon: 'icon-plus'
      }
    ]
  }
];
