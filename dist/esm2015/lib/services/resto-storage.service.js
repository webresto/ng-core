/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-store";
export class RestoStorageService {
    /**
     * @param {?} cookiesStorageService
     * @param {?} localStorageService
     * @param {?} sharedStorageService
     */
    constructor(cookiesStorageService, localStorageService, sharedStorageService) {
        this.cookiesStorageService = cookiesStorageService;
        this.localStorageService = localStorageService;
        this.sharedStorageService = sharedStorageService;
        this.initTypeStorage();
        this.event = new BehaviorSubject({});
    }
    /**
     * @return {?}
     */
    initTypeStorage() {
        //  this.cookiesStorageService.set('ola', "work");
        //  this.localStorageService.set("ola","work");
        //   //  this.sharedStorageService.set("ola","work");
        //   //  console.log(this.cookiesStorageService.get('ola'))
        //   console.log(this.localStorageService.get('olaet'))
        //  console.log(this.sharedStorageService.get('ola'))
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    get(typeStorage, key) {
        return this[typeStorage].get(key);
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(typeStorage, key, value) {
        return this[typeStorage].set(key, value);
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
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
RestoStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
RestoStorageService.ctorParameters = () => [
    { type: CookiesStorageService },
    { type: LocalStorageService },
    { type: SharedStorageService }
];
/** @nocollapse */ RestoStorageService.ngInjectableDef = i0.defineInjectable({ factory: function RestoStorageService_Factory() { return new RestoStorageService(i0.inject(i1.CookiesStorageService), i0.inject(i1.LocalStorageService), i0.inject(i1.SharedStorageService)); }, token: RestoStorageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    RestoStorageService.prototype.event;
    /** @type {?} */
    RestoStorageService.prototype.cookiesStorageService;
    /** @type {?} */
    RestoStorageService.prototype.localStorageService;
    /** @type {?} */
    RestoStorageService.prototype.sharedStorageService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG8tc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcmVzdG8tc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxxQkFBcUIsRUFBRSxtQkFBbUIsRUFDMUMsb0JBQW9CLEVBQ3JCLE1BQU0sV0FBVyxDQUFDO0FBRW5CLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtuRCxNQUFNOzs7Ozs7SUFJSixZQUFvQixxQkFBMkMsRUFDM0MscUJBQ0E7UUFGQSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLHdCQUFtQixHQUFuQixtQkFBbUI7UUFDbkIseUJBQW9CLEdBQXBCLG9CQUFvQjtRQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELGVBQWU7Ozs7Ozs7S0FRZDs7Ozs7O0lBRUQsR0FBRyxDQUFDLFdBQWtCLEVBQUUsR0FBVTtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FFbkM7Ozs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVLEVBQUUsS0FBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFHRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVO1FBRWhDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7YUFDeEIsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQTthQUNwQztTQUVGLENBQUMsQ0FBQztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUVuQjs7O1lBN0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJDLHFCQUFxQjtZQUFFLG1CQUFtQjtZQUMxQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb29raWVzU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gIFNoYXJlZFN0b3JhZ2VTZXJ2aWNlLCBOZ3hTdG9yYWdlRXZlbnRcbn0gZnJvbSAnbmd4LXN0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RvU3RvcmFnZVNlcnZpY2Uge1xuICBldmVudDpCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llc1N0b3JhZ2VTZXJ2aWNlOkNvb2tpZXNTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOkxvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2hhcmVkU3RvcmFnZVNlcnZpY2U6U2hhcmVkU3RvcmFnZVNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXRUeXBlU3RvcmFnZSgpO1xuICAgIHRoaXMuZXZlbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgfVxuXG4gIGluaXRUeXBlU3RvcmFnZSgpIHtcbiAgICAvLyAgdGhpcy5jb29raWVzU3RvcmFnZVNlcnZpY2Uuc2V0KCdvbGEnLCBcIndvcmtcIik7XG4gICAgLy8gIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XG4gICAgLy8gICAvLyAgdGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XG4gICAgLy8gICAvLyAgY29uc29sZS5sb2codGhpcy5jb29raWVzU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGEnKSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ29sYWV0JykpXG4gICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGEnKSlcblxuICB9XG5cbiAgZ2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpc1t0eXBlU3RvcmFnZV0uZ2V0KGtleSk7XG5cbiAgfVxuXG4gIHNldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpc1t0eXBlU3RvcmFnZV0uc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cblxuICBzdWIodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdGhpc1t0eXBlU3RvcmFnZV0ub2JzZXJ2ZSgpXG4gICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IGtleSkge1xuICAgICAgICAgIHRoaXMuZXZlbnQubmV4dCh7XCJjaGFuZ2VLZXlcIjoga2V5fSlcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5ldmVudDtcblxuICB9XG59XG4iXX0=