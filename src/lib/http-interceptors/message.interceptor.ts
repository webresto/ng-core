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
import { StateService } from "../services/state.service";

@Injectable()
export class MessageInterceptor implements HttpInterceptor {

  constructor(
    private eventer:EventerService,
    private state:StateService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    return next.handle(req)
      .pipe(
        tap(
          event => {
            if(event instanceof HttpResponse) {
              if(event.body.enable
                && typeof event.body.title !== 'undefined'
                && typeof event.body.description !== 'undefined'
                && typeof event.body.startDate !== 'undefined'
                && typeof event.body.stopDate !== 'undefined') {

                const currentTime = new Date().getTime(),
                      startTime = new Date(event.body.startDate).getTime(),
                      stopTime = new Date(event.body.stopDate).getTime();

                if(currentTime > startTime && currentTime < stopTime) {
                  this.state.maintenance$.next({
                    title: event.body.title,
                    description: event.body.description
                  });
                }

              }


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