import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../config";
export class NetService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    get(url, isApi = true, options = {}) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url, { headers: options.headers, params: options.params })
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    post(url, data, isApi = true, options = {}) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data, { headers: options.headers, params: options.params });
    }
}
NetService.ɵfac = function NetService_Factory(t) { return new (t || NetService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Config)); };
NetService.ɵprov = i0.ɵɵdefineInjectable({ token: NetService, factory: NetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.Config }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25ldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZDLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW9CLElBQWdCLEVBQVMsTUFBYztRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFekQsR0FBRyxDQUFVLEdBQVcsRUFBRSxRQUFpQixJQUFJLEVBQUUsVUFHcEQsRUFBRTtRQUNKLEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDL0UsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7U0FDakQsQ0FBQztJQUNOLENBQUM7SUFFTSxHQUFHLENBQVUsR0FBVyxFQUFFLElBQU8sRUFBRSxRQUFpQixJQUFJO1FBRTdELEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRU0sSUFBSSxDQUFtQixHQUFXLEVBQUUsSUFBTyxFQUFFLFFBQWlCLElBQUksRUFBRSxVQUd2RSxFQUFFO1FBRUosR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6RixDQUFDOztvRUFwQ1UsVUFBVTtrREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO2tEQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgY29uZmlnOiBDb25maWcpIHsgfVxyXG5cclxuICBwdWJsaWMgZ2V0PFQgPSBhbnk+KHVybDogc3RyaW5nLCBpc0FwaTogYm9vbGVhbiA9IHRydWUsIG9wdGlvbnM6IHtcclxuICAgIGhlYWRlcnM/OiB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgcGFyYW1zPzogeyBbcGFyYW1zOiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICB9ID0ge30pOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHVybCwgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIHBhcmFtczogb3B0aW9ucy5wYXJhbXMgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHV0PFQgPSBhbnk+KHVybDogc3RyaW5nLCBkYXRhOiBULCBpc0FwaTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0PFQgPSBhbnksIFIgPSBhbnk+KHVybDogc3RyaW5nLCBkYXRhOiBULCBpc0FwaTogYm9vbGVhbiA9IHRydWUsIG9wdGlvbnM6IHtcclxuICAgIGhlYWRlcnM/OiB7IFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gICAgcGFyYW1zPzogeyBbcGFyYW1zOiBzdHJpbmddOiBzdHJpbmcgfVxyXG4gIH0gPSB7fSk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgdXJsID0gaXNBcGlcclxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXHJcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEsIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBwYXJhbXM6IG9wdGlvbnMucGFyYW1zIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=