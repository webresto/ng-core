(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('ngx-store')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'ngx-store'], factory) :
    (factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}),global.ng.core,global.rxjs,global.ng.common.http,global.rxjs.operators,null));
}(this, (function (exports,i0,rxjs,i1,operators,i1$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        EventerService.ctorParameters = function () { return []; };
        /** @nocollapse */ EventerService.ngInjectableDef = i0.defineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
        return EventerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        StateService.ctorParameters = function () { return []; };
        /** @nocollapse */ StateService.ngInjectableDef = i0.defineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
        return StateService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var Config = /** @class */ (function () {
        function Config(endpointUrl) {
            var _this = this;
            this.port = 80;
            this.prefix = "api/";
            this.versionModule = "0.5";
            endpointUrl.subscribe(function (url) {
                _this.url = url;
            });
        }
        Config.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    .subscribe(function (event) {
                    if (event.key == key) {
                        _this.event.next({ "changeKey": key });
                    }
                });
                return this.event;
            };
        RestoStorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ServerErrorInterceptor = /** @class */ (function () {
        function ServerErrorInterceptor(eventer) {
            this.eventer = eventer;
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
                    .pipe(operators.tap(function (event) {
                    if (event instanceof i1.HttpResponse) {
                        if (event.body.status && event.body.message && event.body.message[0]) {
                            throw new Error(event.body.message[0]);
                        }
                    }
                }), operators.catchError(this.handleError.bind(this)));
            };
        /**
         * @param {?} error
         * @return {?}
         */
        ServerErrorInterceptor.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
            function (error) {
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
        ServerErrorInterceptor.ctorParameters = function () {
            return [
                { type: EventerService }
            ];
        };
        return ServerErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    .pipe(operators.tap(function (event) {
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
                }));
            };
        MessageInterceptor.decorators = [
            { type: i0.Injectable },
        ];
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ngCoreHttpInterceptorProviders = [
        { provide: i1.HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: i1.HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.EventMessage = EventMessage;
    exports.EventerService = EventerService;
    exports.StateService = StateService;
    exports.NetService = NetService;
    exports.RestoStorageService = RestoStorageService;
    exports.NgCoreModule = NgCoreModule;
    exports.ngCoreHttpInterceptorProviders = ngCoreHttpInterceptorProviders;
    exports.ServerErrorInterceptor = ServerErrorInterceptor;
    exports.ɵb = MessageInterceptor;
    exports.ɵa = EventerService;
    exports.ɵc = StateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvc3RhdGUuc2VydmljZS50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2NvbmZpZy50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL3NlcnZpY2VzL25ldC5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvcmVzdG8tc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvbmctY29yZS5tb2R1bGUudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3IudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9tZXNzYWdlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50TWVzc2FnZSB7XG4gIHR5cGU6c3RyaW5nO1xuICB0aXRsZTpzdHJpbmc7XG4gIGJvZHk6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50ZXJTZXJ2aWNlIHtcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRBY3Rpb246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XG4gIH1cbiAgZW1pdEFjdGlvbkV2ZW50KGFjdGlvbjpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50QWN0aW9uLmVtaXQoYWN0aW9uKTtcbiAgfVxuXG5cbiAgZ2V0TWVzc2FnZUVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xuICB9XG4gIGdldEFjdGlvbkVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBY3Rpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcbiAgbWFpbnRlbmFuY2UkOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW50ZW5hbmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICB1cmw6YW55O1xuICBwb3J0Om51bWJlciA9IDgwO1xuICBwcmVmaXg6c3RyaW5nID0gXCJhcGkvXCI7XG4gIHZlcnNpb25Nb2R1bGUgPSBcIjAuNVwiO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0FwaURvbWFpbicpIGVuZHBvaW50VXJsOkJlaGF2aW9yU3ViamVjdDxhbnk+KSB7XG4gICAgZW5kcG9pbnRVcmwuc3Vic2NyaWJlKHVybD0+e1xuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfSkgIFxuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZXRTZXJ2aWNlIHtcbiAgY29uZmlnOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCwgY29uZmlnOkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljICBnZXQodXJsOnN0cmluZywgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDMpIC8vIHJldHJ5IGEgZmFpbGVkIHJlcXVlc3QgdXAgdG8gMyB0aW1lc1xuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyAgcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcblxuICB9XG5cbiAgcHVibGljICBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSk7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvb2tpZXNTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgU2hhcmVkU3RvcmFnZVNlcnZpY2UsIE5neFN0b3JhZ2VFdmVudFxufSBmcm9tICduZ3gtc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdG9TdG9yYWdlU2VydmljZSB7XG4gIGV2ZW50OkJlaGF2aW9yU3ViamVjdDxhbnk+O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVzU3RvcmFnZVNlcnZpY2U6Q29va2llc1N0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzaGFyZWRTdG9yYWdlU2VydmljZTpTaGFyZWRTdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuaW5pdFR5cGVTdG9yYWdlKCk7XG4gICAgdGhpcy5ldmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICB9XG5cbiAgaW5pdFR5cGVTdG9yYWdlKCkge1xuICAgIC8vICB0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5zZXQoJ29sYScsIFwid29ya1wiKTtcbiAgICAvLyAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICB0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICBjb25zb2xlLmxvZyh0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhZXQnKSlcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuXG4gIH1cblxuICBnZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5nZXQoa2V5KTtcblxuICB9XG5cbiAgc2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuXG4gIHN1Yih0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB0aGlzW3R5cGVTdG9yYWdlXS5vYnNlcnZlKClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0ga2V5KSB7XG4gICAgICAgICAgdGhpcy5ldmVudC5uZXh0KHtcImNoYW5nZUtleVwiOiBrZXl9KVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmV2ZW50O1xuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlTW9kdWxlIH0gZnJvbSAnbmd4LXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5zdGF0dXMgJiYgZXZlbnQuYm9keS5tZXNzYWdlICYmIGV2ZW50LmJvZHkubWVzc2FnZVswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihldmVudC5ib2R5Lm1lc3NhZ2VbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG5cbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc3dpdGNoKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgY2FzZSAndGltZW91dC1vci1kdXBsaWNhdGUnOlxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfDkMKew5HCiMOQwrjDkMKxw5DCusOQwrAgw5HCgcOQwrXDkcKAw5DCssOQwrXDkcKAw5DCsCAow5HCgsOQwrDDkMK5w5DCvMOQwrDDkcKDw5HCgikuIMOQwp/DkMK+w5DCssORwoLDkMK+w5HCgMOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwr/DkcKLw5HCgsOQwrrDkcKDIMOQwr/DkMK+w5DCt8OQwrbDkMK1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxuICAgICAgICAgIGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA/IGVycm9yLmVycm9yLnRpdGxlXG4gICAgICAgICAgICA6ICfDkMKdw5DCtcOQwr7DkMKxw5HChcOQwr7DkMK0w5DCuMOQwrzDkMK+IMOQwr/DkcKAw5DCvsOQwrnDkcKCw5DCuCDDkMKww5DCssORwoLDkMK+w5HCgMOQwrjDkMK3w5DCsMORwobDkMK4w5HCjidcbiAgICAgICAgKTtcbiAgICAgIH1lbHNlIGlmKChlcnJvci5zdGF0dXMgPT0gNDAwIHx8IGVycm9yLnN0YXR1cyA9PSA1MDApXG4gICAgICAgICYmIGVycm9yLmVycm9yXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IuZXJyb3IpO1xuICB9O1xufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGF0ZS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRlOlN0YXRlU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkuZW5hYmxlXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkudGl0bGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkuZGVzY3JpcHRpb24gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkuc3RhcnREYXRlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICYmIHR5cGVvZiBldmVudC5ib2R5LnN0b3BEYXRlICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZShldmVudC5ib2R5LnN0YXJ0RGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHN0b3BUaW1lID0gbmV3IERhdGUoZXZlbnQuYm9keS5zdG9wRGF0ZSkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgPiBzdGFydFRpbWUgJiYgY3VycmVudFRpbWUgPCBzdG9wVGltZSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tYWludGVuYW5jZSQubmV4dCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBldmVudC5ib2R5LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnQuYm9keS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIGlmKGV2ZW50LmJvZHkubWVzc2FnZVxuICAgICAgICAgICAgICAgICYmIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5XG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlXG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLnR5cGUpIHtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQuYm9keS5tZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdpbmZvJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnc3VjY2VzcycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ3dhcm5pbmcnLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgU2VydmVyRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmVyLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE1lc3NhZ2VJbnRlcmNlcHRvciB9IGZyb20gXCIuL21lc3NhZ2UuaW50ZXJjZXB0b3JcIjtcblxuXG5leHBvcnQgY29uc3QgbmdDb3JlSHR0cEludGVyY2VwdG9yUHJvdmlkZXJzID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogU2VydmVyRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IE1lc3NhZ2VJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfVxuXTtcblxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3QiLCJyZXRyeSIsIkh0dHBDbGllbnQiLCJDb29raWVzU3RvcmFnZVNlcnZpY2UiLCJMb2NhbFN0b3JhZ2VTZXJ2aWNlIiwiU2hhcmVkU3RvcmFnZVNlcnZpY2UiLCJOZ01vZHVsZSIsInRhcCIsIkh0dHBSZXNwb25zZSIsImNhdGNoRXJyb3IiLCJ0aHJvd0Vycm9yIiwiSFRUUF9JTlRFUkNFUFRPUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUtFLHNCQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMs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