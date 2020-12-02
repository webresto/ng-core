import { EventEmitter } from '@angular/core';
export declare class EventMessage {
    type: string;
    title: string;
    body: string;
    constructor(type: string, title: string, body: string);
    description?: string;
    data?: any;
}
export declare class EventerService {
    eventMessage: EventEmitter<EventMessage>;
    eventAction: EventEmitter<EventMessage>;
    constructor();
    emitMessageEvent(message: EventMessage): void;
    emitActionEvent(action: EventMessage): void;
    getMessageEmitter(): EventEmitter<EventMessage>;
    getActionEmitter(): EventEmitter<EventMessage>;
}
