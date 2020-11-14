import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EventMessage } from '../services/event-message';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/eventer.service";
import * as i2 from "../services/state.service";
const LS_TOKEN_NAME = 'gf:tkn:v2';
export class ServerErrorInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        console.info('Interceptor', req);
        const authToken = localStorage.getItem(LS_TOKEN_NAME);
        return next.handle(!authToken ? req : req.clone({
            headers: req.headers.set('Authorization', `JWT ${authToken}`)
        })).pipe(map(event => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (event instanceof HttpResponse && ((_a = event === null || event === void 0 ? void 0 : event.body) === null || _a === void 0 ? void 0 : _a.status) && ((_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message[0])) {
                throw new Error((_c = event === null || event === void 0 ? void 0 : event.body) === null || _c === void 0 ? void 0 : _c.message[0]);
            }
            ;
            if (event instanceof HttpResponse && ((_e = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message) === null || _e === void 0 ? void 0 : _e.body) && ((_g = (_f = event === null || event === void 0 ? void 0 : event.body) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.title) && ((_j = (_h = event === null || event === void 0 ? void 0 : event.body) === null || _h === void 0 ? void 0 : _h.message) === null || _j === void 0 ? void 0 : _j.type)) {
                this.eventer.emitMessageEvent(new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body));
            }
            ;
            return event;
        }), catchError(err => this.handleError(err)));
    }
    handleError(error) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.enable) && typeof ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.title) !== 'undefined'
            && typeof ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.description) !== 'undefined'
            && typeof ((_d = error === null || error === void 0 ? void 0 : error.error) === null || _d === void 0 ? void 0 : _d.startDate) !== 'undefined'
            && typeof ((_e = error === null || error === void 0 ? void 0 : error.error) === null || _e === void 0 ? void 0 : _e.stopDate) !== 'undefined') {
            const currentTime = new Date().getTime(), startTime = new Date((_f = error === null || error === void 0 ? void 0 : error.error) === null || _f === void 0 ? void 0 : _f.startDate).getTime(), stopTime = new Date((_g = error === null || error === void 0 ? void 0 : error.error) === null || _g === void 0 ? void 0 : _g.stopDate).getTime();
            if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                    title: error.error.title,
                    description: error.error.description,
                    social: error.error.social
                });
            }
            ;
            return throwError(error.error);
        }
        ;
        switch (true) {
            case (error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent:
                console.error('An error occurred:', (_h = error === null || error === void 0 ? void 0 : error.error) === null || _h === void 0 ? void 0 : _h.message);
                return throwError(error === null || error === void 0 ? void 0 : error.error);
                ;
            case (((_j = error.error) === null || _j === void 0 ? void 0 : _j.message) == 'timeout-or-duplicate'):
                console.error('An error occurred:', error === null || error === void 0 ? void 0 : error.message);
                return throwError('Ошибка сервера (таймаут). Повторите попытку позже');
            case (((_k = error.error) === null || _k === void 0 ? void 0 : _k.message) != 'timeout-or-duplicate'):
                console.error(`Backend returned code ${error === null || error === void 0 ? void 0 : error.status}, ` + `body was: `, error === null || error === void 0 ? void 0 : error.error);
                if ((error === null || error === void 0 ? void 0 : error.status) == 401 || ((error === null || error === void 0 ? void 0 : error.status) == 404 && (error === null || error === void 0 ? void 0 : error.error) == "User not found")) {
                    this.eventer.emitMessageEvent(new EventMessage('Unauthorized', '', ''));
                    localStorage.removeItem(LS_TOKEN_NAME);
                }
                ;
                if ((error === null || error === void 0 ? void 0 : error.status) == 400 && ((_m = (_l = error === null || error === void 0 ? void 0 : error.error) === null || _l === void 0 ? void 0 : _l.message) === null || _m === void 0 ? void 0 : _m.title) && ((_p = (_o = error === null || error === void 0 ? void 0 : error.error) === null || _o === void 0 ? void 0 : _o.message) === null || _p === void 0 ? void 0 : _p.body)) {
                    this.eventer.emitMessageEvent(new EventMessage('error', (_r = (_q = error === null || error === void 0 ? void 0 : error.error) === null || _q === void 0 ? void 0 : _q.message) === null || _r === void 0 ? void 0 : _r.title, (_t = (_s = error === null || error === void 0 ? void 0 : error.error) === null || _s === void 0 ? void 0 : _s.message) === null || _t === void 0 ? void 0 : _t.body));
                }
                return throwError(error === null || error === void 0 ? void 0 : error.error);
        }
        ;
        // return an observable with a user-facing error message
    }
    ;
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(i0.ɵɵinject(i1.EventerService), i0.ɵɵinject(i2.StateService)); };
ServerErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ServerErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.EventerService }, { type: i2.StateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9odHRwLWludGVyY2VwdG9ycy9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBS0wsWUFBWSxFQUViLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdqRCxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFHbEMsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUNVLE9BQXVCLEVBQ3ZCLEtBQW1CO1FBRG5CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFVBQUssR0FBTCxLQUFLLENBQWM7SUFDekIsQ0FBQztJQUVMLFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDOUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLFNBQVMsRUFBRSxDQUFDO1NBQzlELENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDTixHQUFHLENBQ0QsS0FBSyxDQUFDLEVB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QyxDQUN6QyxDQUFDO29CQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3hDO2dCQUFBLENBQUM7Z0JBQ0YsSUFBSSxDQUFBLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxNQUFNLEtBQUksR0FBRyxpQkFBSSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSywwQ0FBRSxPQUFPLDBDQUFFLEtBQUssQ0FBQSxpQkFBSSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSywwQ0FBRSxPQUFPLDBDQUFFLElBQUksQ0FBQSxFQUFFO29CQUN2RixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxPQUFPLGNBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssMENBQUUsT0FBTywwQ0FBRSxLQUFLLGNBQUUsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLEtBQUssMENBQUUsT0FBTywwQ0FBRSxJQUFJLENBQUMsQ0FDckYsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFBQSxDQUFDO1FBQ0Ysd0RBQXdEO0lBQzFELENBQUM7SUFBQSxDQUFDOzs0RkF6RVMsc0JBQXNCOzhEQUF0QixzQkFBc0IsV0FBdEIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FEbEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cEludGVyY2VwdG9yLFxyXG4gIEh0dHBIYW5kbGVyLFxyXG4gIEh0dHBSZXF1ZXN0LFxyXG4gIEh0dHBSZXNwb25zZSxcclxuICBIdHRwRXJyb3JSZXNwb25zZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IExTX1RPS0VOX05BTUUgPSAnZ2Y6dGtuOnYyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZXZlbnRlcjogRXZlbnRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHN0YXRlOiBTdGF0ZVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIGNvbnNvbGUuaW5mbygnSW50ZXJjZXB0b3InLCByZXEpO1xyXG4gICAgY29uc3QgYXV0aFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTFNfVE9LRU5fTkFNRSk7XHJcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUoIWF1dGhUb2tlbiA/IHJlcSA6IHJlcS5jbG9uZSh7XHJcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsIGBKV1QgJHthdXRoVG9rZW59YClcclxuICAgIH0pKS5waXBlKFxyXG4gICAgICBtYXAoXHJcbiAgICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlICYmIGV2ZW50Py5ib2R5Py5zdGF0dXMgJiYgZXZlbnQ/LmJvZHk/Lm1lc3NhZ2VbMF0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50Py5ib2R5Py5tZXNzYWdlWzBdKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UgJiYgZXZlbnQ/LmJvZHk/Lm1lc3NhZ2U/LmJvZHkgJiYgZXZlbnQ/LmJvZHk/Lm1lc3NhZ2U/LnRpdGxlICYmIGV2ZW50Py5ib2R5Py5tZXNzYWdlPy50eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoZXZlbnQuYm9keS5tZXNzYWdlLnR5cGUsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgKSxcclxuICAgICAgY2F0Y2hFcnJvcihlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICBpZiAoZXJyb3I/LmVycm9yPy5lbmFibGVcclxuICAgICAgJiYgdHlwZW9mIGVycm9yPy5lcnJvcj8udGl0bGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICYmIHR5cGVvZiBlcnJvcj8uZXJyb3I/LmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAmJiB0eXBlb2YgZXJyb3I/LmVycm9yPy5zdGFydERhdGUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgICYmIHR5cGVvZiBlcnJvcj8uZXJyb3I/LnN0b3BEYXRlICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZShlcnJvcj8uZXJyb3I/LnN0YXJ0RGF0ZSkuZ2V0VGltZSgpLFxyXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3I/LmVycm9yPy5zdG9wRGF0ZSkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRUaW1lID4gc3RhcnRUaW1lICYmIGN1cnJlbnRUaW1lIDwgc3RvcFRpbWUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcclxuICAgICAgICAgIHRpdGxlOiBlcnJvci5lcnJvci50aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvci5lcnJvci5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIHNvY2lhbDogZXJyb3IuZXJyb3Iuc29jaWFsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XHJcbiAgICB9O1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgIGNhc2UgZXJyb3I/LmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudDogY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3I/LmVycm9yPy5tZXNzYWdlKTsgcmV0dXJuIHRocm93RXJyb3IoZXJyb3I/LmVycm9yKTs7XHJcbiAgICAgIGNhc2UgKGVycm9yLmVycm9yPy5tZXNzYWdlID09ICd0aW1lb3V0LW9yLWR1cGxpY2F0ZScpOlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yPy5tZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcign0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwICjRgtCw0LnQvNCw0YPRgikuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrRgyDQv9C+0LfQttC1Jyk7XHJcblxyXG4gICAgICBjYXNlIChlcnJvci5lcnJvcj8ubWVzc2FnZSAhPSAndGltZW91dC1vci1kdXBsaWNhdGUnKTpcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvcj8uc3RhdHVzfSwgYCArIGBib2R5IHdhczogYCxlcnJvcj8uZXJyb3IpO1xyXG4gICAgICAgIGlmIChlcnJvcj8uc3RhdHVzID09IDQwMSB8fCAoZXJyb3I/LnN0YXR1cyA9PSA0MDQgJiYgZXJyb3I/LmVycm9yID09IFwiVXNlciBub3QgZm91bmRcIikpIHtcclxuICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdVbmF1dGhvcml6ZWQnLCAnJywgJycpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oTFNfVE9LRU5fTkFNRSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXJyb3I/LnN0YXR1cyA9PSA0MDAgJiYgZXJyb3I/LmVycm9yPy5tZXNzYWdlPy50aXRsZSAmJiBlcnJvcj8uZXJyb3I/Lm1lc3NhZ2U/LmJvZHkpIHtcclxuICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGVycm9yPy5lcnJvcj8ubWVzc2FnZT8udGl0bGUsIGVycm9yPy5lcnJvcj8ubWVzc2FnZT8uYm9keSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yPy5lcnJvcik7XHJcbiAgICB9O1xyXG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcclxuICB9O1xyXG59Il19