/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                if (event.body.status && event.body.message && event.body.message[0]) {
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
ServerErrorInterceptor.ctorParameters = () => [
    { type: EventerService }
];
if (false) {
    /** @type {?} */
    ServerErrorInterceptor.prototype.eventer;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYnJlc3RvL25nLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBRWIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFZLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRCxNQUFNOzs7O0lBRUosWUFDVSxPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0lBQzdCLENBQUM7Ozs7OztJQUVKLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUcsQ0FDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUcsS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFFaEMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUVGO1FBQ0gsQ0FBQyxDQUNGLEVBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3hDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLFdBQVcsQ0FBQyxLQUF3QjtRQUUxQyxJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO1lBQ3JDLGtFQUFrRTtZQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUQ7YUFBTSxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDakMsa0VBQWtFO1lBQ2xFLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5ELFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsS0FBSyxzQkFBc0I7b0JBQ3pCLE9BQU8sVUFBVSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7YUFDMUU7U0FDRjthQUFNO1lBQ0wsc0RBQXNEO1lBQ3RELDZEQUE2RDtZQUM3RCxPQUFPLENBQUMsS0FBSyxDQUNYLHlCQUF5QixLQUFLLENBQUMsTUFBTSxJQUFJO2dCQUN6QyxhQUFhLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRTlCLElBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3pDLENBQUM7Z0JBRUYsT0FBTyxVQUFVLENBQ2YsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQzlCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7b0JBQ25CLENBQUMsQ0FBQywrQkFBK0IsQ0FDcEMsQ0FBQzthQUNIO2lCQUFLLElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQzttQkFDaEQsS0FBSyxDQUFDLEtBQUs7bUJBQ1gsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPO21CQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO21CQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQy9FLENBQUM7YUFDSDtTQUNGO1FBQ0Qsd0RBQXdEO1FBQ3hELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQUEsQ0FBQzs7O1lBcEVILFVBQVU7OztZQU5GLGNBQWM7Ozs7SUFVbkIseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UgJiYgZXZlbnQuYm9keS5tZXNzYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50LmJvZHkubWVzc2FnZVswXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICBzd2l0Y2goZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBjYXNlICd0aW1lb3V0LW9yLWR1cGxpY2F0ZSc6XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ9Ce0YjQuNCx0LrQsCDRgdC10YDQstC10YDQsCAo0YLQsNC50LzQsNGD0YIpLiDQn9C+0LLRgtC+0YDQuNGC0LUg0L/QvtC/0YvRgtC60YMg0L/QvtC30LbQtScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xuXG4gICAgICBpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcbiAgICAgICAgICBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgPyBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgOiAn0J3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC+0LnRgtC4INCw0LLRgtC+0YDQuNC30LDRhtC40Y4nXG4gICAgICAgICk7XG4gICAgICB9ZWxzZSBpZigoZXJyb3Iuc3RhdHVzID09IDQwMCB8fCBlcnJvci5zdGF0dXMgPT0gNTAwKVxuICAgICAgICAmJiBlcnJvci5lcnJvclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGVcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcbiAgfTtcbn0iXX0=