import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {AuthorizationService} from './authorization.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    constructor(private authorizationService: AuthorizationService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          // Unauthenticated User error
          if (error.status === 401) {
            // reomve localStorage data
            this.authorizationService.removeLocalStorageItems();
            // redirect to the login route
            this.router.navigate(['/login']);
          }
          // Not Found error
          if (error.status === 404) {
            this.router.navigate(['/404']);
          }
          // Server error
          if (error.status === 500) {
            this.router.navigate(['/500']);
          }
          return throwError(error);
        })
      );
    }
}
