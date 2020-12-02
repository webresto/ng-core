import { Injectable,EventEmitter } from '@angular/core';
export class EventMessage {
  constructor(public type: string, public title: string, public body: string) { }
  description?: string;
  data?: any;
}

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
