import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class RestoStorageService {
    constructor() {
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
RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(); };
RestoStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestoStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdG8tc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xhcmNoZW5rb3YvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvcmVzdG8tc3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLbkQsTUFBTSxPQUFPLG1CQUFtQjtJQUk5QjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxlQUFlO1FBQ2Isa0RBQWtEO1FBQ2xELCtDQUErQztRQUMvQyxxREFBcUQ7UUFDckQsMkRBQTJEO1FBQzNELHVEQUF1RDtRQUN2RCxxREFBcUQ7SUFFdkQsQ0FBQztJQUVELEdBQUcsQ0FBQyxXQUFrQixFQUFFLEdBQVU7UUFDaEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVLEVBQUUsS0FBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVO1FBRWhDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7YUFDeEIsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQTthQUNwQztRQUVILENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXBCLENBQUM7O3NGQXhDVSxtQkFBbUI7MkRBQW5CLG1CQUFtQixXQUFuQixtQkFBbUIsbUJBRmxCLE1BQU07a0RBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcclxuICBldmVudDpCZWhhdmlvclN1YmplY3Q8YW55PjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0VHlwZVN0b3JhZ2UoKTtcclxuICAgIHRoaXMuZXZlbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxuICB9XHJcblxyXG4gIGluaXRUeXBlU3RvcmFnZSgpIHtcclxuICAgIC8vICB0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5zZXQoJ29sYScsIFwid29ya1wiKTtcclxuICAgIC8vICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xyXG4gICAgLy8gICAvLyAgdGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XHJcbiAgICAvLyAgIC8vICBjb25zb2xlLmxvZyh0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGFldCcpKVxyXG4gICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGEnKSlcclxuXHJcbiAgfVxyXG5cclxuICBnZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLmdldChrZXkpO1xyXG5cclxuICB9XHJcblxyXG4gIHNldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3ViKHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuXHJcbiAgICB0aGlzW3R5cGVTdG9yYWdlXS5vYnNlcnZlKClcclxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09IGtleSkge1xyXG4gICAgICAgICAgdGhpcy5ldmVudC5uZXh0KHtcImNoYW5nZUtleVwiOiBrZXl9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnQ7XHJcblxyXG4gIH1cclxufVxyXG4iXX0=