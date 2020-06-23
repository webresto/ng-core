/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../config";
export class NetService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} url
     * @param {?=} isApi
     * @return {?}
     */
    get(url, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url)
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    post(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data);
    }
}
NetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Config }
];
/** @nocollapse */ NetService.ngInjectableDef = i0.defineInjectable({ factory: function NetService_Factory() { return new NetService(i0.inject(i1.HttpClient), i0.inject(i2.Config)); }, token: NetService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NetService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NetService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ad2VicmVzdG8vbmctY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9uZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQW9CLE1BQU0sc0JBQXNCLENBQUM7QUFFcEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZDLE1BQU07Ozs7O0lBR0osWUFBb0IsSUFBZSxFQUFFLE1BQWE7UUFBOUIsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxHQUFHLENBQUMsR0FBVSxFQUFFLFFBQWdCLElBQUk7UUFFMUMsR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQU0sR0FBRyxDQUFDO2FBQzNCLElBQUksQ0FDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1NBQ2pELENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU8sR0FBRyxDQUFDLEdBQVUsRUFBRSxJQUFRLEVBQUUsUUFBZ0IsSUFBSTtRQUVwRCxHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbEMsQ0FBQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxHQUFVLEVBQUUsSUFBUSxFQUFFLFFBQWdCLElBQUk7UUFFckQsR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQXZDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLFVBQVU7WUFEVixNQUFNOzs7OztJQVNiLDRCQUFXOzs7OztJQUVDLDBCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmV0U2VydmljZSB7XG4gIGNvbmZpZzphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQsIGNvbmZpZzpDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyAgZ2V0KHVybDpzdHJpbmcsIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybClcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgzKSAvLyByZXRyeSBhIGZhaWxlZCByZXF1ZXN0IHVwIHRvIDMgdGltZXNcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgIHB1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSwgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZGF0YSk7XG5cbiAgfVxuXG4gIHB1YmxpYyAgcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSwgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEpO1xuICB9XG5cblxuXG59XG4iXX0=