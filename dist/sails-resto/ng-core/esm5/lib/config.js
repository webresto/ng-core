/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var Config = /** @class */ (function () {
    function Config(endpointUrl) {
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        this.url = endpointUrl;
    }
    Config.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    Config.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBV2hELGdCQUFpQyxXQUFrQjtvQkFKckMsRUFBRTtzQkFDQSxNQUFNOzZCQUNOLEtBQUs7UUFHbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUM7S0FDeEI7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7NkNBUWMsTUFBTSxTQUFDLFdBQVc7OztpQkFYakM7O1NBS2EsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCxJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHVybDphbnk7XG4gIHBvcnQ6bnVtYmVyID0gODA7XG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6c3RyaW5nKSB7XG4gICAgdGhpcy51cmwgPSBlbmRwb2ludFVybDtcbiAgfVxuXG5cbn1cbiJdfQ==