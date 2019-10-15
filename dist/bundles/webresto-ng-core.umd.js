(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('ngx-store')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'ngx-store'], factory) :
    (factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}),global.ng.core,global.rxjs,global.ng.common.http,global.rxjs.operators,null));
}(this, (function (exports,i0,rxjs,i1,operators,i1$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var EventerService = /** @class */ (function () {
        function EventerService() {
            this.eventMessage = new i0.EventEmitter();
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
         * @return {?}
         */
        EventerService.prototype.getMessageEmitter = /**
         * @return {?}
         */
            function () {
                return this.eventMessage;
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
                        return rxjs.throwError('Необходимо пройти авторизацию');
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
                { type: EventerService }
            ];
        };
        return ServerErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ngCoreHttpInterceptorProviders = [
        { provide: i1.HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: i1.HTTP_INTERCEPTORS, useClass: MessageInterceptor, multi: true }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvc3RhdGUuc2VydmljZS50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL2NvbmZpZy50cyIsIm5nOi8vQHdlYnJlc3RvL25nLWNvcmUvbGliL3NlcnZpY2VzL25ldC5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvcmVzdG8tc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvbmctY29yZS5tb2R1bGUudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3IudHMiLCJuZzovL0B3ZWJyZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9tZXNzYWdlLmludGVyY2VwdG9yLnRzIiwibmc6Ly9Ad2VicmVzdG8vbmctY29yZS9saWIvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEV2ZW50TWVzc2FnZSB7XG4gIHR5cGU6c3RyaW5nO1xuICB0aXRsZTpzdHJpbmc7XG4gIGJvZHk6c3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRpdGxlLCBib2R5KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vZXZlbnQtbWVzc2FnZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50ZXJTZXJ2aWNlIHtcbiAgZXZlbnRNZXNzYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBlbWl0TWVzc2FnZUV2ZW50KG1lc3NhZ2U6RXZlbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5ldmVudE1lc3NhZ2UuZW1pdChtZXNzYWdlKTtcbiAgfVxuICBnZXRNZXNzYWdlRW1pdHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudE1lc3NhZ2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcbiAgbWFpbnRlbmFuY2UkOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1haW50ZW5hbmNlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICB1cmw6YW55O1xuICBwb3J0Om51bWJlciA9IDgwO1xuICBwcmVmaXg6c3RyaW5nID0gXCJhcGkvXCI7XG4gIHZlcnNpb25Nb2R1bGUgPSBcIjAuNVwiO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0FwaURvbWFpbicpIGVuZHBvaW50VXJsOkJlaGF2aW9yU3ViamVjdDxhbnk+KSB7XG4gICAgZW5kcG9pbnRVcmwuc3Vic2NyaWJlKHVybD0+e1xuICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfSkgIFxuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZXRTZXJ2aWNlIHtcbiAgY29uZmlnOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCwgY29uZmlnOkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljICBnZXQodXJsOnN0cmluZywgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDMpIC8vIHJldHJ5IGEgZmFpbGVkIHJlcXVlc3QgdXAgdG8gMyB0aW1lc1xuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyAgcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcblxuICB9XG5cbiAgcHVibGljICBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSk7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvb2tpZXNTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgU2hhcmVkU3RvcmFnZVNlcnZpY2UsIE5neFN0b3JhZ2VFdmVudFxufSBmcm9tICduZ3gtc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdG9TdG9yYWdlU2VydmljZSB7XG4gIGV2ZW50OkJlaGF2aW9yU3ViamVjdDxhbnk+O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVzU3RvcmFnZVNlcnZpY2U6Q29va2llc1N0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzaGFyZWRTdG9yYWdlU2VydmljZTpTaGFyZWRTdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuaW5pdFR5cGVTdG9yYWdlKCk7XG4gICAgdGhpcy5ldmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICB9XG5cbiAgaW5pdFR5cGVTdG9yYWdlKCkge1xuICAgIC8vICB0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5zZXQoJ29sYScsIFwid29ya1wiKTtcbiAgICAvLyAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICB0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICBjb25zb2xlLmxvZyh0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhZXQnKSlcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuXG4gIH1cblxuICBnZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5nZXQoa2V5KTtcblxuICB9XG5cbiAgc2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuXG4gIHN1Yih0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB0aGlzW3R5cGVTdG9yYWdlXS5vYnNlcnZlKClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0ga2V5KSB7XG4gICAgICAgICAgdGhpcy5ldmVudC5uZXh0KHtcImNoYW5nZUtleVwiOiBrZXl9KVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmV2ZW50O1xuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlTW9kdWxlIH0gZnJvbSAnbmd4LXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5zdGF0dXMgJiYgZXZlbnQuYm9keS5tZXNzYWdlICYmIGV2ZW50LmJvZHkubWVzc2FnZVswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihldmVudC5ib2R5Lm1lc3NhZ2VbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG5cbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc3dpdGNoKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgY2FzZSAndGltZW91dC1vci1kdXBsaWNhdGUnOlxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfDkMKew5HCiMOQwrjDkMKxw5DCusOQwrAgw5HCgcOQwrXDkcKAw5DCssOQwrXDkcKAw5DCsCAow5HCgsOQwrDDkMK5w5DCvMOQwrDDkcKDw5HCgikuIMOQwp/DkMK+w5DCssORwoLDkMK+w5HCgMOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwr/DkcKLw5HCgsOQwrrDkcKDIMOQwr/DkMK+w5DCt8OQwrbDkMK1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfDkMKdw5DCtcOQwr7DkMKxw5HChcOQwr7DkMK0w5DCuMOQwrzDkMK+IMOQwr/DkcKAw5DCvsOQwrnDkcKCw5DCuCDDkMKww5DCssORwoLDkMK+w5HCgMOQwrjDkMK3w5DCsMORwobDkMK4w5HCjicpO1xuICAgICAgfWVsc2UgaWYoKGVycm9yLnN0YXR1cyA9PSA0MDAgfHwgZXJyb3Iuc3RhdHVzID09IDUwMClcbiAgICAgICAgJiYgZXJyb3IuZXJyb3JcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSkge1xuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gIH07XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YXRlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGU6U3RhdGVTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5lbmFibGVcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS50aXRsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5kZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiB0eXBlb2YgZXZlbnQuYm9keS5zdGFydERhdGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgJiYgdHlwZW9mIGV2ZW50LmJvZHkuc3RvcERhdGUgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LmJvZHkuc3RhcnREYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgICAgc3RvcFRpbWUgPSBuZXcgRGF0ZShldmVudC5ib2R5LnN0b3BEYXRlKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSA+IHN0YXJ0VGltZSAmJiBjdXJyZW50VGltZSA8IHN0b3BUaW1lKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1haW50ZW5hbmNlJC5uZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50LmJvZHkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5ib2R5LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgJiYgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHlcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGVcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChldmVudC5ib2R5Lm1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2luZm8nLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdzdWNjZXNzJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ2Vycm9yJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnd2FybmluZycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxufSIsImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTWVzc2FnZUludGVyY2VwdG9yIH0gZnJvbSBcIi4vbWVzc2FnZS5pbnRlcmNlcHRvclwiO1xuXG5cbmV4cG9ydCBjb25zdCBuZ0NvcmVIdHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTZXJ2ZXJFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogTWVzc2FnZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XG5dO1xuXG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiSW5qZWN0YWJsZSIsIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdCIsInJldHJ5IiwiSHR0cENsaWVudCIsIkNvb2tpZXNTdG9yYWdlU2VydmljZSIsIkxvY2FsU3RvcmFnZVNlcnZpY2UiLCJTaGFyZWRTdG9yYWdlU2VydmljZSIsIk5nTW9kdWxlIiwidGFwIiwiSHR0cFJlc3BvbnNlIiwiY2F0Y2hFcnJvciIsInRocm93RXJyb3IiLCJIVFRQX0lOVEVSQ0VQVE9SUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7UUFLRSxzQkFBWSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7MkJBVEg7UUFVQzs7Ozs7O0FDVkQ7UUFTRTtnQ0FGa0MsSUFBSUEsZUFBWSxFQUFFO1NBRW5DOzs7OztRQUNqQix5Q0FBZ0I7Ozs7WUFBaEIsVUFBaUIsT0FBb0I7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDOzs7O1FBQ0QsMENBQWlCOzs7WUFBakI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzFCOztvQkFaRkMsYUFBVSxTQUFDO3dCQUNWLFVBQVUs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