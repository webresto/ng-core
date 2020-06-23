/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class Config {
    /**
     * @param {?} endpointUrl
     */
    constructor(endpointUrl) {
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            this.url = url;
        }));
    }
}
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
Config.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
];
/** @nocollapse */ Config.ngInjectableDef = i0.defineInjectable({ factory: function Config_Factory() { return new Config(i0.inject("ApiDomain")); }, token: Config, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNOzs7O0lBTUosWUFBaUMsV0FBZ0M7UUFKakUsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQVUsTUFBTSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3BCLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFBLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUE7SUFDSixDQUFDOzs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUhRLGVBQWUsdUJBV1QsTUFBTSxTQUFDLFdBQVc7Ozs7O0lBTC9CLHFCQUFROztJQUNSLHNCQUFpQjs7SUFDakIsd0JBQXVCOztJQUN2QiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHVybDphbnk7XG4gIHBvcnQ6bnVtYmVyID0gODA7XG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcbiAgICBlbmRwb2ludFVybC5zdWJzY3JpYmUodXJsPT57XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9KSAgXG4gIH1cblxuXG59XG4iXX0=