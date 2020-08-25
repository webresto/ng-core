/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { StateService } from "../services/state.service";
var ServerErrorInterceptor = /** @class */ (function () {
    function ServerErrorInterceptor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    ServerErrorInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        return next.handle(req)
            .pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof HttpResponse) {
                if (event.body.status && event.body.message && event.body.message[0]) {
                    throw new Error(event.body.message[0]);
                }
            }
        })), catchError(this.handleError.bind(this)));
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    ServerErrorInterceptor.prototype.handleError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error.error.enable
            && typeof error.error.title !== 'undefined'
            && typeof error.error.description !== 'undefined'
            && typeof error.error.startDate !== 'undefined'
            && typeof error.error.stopDate !== 'undefined') {
            /** @type {?} */
            var currentTime = new Date().getTime();
            /** @type {?} */
            var startTime = new Date(error.error.startDate).getTime();
            /** @type {?} */
            var stopTime = new Date(error.error.stopDate).getTime();
            if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                    title: error.error.title,
                    description: error.error.description
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
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
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
    };
    ;
    ServerErrorInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ServerErrorInterceptor.ctorParameters = function () { return [
        { type: EventerService },
        { type: StateService }
    ]; };
    return ServerErrorInterceptor;
}());
export { ServerErrorInterceptor };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ServerErrorInterceptor.prototype.eventer;
    /**
     * @type {?}
     * @private
     */
    ServerErrorInterceptor.prototype.state;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFZLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFHRSxnQ0FDVSxPQUFzQixFQUN0QixLQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDekIsQ0FBQzs7Ozs7O0lBRUosMENBQVM7Ozs7O0lBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUc7Ozs7UUFDRCxVQUFBLEtBQUs7WUFDSCxJQUFHLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBRWhDLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUks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LEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUMvRSxDQUFDO2FBQ0g7U0FDRjtRQUNELHdEQUF3RDtRQUN4RCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUFBLENBQUM7O2dCQXpGSCxVQUFVOzs7O2dCQVBGLGNBQWM7Z0JBS2QsWUFBWTs7SUE0RnJCLDZCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0F6Rlksc0JBQXNCOzs7Ozs7SUFHL0IseUNBQThCOzs7OztJQUM5Qix1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRXZlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UgJiYgZXZlbnQuYm9keS5tZXNzYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50LmJvZHkubWVzc2FnZVswXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmKGVycm9yLmVycm9yLmVuYWJsZVxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLmVycm9yLmRlc2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcign0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwICjRgtCw0LnQvNCw0YPRgikuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxuICAgICAgICAgIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA/IGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LDQstGC0L7RgNC40LfQsNGG0LjRjidcbiAgICAgICAgKTtcbiAgICAgIH1lbHNlIGlmKChlcnJvci5zdGF0dXMgPT0gNDAwIHx8IGVycm9yLnN0YXR1cyA9PSA1MDApXG4gICAgICAgICYmIGVycm9yLmVycm9yXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuZXJyb3IpO1xuICB9O1xufSJdfQ==