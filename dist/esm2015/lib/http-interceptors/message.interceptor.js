import { Injectable } from '@angular/core';
import { HttpResponse, } from '@angular/common/http';
import { EventMessage } from '../services/event-message';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/eventer.service";
import * as i2 from "../services/state.service";
export class MessageInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(map(event => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (event instanceof HttpResponse && ((_a = event.body) === null || _a === void 0 ? void 0 : _a.enable)
                && typeof event.body.title !== 'undefined'
                && typeof event.body.description !== 'undefined'
                && typeof event.body.startDate !== 'undefined'
                && typeof event.body.stopDate !== 'undefined') {
                const currentTime = new Date().getTime(), startTime = new Date(event.body.startDate).getTime(), stopTime = new Date(event.body.stopDate).getTime();
                if (currentTime > startTime && currentTime < stopTime) {
                    this.state.maintenance$.next({
                        title: event.body.title,
                        description: event.body.description
                    });
                }
            }
            else if (event instanceof HttpResponse && ((_c = (_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.body) && ((_e = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message) === null || _e === void 0 ? void 0 : _e.title) && ((_g = (_f = event === null || event === void 0 ? void 0 : event.body) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.type)) {
                this.eventer.emitMessageEvent(new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body));
            }
            ;
            return event;
        }));
    }
}
MessageInterceptor.ɵfac = function MessageInterceptor_Factory(t) { return new (t || MessageInterceptor)(i0.ɵɵinject(i1.EventerService), i0.ɵɵinject(i2.StateService)); };
MessageInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: MessageInterceptor, factory: MessageInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MessageInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.EventerService }, { type: i2.StateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9sYXJjaGVua292L2Zyb250ZW5kL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL2h0dHAtaW50ZXJjZXB0b3JzL21lc3NhZ2UuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBSUwsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUlyQyxNQUFNLE9BQU8sa0JBQWtCO0lBRTdCLFlBQ1UsT0FBdUIsRUFDdkIsS0FBbUI7UUFEbkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsVUFBSyxHQUFMLEtBQUssQ0FBYztJQUN6QixDQUFDO0lBRUwsU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQ0gsR0FBRyxDQUNELEtBQUssQ0FBQyxFQUFFOztZQUNOLElBQUksS0FBSyxZQUFZLFlBQVksV0FBSSxLQUFLLENBQUMsSUFBSSwwQ0FBRSxNQUFNLENBQUE7bUJBQ2xELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVzttQkFDdkMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXO21CQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVc7bUJBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUMvQyxNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUN0QyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDcEQsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXJELElBQUksV0FBVyxHQUFHLFNBQVMsSUFBSSxXQUFXLEdBQUcsUUFBUSxFQUFFO29CQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUs7d0JBQ3ZCLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVc7cUJBQ3BDLENBQUMsQ0FBQztpQkFDSjthQUNGO2lCQUFNLElBQUksS0FBSyxZQUFZLFlBQVksaUJBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksMENBQUUsT0FBTywwQ0FBRSxJQUFJLENBQUEsaUJBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksMENBQUUsT0FBTywwQ0FBRSxLQUFLLENBQUEsaUJBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLElBQUksMENBQUUsT0FBTywwQ0FBRSxJQUFJLENBQUEsRUFBRTtnQkFDbkksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDN0YsQ0FBQzthQUNIO1lBQUEsQ0FBQztZQUNGLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7O29GQXBDVSxrQkFBa0I7MERBQWxCLGtCQUFrQixXQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZXZlbnRlcjogRXZlbnRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChcclxuICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlICYmIGV2ZW50LmJvZHk/LmVuYWJsZVxyXG4gICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnRpdGxlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnQuYm9keS5zdGFydERhdGUpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXZlbnQuYm9keS5zdG9wRGF0ZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYWludGVuYW5jZSQubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC5ib2R5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuYm9keS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlICYmIGV2ZW50Py5ib2R5Py5tZXNzYWdlPy5ib2R5ICYmIGV2ZW50Py5ib2R5Py5tZXNzYWdlPy50aXRsZSAmJiBldmVudD8uYm9keT8ubWVzc2FnZT8udHlwZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZShldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSwgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxufSJdfQ==