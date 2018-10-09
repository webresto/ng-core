import { EventEmitter } from '@angular/core';
import { EventMessage } from './event-message';
export declare class EventerService {
    eventMessage: EventEmitter<any>;
    constructor();
    emitMessageEvent(message: EventMessage): void;
    getMessageEmitter(): EventEmitter<any>;
}
