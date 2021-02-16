import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { EventerService, EventMessage } from '../services/eventer.service';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { StateService } from "../services/state.service";

const LS_TOKEN_NAME = 'gf:tkn:v2';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private eventer: EventerService, private state: StateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem(LS_TOKEN_NAME);
    return next.handle(
      !authToken ? req : req.clone({
        headers: req.headers.set('Authorization', `JWT ${authToken}`)
      })
    ).pipe(
      filter(event => !!event.type),
      map(
        event => {
          console.log('event--->>>', event);
          if (this.state.maintenance$.value) {
            this.state.maintenance$.next(null);
          };
          if (event instanceof HttpResponse && event.ok && event?.body?.message && event?.body?.message?.body) {
            const message = event?.body?.message;
            this.eventer.emitMessageEvent(
              new EventMessage(message?.type || '', message?.title || '', message?.body || '')
            );
          };
          return event;
        }
      ),
      catchError(err => this.handleError(err))
    );
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status >= 500) {
      if (error?.error?.enable && error?.error?.title && error?.error?.description && error?.error?.startDate && error?.error?.stopDate) {
        const currentTime = new Date().getTime(),
          startTime = new Date(error?.error?.startDate).getTime(),
          stopTime = new Date(error?.error?.stopDate).getTime();
        if (currentTime > startTime && currentTime < stopTime && !this.state.maintenance$.value) {
          this.state.maintenance$.next({
            title: error.error.title,
            description: error.error.description,
            social: error.error.social
          });
        };
        return throwError(error.error);
      } else {
        if (!this.state.maintenance$.value) {
          this.state.maintenance$.next({
            title: 'Сервис временно не работает',
            description: 'Телефон оператора - +7(3467)38-80-80',
            social: ''
          });
        };
        return throwError(error.error);
      }
    } else {
      switch (true) {
        case error?.error instanceof ErrorEvent:
          console.error('An error occurred:', error?.error?.message);
          return throwError(error?.error);;

        case (error.error?.message == 'timeout-or-duplicate'):
          console.error('An error occurred:', error?.message);
          return throwError('Ошибка сервера (таймаут). Повторите попытку позже');

        case (error.error?.message != 'timeout-or-duplicate'):
          console.error(`Backend returned code ${error?.status}, ` + `body was: `, error?.error);
          if (!(error.status == 404 && (error?.url?.includes('images') && (error?.url?.includes('.jpg') || error?.url?.includes('png'))))) {
            this.eventer.emitMessageEvent(
              new EventMessage('error', error?.error?.message?.title || '', error?.error?.message?.body || '')
            );
          };
          if (error?.status == 401 || (error?.status == 404 && error?.error == "User not found")) {
            console.log('очистка Storage');
            localStorage.removeItem(LS_TOKEN_NAME);
          };
          return throwError(error?.error);
        default: return throwError(error?.error);
      };
    };
    // return an observable with a user-facing error message
  };

}
