import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';
import { map } from 'rxjs/operators';
import { StateService } from "../services/state.service";

@Injectable()
export class MessageInterceptor implements HttpInterceptor {

  constructor(
    private eventer: EventerService,
    private state: StateService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req)
      .pipe(
        map(
          event => {
            if (event instanceof HttpResponse && event.body?.enable
              && typeof event.body.title !== 'undefined'
              && typeof event.body.description !== 'undefined'
              && typeof event.body.startDate !== 'undefined'
              && typeof event.body.stopDate !== 'undefined') {
              const currentTime = new Date().getTime(),
                startTime = new Date(event.body.startDate).getTime(),
                stopTime = new Date(event.body.stopDate).getTime();

              if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                  title: event.body.title,
                  description: event.body.description
                });
              }
            } else if (event instanceof HttpResponse && event?.body?.message?.body && event?.body?.message?.title && event?.body?.message?.type) {
              this.eventer.emitMessageEvent(
                new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body)
              );
            };
            return event;
          })
      );
  }
}