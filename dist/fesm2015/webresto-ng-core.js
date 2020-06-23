import { Injectable, EventEmitter, NgModule, Inject, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { retry, tap, catchError } from 'rxjs/operators';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventMessage {
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} body
     */
    constructor(type, title, body) {
        this.type = type;
        this.title = title;
        this.body = body;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EventerService {
    constructor() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    emitMessageEvent(message) {
        this.eventMessage.emit(message);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    emitActionEvent(action) {
        this.eventAction.emit(action);
    }
    /**
     * @return {?}
     */
    getMessageEmitter() {
        return this.eventMessage;
    }
    /**
     * @return {?}
     */
    getActionEmitter() {
        return this.eventAction;
    }
}
EventerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
EventerService.ctorParameters = () => [];
/** @nocollapse */ EventerService.ngInjectableDef = defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StateService {
    constructor() {
        this.maintenance$ = new BehaviorSubject(null);
    }
}
StateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
StateService.ctorParameters = () => [];
/** @nocollapse */ StateService.ngInjectableDef = defineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
    /**
     * @param {?} endpointUrl
     */
    constructor(endpointUrl) {
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        url => {
            this.url = url;
        }));
    }
}
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
Config.ctorParameters = () => [
    { type: BehaviorSubject, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
];
/** @nocollapse */ Config.ngInjectableDef = defineInjectable({ factory: function Config_Factory() { return new Config(inject("ApiDomain")); }, token: Config, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NetService {
    /**
     * @param {?} http
     * @param {?} config
     */
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} url
     * @param {?=} isApi
     * @return {?}
     */
    get(url, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url)
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    post(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data);
    }
}
NetService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
NetService.ctorParameters = () => [
    { type: HttpClient },
    { type: Config }
];
/** @nocollapse */ NetService.ngInjectableDef = defineInjectable({ factory: function NetService_Factory() { return new NetService(inject(HttpClient), inject(Config)); }, token: NetService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RestoStorageService {
    /**
     * @param {?} cookiesStorageService
     * @param {?} localStorageService
     * @param {?} sharedStorageService
     */
    constructor(cookiesStorageService, localStorageService, sharedStorageService) {
        this.cookiesStorageService = cookiesStorageService;
        this.localStorageService = localStorageService;
        this.sharedStorageService = sharedStorageService;
        this.initTypeStorage();
        this.event = new BehaviorSubject({});
    }
    /**
     * @return {?}
     */
    initTypeStorage() {
        //  this.cookiesStorageService.set('ola', "work");
        //  this.localStorageService.set("ola","work");
        //   //  this.sharedStorageService.set("ola","work");
        //   //  console.log(this.cookiesStorageService.get('ola'))
        //   console.log(this.localStorageService.get('olaet'))
        //  console.log(this.sharedStorageService.get('ola'))
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    get(typeStorage, key) {
        return this[typeStorage].get(key);
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(typeStorage, key, value) {
        return this[typeStorage].set(key, value);
    }
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    sub(typeStorage, key) {
        this[typeStorage].observe()
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.key == key) {
                this.event.next({ "changeKey": key });
            }
        }));
        return this.event;
    }
}
RestoStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
RestoStorageService.ctorParameters = () => [
    { type: CookiesStorageService },
    { type: LocalStorageService },
    { type: SharedStorageService }
];
/** @nocollapse */ RestoStorageService.ngInjectableDef = defineInjectable({ factory: function RestoStorageService_Factory() { return new RestoStorageService(inject(CookiesStorageService), inject(LocalStorageService), inject(SharedStorageService)); }, token: RestoStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgCoreModule {
}
NgCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServerErrorInterceptor {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessageInterceptor {
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
                if (event.body.enable
                    && typeof event.body.title !== 'undefined'
                    && typeof event.body.description !== 'undefined'
                    && typeof event.body.startDate !== 'undefined'
                    && typeof event.body.stopDate !== 'undefined') {
                    /** @type {?} */
                    const currentTime = new Date().getTime();
                    /** @type {?} */
                    const startTime = new Date(event.body.startDate).getTime();
                    /** @type {?} */
                    const stopTime = new Date(event.body.stopDate).getTime();
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
        })));
    }
}
MessageInterceptor.decorators = [
    { type: Injectable },
];
MessageInterceptor.ctorParameters = () => [
    { type: EventerService },
    { type: StateService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ngCoreHttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EventMessage, EventerService, StateService, NetService, RestoStorageService, NgCoreModule, ngCoreHttpInterceptorProviders, ServerErrorInterceptor, MessageInterceptor as ɵb, EventerService as ɵa, StateService as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicmVzdG8tbmctY29yZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvY29uZmlnLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9uZy1jb3JlLm1vZHVsZS50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL21lc3NhZ2UuaW50ZXJjZXB0b3IudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRNZXNzYWdlIHtcbiAgdHlwZTpzdHJpbmc7XG4gIHRpdGxlOnN0cmluZztcbiAgYm9keTpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudC1tZXNzYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRlclNlcnZpY2Uge1xuICBldmVudE1lc3NhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudEFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBlbWl0TWVzc2FnZUV2ZW50KG1lc3NhZ2U6RXZlbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5ldmVudE1lc3NhZ2UuZW1pdChtZXNzYWdlKTtcbiAgfVxuICBlbWl0QWN0aW9uRXZlbnQoYWN0aW9uOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRBY3Rpb24uZW1pdChhY3Rpb24pO1xuICB9XG5cblxuICBnZXRNZXNzYWdlRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudE1lc3NhZ2U7XG4gIH1cbiAgZ2V0QWN0aW9uRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudEFjdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xuICBtYWludGVuYW5jZSQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbnRlbmFuY2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHVybDphbnk7XG4gIHBvcnQ6bnVtYmVyID0gODA7XG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcbiAgICBlbmRwb2ludFVybC5zdWJzY3JpYmUodXJsPT57XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9KSAgXG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xuICBjb25maWc6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50LCBjb25maWc6Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgIGdldCh1cmw6c3RyaW5nLCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljICBwdXQodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xuXG4gIH1cblxuICBwdWJsaWMgIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29va2llc1N0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBTaGFyZWRTdG9yYWdlU2VydmljZSwgTmd4U3RvcmFnZUV2ZW50XG59IGZyb20gJ25neC1zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcbiAgZXZlbnQ6QmVoYXZpb3JTdWJqZWN0PGFueT47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXNTdG9yYWdlU2VydmljZTpDb29raWVzU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNoYXJlZFN0b3JhZ2VTZXJ2aWNlOlNoYXJlZFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0VHlwZVN0b3JhZ2UoKTtcbiAgICB0aGlzLmV2ZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIH1cblxuICBpbml0VHlwZVN0b3JhZ2UoKSB7XG4gICAgLy8gIHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLnNldCgnb2xhJywgXCJ3b3JrXCIpO1xuICAgIC8vICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGFldCcpKVxuICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG5cbiAgfVxuXG4gIGdldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLmdldChrZXkpO1xuXG4gIH1cblxuICBzZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nLCB2YWx1ZTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG5cbiAgc3ViKHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHRoaXNbdHlwZVN0b3JhZ2VdLm9ic2VydmUoKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBrZXkpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50Lm5leHQoe1wiY2hhbmdlS2V5XCI6IGtleX0pXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQ7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VNb2R1bGUgfSBmcm9tICduZ3gtc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3JlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UgJiYgZXZlbnQuYm9keS5tZXNzYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50LmJvZHkubWVzc2FnZVswXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IuZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLm1lc3NhZ2UpO1xuXG4gICAgICBzd2l0Y2goZXJyb3IubWVzc2FnZSkge1xuICAgICAgICBjYXNlICd0aW1lb3V0LW9yLWR1cGxpY2F0ZSc6XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ8OQwp7DkcKIw5DCuMOQwrHDkMK6w5DCsCDDkcKBw5DCtcORwoDDkMKyw5DCtcORwoDDkMKwICjDkcKCw5DCsMOQwrnDkMK8w5DCsMORwoPDkcKCKS4gw5DCn8OQwr7DkMKyw5HCgsOQwr7DkcKAw5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCv8ORwovDkcKCw5DCusORwoMgw5DCv8OQwr7DkMK3w5DCtsOQwrUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGJhY2tlbmQgcmV0dXJuZWQgYW4gdW5zdWNjZXNzZnVsIHJlc3BvbnNlIGNvZGUuXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgQmFja2VuZCByZXR1cm5lZCBjb2RlICR7ZXJyb3Iuc3RhdHVzfSwgYCArXG4gICAgICAgIGBib2R5IHdhczogJHtlcnJvci5lcnJvcn1gKTtcblxuICAgICAgaWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdVbmF1dGhvcml6ZWQnLCAnJywgJycpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoXG4gICAgICAgICAgZXJyb3IuZXJyb3IgJiYgZXJyb3IuZXJyb3IudGl0bGVcbiAgICAgICAgICAgID8gZXJyb3IuZXJyb3IudGl0bGVcbiAgICAgICAgICAgIDogJ8OQwp3DkMK1w5DCvsOQwrHDkcKFw5DCvsOQwrTDkMK4w5DCvMOQwr4gw5DCv8ORwoDDkMK+w5DCucORwoLDkMK4IMOQwrDDkMKyw5HCgsOQwr7DkcKAw5DCuMOQwrfDkMKww5HChsOQwrjDkcKOJ1xuICAgICAgICApO1xuICAgICAgfWVsc2UgaWYoKGVycm9yLnN0YXR1cyA9PSA0MDAgfHwgZXJyb3Iuc3RhdHVzID09IDUwMClcbiAgICAgICAgJiYgZXJyb3IuZXJyb3JcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSkge1xuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gIH07XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5lbmFibGVcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS50aXRsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdGFydERhdGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkuc3RvcERhdGUgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWUgPSBuZXcgRGF0ZShldmVudC5ib2R5LnN0b3BEYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSA+IHN0YXJ0VGltZSAmJiBjdXJyZW50VGltZSA8IHN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LmJvZHkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5ib2R5LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHlcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGVcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2luZm8nLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdzdWNjZXNzJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnd2FybmluZycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTWVzc2FnZUludGVyY2VwdG9yIH0gZnJvbSBcIi4vbWVzc2FnZS5pbnRlcmNlcHRvclwiO1xuXG5cbmV4cG9ydCBjb25zdCBuZ0NvcmVIdHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTZXJ2ZXJFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTWVzc2FnZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XG5dO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7SUFLRSxZQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjtDQUNGOzs7Ozs7QUNWRDtJQVVFO1FBSEEsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0tBRW5DOzs7OztJQUVqQixnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNqQzs7Ozs7SUFDRCxlQUFlLENBQUMsTUFBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7SUFHRCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztBQ0xEO0lBU0U7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0tBQ3BEOzs7WUFSRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7OztBQ0xEOzs7O0lBWUUsWUFBaUMsV0FBZ0M7UUFKakUsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQVUsTUFBTSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3BCLFdBQVcsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRztZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQixFQUFDLENBQUE7S0FDSDs7O1lBZEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFIUSxlQUFlLHVCQVdULE1BQU0sU0FBQyxXQUFXOzs7Ozs7OztBQ1pqQzs7Ozs7SUFZRSxZQUFvQixJQUFlLEVBQUUsTUFBYTtRQUE5QixTQUFJLEdBQUosSUFBSSxDQUFXO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7Ozs7SUFFTyxHQUFHLENBQUMsR0FBVSxFQUFFLFFBQWdCLElBQUk7UUFFMUMsR0FBRyxHQUFHLEtBQUs7Y0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO2NBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQzthQUMzQixJQUFJLENBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNULENBQUM7S0FDTDs7Ozs7OztJQUVPLEdBQUcsQ0FBQyxHQUFVLEVBQUUsSUFBUSxFQUFFLFFBQWdCLElBQUk7UUFFcEQsR0FBRyxHQUFHLEtBQUs7Y0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO2NBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUVqQzs7Ozs7OztJQUVPLElBQUksQ0FBQyxHQUFVLEVBQUUsSUFBUSxFQUFFLFFBQWdCLElBQUk7UUFFckQsR0FBRyxHQUFHLEtBQUs7Y0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxHQUFHO2NBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsQzs7O1lBdkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsVUFBVTtZQURWLE1BQU07Ozs7Ozs7O0FDRGY7Ozs7OztJQWVFLFlBQW9CLHFCQUEyQyxFQUMzQyxtQkFBdUMsRUFDdkMsb0JBQXlDO1FBRnpDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFDM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQzNELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDOzs7O0lBRUQsZUFBZTs7Ozs7OztLQVFkOzs7Ozs7SUFFRCxHQUFHLENBQUMsV0FBa0IsRUFBRSxHQUFVO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUVuQzs7Ozs7OztJQUVELEdBQUcsQ0FBQyxXQUFrQixFQUFFLEdBQVUsRUFBRSxLQUFZO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUM7Ozs7OztJQUdELEdBQUcsQ0FBQyxXQUFrQixFQUFFLEdBQVU7UUFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRTthQUN4QixTQUFTOzs7O1FBQUMsQ0FBQyxLQUFLO1lBQ2YsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQTthQUNwQztTQUVGLEVBQUMsQ0FBQztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUVuQjs7O1lBN0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUkMscUJBQXFCO1lBQUUsbUJBQW1CO1lBQzFDLG9CQUFvQjs7Ozs7Ozs7Ozs7OztBQ0h0Qjs7O1lBR0MsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNaOzs7Ozs7O0FDUEQ7Ozs7SUFtQkUsWUFDVSxPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0tBQzVCOzs7Ozs7SUFFSixTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUVoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ3BCLElBQUksQ0FDSCxHQUFHOzs7O1FBQ0QsS0FBSztZQUNILElBQUcsS0FBSyxZQUFZLFlBQVksRUFBRTtnQkFFaEMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbkUsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUVGO1NBQ0YsRUFDRixFQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFDO0tBQ0w7Ozs7OztJQUVPLFdBQVcsQ0FBQyxLQUF3QjtRQUUxQyxJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFOztZQUVyQyxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUQ7YUFBTSxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7O1lBRWpDLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5ELFFBQU8sS0FBSyxDQUFDLE9BQU87Z0JBQ2xCLEtBQUssc0JBQXNCO29CQUN6QixPQUFPLFVBQVUsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO2FBQzFFO1NBQ0Y7YUFBTTs7O1lBR0wsT0FBTyxDQUFDLEtBQUssQ0FDWCx5QkFBeUIsS0FBSyxDQUFDLE1BQU0sSUFBSTtnQkFDekMsYUFBYSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUU5QixJQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUN6QyxDQUFDO2dCQUVGLE9BQU8sVUFBVSxDQUNmLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLO3NCQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUs7c0JBQ2pCLCtCQUErQixDQUNwQyxDQUFDO2FBQ0g7aUJBQUssSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRzttQkFDL0MsS0FBSyxDQUFDLEtBQUs7bUJBQ1gsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPO21CQUNuQixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLO21CQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQy9FLENBQUM7YUFDSDtTQUNGOztRQUVELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7OztZQXBFRixVQUFVOzs7WUFORixjQUFjOzs7Ozs7O0FDVnZCOzs7OztJQW9CRSxZQUNVLE9BQXNCLEVBQ3RCLEtBQWtCO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtLQUN4Qjs7Ozs7O0lBRUosU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFFaEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNwQixJQUFJLENBQ0gsR0FBRzs7OztRQUNELEtBQUs7WUFDSCxJQUFHLEtBQUssWUFBWSxZQUFZLEVBQUU7Z0JBQ2hDLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO3VCQUNmLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVzt1QkFDdkMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXO3VCQUM3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVc7dUJBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFOzswQkFFekMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOzswQkFDbEMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFOzswQkFDcEQsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUV4RCxJQUFHLFdBQVcsR0FBRyxTQUFTLElBQUksV0FBVyxHQUFHLFFBQVEsRUFBRTt3QkFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOzRCQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLOzRCQUN2QixXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO3lCQUNwQyxDQUFDLENBQUM7cUJBQ0o7aUJBRUY7Z0JBR0QsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87dUJBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7dUJBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7dUJBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtvQkFFNUIsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO3dCQUM3QixLQUFLLE1BQU07NEJBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDNUUsQ0FBQzs0QkFDRixNQUFNO3dCQUNSLEtBQUssU0FBUzs0QkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMzQixJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUMvRSxDQUFDOzRCQUNGLE1BQU07d0JBQ1IsS0FBSyxPQUFPOzRCQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQzNCLElBQUksWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQzdFLENBQUM7NEJBQ0YsTUFBTTt3QkFDUixLQUFLLFNBQVM7NEJBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDM0IsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDL0UsQ0FBQzs0QkFDRixNQUFNO3FCQUNUO2lCQUdGO2FBRUY7U0FDRixFQUNGLENBQ0YsQ0FBQztLQUNMOzs7WUF0RUYsVUFBVTs7O1lBUEYsY0FBYztZQUtkLFlBQVk7Ozs7Ozs7QUNmckI7QUFNQSxNQUFhLDhCQUE4QixHQUFHO0lBQzVDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzdFLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0NBQzFFOzs7Ozs7Ozs7Ozs7OzsifQ==