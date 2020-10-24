import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { EventMessage } from '../services/event-message';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { StateService } from "../services/state.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1Byb2Zlc3Npb25hbC9mcm9udGVuZC9wcm9qZWN0cy93ZWJyZXN0by9uZy1jb3JlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9ycy9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxFQUViLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBWSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBR3pELE1BQU0sT0FBTyxzQkFBc0I7SUFFakMsWUFDVSxPQUFzQixFQUN0QixLQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDekIsQ0FBQztJQUVKLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBRWhELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDcEIsSUFBSSxDQUNILEdBQUcsQ0FDRCxLQUFLLENBQUMsRUFBRTtZQUNOLElBQUcsS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFDaEMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtv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SyxDQUFDLE9BQU87bUJBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUs7bUJBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDL0UsQ0FBQzthQUNIO1NBQ0Y7UUFDRCx3REFBd0Q7UUFDeEQsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFBQSxDQUFDOzs0RkF2RlMsc0JBQXNCOzhEQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGV2ZW50ZXI6RXZlbnRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXRlOlN0YXRlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuXHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoXHJcbiAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5zdGF0dXMgJiYgZXZlbnQuYm9keS5tZXNzYWdlICYmIGV2ZW50LmJvZHkubWVzc2FnZVswXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50LmJvZHkubWVzc2FnZVswXSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IuYmluZCh0aGlzKSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcblxyXG4gICAgaWYoZXJyb3IuZXJyb3IuZW5hYmxlXHJcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci50aXRsZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAmJiB0eXBlb2YgZXJyb3IuZXJyb3Iuc3RhcnREYXRlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAmJiB0eXBlb2YgZXJyb3IuZXJyb3Iuc3RvcERhdGUgIT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGVycm9yLmVycm9yLnN0YXJ0RGF0ZSkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGlmKGN1cnJlbnRUaW1lID4gc3RhcnRUaW1lICYmIGN1cnJlbnRUaW1lIDwgc3RvcFRpbWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcclxuICAgICAgICAgIHRpdGxlOiBlcnJvci5lcnJvci50aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvci5lcnJvci5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHNvY2lhbDogZXJyb3IuZXJyb3Iuc29jaWFsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxyXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcclxuICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XHJcblxyXG4gICAgICBzd2l0Y2goZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcclxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAgKNGC0LDQudC80LDRg9GCKS4g0J/QvtCy0YLQvtGA0LjRgtC1INC/0L7Qv9GL0YLQutGDINC/0L7Qt9C20LUnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXHJcbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcclxuICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgQmFja2VuZCByZXR1cm5lZCBjb2RlICR7ZXJyb3Iuc3RhdHVzfSwgYCArXHJcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xyXG5cclxuICAgICAgaWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxyXG4gICAgICAgICAgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IudGl0bGVcclxuICAgICAgICAgICAgPyBlcnJvci5lcnJvci50aXRsZVxyXG4gICAgICAgICAgICA6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0L7QudGC0Lgg0LDQstGC0L7RgNC40LfQsNGG0LjRjidcclxuICAgICAgICApO1xyXG4gICAgICB9ZWxzZSBpZigoZXJyb3Iuc3RhdHVzID09IDQwMCB8fCBlcnJvci5zdGF0dXMgPT0gNTAwKVxyXG4gICAgICAgICYmIGVycm9yLmVycm9yXHJcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZVxyXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGVcclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXHJcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XHJcbiAgfTtcclxufSJdfQ==