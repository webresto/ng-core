import { Injectable, EventEmitter, NgModule, Inject, defineInjectable, inject } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { retry, tap, catchError } from 'rxjs/operators';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventMessage = /** @class */ (function () {
    function EventMessage(type, title, body) {
        this.type = type;
        this.title = title;
        this.body = body;
    }
    return EventMessage;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EventerService = /** @class */ (function () {
    function EventerService() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    EventerService.prototype.emitMessageEvent = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.eventMessage.emit(message);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    EventerService.prototype.emitActionEvent = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.eventAction.emit(action);
    };
    /**
     * @return {?}
     */
    EventerService.prototype.getMessageEmitter = /**
     * @return {?}
     */
    function () {
        return this.eventMessage;
    };
    /**
     * @return {?}
     */
    EventerService.prototype.getActionEmitter = /**
     * @return {?}
     */
    function () {
        return this.eventAction;
    };
    EventerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    EventerService.ctorParameters = function () { return []; };
    /** @nocollapse */ EventerService.ngInjectableDef = defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
    return EventerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StateService = /** @class */ (function () {
    function StateService() {
        this.maintenance$ = new BehaviorSubject(null);
    }
    StateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    StateService.ctorParameters = function () { return []; };
    /** @nocollapse */ StateService.ngInjectableDef = defineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
    return StateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Config = /** @class */ (function () {
    function Config(endpointUrl) {
        var _this = this;
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe((/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            _this.url = url;
        }));
    }
    Config.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    Config.ctorParameters = function () { return [
        { type: BehaviorSubject, decorators: [{ type: Inject, args: ['ApiDomain',] }] }
    ]; };
    /** @nocollapse */ Config.ngInjectableDef = defineInjectable({ factory: function Config_Factory() { return new Config(inject("ApiDomain")); }, token: Config, providedIn: "root" });
    return Config;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NetService = /** @class */ (function () {
    function NetService(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
     * @param {?} url
     * @param {?=} isApi
     * @return {?}
     */
    NetService.prototype.get = /**
     * @param {?} url
     * @param {?=} isApi
     * @return {?}
     */
    function (url, isApi) {
        if (isApi === void 0) { isApi = true; }
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url)
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    };
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    NetService.prototype.put = /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    function (url, data, isApi) {
        if (isApi === void 0) { isApi = true; }
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    };
    /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    NetService.prototype.post = /**
     * @param {?} url
     * @param {?} data
     * @param {?=} isApi
     * @return {?}
     */
    function (url, data, isApi) {
        if (isApi === void 0) { isApi = true; }
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data);
    };
    NetService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NetService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Config }
    ]; };
    /** @nocollapse */ NetService.ngInjectableDef = defineInjectable({ factory: function NetService_Factory() { return new NetService(inject(HttpClient), inject(Config)); }, token: NetService, providedIn: "root" });
    return NetService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RestoStorageService = /** @class */ (function () {
    function RestoStorageService(cookiesStorageService, localStorageService, sharedStorageService) {
        this.cookiesStorageService = cookiesStorageService;
        this.localStorageService = localStorageService;
        this.sharedStorageService = sharedStorageService;
        this.initTypeStorage();
        this.event = new BehaviorSubject({});
    }
    /**
     * @return {?}
     */
    RestoStorageService.prototype.initTypeStorage = /**
     * @return {?}
     */
    function () {
        //  this.cookiesStorageService.set('ola', "work");
        //  this.localStorageService.set("ola","work");
        //   //  this.sharedStorageService.set("ola","work");
        //   //  console.log(this.cookiesStorageService.get('ola'))
        //   console.log(this.localStorageService.get('olaet'))
        //  console.log(this.sharedStorageService.get('ola'))
    };
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    RestoStorageService.prototype.get = /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    function (typeStorage, key) {
        return this[typeStorage].get(key);
    };
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    RestoStorageService.prototype.set = /**
     * @param {?} typeStorage
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (typeStorage, key, value) {
        return this[typeStorage].set(key, value);
    };
    /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    RestoStorageService.prototype.sub = /**
     * @param {?} typeStorage
     * @param {?} key
     * @return {?}
     */
    function (typeStorage, key) {
        var _this = this;
        this[typeStorage].observe()
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.key == key) {
                _this.event.next({ "changeKey": key });
            }
        }));
        return this.event;
    };
    RestoStorageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    RestoStorageService.ctorParameters = function () { return [
        { type: CookiesStorageService },
        { type: LocalStorageService },
        { type: SharedStorageService }
    ]; };
    /** @nocollapse */ RestoStorageService.ngInjectableDef = defineInjectable({ factory: function RestoStorageService_Factory() { return new RestoStorageService(inject(CookiesStorageService), inject(LocalStorageService), inject(SharedStorageService)); }, token: RestoStorageService, providedIn: "root" });
    return RestoStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgCoreModule = /** @class */ (function () {
    function NgCoreModule() {
    }
    NgCoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    exports: []
                },] },
    ];
    return NgCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessageInterceptor = /** @class */ (function () {
    function MessageInterceptor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    MessageInterceptor.prototype.intercept = /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    function (req, next) {
        var _this = this;
        return next.handle(req)
            .pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof HttpResponse) {
                if (event.body.enable
                    && typeof event.body.title !== 'undefined'
                    && typeof event.body.description !== 'undefined'
                    && typeof event.body.startDate !== 'undefined'
                    && typeof event.body.stopDate !== 'undefined') {
                    /** @type {?} */
                    var currentTime = new Date().getTime();
                    /** @type {?} */
                    var startTime = new Date(event.body.startDate).getTime();
                    /** @type {?} */
                    var stopTime = new Date(event.body.stopDate).getTime();
                    if (currentTime > startTime && currentTime < stopTime) {
                        _this.state.maintenance$.next({
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
                            _this.eventer.emitMessageEvent(new EventMessage('info', event.body.message.title, event.body.message.body));
                            break;
                        case 'success':
                            _this.eventer.emitMessageEvent(new EventMessage('success', event.body.message.title, event.body.message.body));
                            break;
                        case 'error':
                            _this.eventer.emitMessageEvent(new EventMessage('error', event.body.message.title, event.body.message.body));
                            break;
                        case 'warning':
                            _this.eventer.emitMessageEvent(new EventMessage('warning', event.body.message.title, event.body.message.body));
                            break;
                    }
                }
            }
        })));
    };
    MessageInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageInterceptor.ctorParameters = function () { return [
        { type: EventerService },
        { type: StateService }
    ]; };
    return MessageInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ngCoreHttpInterceptorProviders = [
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

export { EventMessage, EventerService, StateService, NetService, RestoStorageService, NgCoreModule, ngCoreHttpInterceptorProviders, ServerErrorInterceptor, MessageInterceptor as ɵc, EventerService as ɵa, StateService as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicmVzdG8tbmctY29yZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvY29uZmlnLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9uZy1jb3JlLm1vZHVsZS50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL21lc3NhZ2UuaW50ZXJjZXB0b3IudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRNZXNzYWdlIHtcbiAgdHlwZTpzdHJpbmc7XG4gIHRpdGxlOnN0cmluZztcbiAgYm9keTpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudC1tZXNzYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRlclNlcnZpY2Uge1xuICBldmVudE1lc3NhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudEFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBlbWl0TWVzc2FnZUV2ZW50KG1lc3NhZ2U6RXZlbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5ldmVudE1lc3NhZ2UuZW1pdChtZXNzYWdlKTtcbiAgfVxuICBlbWl0QWN0aW9uRXZlbnQoYWN0aW9uOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRBY3Rpb24uZW1pdChhY3Rpb24pO1xuICB9XG5cblxuICBnZXRNZXNzYWdlRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudE1lc3NhZ2U7XG4gIH1cbiAgZ2V0QWN0aW9uRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudEFjdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xuICBtYWludGVuYW5jZSQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFpbnRlbmFuY2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHVybDphbnk7XG4gIHBvcnQ6bnVtYmVyID0gODA7XG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcbiAgICBlbmRwb2ludFVybC5zdWJzY3JpYmUodXJsPT57XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9KSAgXG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmV0U2VydmljZSB7XG4gIGNvbmZpZzphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQsIGNvbmZpZzpDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHB1YmxpYyAgZ2V0KHVybDpzdHJpbmcsIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KHVybClcbiAgICAgIC5waXBlKFxuICAgICAgICByZXRyeSgzKSAvLyByZXRyeSBhIGZhaWxlZCByZXF1ZXN0IHVwIHRvIDMgdGltZXNcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgIHB1dCh1cmw6c3RyaW5nLCBkYXRhOmFueSwgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgZGF0YSk7XG5cbiAgfVxuXG4gIHB1YmxpYyAgcG9zdCh1cmw6c3RyaW5nLCBkYXRhOmFueSwgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGRhdGEpO1xuICB9XG5cblxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb29raWVzU3RvcmFnZVNlcnZpY2UsIExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gIFNoYXJlZFN0b3JhZ2VTZXJ2aWNlLCBOZ3hTdG9yYWdlRXZlbnRcbn0gZnJvbSAnbmd4LXN0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RvU3RvcmFnZVNlcnZpY2Uge1xuICBldmVudDpCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llc1N0b3JhZ2VTZXJ2aWNlOkNvb2tpZXNTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOkxvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2hhcmVkU3RvcmFnZVNlcnZpY2U6U2hhcmVkU3RvcmFnZVNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXRUeXBlU3RvcmFnZSgpO1xuICAgIHRoaXMuZXZlbnQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcbiAgfVxuXG4gIGluaXRUeXBlU3RvcmFnZSgpIHtcbiAgICAvLyAgdGhpcy5jb29raWVzU3RvcmFnZVNlcnZpY2Uuc2V0KCdvbGEnLCBcIndvcmtcIik7XG4gICAgLy8gIHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XG4gICAgLy8gICAvLyAgdGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5zZXQoXCJvbGFcIixcIndvcmtcIik7XG4gICAgLy8gICAvLyAgY29uc29sZS5sb2codGhpcy5jb29raWVzU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGEnKSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ29sYWV0JykpXG4gICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGEnKSlcblxuICB9XG5cbiAgZ2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpc1t0eXBlU3RvcmFnZV0uZ2V0KGtleSk7XG5cbiAgfVxuXG4gIHNldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcsIHZhbHVlOnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpc1t0eXBlU3RvcmFnZV0uc2V0KGtleSwgdmFsdWUpO1xuICB9XG5cblxuICBzdWIodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdGhpc1t0eXBlU3RvcmFnZV0ub2JzZXJ2ZSgpXG4gICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09IGtleSkge1xuICAgICAgICAgIHRoaXMuZXZlbnQubmV4dCh7XCJjaGFuZ2VLZXlcIjoga2V5fSlcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5ldmVudDtcblxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2ViU3RvcmFnZU1vZHVsZSB9IGZyb20gJ25neC1zdG9yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NvcmVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRXZlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UgJiYgZXZlbnQuYm9keS5tZXNzYWdlWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGV2ZW50LmJvZHkubWVzc2FnZVswXSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmKGVycm9yLmVycm9yLmVuYWJsZVxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLmVycm9yLmRlc2NyaXB0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCnsORwojDkMK4w5DCscOQwrrDkMKwIMORwoHDkMK1w5HCgMOQwrLDkMK1w5HCgMOQwrAgKMORwoLDkMKww5DCucOQwrzDkMKww5HCg8ORwoIpLiDDkMKfw5DCvsOQwrLDkcKCw5DCvsORwoDDkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK/w5HCi8ORwoLDkMK6w5HCgyDDkMK/w5DCvsOQwrfDkMK2w5DCtScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xuXG4gICAgICBpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcbiAgICAgICAgICBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgPyBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgOiAnw5DCncOQwrXDkMK+w5DCscORwoXDkMK+w5DCtMOQwrjDkMK8w5DCviDDkMK/w5HCgMOQwr7DkMK5w5HCgsOQwrggw5DCsMOQwrLDkcKCw5DCvsORwoDDkMK4w5DCt8OQwrDDkcKGw5DCuMORwo4nXG4gICAgICAgICk7XG4gICAgICB9ZWxzZSBpZigoZXJyb3Iuc3RhdHVzID09IDQwMCB8fCBlcnJvci5zdGF0dXMgPT0gNTAwKVxuICAgICAgICAmJiBlcnJvci5lcnJvclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGVcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRXZlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50ZXI6RXZlbnRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTpTdGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTpPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LmVuYWJsZVxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnQuYm9keS5zdGFydERhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lID4gc3RhcnRUaW1lICYmIGN1cnJlbnRUaW1lIDwgc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFpbnRlbmFuY2UkLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQuYm9keS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmJvZHkuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHlcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGVcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2luZm8nLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdzdWNjZXNzJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnd2FybmluZycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTWVzc2FnZUludGVyY2VwdG9yIH0gZnJvbSBcIi4vbWVzc2FnZS5pbnRlcmNlcHRvclwiO1xuXG5cbmV4cG9ydCBjb25zdCBuZ0NvcmVIdHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTZXJ2ZXJFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTWVzc2FnZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XG5dO1xuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBS0Usc0JBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBQ0gsbUJBQUM7Q0FBQTs7Ozs7O0FDVkQ7SUFVRTtRQUhBLGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUVuQzs7Ozs7SUFFakIseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQW9CO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUNELHdDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENB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