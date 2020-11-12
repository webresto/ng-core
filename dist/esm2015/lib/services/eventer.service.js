import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class EventerService {
    constructor() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    emitMessageEvent(message) {
        this.eventMessage.emit(message);
    }
    emitActionEvent(action) {
        this.eventAction.emit(action);
    }
    getMessageEmitter() {
        return this.eventMessage;
    }
    getActionEmitter() {
        return this.eventAction;
    }
}
EventerService.ɵfac = function EventerService_Factory(t) { return new (t || EventerService)(); };
EventerService.ɵprov = i0.ɵɵdefineInjectable({ token: EventerService, factory: EventerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EventerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBQyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTXhELE1BQU0sT0FBTyxjQUFjO0lBSXpCO1FBSEEsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxnQkFBVyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTdDLENBQUM7SUFFakIsZ0JBQWdCLENBQUMsT0FBb0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELGVBQWUsQ0FBQyxNQUFtQjtRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0QsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7NEVBbkJVLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRmIsTUFBTTtrREFFUCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XHJcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnRNZXNzYWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBldmVudEFjdGlvbjogRXZlbnRFbWl0dGVyPEV2ZW50TWVzc2FnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcclxuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XHJcbiAgfVxyXG4gIGVtaXRBY3Rpb25FdmVudChhY3Rpb246RXZlbnRNZXNzYWdlKSB7XHJcbiAgICB0aGlzLmV2ZW50QWN0aW9uLmVtaXQoYWN0aW9uKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRNZXNzYWdlRW1pdHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcclxuICB9XHJcbiAgZ2V0QWN0aW9uRW1pdHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50QWN0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=