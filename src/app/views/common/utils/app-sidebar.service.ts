import { Injectable } from '@angular/core';
import {AuthorizationService} from '../security/authorization.service';
import {navItems} from '../../../_nav';
import {INavData} from '@coreui/angular';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSidebarService {
  // the global navItems
  items$: Observable<INavData[]>;
  private navItems = navItems;
  private role;

  // constructor
  constructor(private authorizationService: AuthorizationService) {
    this.role = authorizationService.getRole();
    this.items$ = this.getNavItemsByRole();
  }

  // get navigation item by role
  getNavItemsByRole(): Observable<INavData[]> {
    if (this.role === 'Administrateur') {
      // filter only the items of Administrateur
      const filtredItems = this.navItems.filter((item) => {
        return item.url === '/home/dashboard' || item.name === 'Menu' || item.url === '/home/settings'
          || item.url === '/home/users' || item.url === '/home/categories' || item.url === '/home/missions'
          || item.url === '/home/tickets';
      });
      return of(filtredItems);
    } else if (this.role === 'Informaticien') {
      // filter only the items of Informaticien
      const filtredItems = this.navItems.filter((item) => {
        return item.url === '/home/dashboard' || item.name === 'Menu' || item.url === '/home/settings';
      });
      return of(filtredItems);
    } else if (this.role === 'Personnel') {
      // filter only the items of Personnel
      const filtredItems = this.navItems.filter((item) => {
        return item.url === '/home/dashboard' || item.name === 'Menu'  || item.url === '/home/solutions'
          || item.url === '/home/settings';
      });
      return of(filtredItems);
    } else if (this.role === 'Fournisseur') {
      // filter only the items of Fournisseur
      const filtredItems = this.navItems.filter((item) => {
        return item.url === '/home/dashboard' || item.name === 'Menu' || item.url === '/home/missions'
          || item.url === '/home/settings';
      });
      return of(filtredItems);
    } else {
      // this is undefined role or null
      console.log('Ce rôle est inconnue: ' + this.role);
      return of([]);
    }
  }

  // reload navitems
  reloadNavItem() {
    this.role = this.authorizationService.getRole();
    this.items$ = this.getNavItemsByRole();
  }
}
