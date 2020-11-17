import { Injectable,EventEmitter } from '@angular/core';
import { EventMessage } from './event-message';

@Injectable({
  providedIn: 'root'
})
export class EventerService {
  eventMessage: EventEmitter<EventMessage> = new EventEmitter();
  eventAction: EventEmitter<EventMessage> = new EventEmitter();

  constructor() { }

  emitMessageEvent(message:EventMessage) {
    this.eventMessage.emit(message);
  }

  emitActionEvent(action:EventMessage) {
    this.eventAction.emit(action);
  }

  getMessageEmitter() {
    return this.eventMessage;
  }
  getActionEmitter() {
    return this.eventAction;
  }
}
