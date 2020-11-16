import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StateService } from "../services/state.service";
import { element } from 'protractor';

const LS_TOKEN_NAME = 'gf:tkn:v2';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    private eventer: EventerService,
    private state: StateService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.info('Interceptor', req);
    const authToken = localStorage.getItem(LS_TOKEN_NAME);
    return next.handle(!authToken ? req : req.clone({
      headers: req.headers.set('Authorization', `JWT ${authToken}`)
    })).pipe(
      map(
        event => {
          if (event instanceof HttpResponse && event?.body?.message?.body && event?.body?.message?.title && event?.body?.message?.type) {
            this.eventer.emitMessageEvent(
              new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body)
            );
          };
          return event;
        }
      ),
      catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error?.error?.enable && error?.error?.title && error?.error?.description && error?.error?.startDate && error?.error?.stopDate) {
      const currentTime = new Date().getTime(),
        startTime = new Date(error?.error?.startDate).getTime(),
        stopTime = new Date(error?.error?.stopDate).getTime();
      if (currentTime > startTime && currentTime < stopTime) {
          this.state.maintenance$.next({
            title: error.error.title,
            description: error.error.description,
            social: error.error.social
          });
      };
      return throwError(error.error);
    } else {
      switch (true) {
        case error?.error instanceof ErrorEvent: console.error('An error occurred:', error?.error?.message); return throwError(error?.error);;

        case (error.error?.message == 'timeout-or-duplicate'):
          console.error('An error occurred:', error?.message);
          return throwError('Ошибка сервера (таймаут). Повторите попытку позже');

        case (error.error?.message != 'timeout-or-duplicate'):
          console.error(`Backend returned code ${error?.status}, ` + `body was: `, error?.error);
          if (error?.status == 401 || (error?.status == 404 && error?.error == "User not found")) {
            this.eventer.emitMessageEvent(
              new EventMessage('Unauthorized', '', '')
            );
            localStorage.removeItem(LS_TOKEN_NAME);
          };
          if (error?.status == 400 && error?.error?.message?.title && error?.error?.message?.body) {
            this.eventer.emitMessageEvent(
              new EventMessage('error', error?.error?.message?.title, error?.error?.message?.body)
            );
          }
          return throwError(error?.error);
      };
    };
    // return an observable with a user-facing error message
  };

}