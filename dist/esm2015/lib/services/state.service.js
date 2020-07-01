/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class StateService {
    constructor() {
        this.maintenance$ = new BehaviorSubject(null);
    }
}
StateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
StateService.ctorParameters = () => [];
/** @nocollapse */ StateService.ngInjectableDef = i0.defineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
if (false) {
    /** @type {?} */
    StateService.prototype.maintenance$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B3ZWJyZXN0by9uZy1jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTTtJQUdKO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7OztJQUVDLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcbiAgbWFpbnRlbmFuY2UkOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW50ZW5hbmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgfVxufVxuIl19