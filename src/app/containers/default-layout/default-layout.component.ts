import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import {FormBuilder} from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {AuthenticationService} from '../../views/common/security/authentication.service';
import {AuthorizationService} from '../../views/common/security/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private authentificationService: AuthenticationService,
              private authorizationService: AuthorizationService,
              private router: Router) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  private logout() {
      this.authentificationService.logout().subscribe(
        response => {
            this.authorizationService.removeLocalStorageItems();
            this.router.navigate(['/login']);
        },
        error => {
        console.log(error);
        });
  }
}
