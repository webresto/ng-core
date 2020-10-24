import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';
import { tap } from 'rxjs/operators';
import { StateService } from "../services/state.service";
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
            .pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body.enable
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
                if (event.body.message
                    && event.body.message.body
                    && event.body.message.title
                    && event.body.message.type) {
                    switch (event.body.message.type) {
                        case 'info':
                            this.eventer.emitMessageEvent(new EventMessage('info', event.body.message.title, event.body.message.body));
                            break;
                        case 'success':
                            this.eventer.emitMessageEvent(new EventMessage('success', event.body.message.title, event.body.message.body));
                            break;
                        case 'error':
                            this.eventer.emitMessageEvent(new EventMessage('error', event.body.message.title, event.body.message.body));
                            break;
                        case 'warning':
                            this.eventer.emitMessageEvent(new EventMessage('warning', event.body.message.title, event.body.message.body));
                            break;
                    }
                }
            }
        }));
    }
}
MessageInterceptor.ɵfac = function MessageInterceptor_Factory(t) { return new (t || MessageInterceptor)(i0.ɵɵinject(i1.EventerService), i0.ɵɵinject(i2.StateService)); };
MessageInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: MessageInterceptor, factory: MessageInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MessageInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.EventerService }, { type: i2.StateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Qcm9mZXNzaW9uYWwvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvbWVzc2FnZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3pELE9BQU8sRUFBWSxHQUFHLEVBQWMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFHekQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixZQUNVLE9BQXNCLEVBQ3RCLEtBQWtCO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUN6QixDQUFDO0lBRUosU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQ0gsR0FBRyxDQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBRyxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNoQyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTTt1QkFDZixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVc7dUJBQ3ZDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVzt1QkFDN0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUFXO3VCQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtvQkFFL0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFDbEMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3BELFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUV6RCxJQUFHLFdBQVcsR0FBRyxTQUFTLElBQUksV0FBVyxHQUFHLFFBQVEsRUFBRTt3QkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOzRCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUN2QixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO3lCQUNwQyxDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7Z0JBR0QsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87dUJBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7dUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7dUJBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtvQkFFNUIsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7d0JBQy9CLEtBQUssTUFBTTs0QkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUM1RSxDQUFDOzRCQUNGLE1BQU07d0JBQ1IsS0FBSyxTQUFTOzRCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQy9FLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixLQUFLLE9BQU87NEJBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDN0UsQ0FBQzs0QkFDRixNQUFNO3dCQUNSLEtBQUssU0FBUzs0QkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUMvRSxDQUFDOzRCQUNGLE1BQU07cUJBQ1Q7aUJBR0Y7YUFFRjtRQUNILENBQUMsQ0FDRixDQUNGLENBQUM7SUFDTixDQUFDOztvRkFwRVUsa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgc3RhdGU6U3RhdGVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChcclxuICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LmVuYWJsZVxyXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkudGl0bGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0b3BEYXRlICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZShldmVudC5ib2R5LnN0YXJ0RGF0ZSkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWUgPSBuZXcgRGF0ZShldmVudC5ib2R5LnN0b3BEYXRlKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQuYm9keS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuYm9keS5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5Lm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICYmIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5XHJcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGVcclxuICAgICAgICAgICAgICAgICYmIGV2ZW50LmJvZHkubWVzc2FnZS50eXBlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICBjYXNlICdpbmZvJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2luZm8nLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnc3VjY2VzcycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnd2FybmluZycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgfVxyXG59Il19