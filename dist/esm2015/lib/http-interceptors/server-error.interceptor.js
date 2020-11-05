import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventMessage } from '../services/event-message';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/eventer.service";
import * as i2 from "../services/state.service";
export class ServerErrorInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body.status && event.body.message && event.body.message[0]) {
                    throw new Error(event.body.message[0]);
                }
            }
        }), catchError(this.handleError.bind(this)));
    }
    handleError(error) {
        if (error.error.enable
            && typeof error.error.title !== 'undefined'
            && typeof error.error.description !== 'undefined'
            && typeof error.error.startDate !== 'undefined'
            && typeof error.error.stopDate !== 'undefined') {
            const currentTime = new Date().getTime(), startTime = new Date(error.error.startDate).getTime(), stopTime = new Date(error.error.stopDate).getTime();
            if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                    title: error.error.title,
                    description: error.error.description,
                    social: error.error.social
                });
            }
            return throwError(error.error);
        }
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else if (error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.message);
            switch (error.message) {
                case 'timeout-or-duplicate':
                    return throwError('Ошибка сервера (таймаут). Повторите попытку позже');
            }
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
            if (error.status == 401) {
                this.eventer.emitMessageEvent(new EventMessage('Unauthorized', '', ''));
                return throwError(error.error && error.error.title
                    ? error.error.title
                    : 'Необходимо пройти авторизацию');
            }
            else if ((error.status == 400 || error.status == 500)
                && error.error
                && error.error.message
                && error.error.message.title
                && error.error.message.body) {
                this.eventer.emitMessageEvent(new EventMessage('error', error.error.message.title, error.error.message.body));
            }
        }
        // return an observable with a user-facing error message
        return throwError(error.error);
    }
    ;
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(i0.ɵɵinject(i1.EventerService), i0.ɵɵinject(i2.StateService)); };
ServerErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ServerErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.EventerService }, { type: i2.StateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xhcmNoZW5rb3YvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUtMLFlBQVksRUFFYixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJakQsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLE9BQXVCLEVBQ3ZCLEtBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDekIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUcsQ0FDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUksS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDakMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDcEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUNG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QUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDL0UsQ0FBQzthQUNIO1NBQ0Y7UUFDRCx3REFBd0Q7UUFDeEQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFBQSxDQUFDOzs0RkF2RlMsc0JBQXNCOzhEQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZXZlbnRlcjogRXZlbnRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoXHJcbiAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIGlmIChldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UgJiYgZXZlbnQuYm9keS5tZXNzYWdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuXHJcbiAgICBpZiAoZXJyb3IuZXJyb3IuZW5hYmxlXHJcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci50aXRsZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAmJiB0eXBlb2YgZXJyb3IuZXJyb3Iuc3RhcnREYXRlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAmJiB0eXBlb2YgZXJyb3IuZXJyb3Iuc3RvcERhdGUgIT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGVycm9yLmVycm9yLnN0YXJ0RGF0ZSkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50VGltZSA+IHN0YXJ0VGltZSAmJiBjdXJyZW50VGltZSA8IHN0b3BUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tYWludGVuYW5jZSQubmV4dCh7XHJcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IuZXJyb3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBzb2NpYWw6IGVycm9yLmVycm9yLnNvY2lhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgc3dpdGNoIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgY2FzZSAndGltZW91dC1vci1kdXBsaWNhdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ9Ce0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCAo0YLQsNC50LzQsNGD0YIpLiDQn9C+0LLRgtC+0YDQuNGC0LUg0L/QvtC/0YvRgtC60YMg0L/QvtC30LbQtScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cclxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcclxuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XHJcblxyXG4gICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxyXG4gICAgICAgICAgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IudGl0bGVcclxuICAgICAgICAgICAgPyBlcnJvci5lcnJvci50aXRsZVxyXG4gICAgICAgICAgICA6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LDQstGC0L7RgNC40LfQsNGG0LjRjidcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKChlcnJvci5zdGF0dXMgPT0gNDAwIHx8IGVycm9yLnN0YXR1cyA9PSA1MDApXHJcbiAgICAgICAgJiYgZXJyb3IuZXJyb3JcclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlXHJcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZVxyXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcclxuICB9O1xyXG59Il19