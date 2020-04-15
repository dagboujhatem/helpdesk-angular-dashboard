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
    name: 'Base',
    url: '/home/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Cards',
        url: '/home/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/home/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/home/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/home/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/home/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/home/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/home/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/home/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/home/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/home/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/home/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/home/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/home/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/home/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/home/buttons/dropdowns',
        icon: 'icon-cursor'
      },
      {
        name: 'Brand Buttons',
        url: '/home/buttons/brand-buttons',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/home/charts',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Icons',
    url: '/home/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/home/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/home/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/home/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/home/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/home/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/home/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/home/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/home/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/home/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Gestion des accès',
    url: '/home/accès',
    icon: 'icon-people',
    children: [
      {
        name: 'Liste des utilisateurs',
        url: '/home/accès/index',
        icon: 'icon-list'
      },
      {
        name: 'Ajouter un utilisateur',
        url: '/home/accès/add',
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
