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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHeEQ7SUFPRTtRQUhBLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVwQyxDQUFDOzs7OztJQUVqQix5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBb0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQW1CO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFHRCwwQ0FBaUI7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QseUNBQWdCOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7eUJBTEQ7Q0EwQkMsQUF2QkQsSUF1QkM7U0FwQlksY0FBYzs7O0lBQ3pCLHNDQUFxRDs7SUFDckQscUNBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50ZXJTZXJ2aWNlIHtcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XG4gIH1cbiAgZW1pdEFjdGlvbkV2ZW50KGFjdGlvbjpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50QWN0aW9uLmVtaXQoYWN0aW9uKTtcbiAgfVxuXG5cbiAgZ2V0TWVzc2FnZUVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xuICB9XG4gIGdldEFjdGlvbkVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBY3Rpb247XG4gIH1cbn1cbiJdfQ==