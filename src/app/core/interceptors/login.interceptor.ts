import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../services/index';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.loginService.isLoged()) {
      const authToken = this.loginService.getToken();

      let authRequest = request.clone({
        setHeaders: { Authorization: 'Bearer ' + authToken },
      });

      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
