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
export class ServerErrorInterceptor {
    /**
     * @param {?} eventer
     * @param {?} state
     */
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req)
            .pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof HttpResponse) {
                if (event.body.status && event.body.message && event.body.message[0]) {
                    throw new Error(event.body.message[0]);
                }
            }
        })), catchError(this.handleError.bind(this)));
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error.error.enable
            && typeof error.error.title !== 'undefined'
            && typeof error.error.description !== 'undefined'
            && typeof error.error.startDate !== 'undefined'
            && typeof error.error.stopDate !== 'undefined') {
            /** @type {?} */
            const currentTime = new Date().getTime();
            /** @type {?} */
            const startTime = new Date(error.error.startDate).getTime();
            /** @type {?} */
            const stopTime = new Date(error.error.stopDate).getTime();
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
ServerErrorInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ServerErrorInterceptor.ctorParameters = () => [
    { type: EventerService },
    { type: StateService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFZLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHekQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFakMsWUFDVSxPQUFzQixFQUN0QixLQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDekIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQ0gsR0FBRzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ04sSUFBRyxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNoQyxJQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNuRSxNQUFNLElBQUksS0FBSyxDQUFD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Q0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7bUJBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDL0UsQ0FBQzthQUNIO1NBQ0Y7UUFDRCx3REFBd0Q7UUFDeEQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFBQSxDQUFDOzs7WUF4RkgsVUFBVTs7OztZQVBGLGNBQWM7WUFLZCxZQUFZOzs7Ozs7O0lBTWpCLHlDQUE4Qjs7Ozs7SUFDOUIsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOlN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkuc3RhdHVzICYmIGV2ZW50LmJvZHkubWVzc2FnZSAmJiBldmVudC5ib2R5Lm1lc3NhZ2VbMF0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmKGVycm9yLmVycm9yLmVuYWJsZVxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLmVycm9yLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHNvY2lhbDogZXJyb3IuZXJyb3Iuc29jaWFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcign0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwICjRgtCw0LnQvNCw0YPRgikuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxuICAgICAgICAgIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA/IGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LDQstGC0L7RgNC40LfQsNGG0LjRjidcbiAgICAgICAgKTtcbiAgICAgIH1lbHNlIGlmKChlcnJvci5zdGF0dXMgPT0gNDAwIHx8IGVycm9yLnN0YXR1cyA9PSA1MDApXG4gICAgICAgICYmIGVycm9yLmVycm9yXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuZXJyb3IpO1xuICB9O1xufSJdfQ==