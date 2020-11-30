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
EventerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
EventerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventerService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNeEQsTUFBTSxPQUFPLGNBQWM7SUFJekI7UUFIQSxpQkFBWSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlELGdCQUFXLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0MsQ0FBQztJQUVqQixnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XHJcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8RXZlbnRNZXNzYWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBldmVudEFjdGlvbjogRXZlbnRFbWl0dGVyPEV2ZW50TWVzc2FnZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcclxuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBlbWl0QWN0aW9uRXZlbnQoYWN0aW9uOkV2ZW50TWVzc2FnZSkge1xyXG4gICAgdGhpcy5ldmVudEFjdGlvbi5lbWl0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXRNZXNzYWdlRW1pdHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcclxuICB9XHJcbiAgZ2V0QWN0aW9uRW1pdHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50QWN0aW9uO1xyXG4gIH1cclxufVxyXG4iXX0=