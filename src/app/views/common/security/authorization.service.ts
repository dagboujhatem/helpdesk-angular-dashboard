import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import * as crypto from 'crypto-js';
import {ToasterService} from 'angular2-toaster';
import {AvatarService} from '../utils/avatar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private toasterService: ToasterService,
              private avatarService: AvatarService) {
  }

  // save role in localStorage and encrypt the role
  setRole(role) {
    const cipherRole = crypto.AES.encrypt(role, 'ascefb');
    localStorage.setItem('role', cipherRole.toString());
  }

  // get role from localStorage and decrypt the role
  getRole() {
    const role = localStorage.getItem('role');
    if (role !== null && role !== undefined) {
      const roleDecypted = crypto.AES.decrypt(role.toString(), 'ascefb').toString(crypto.enc.Utf8);
      return roleDecypted;
    } else {
      return '';
    }
  }

  // save avatar url in localStorage
  setAvatar(avatar) {
    localStorage.setItem('avatar', avatar);
    this.avatarService.reloadAvatar();
  }

  // get email from authenticationObject
  getEmail(): any {
    const authenticationObject = this.getAuthenticationObject();

    if (authenticationObject !== null && authenticationObject !== undefined) {
      return authenticationObject['email'];
    } else {
      return '';
    }

  }

  // set email in authenticationObject
  setEmail(email) {
    const newAuthenticationObject = {
      accessToken: this.getAccesToken(),
      expiredTokenDate: this.getExpiredTokenDate(),
      email: email
    };
    localStorage.removeItem('authenticationObject');
    localStorage.setItem('authenticationObject', JSON.stringify(newAuthenticationObject));
  }

  // save token_type url in localStorage
  setTokenType(token_type) {
    localStorage.setItem('token_type', token_type);
  }
  // get token_type from localStorage
  getTokenType() {
    const token_type = localStorage.getItem('token_type');
    if (token_type !== null && token_type !== undefined) {
      return token_type;
    } else {
      return '';
    }
  }

  // to get the authenticationObject
  getAuthenticationObject(): any {
    const authenticationObject = localStorage.getItem('authenticationObject');
    if (authenticationObject !== null && authenticationObject !== undefined) {
      return JSON.parse(authenticationObject);
    } else {
      return null;
    }

  }

  // to get expiredTokenDate
  getExpiredTokenDate(): any {
    const authenticationObject = this.getAuthenticationObject();

    if (authenticationObject !== null && authenticationObject !== undefined) {
      return authenticationObject['expiredTokenDate'];
    } else {
      return null;
    }
  }

  // to get accessToken
  getAccesToken(): any {
    const authenticationObject = this.getAuthenticationObject();

    if (authenticationObject !== null && authenticationObject !== undefined) {
      return authenticationObject['accessToken'];
    } else {
      return null;
    }
  }

  // to verify if the expiration date of the token is not expired
  isNotExpiredDate() {
    const expiredDate = this.getExpiredTokenDate();
    if (expiredDate !== null && expiredDate !== undefined ) {
      const dateExpired = new Date(expiredDate);
      const actualDate = new Date();
      if (actualDate <= dateExpired) {
        return true;

      } else {

        return false;

      }
    } else {
      return false;
    }
  }

  removeRedirectUrlFromLocalStorage() {
    const redirectUrl = localStorage.getItem('redirecturl');
    if (redirectUrl !== null && redirectUrl !== undefined) {
      localStorage.removeItem('redirecturl');
    }

  }

  removeLocalStorageItems() {
    localStorage.removeItem('authenticationObject');
    localStorage.removeItem('role');
    localStorage.removeItem('token_type');
    localStorage.removeItem('avatar');
  }


  checkLogin(): boolean {
    let isAuth = true;
    const isNotExpiredDate = this.isNotExpiredDate();
    if (isNotExpiredDate) {
      const token = this.getAccesToken();
      if (token === null) {
        isAuth = false;
        this.router.navigate(['/login']);
      } else {
        isAuth = true;
      }
    } else {
      isAuth = false;
      this.router.navigate(['/login']);
    }
    return isAuth;
  }


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean {

    const role = this.getRole();
    const routeUrl = state.url;
    if (routeUrl !== null && routeUrl !== undefined) {
      if (routeUrl.startsWith('/home/users')) {
        // la gestion des utilisateurs
        return this.authorizeRouteByRoles(role, ['Administrateur']);
      } else if (routeUrl.startsWith('/home/missions')) {
        // la gestion des missions
        if (routeUrl.startsWith('/home/missions/index')) {
          return this.authorizeRouteByRoles(role, ['Administrateur', 'Fournisseur']);
        } else if (routeUrl.startsWith('/home/missions/add') || routeUrl.startsWith('/home/missions/show')
          || routeUrl.startsWith('/home/missions/update') || routeUrl.startsWith('/home/missions/confirmer')) {
          return this.authorizeRouteByRoles(role, ['Administrateur']);
        } else if (routeUrl.startsWith('/home/missions/repondre')) {
          return this.authorizeRouteByRoles(role, ['Fournisseur']);
        } else {
          return this.authorizeRouteByRoles(role, []);
        }
      } else if (routeUrl.startsWith('/home/tickets')) {
        // la gestion des tickets
        return this.authorizeRouteByRoles(role, ['Administrateur', 'Informaticien', 'Personnel', 'Fournisseur']);
      } else if (routeUrl.startsWith('/home/categories')) {
        // la gestion des catégories et solutions
        if (routeUrl.startsWith('/home/categories/materiel/show')
          || routeUrl.startsWith('/home/categories/applicatif/show')) {
          return this.authorizeRouteByRoles(role, ['Administrateur', 'Personnel']);
        } else   if (routeUrl.startsWith('/home/categories/materiel')
          || routeUrl.startsWith('/home/categories/applicatif')) {
          return this.authorizeRouteByRoles(role, ['Administrateur']);
        } else if (routeUrl.startsWith('/home/categories/solutions')
          || routeUrl.startsWith('/home/categories/materiel/show')
          || routeUrl.startsWith('/home/categories/applicatif/show')) {
          return this.authorizeRouteByRoles(role, ['Personnel']);
        } else {
          return this.authorizeRouteByRoles(role, []);
        }
      } else {
        // console.log(routeUrl);
        // all others routes means ==> /home/settings or /home/dashboard
        return this.authorizeRouteByRoles(role, ['Administrateur', 'Informaticien', 'Personnel', 'Fournisseur']);
      }

    } else {
      return false;
    }


  }

  authorizeRouteByRoles(userRole, authorizedRolesArray): boolean {

    if (authorizedRolesArray.indexOf(userRole) !== -1) {
      return true;
    } else {
      this.toasterService.pop('info',
        'Désolé, vous n\'êtes pas autorisé à accéder à cette page!',
        'Cette notification signifie simplement qu’il y a un réglage de rôle qui vous bloque à accéder à une certaine zone.');
      this.router.navigate(['/home/dashboard']);
      return false;
    }

  }


}
