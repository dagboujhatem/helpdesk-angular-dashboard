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
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authenticationService.getAccesToken()}`
            }
        });
        return next.handle(request);
    }
}
