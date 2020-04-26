import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import {tap} from 'rxjs/operators';

@Injectable()
export class ValidationInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToasterService,
                public router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 442) {
            this.toasterService.pop('info', 'validation error!!', 'data not valid');
            this.toasterService.pop('warning', 'validation error!!', 'data not valid');
            console.log('error');
          }
        })
      );
    }
}
