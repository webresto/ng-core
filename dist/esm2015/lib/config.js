import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
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
Config.ɵprov = i0.ɵɵdefineInjectable({ factory: function Config_Factory() { return new Config(i0.ɵɵinject("ApiDomain")); }, token: Config, providedIn: "root" });
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
Config.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFDLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUt2QyxNQUFNLE9BQU8sTUFBTTtJQU1qQixZQUFpQyxXQUFnQztRQUpqRSxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBQ2pCLFdBQU0sR0FBVSxNQUFNLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUEsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7WUFkRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUhRLGVBQWUsdUJBV1QsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XHJcbiAgdXJsOmFueTtcclxuICBwb3J0Om51bWJlciA9IDgwO1xyXG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcclxuICB2ZXJzaW9uTW9kdWxlID0gXCIwLjVcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcclxuICAgIGVuZHBvaW50VXJsLnN1YnNjcmliZSh1cmw9PntcclxuICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICB9KSAgXHJcbiAgfVxyXG59XHJcbiJdfQ==