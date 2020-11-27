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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFBb0IsSUFBZ0IsRUFBUyxNQUFjO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV6RCxHQUFHLENBQVUsR0FBVyxFQUFFLFFBQWlCLElBQUksRUFBRSxVQUdwRCxFQUFFO1FBQ0osR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMvRSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztTQUNqRCxDQUFDO0lBQ04sQ0FBQztJQUVNLEdBQUcsQ0FBVSxHQUFXLEVBQUUsSUFBTyxFQUFFLFFBQWlCLElBQUk7UUFFN0QsR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFTSxJQUFJLENBQW1CLEdBQVcsRUFBRSxJQUFPLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBR3ZFLEVBQUU7UUFFSixHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O29FQXBDVSxVQUFVO2tEQUFWLFVBQVUsV0FBVixVQUFVLG1CQUZULE1BQU07a0RBRVAsVUFBVTtjQUh0QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXRTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBjb25maWc6IENvbmZpZykgeyB9XHJcblxyXG4gIHB1YmxpYyBnZXQ8VCA9IGFueT4odXJsOiBzdHJpbmcsIGlzQXBpOiBib29sZWFuID0gdHJ1ZSwgb3B0aW9uczoge1xyXG4gICAgaGVhZGVycz86IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgICBwYXJhbXM/OiB7IFtwYXJhbXM6IHN0cmluZ106IHN0cmluZyB9LFxyXG4gIH0gPSB7fSk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdXJsID0gaXNBcGlcclxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXHJcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odXJsLCB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgcGFyYW1zOiBvcHRpb25zLnBhcmFtcyB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICByZXRyeSgzKSAvLyByZXRyeSBhIGZhaWxlZCByZXF1ZXN0IHVwIHRvIDMgdGltZXNcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXQ8VCA9IGFueT4odXJsOiBzdHJpbmcsIGRhdGE6IFQsIGlzQXBpOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8YW55PiB7XHJcblxyXG4gICAgdXJsID0gaXNBcGlcclxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXHJcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZGF0YSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHBvc3Q8VCA9IGFueSwgUiA9IGFueT4odXJsOiBzdHJpbmcsIGRhdGE6IFQsIGlzQXBpOiBib29sZWFuID0gdHJ1ZSwgb3B0aW9uczoge1xyXG4gICAgaGVhZGVycz86IHsgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgICBwYXJhbXM/OiB7IFtwYXJhbXM6IHN0cmluZ106IHN0cmluZyB9XHJcbiAgfSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSwgeyBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnMsIHBhcmFtczogb3B0aW9ucy5wYXJhbXMgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==