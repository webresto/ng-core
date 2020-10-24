import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUHJvZmVzc2lvbmFsL2Zyb250ZW5kL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25ldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZDLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW9CLElBQWdCLEVBQVMsTUFBYztRQUF2QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFLLENBQUM7SUFFMUQsR0FBRyxDQUFRLEdBQVcsRUFBRSxRQUFpQixJQUFJO1FBQ2xELEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLEdBQUcsQ0FBQzthQUN6QixJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztTQUNqRCxDQUFDO0lBQ04sQ0FBQztJQUVNLEdBQUcsQ0FBUSxHQUFXLEVBQUUsSUFBTyxFQUFFLFFBQWlCLElBQUk7UUFFM0QsR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFTSxJQUFJLENBQVEsR0FBVyxFQUFFLElBQU8sRUFBRSxRQUFpQixJQUFJO1FBRTVELEdBQUcsR0FBRyxLQUFLO1lBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUc7WUFDeEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDOztvRUE5QlUsVUFBVTtrREFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO2tEQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmV0U2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgY29uZmlnOiBDb25maWcpIHsgIH1cclxuXHJcbiAgcHVibGljIGdldDxUPWFueT4odXJsOiBzdHJpbmcsIGlzQXBpOiBib29sZWFuID0gdHJ1ZSk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdXJsID0gaXNBcGlcclxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXHJcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odXJsKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICByZXRyeSgzKSAvLyByZXRyeSBhIGZhaWxlZCByZXF1ZXN0IHVwIHRvIDMgdGltZXNcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXQ8VD1hbnk+KHVybDogc3RyaW5nLCBkYXRhOiBULCBpc0FwaTogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0PFQ9YW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==