import { EventEmitter } from '@angular/core';
import { EventMessage } from './event-message';
export declare class EventerService {
    eventMessage: EventEmitter<EventMessage>;
    eventAction: EventEmitter<EventMessage>;
    constructor();
    emitMessageEvent(message: EventMessage): void;
    emitActionEvent(action: EventMessage): void;
    getMessageEmitter(): EventEmitter<EventMessage>;
    getActionEmitter(): EventEmitter<EventMessage>;
}
