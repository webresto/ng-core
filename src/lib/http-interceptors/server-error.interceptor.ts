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
import { tap, catchError } from 'rxjs/operators';
import { StateService } from "../services/state.service";

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(
    private eventer: EventerService,
    private state: StateService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              if (event.body.status && event.body.message && event.body.message[0]) {
                throw new Error(event.body.message[0]);
              }
            }
          }
        ),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error.enable
      && typeof error.error.title !== 'undefined'
      && typeof error.error.description !== 'undefined'
      && typeof error.error.startDate !== 'undefined'
      && typeof error.error.stopDate !== 'undefined') {

      const currentTime = new Date().getTime(),
        startTime = new Date(error.error.startDate).getTime(),
        stopTime = new Date(error.error.stopDate).getTime();

      if (currentTime > startTime && currentTime < stopTime) {
        this.state.maintenance$.next({
          title: error.error.title,
          description: error.error.description,
          social: error.error.social
        });
      }

      return throwError(error.error);
    }

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else if (error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);

      switch (error.message) {
        case 'timeout-or-duplicate':
          return throwError('Ошибка сервера (таймаут). Повторите попытку позже');
      }
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.status == 401) {
        this.eventer.emitMessageEvent(
          new EventMessage('Unauthorized', '', '')
        );

        return throwError(
          error.error && error.error.title
            ? error.error.title
            : 'Необходимо пройти авторизацию'
        );
      } else if ((error.status == 400 || error.status == 500)
        && error.error
        && error.error.message
        && error.error.message.title
        && error.error.message.body) {
        this.eventer.emitMessageEvent(
          new EventMessage('error', error.error.message.title, error.error.message.body)
        );
      }
    }
    // return an observable with a user-facing error message
    return throwError(error.error);
  };
}