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
NetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NetService_Factory() { return new NetService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.Config)); }, token: NetService, providedIn: "root" });
NetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Config }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLdkMsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFBb0IsSUFBZ0IsRUFBUyxNQUFjO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUV6RCxHQUFHLENBQVUsR0FBVyxFQUFFLFFBQWlCLElBQUksRUFBRSxVQUdwRCxFQUFFO1FBQ0osR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUMvRSxJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztTQUNqRCxDQUFDO0lBQ04sQ0FBQztJQUVNLEdBQUcsQ0FBVSxHQUFXLEVBQUUsSUFBTyxFQUFFLFFBQWlCLElBQUk7UUFFN0QsR0FBRyxHQUFHLEtBQUs7WUFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsR0FBRztZQUN4RSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxDLENBQUM7SUFFTSxJQUFJLENBQW1CLEdBQVcsRUFBRSxJQUFPLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBR3ZFLEVBQUU7UUFFSixHQUFHLEdBQUcsS0FBSztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO1lBQ3hFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOUSxVQUFVO1lBRFYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGNvbmZpZzogQ29uZmlnKSB7IH1cclxuXHJcbiAgcHVibGljIGdldDxUID0gYW55Pih1cmw6IHN0cmluZywgaXNBcGk6IGJvb2xlYW4gPSB0cnVlLCBvcHRpb25zOiB7XHJcbiAgICBoZWFkZXJzPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIHBhcmFtcz86IHsgW3BhcmFtczogc3RyaW5nXTogc3RyaW5nIH0sXHJcbiAgfSA9IHt9KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPih1cmwsIHsgaGVhZGVyczogb3B0aW9ucy5oZWFkZXJzLCBwYXJhbXM6IG9wdGlvbnMucGFyYW1zIH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHJldHJ5KDMpIC8vIHJldHJ5IGEgZmFpbGVkIHJlcXVlc3QgdXAgdG8gMyB0aW1lc1xyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1dDxUID0gYW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB1cmwgPSBpc0FwaVxyXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcclxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcG9zdDxUID0gYW55LCBSID0gYW55Pih1cmw6IHN0cmluZywgZGF0YTogVCwgaXNBcGk6IGJvb2xlYW4gPSB0cnVlLCBvcHRpb25zOiB7XHJcbiAgICBoZWFkZXJzPzogeyBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfSxcclxuICAgIHBhcmFtcz86IHsgW3BhcmFtczogc3RyaW5nXTogc3RyaW5nIH1cclxuICB9ID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIHVybCA9IGlzQXBpXHJcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxyXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhLCB7IGhlYWRlcnM6IG9wdGlvbnMuaGVhZGVycywgcGFyYW1zOiBvcHRpb25zLnBhcmFtcyB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19