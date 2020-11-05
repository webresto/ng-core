import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class StateService {
    constructor() {
        this.maintenance$ = new BehaviorSubject(null);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sYXJjaGVua292L2Zyb250ZW5kL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sWUFBWTtJQUd2QjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7d0VBTFUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO2tEQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XHJcbiAgbWFpbnRlbmFuY2UkOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1haW50ZW5hbmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICB9XHJcbn1cclxuIl19