import { Injectable,EventEmitter } from '@angular/core';
import { EventMessage } from './event-message';

@Injectable({
  providedIn: 'root'
})
export class EventerService {
  eventMessage: EventEmitter<any> = new EventEmitter();

  constructor() { }
  emitMessageEvent(message:EventMessage) {
    this.eventMessage.emit(message);
  }
  getMessageEmitter() {
    return this.eventMessage;
  }
}
