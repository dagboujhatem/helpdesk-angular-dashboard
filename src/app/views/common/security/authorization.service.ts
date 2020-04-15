import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {isNullOrUndefined} from 'util';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements CanActivate, CanActivateChild {

  constructor(private router: Router) {
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
  }
  // get avatar from localStorage
  getAvatar() {
    const avatar = localStorage.getItem('avatar');
    if (avatar !== null && avatar !== undefined) {
      return avatar;
    } else {
      return '';
    }
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
    if (!isNullOrUndefined(routeUrl)) {
      if (routeUrl.startsWith('/dashboard/users')) {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN']);
      } else if (routeUrl.startsWith('/dashboard/zonemanager') ||
        routeUrl.startsWith('/dashboard/midmile/admin') ||
        routeUrl.startsWith('/dashboard/humanitypositions') ||
        routeUrl.startsWith('/dashboard/laborplaninput') ||
        routeUrl.startsWith('/dashboard/headcountinput')) {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_SCHEDULER']);
      } else if (routeUrl.startsWith('/dashboard/tips') || routeUrl.startsWith('/dashboard/datareimbursement') ||
        routeUrl.startsWith('/dashboard/wearandtear') || routeUrl.startsWith('/dashboard/tipscredit') ) {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_PAYROLL']);
      } else if (routeUrl.startsWith('/dashboard/midmile') && routeUrl.endsWith('/dashboard/midmile')) {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_DISPATCHER', 'ROLE_COORDINATOR']);
      } else if (routeUrl.startsWith('/dashboard/weeklypdr') || routeUrl.startsWith('/dashboard/pdrperdeliveryagent') ||
        routeUrl.startsWith('/dashboard/firstdeliverysuccess') || routeUrl.startsWith('/dashboard/cyclebacktime')) {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_MANAGER',
          'ROLE_DISPATCHER', 'ROLE_COORDINATOR']);
      } else {
        return this.authorizeRouteByRoles(role, ['ROLE_SUPERADMIN', 'ROLE_ADMIN', 'ROLE_MANAGER', 'ROLE_DISPATCHER',
          'ROLE_PAYROLL', 'ROLE_SCHEDULER', 'ROLE_COORDINATOR']);
      }

    } else {
      return false;
    }


  }

  authorizeRouteByRoles(userRole, authorizedRolesArray): boolean {

    if (authorizedRolesArray.indexOf(userRole) !== -1) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false;
    }

  }


}
