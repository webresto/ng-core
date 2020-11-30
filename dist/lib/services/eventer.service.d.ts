import { EventEmitter } from '@angular/core';
import { EventMessage } from './event-message';
import * as i0 from "@angular/core";
export declare class EventerService {
    eventMessage: EventEmitter<EventMessage>;
    eventAction: EventEmitter<EventMessage>;
    constructor();
    emitMessageEvent(message: EventMessage): void;
    emitActionEvent(action: EventMessage): void;
    getMessageEmitter(): EventEmitter<EventMessage>;
    getActionEmitter(): EventEmitter<EventMessage>;
    static ɵfac: i0.ɵɵFactoryDef<EventerService, never>;
    static ɵprov: i0.ɵɵInjectableDef<EventerService>;
}
