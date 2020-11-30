import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class StateService {
    constructor() {
        this.maintenance$ = new BehaviorSubject(null);
    }
}
StateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
StateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
StateService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdkMsTUFBTSxPQUFPLFlBQVk7SUFHdkI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7WUFSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcclxuICBtYWludGVuYW5jZSQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubWFpbnRlbmFuY2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIH1cclxufVxyXG4iXX0=