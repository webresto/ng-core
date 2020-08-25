/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
var Config = /** @class */ (function () {
    function Config(endpointUrl) {
        var _this = this;
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            _this.url = url;
        }));
    }
    Config.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    Config.ctorParameters = function () { return [
        { type: BehaviorSubject, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
    ]; };
    /** @nocollapse */ Config.ngInjectableDef = i0.defineInjectable({ factory: function Config_Factory() { return new Config(i0.inject("ApiDomain")); }, token: Config, providedIn: "root" });
    return Config;
}());
export { Config };
if (false) {
    /** @type {?} */
    Config.prototype.url;
    /** @type {?} */
    Config.prototype.port;
    /** @type {?} */
    Config.prototype.prefix;
    /** @type {?} */
    Config.prototype.versionModule;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUN2QztJQVVFLGdCQUFpQyxXQUFnQztRQUFqRSxpQkFJQztRQVJELFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFVLE1BQU0sQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdwQixXQUFXLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUN2QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQWRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSFEsZUFBZSx1QkFXVCxNQUFNLFNBQUMsV0FBVzs7O2lCQVpqQztDQWlCQyxBQWZELElBZUM7U0FYWSxNQUFNOzs7SUFDakIscUJBQVE7O0lBQ1Isc0JBQWlCOztJQUNqQix3QkFBdUI7O0lBQ3ZCLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCxJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgdXJsOmFueTtcbiAgcG9ydDpudW1iZXIgPSA4MDtcbiAgcHJlZml4OnN0cmluZyA9IFwiYXBpL1wiO1xuICB2ZXJzaW9uTW9kdWxlID0gXCIwLjVcIjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdBcGlEb21haW4nKSBlbmRwb2ludFVybDpCZWhhdmlvclN1YmplY3Q8YW55Pikge1xuICAgIGVuZHBvaW50VXJsLnN1YnNjcmliZSh1cmw9PntcbiAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH0pICBcbiAgfVxufVxuIl19