import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
export class Config {
    constructor(endpointUrl) {
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe(url => {
            this.url = url;
        });
    }
}
Config.ɵfac = function Config_Factory(t) { return new (t || Config)(i0.ɵɵinject('ApiDomain')); };
Config.ɵprov = i0.ɵɵdefineInjectable({ token: Config, factory: Config.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Config, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.BehaviorSubject, decorators: [{
                type: Inject,
                args: ['ApiDomain']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTWxELE1BQU0sT0FBTyxNQUFNO0lBTWpCLFlBQWlDLFdBQWdDO1FBSmpFLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsV0FBTSxHQUFVLE1BQU0sQ0FBQztRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdwQixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7NERBVlUsTUFBTSxjQU1HLFdBQVc7OENBTnBCLE1BQU0sV0FBTixNQUFNLG1CQUhMLE1BQU07a0RBR1AsTUFBTTtjQUpsQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQVFjLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCxJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICB1cmw6YW55O1xyXG4gIHBvcnQ6bnVtYmVyID0gODA7XHJcbiAgcHJlZml4OnN0cmluZyA9IFwiYXBpL1wiO1xyXG4gIHZlcnNpb25Nb2R1bGUgPSBcIjAuNVwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdBcGlEb21haW4nKSBlbmRwb2ludFVybDpCZWhhdmlvclN1YmplY3Q8YW55Pikge1xyXG4gICAgZW5kcG9pbnRVcmwuc3Vic2NyaWJlKHVybD0+e1xyXG4gICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgIH0pICBcclxuICB9XHJcbn1cclxuIl19