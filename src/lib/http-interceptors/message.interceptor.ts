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
import { finalize, tap, catchError } from 'rxjs/operators';

@Injectable()
export class MessageInterceptor implements HttpInterceptor {

  constructor(
    private eventer:EventerService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        tap(
          event => {
            if(event instanceof HttpResponse) {
              if(event.body.message
                && event.body.message.body
                && event.body.message.title
                && event.body.message.type) {

                switch (event.body.message.type) {
                  case 'info':
                    this.eventer.emitMessageEvent(
                      new EventMessage('info', event.body.message.title, event.body.message.body)
                    );
                    break;
                  case 'success':
                    this.eventer.emitMessageEvent(
                      new EventMessage('success', event.body.message.title, event.body.message.body)
                    );
                    break;
                  case 'error':
                    this.eventer.emitMessageEvent(
                      new EventMessage('error', event.body.message.title, event.body.message.body)
                    );
                    break;
                  case 'warning':
                    this.eventer.emitMessageEvent(
                      new EventMessage('warning', event.body.message.title, event.body.message.body)
                    );
                    break;
                }


              }

            }
          }
        )
      );
  }
}