/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class EventerService {
    constructor() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    emitMessageEvent(message) {
        this.eventMessage.emit(message);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    emitActionEvent(action) {
        this.eventAction.emit(action);
    }
    /**
     * @return {?}
     */
    getMessageEmitter() {
        return this.eventMessage;
    }
    /**
     * @return {?}
     */
    getActionEmitter() {
        return this.eventAction;
    }
}
EventerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
EventerService.ctorParameters = () => [];
/** @nocollapse */ EventerService.ngInjectableDef = i0.defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
if (false) {
    /** @type {?} */
    EventerService.prototype.eventMessage;
    /** @type {?} */
    EventerService.prototype.eventAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNeEQsTUFBTTtJQUlKO1FBSEEsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXBDLENBQUM7Ozs7O0lBRWpCLGdCQUFnQixDQUFDLE9BQW9CO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLE1BQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7SUFFQyxzQ0FBcUQ7O0lBQ3JELHFDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50LW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XG4gIGV2ZW50TWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50QWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50TWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICB9XG4gIGVtaXRBY3Rpb25FdmVudChhY3Rpb246RXZlbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5ldmVudEFjdGlvbi5lbWl0KGFjdGlvbik7XG4gIH1cblxuXG4gIGdldE1lc3NhZ2VFbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcbiAgfVxuICBnZXRBY3Rpb25FbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50QWN0aW9uO1xuICB9XG59XG4iXX0=