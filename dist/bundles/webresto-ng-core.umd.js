(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('ngx-store')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'ngx-store'], factory) :
    (factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}),global.ng.core,global.rxjs,global.ng.common.http,global.rxjs.operators,null));
}(this, (function (exports,i0,rxjs,i1,operators,i1$1) { 'use strict';

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
            this.eventMessage = new i0.EventEmitter();
            this.eventAction = new i0.EventEmitter();
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        EventerService.ctorParameters = function () { return []; };
        /** @nocollapse */ EventerService.ngInjectableDef = i0.defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
        return EventerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StateService = /** @class */ (function () {
        function StateService() {
            this.maintenance$ = new rxjs.BehaviorSubject(null);
        }
        StateService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        StateService.ctorParameters = function () { return []; };
        /** @nocollapse */ StateService.ngInjectableDef = i0.defineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
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
            endpointUrl.subscribe(( /**
             * @param {?} url
             * @return {?}
             */function (url) {
                _this.url = url;
            }));
        }
        Config.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        Config.ctorParameters = function () {
            return [
                { type: rxjs.BehaviorSubject, decorators: [{ type: i0.Inject, args: ['ApiDomain',] }] }
            ];
        };
        /** @nocollapse */ Config.ngInjectableDef = i0.defineInjectable({ factory: function Config_Factory() { return new Config(i0.inject("ApiDomain")); }, token: Config, providedIn: "root" });
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
                if (isApi === void 0) {
                    isApi = true;
                }
                url = isApi
                    ? this.config.url + this.config.prefix + this.config.versionModule + url
                    : this.config.url + url;
                return this.http.get(url)
                    .pipe(operators.retry(3) // retry a failed request up to 3 times
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
                if (isApi === void 0) {
                    isApi = true;
                }
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
                if (isApi === void 0) {
                    isApi = true;
                }
                url = isApi
                    ? this.config.url + this.config.prefix + this.config.versionModule + url
                    : this.config.url + url;
                return this.http.post(url, data);
            };
        NetService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NetService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: Config }
            ];
        };
        /** @nocollapse */ NetService.ngInjectableDef = i0.defineInjectable({ factory: function NetService_Factory() { return new NetService(i0.inject(i1.HttpClient), i0.inject(Config)); }, token: NetService, providedIn: "root" });
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
            this.event = new rxjs.BehaviorSubject({});
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
                    .subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                    if (event.key == key) {
                        _this.event.next({ "changeKey": key });
                    }
                }));
                return this.event;
            };
        RestoStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        RestoStorageService.ctorParameters = function () {
            return [
                { type: i1$1.CookiesStorageService },
                { type: i1$1.LocalStorageService },
                { type: i1$1.SharedStorageService }
            ];
        };
        /** @nocollapse */ RestoStorageService.ngInjectableDef = i0.defineInjectable({ factory: function RestoStorageService_Factory() { return new RestoStorageService(i0.inject(i1$1.CookiesStorageService), i0.inject(i1$1.LocalStorageService), i0.inject(i1$1.SharedStorageService)); }, token: RestoStorageService, providedIn: "root" });
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
            { type: i0.NgModule, args: [{
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
                    .pipe(operators.tap(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                    if (event instanceof i1.HttpResponse) {
                        if (event.body.status && event.body.message && event.body.message[0]) {
                            throw new Error(event.body.message[0]);
                        }
                    }
                })), operators.catchError(this.handleError.bind(this)));
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
                            description: error.error.description,
                            social: error.error.social
                        });
                    }
                    return rxjs.throwError(error.error);
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
                            return rxjs.throwError('Ошибка сервера (таймаут). Повторите попытку позже');
                    }
                }
                else {
                    // The backend returned an unsuccessful response code.
                    // The response body may contain clues as to what went wrong,
                    console.error("Backend returned code " + error.status + ", " +
                        ("body was: " + error.error));
                    if (error.status == 401) {
                        this.eventer.emitMessageEvent(new EventMessage('Unauthorized', '', ''));
                        return rxjs.throwError(error.error && error.error.title
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
                return rxjs.throwError(error.error);
            };
        ServerErrorInterceptor.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ServerErrorInterceptor.ctorParameters = function () {
            return [
                { type: EventerService },
                { type: StateService }
            ];
        };
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
                    .pipe(operators.tap(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                    if (event instanceof i1.HttpResponse) {
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        MessageInterceptor.ctorParameters = function () {
            return [
                { type: EventerService },
                { type: StateService }
            ];
        };
        return MessageInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ngCoreHttpInterceptorProviders = [
        { provide: i1.HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: i1.HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.EventMessage = EventMessage;
    exports.EventerService = EventerService;
    exports.StateService = StateService;
    exports.NetService = NetService;
    exports.RestoStorageService = RestoStorageService;
    exports.NgCoreModule = NgCoreModule;
    exports.ngCoreHttpInterceptorProviders = ngCoreHttpInterceptorProviders;
    exports.ServerErrorInterceptor = ServerErrorInterceptor;
    exports.ɵc = MessageInterceptor;
    exports.ɵa = EventerService;
    exports.ɵb = StateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvc3RhdGUuc2VydmljZS50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2NvbmZpZy50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL3NlcnZpY2VzL25ldC5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvcmVzdG8tc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvbmctY29yZS5tb2R1bGUudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3IudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9tZXNzYWdlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50TWVzc2FnZSB7XG4gIHR5cGU6c3RyaW5nO1xuICB0aXRsZTpzdHJpbmc7XG4gIGJvZHk6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50ZXJTZXJ2aWNlIHtcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XG4gIH1cbiAgZW1pdEFjdGlvbkV2ZW50KGFjdGlvbjpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50QWN0aW9uLmVtaXQoYWN0aW9uKTtcbiAgfVxuXG5cbiAgZ2V0TWVzc2FnZUVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xuICB9XG4gIGdldEFjdGlvbkVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBY3Rpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcbiAgbWFpbnRlbmFuY2UkOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW50ZW5hbmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICB1cmw6YW55O1xuICBwb3J0Om51bWJlciA9IDgwO1xuICBwcmVmaXg6c3RyaW5nID0gXCJhcGkvXCI7XG4gIHZlcnNpb25Nb2R1bGUgPSBcIjAuNVwiO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0FwaURvbWFpbicpIGVuZHBvaW50VXJsOkJlaGF2aW9yU3ViamVjdDxhbnk+KSB7XG4gICAgZW5kcG9pbnRVcmwuc3Vic2NyaWJlKHVybD0+e1xuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfSkgIFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xuICBjb25maWc6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50LCBjb25maWc6Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgIGdldCh1cmw6c3RyaW5nLCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljICBwdXQodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xuXG4gIH1cblxuICBwdWJsaWMgIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29va2llc1N0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBTaGFyZWRTdG9yYWdlU2VydmljZSwgTmd4U3RvcmFnZUV2ZW50XG59IGZyb20gJ25neC1zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcbiAgZXZlbnQ6QmVoYXZpb3JTdWJqZWN0PGFueT47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXNTdG9yYWdlU2VydmljZTpDb29raWVzU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNoYXJlZFN0b3JhZ2VTZXJ2aWNlOlNoYXJlZFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0VHlwZVN0b3JhZ2UoKTtcbiAgICB0aGlzLmV2ZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIH1cblxuICBpbml0VHlwZVN0b3JhZ2UoKSB7XG4gICAgLy8gIHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLnNldCgnb2xhJywgXCJ3b3JrXCIpO1xuICAgIC8vICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGFldCcpKVxuICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG5cbiAgfVxuXG4gIGdldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLmdldChrZXkpO1xuXG4gIH1cblxuICBzZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nLCB2YWx1ZTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG5cbiAgc3ViKHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHRoaXNbdHlwZVN0b3JhZ2VdLm9ic2VydmUoKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBrZXkpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50Lm5leHQoe1wiY2hhbmdlS2V5XCI6IGtleX0pXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQ7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VNb2R1bGUgfSBmcm9tICduZ3gtc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3JlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOlN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkuc3RhdHVzICYmIGV2ZW50LmJvZHkubWVzc2FnZSAmJiBldmVudC5ib2R5Lm1lc3NhZ2VbMF0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yLmJpbmQodGhpcykpXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcblxuICAgIGlmKGVycm9yLmVycm9yLmVuYWJsZVxuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgJiYgdHlwZW9mIGVycm9yLmVycm9yLnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICYmIHR5cGVvZiBlcnJvci5lcnJvci5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXJyb3IuZXJyb3Iuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xuICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICB0aXRsZTogZXJyb3IuZXJyb3IudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yLmVycm9yLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHNvY2lhbDogZXJyb3IuZXJyb3Iuc29jaWFsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCnsORwojDkMK4w5DCscOQwrrDkMKwIMORwoHDkMK1w5HCgMOQwrLDkMK1w5HCgMOQwrAgKMORwoLDkMKww5DCucOQwrzDkMKww5HCg8ORwoIpLiDDkMKfw5DCvsOQwrLDkcKCw5DCvsORwoDDkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK/w5HCi8ORwoLDkMK6w5HCgyDDkMK/w5DCvsOQwrfDkMK2w5DCtScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xuXG4gICAgICBpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihcbiAgICAgICAgICBlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgPyBlcnJvci5lcnJvci50aXRsZVxuICAgICAgICAgICAgOiAnw5DCncOQwrXDkMK+w5DCscORwoXDkMK+w5DCtMOQwrjDkMK8w5DCviDDkMK/w5HCgMOQwr7DkMK5w5HCgsOQwrggw5DCsMOQwrLDkcKCw5DCvsORwoDDkMK4w5DCt8OQwrDDkcKGw5DCuMORwo4nXG4gICAgICAgICk7XG4gICAgICB9ZWxzZSBpZigoZXJyb3Iuc3RhdHVzID09IDQwMCB8fCBlcnJvci5zdGF0dXMgPT0gNTAwKVxuICAgICAgICAmJiBlcnJvci5lcnJvclxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGVcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZSwgZXJyb3IuZXJyb3IubWVzc2FnZS5ib2R5KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gYW4gb2JzZXJ2YWJsZSB3aXRoIGEgdXNlci1mYWNpbmcgZXJyb3IgbWVzc2FnZVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLmVycm9yKTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgRXZlbnRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnQtbWVzc2FnZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmFsaXplLCB0YXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhdGUuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50ZXI6RXZlbnRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdGF0ZTpTdGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTpPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LmVuYWJsZVxuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnRpdGxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LmRlc2NyaXB0aW9uICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0YXJ0RGF0ZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdG9wRGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnQuYm9keS5zdGFydERhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzdG9wVGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RvcERhdGUpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lID4gc3RhcnRUaW1lICYmIGN1cnJlbnRUaW1lIDwgc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWFpbnRlbmFuY2UkLm5leHQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnQuYm9keS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGV2ZW50LmJvZHkuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHlcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGVcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2luZm8nLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdzdWNjZXNzJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnd2FybmluZycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTWVzc2FnZUludGVyY2VwdG9yIH0gZnJvbSBcIi4vbWVzc2FnZS5pbnRlcmNlcHRvclwiO1xuXG5cbmV4cG9ydCBjb25zdCBuZ0NvcmVIdHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTZXJ2ZXJFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTWVzc2FnZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XG5dO1xuXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdCIsInJldHJ5IiwiSHR0cENsaWVudCIsIkNvb2tpZXNTdG9yYWdlU2VydmljZSIsIkxvY2FsU3RvcmFnZVNlcnZpY2UiLCJTaGFyZWRTdG9yYWdlU2VydmljZSIsIk5nTW9kdWxlIiwidGFwIiwiSHR0cFJlc3BvbnNlIiwiY2F0Y2hFcnJvciIsInRocm93RXJyb3IiLCJIVFRQX0lOVEVSQ0VQVE9SUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBS0Usc0JBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO1FBQ0gsbUJBQUM7SUFBRCxDQUFDOzs7Ozs7QUNW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