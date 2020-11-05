import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

const LS_TOKEN_NAME = 'gf:tkn:v2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    console.info('AuthInterceptor', req);

    // Get the auth token from the service.
    const authToken = localStorage.getItem(LS_TOKEN_NAME);

    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `JWT ${authToken}`)
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq);

    }

    return next.handle(req);
  }
}