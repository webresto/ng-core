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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9ycy9tZXNzYWdlLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUlMLFlBQVksR0FDYixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJckMsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUNVLE9BQXVCLEVBQ3ZCLEtBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDekIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUcsQ0FDRCxLQUFLLENBQUMsRUFBRTs7WUFDTixJQUFJLEtBQUssWUFBWSxZQUFZLFdBQUksS0FBSyxDQUFDLElBQUksMENBQUUsTUFBTSxDQUFBO21CQUNsRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVc7bUJBQ3ZDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVzttQkFDN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUFXO21CQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtnQkFDL0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDdEMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3BELFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVyRCxJQUFJLFdBQVcsR0FBRyxTQUFTLElBQUksV0FBVyxHQUFHLFFBQVEsRUFBRTtvQkFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO3dCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLO3dCQUN2QixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO3FCQUNwQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtpQkFBTSxJQUFJLEtBQUssWUFBWSxZQUFZLGlCQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLDBDQUFFLE9BQU8sMENBQUUsSUFBSSxDQUFBLGlCQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLDBDQUFFLE9BQU8sMENBQUUsS0FBSyxDQUFBLGlCQUFJLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxJQUFJLDBDQUFFLE9BQU8sMENBQUUsSUFBSSxDQUFBLEVBQUU7Z0JBQ25JLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQzdGLENBQUM7YUFDSDtZQUFBLENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDOztvRkFwQ1Usa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cFJlcXVlc3QsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRXZlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGV2ZW50ZXI6IEV2ZW50ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGVTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoXHJcbiAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSAmJiBldmVudC5ib2R5Py5lbmFibGVcclxuICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS50aXRsZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdGFydERhdGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkuc3RvcERhdGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RhcnREYXRlKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBzdG9wVGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RvcERhdGUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaW1lID4gc3RhcnRUaW1lICYmIGN1cnJlbnRUaW1lIDwgc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFpbnRlbmFuY2UkLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQuYm9keS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmJvZHkuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSAmJiBldmVudD8uYm9keT8ubWVzc2FnZT8uYm9keSAmJiBldmVudD8uYm9keT8ubWVzc2FnZT8udGl0bGUgJiYgZXZlbnQ/LmJvZHk/Lm1lc3NhZ2U/LnR5cGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcclxuICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoZXZlbnQuYm9keS5tZXNzYWdlLnR5cGUsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcbn0iXX0=