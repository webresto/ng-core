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
    get(url, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url)
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    post(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbGFyY2hlbmtvdi9mcm9udGVuZC9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9uZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUFvQixJQUFnQixFQUFTLE1BQWM7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSyxDQUFDO0lBRTFELEdBQUcsQ0FBUSxHQUFXLEVBQUUsUUFBaUIsSUFBSTtRQUNsRCxHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxHQUFHLENBQUM7YUFDekIsSUFBSSxDQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7U0FDakQsQ0FBQztJQUNOLENBQUM7SUFFTSxHQUFHLENBQVEsR0FBVyxFQUFFLElBQU8sRUFBRSxRQUFpQixJQUFJO1FBRTNELEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBRU0sSUFBSSxDQUFRLEdBQVcsRUFBRSxJQUFPLEVBQUUsUUFBaUIsSUFBSTtRQUU1RCxHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7b0VBOUJVLFVBQVU7a0RBQVYsVUFBVSxXQUFWLFVBQVUsbUJBRlQsTUFBTTtrREFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGNvbmZpZzogQ29uZmlnKSB7ICB9XHJcblxyXG4gIHB1YmxpYyBnZXQ8VD1hbnk+KHVybDogc3RyaW5nLCBpc0FwaTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHVybClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHV0PFQ9YW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdDxUPWFueT4odXJsOiBzdHJpbmcsIGRhdGE6IFQsIGlzQXBpOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgdXJsID0gaXNBcGlcclxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXHJcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEpO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=