/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var EventerService = /** @class */ (function () {
    function EventerService() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    EventerService.prototype.emitMessageEvent = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.eventMessage.emit(message);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    EventerService.prototype.emitActionEvent = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.eventAction.emit(action);
    };
    /**
     * @return {?}
     */
    EventerService.prototype.getMessageEmitter = /**
     * @return {?}
     */
    function () {
        return this.eventMessage;
    };
    /**
     * @return {?}
     */
    EventerService.prototype.getActionEmitter = /**
     * @return {?}
     */
    function () {
        return this.eventAction;
    };
    EventerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    EventerService.ctorParameters = function () { return []; };
    /** @nocollapse */ EventerService.ngInjectableDef = i0.defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
    return EventerService;
}());
export { EventerService };
if (false) {
    /** @type {?} */
    EventerService.prototype.eventMessage;
    /** @type {?} */
    EventerService.prototype.eventAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHeEQ7SUFPRTtRQUhBLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwQyxDQUFDOzs7OztJQUVqQix5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBb0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCwwQ0FBaUI7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QseUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUxEO0NBMEJDLEFBdkJELElBdUJDO1NBcEJZLGNBQWM7OztJQUN6QixzQ0FBcUQ7O0lBQ3JELHFDQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50LW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XG4gIGV2ZW50TWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50QWN0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50TWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICB9XG4gIGVtaXRBY3Rpb25FdmVudChhY3Rpb246RXZlbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5ldmVudEFjdGlvbi5lbWl0KGFjdGlvbik7XG4gIH1cblxuXG4gIGdldE1lc3NhZ2VFbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcbiAgfVxuICBnZXRBY3Rpb25FbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50QWN0aW9uO1xuICB9XG59XG4iXX0=