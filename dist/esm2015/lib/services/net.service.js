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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbGFyY2hlbmtvdi9mcm9udGVuZC9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9uZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt2QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUFvQixJQUFnQixFQUFTLE1BQWM7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRXpELEdBQUcsQ0FBVSxHQUFXLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBR3BELEVBQUU7UUFDSixHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQy9FLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1NBQ2pELENBQUM7SUFDTixDQUFDO0lBRU0sR0FBRyxDQUFVLEdBQVcsRUFBRSxJQUFPLEVBQUUsUUFBaUIsSUFBSTtRQUU3RCxHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEMsQ0FBQztJQUVNLElBQUksQ0FBbUIsR0FBVyxFQUFFLElBQU8sRUFBRSxRQUFpQixJQUFJLEVBQUUsVUFHdkUsRUFBRTtRQUVKLEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7b0VBcENVLFVBQVU7a0RBQVYsVUFBVSxXQUFWLFVBQVUsbUJBRlQsTUFBTTtrREFFUCxVQUFVO2NBSHRCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGNvbmZpZzogQ29uZmlnKSB7IH1cclxuXHJcbiAgcHVibGljIGdldDxUID0gYW55Pih1cmw6IHN0cmluZywgaXNBcGk6IGJvb2xlYW4gPSB0cnVlLCBvcHRpb25zOiB7XHJcbiAgICBoZWFkZXJzPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIHBhcmFtcz86IHsgW3BhcmFtczogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgfSA9IHt9KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPih1cmwsIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBwYXJhbXM6IG9wdGlvbnMucGFyYW1zIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHJldHJ5KDMpIC8vIHJldHJ5IGEgZmFpbGVkIHJlcXVlc3QgdXAgdG8gMyB0aW1lc1xyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1dDxUID0gYW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdDxUID0gYW55LCBSID0gYW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlLCBvcHRpb25zOiB7XHJcbiAgICBoZWFkZXJzPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIHBhcmFtcz86IHsgW3BhcmFtczogc3RyaW5nXTogc3RyaW5nIH1cclxuICB9ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgcGFyYW1zOiBvcHRpb25zLnBhcmFtcyB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19