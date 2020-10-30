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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xhcmNoZW5rb3YvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNbEQsTUFBTSxPQUFPLE1BQU07SUFNakIsWUFBaUMsV0FBZ0M7UUFKakUsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQVUsTUFBTSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3BCLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFBLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs0REFWVSxNQUFNLGNBTUcsV0FBVzs4Q0FOcEIsTUFBTSxXQUFOLE1BQU0sbUJBSEwsTUFBTTtrREFHUCxNQUFNO2NBSmxCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBUWMsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWcge1xyXG4gIHVybDphbnk7XHJcbiAgcG9ydDpudW1iZXIgPSA4MDtcclxuICBwcmVmaXg6c3RyaW5nID0gXCJhcGkvXCI7XHJcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0FwaURvbWFpbicpIGVuZHBvaW50VXJsOkJlaGF2aW9yU3ViamVjdDxhbnk+KSB7XHJcbiAgICBlbmRwb2ludFVybC5zdWJzY3JpYmUodXJsPT57XHJcbiAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgfSkgIFxyXG4gIH1cclxufVxyXG4iXX0=