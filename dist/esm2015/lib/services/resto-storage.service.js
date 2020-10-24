import { Injectable } from '@angular/core';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-store";
export class RestoStorageService {
    constructor(cookiesStorageService, localStorageService, sharedStorageService) {
        this.cookiesStorageService = cookiesStorageService;
        this.localStorageService = localStorageService;
        this.sharedStorageService = sharedStorageService;
        this.initTypeStorage();
        this.event = new BehaviorSubject({});
    }
    initTypeStorage() {
        //  this.cookiesStorageService.set('ola', "work");
        //  this.localStorageService.set("ola","work");
        //   //  this.sharedStorageService.set("ola","work");
        //   //  console.log(this.cookiesStorageService.get('ola'))
        //   console.log(this.localStorageService.get('olaet'))
        //  console.log(this.sharedStorageService.get('ola'))
    }
    get(typeStorage, key) {
        return this[typeStorage].get(key);
    }
    set(typeStorage, key, value) {
        return this[typeStorage].set(key, value);
    }
    sub(typeStorage, key) {
        this[typeStorage].observe()
            .subscribe((event) => {
            if (event.key == key) {
                this.event.next({ "changeKey": key });
            }
        });
        return this.event;
    }
}
RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(i0.ɵɵinject(i1.CookiesStorageService), i0.ɵɵinject(i1.LocalStorageService), i0.ɵɵinject(i1.SharedStorageService)); };
RestoStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestoStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CookiesStorageService }, { type: i1.LocalStorageService }, { type: i1.SharedStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG8tc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Byb2Zlc3Npb25hbC9mcm9udGVuZC9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wscUJBQXFCLEVBQUUsbUJBQW1CLEVBQzFDLG9CQUFvQixFQUNyQixNQUFNLFdBQVcsQ0FBQztBQUVuQixPQUFPLEVBQWMsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QixZQUFvQixxQkFBMkMsRUFDM0MsbUJBQXVDLEVBQ3ZDLG9CQUF5QztRQUZ6QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUMzRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZTtRQUNiLGtEQUFrRDtRQUNsRCwrQ0FBK0M7UUFDL0MscURBQXFEO1FBQ3JELDJEQUEyRDtRQUMzRCx1REFBdUQ7UUFDdkQscURBQXFEO0lBRXZELENBQUM7SUFFRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsR0FBRyxDQUFDLFdBQWtCLEVBQUUsR0FBVSxFQUFFLEtBQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBR0QsR0FBRyxDQUFDLFdBQWtCLEVBQUUsR0FBVTtRQUVoQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFO2FBQ3hCLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUE7YUFDcEM7UUFFSCxDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUVwQixDQUFDOztzRkExQ1UsbUJBQW1COzJEQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CLG1CQUZsQixNQUFNO2tEQUVQLG1CQUFtQjtjQUgvQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29va2llc1N0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gIFNoYXJlZFN0b3JhZ2VTZXJ2aWNlLCBOZ3hTdG9yYWdlRXZlbnRcclxufSBmcm9tICduZ3gtc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcclxuICBldmVudDpCZWhhdmlvclN1YmplY3Q8YW55PjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llc1N0b3JhZ2VTZXJ2aWNlOkNvb2tpZXNTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIHNoYXJlZFN0b3JhZ2VTZXJ2aWNlOlNoYXJlZFN0b3JhZ2VTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmluaXRUeXBlU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5ldmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xyXG4gIH1cclxuXHJcbiAgaW5pdFR5cGVTdG9yYWdlKCkge1xyXG4gICAgLy8gIHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLnNldCgnb2xhJywgXCJ3b3JrXCIpO1xyXG4gICAgLy8gIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XHJcbiAgICAvLyAgIC8vICB0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcclxuICAgIC8vICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ29sYWV0JykpXHJcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxyXG5cclxuICB9XHJcblxyXG4gIGdldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpc1t0eXBlU3RvcmFnZV0uZ2V0KGtleSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLnNldChrZXksIHZhbHVlKTtcclxuICB9XHJcblxyXG5cclxuICBzdWIodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xyXG5cclxuICAgIHRoaXNbdHlwZVN0b3JhZ2VdLm9ic2VydmUoKVxyXG4gICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT0ga2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmV2ZW50Lm5leHQoe1wiY2hhbmdlS2V5XCI6IGtleX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudDtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==