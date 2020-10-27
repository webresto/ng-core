import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xhcmNoZW5rb3YvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUt2QyxNQUFNLE9BQU8sTUFBTTtJQU1qQixZQUFpQyxXQUFnQztRQUpqRSxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBVSxNQUFNLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7OzREQVZVLE1BQU0sY0FNRyxXQUFXOzhDQU5wQixNQUFNLFdBQU4sTUFBTSxtQkFITCxNQUFNO2tEQUdQLE1BQU07Y0FKbEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFRYyxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgdXJsOmFueTtcclxuICBwb3J0Om51bWJlciA9IDgwO1xyXG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcclxuICB2ZXJzaW9uTW9kdWxlID0gXCIwLjVcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcclxuICAgIGVuZHBvaW50VXJsLnN1YnNjcmliZSh1cmw9PntcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9KSAgXHJcbiAgfVxyXG59XHJcbiJdfQ==