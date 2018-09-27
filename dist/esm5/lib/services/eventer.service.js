/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
var EventerService = /** @class */ (function () {
    function EventerService() {
        this.eventMessage = new EventEmitter();
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
     * @return {?}
     */
    EventerService.prototype.getMessageEmitter = /**
     * @return {?}
     */
    function () {
        return this.eventMessage;
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBU3REOzRCQUZrQyxJQUFJLFlBQVksRUFBRTtLQUVuQzs7Ozs7SUFDakIseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQW9CO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBQ0QsMENBQWlCOzs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUxEOztTQU1hLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudC1tZXNzYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRlclNlcnZpY2Uge1xuICBldmVudE1lc3NhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50TWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICB9XG4gIGdldE1lc3NhZ2VFbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcbiAgfVxufVxuIl19