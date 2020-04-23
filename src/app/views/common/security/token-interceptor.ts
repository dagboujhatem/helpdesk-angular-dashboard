import {Injectable, Injector} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthorizationService} from './authorization.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public injector: Injector) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const  authenticationService = this.injector.get(AuthorizationService);
        const token = authenticationService.getAccesToken();
        const tokenType = authenticationService.getTokenType();
        if (token !== null && token !== undefined) {
          request = request.clone({
            setHeaders: {
              Authorization: `${tokenType} ${token}`
            }
          });
        }
        return next.handle(request);
    }
}
