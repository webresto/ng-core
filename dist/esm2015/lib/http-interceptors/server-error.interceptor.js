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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xhcmNoZW5rb3YvZnJvbnRlbmQvcHJvamVjdHMvd2VicmVzdG8vbmctY29yZS9zcmMvIiwic291cmNlcyI6WyJsaWIvaHR0cC1pbnRlcmNlcHRvcnMvc2VydmVyLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUtMLFlBQVksRUFFYixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQVksR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUd6RCxNQUFNLE9BQU8sc0JBQXNCO0lBRWpDLFlBQ1UsT0FBc0IsRUFDdEIsS0FBa0I7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQ3pCLENBQUM7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUVoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3BCLElBQUksQ0FDSCxHQUFHLENBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDTixJQUFHLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2hDLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JB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Q0FBQyxPQUFPO21CQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO21CQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQy9FLENBQUM7YUFDSDtTQUNGO1FBQ0Qsd0RBQXdEO1FBQ3hELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQUEsQ0FBQzs7NEZBdkZTLHNCQUFzQjs4REFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHR0cEV2ZW50LFxyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwUmVzcG9uc2UsXHJcbiAgSHR0cEVycm9yUmVzcG9uc2VcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0ZTpTdGF0ZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTpPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblxyXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKFxyXG4gICAgICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkuc3RhdHVzICYmIGV2ZW50LmJvZHkubWVzc2FnZSAmJiBldmVudC5ib2R5Lm1lc3NhZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihldmVudC5ib2R5Lm1lc3NhZ2VbMF0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG5cclxuICAgIGlmKGVycm9yLmVycm9yLmVuYWJsZVxyXG4gICAgICAmJiB0eXBlb2YgZXJyb3IuZXJyb3IudGl0bGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci5kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0b3BEYXRlICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZShlcnJvci5lcnJvci5zdGFydERhdGUpLmdldFRpbWUoKSxcclxuICAgICAgICBzdG9wVGltZSA9IG5ldyBEYXRlKGVycm9yLmVycm9yLnN0b3BEYXRlKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICBpZihjdXJyZW50VGltZSA+IHN0YXJ0VGltZSAmJiBjdXJyZW50VGltZSA8IHN0b3BUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5tYWludGVuYW5jZSQubmV4dCh7XHJcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3IuZXJyb3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBzb2NpYWw6IGVycm9yLmVycm9yLnNvY2lhbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgc3dpdGNoKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICBjYXNlICd0aW1lb3V0LW9yLWR1cGxpY2F0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcign0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwICjRgtCw0LnQvNCw0YPRgikuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1Jyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xyXG4gICAgICAgIGBib2R5IHdhczogJHtlcnJvci5lcnJvcn1gKTtcclxuXHJcbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcclxuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcclxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcclxuICAgICAgICAgIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRpdGxlXHJcbiAgICAgICAgICAgID8gZXJyb3IuZXJyb3IudGl0bGVcclxuICAgICAgICAgICAgOiAn0J3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC+0LnRgtC4INCw0LLRgtC+0YDQuNC30LDRhtC40Y4nXHJcbiAgICAgICAgKTtcclxuICAgICAgfWVsc2UgaWYoKGVycm9yLnN0YXR1cyA9PSA0MDAgfHwgZXJyb3Iuc3RhdHVzID09IDUwMClcclxuICAgICAgICAmJiBlcnJvci5lcnJvclxyXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2VcclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlXHJcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXHJcbiAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuZXJyb3IpO1xyXG4gIH07XHJcbn0iXX0=