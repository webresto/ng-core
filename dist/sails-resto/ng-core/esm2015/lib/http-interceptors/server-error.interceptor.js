/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
export class ServerErrorInterceptor {
    /**
     * @param {?} eventer
     */
    constructor(eventer) {
        this.eventer = eventer;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        return next.handle(req)
            .pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body.status && event.body.message) {
                    throw new Error(event.body.message[0]);
                }
            }
        }), catchError(this.handleError.bind(this)));
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
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
                return throwError('Необходимо пройти авторизацию');
            }
        }
        // return an observable with a user-facing error message
        return throwError('Что-то пошло не так. Повторите попытку позже.');
    }
    ;
}
ServerErrorInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ServerErrorInterceptor.ctorParameters = () => [
    { type: EventerService }
];
if (false) {
    /** @type {?} */
    ServerErrorInterceptor.prototype.eventer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFZLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxNQUFNOzs7O0lBRUosWUFDVTtRQUFBLFlBQU8sR0FBUCxPQUFPO0tBQ2I7Ozs7OztJQUVKLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUcsQ0FDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUcsS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFFaEMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDMUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUVGO1NBQ0YsQ0FDRixFQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFDO0tBQ0w7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQXdCO1FBRTFDLElBQUksS0FBSyxDQUFDLEtBQUssWUFBWSxVQUFVLEVBQUU7O1lBRXJDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxRDthQUFNLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTs7WUFFakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkQsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNwQixLQUFLLHNCQUFzQjtvQkFDekIsT0FBTyxVQUFVLENBQUMsbURBQW1ELENBQUMsQ0FBQzthQUMxRTtTQUNGO2FBQU07OztZQUdMLE9BQU8sQ0FBQyxLQUFLLENBQ1gseUJBQXlCLEtBQUssQ0FBQyxNQUFNLElBQUk7Z0JBQ3pDLGFBQWEsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFOUIsSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FDekMsQ0FBQztnQkFFRixPQUFPLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2FBQ3BEO1NBQ0Y7O1FBRUQsT0FBTyxVQUFVLENBQUMsK0NBQStDLENBQUMsQ0FBQzs7SUFDcEUsQ0FBQzs7O1lBeERILFVBQVU7Ozs7WUFORixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcign0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwICjRgtCw0LnQvNCw0YPRgikuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LDQstGC0L7RgNC40LfQsNGG0LjRjicpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxuICAgIHJldHVybiB0aHJvd0Vycm9yKCfQp9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6LiDQn9C+0LLRgtC+0YDQuNGC0LUg0L/QvtC/0YvRgtC60YMg0L/QvtC30LbQtS4nKTtcbiAgfTtcbn0iXX0=