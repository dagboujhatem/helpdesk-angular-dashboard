import {Component} from '@angular/core';
import {AuthenticationService} from '../../views/common/security/authentication.service';
import {AuthorizationService} from '../../views/common/security/authorization.service';
import {Router} from '@angular/router';
import {AppSidebarService} from '../../views/common/utils/app-sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems;
  private avatarImage;

  constructor(private authentificationService: AuthenticationService,
              private authorizationService: AuthorizationService,
              private router: Router,
              private appSidebarService: AppSidebarService) {
    this.navItems = this.appSidebarService.items$;
    this.avatarImage = this.authorizationService.getAvatar();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  private logout() {
      this.authentificationService.logout().subscribe(
        (response) => {
            this.authorizationService.removeLocalStorageItems();
            this.router.navigate(['/login']);
        }, (error) => {console.log(error); });
  }
}
