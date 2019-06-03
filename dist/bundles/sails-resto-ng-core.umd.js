(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators'), require('ngx-store')) :
    typeof define === 'function' && define.amd ? define('@sails-resto/ng-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators', 'ngx-store'], factory) :
    (factory((global['sails-resto'] = global['sails-resto'] || {}, global['sails-resto']['ng-core'] = {}),global.ng.core,global.rxjs,global.ng.common.http,global.rxjs.operators,null));
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
        function MessageInterceptor(eventer) {
            this.eventer = eventer;
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
                { type: EventerService }
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
    exports.NetService = NetService;
    exports.RestoStorageService = RestoStorageService;
    exports.NgCoreModule = NgCoreModule;
    exports.ngCoreHttpInterceptorProviders = ngCoreHttpInterceptorProviders;
    exports.ServerErrorInterceptor = ServerErrorInterceptor;
    exports.ɵb = MessageInterceptor;
    exports.ɵa = EventerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FpbHMtcmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvY29uZmlnLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9uZy1jb3JlLm1vZHVsZS50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL21lc3NhZ2UuaW50ZXJjZXB0b3IudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRNZXNzYWdlIHtcbiAgdHlwZTpzdHJpbmc7XG4gIHRpdGxlOnN0cmluZztcbiAgYm9keTpzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgdGl0bGUsIGJvZHkpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmJvZHkgPSBib2R5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9ldmVudC1tZXNzYWdlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRlclNlcnZpY2Uge1xuICBldmVudE1lc3NhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGVtaXRNZXNzYWdlRXZlbnQobWVzc2FnZTpFdmVudE1lc3NhZ2UpIHtcbiAgICB0aGlzLmV2ZW50TWVzc2FnZS5lbWl0KG1lc3NhZ2UpO1xuICB9XG4gIGdldE1lc3NhZ2VFbWl0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50TWVzc2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcbiAgdXJsOmFueTtcbiAgcG9ydDpudW1iZXIgPSA4MDtcbiAgcHJlZml4OnN0cmluZyA9IFwiYXBpL1wiO1xuICB2ZXJzaW9uTW9kdWxlID0gXCIwLjVcIjtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdBcGlEb21haW4nKSBlbmRwb2ludFVybDpzdHJpbmcpIHtcbiAgICB0aGlzLnVybCA9IGVuZHBvaW50VXJsO1xuICB9XG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJldHJ5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZXRTZXJ2aWNlIHtcbiAgY29uZmlnOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCwgY29uZmlnOkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHVibGljICBnZXQodXJsOnN0cmluZywgaXNBcGk6Ym9vbGVhbiA9IHRydWUpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB1cmwgPSBpc0FwaVxuICAgICAgPyB0aGlzLmNvbmZpZy51cmwgKyB0aGlzLmNvbmZpZy5wcmVmaXggKyB0aGlzLmNvbmZpZy52ZXJzaW9uTW9kdWxlICsgdXJsXG4gICAgICA6IHRoaXMuY29uZmlnLnVybCArIHVybDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odXJsKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHJldHJ5KDMpIC8vIHJldHJ5IGEgZmFpbGVkIHJlcXVlc3QgdXAgdG8gMyB0aW1lc1xuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyAgcHV0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBkYXRhKTtcblxuICB9XG5cbiAgcHVibGljICBwb3N0KHVybDpzdHJpbmcsIGRhdGE6YW55LCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZGF0YSk7XG4gIH1cblxuXG5cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvb2tpZXNTdG9yYWdlU2VydmljZSwgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgU2hhcmVkU3RvcmFnZVNlcnZpY2UsIE5neFN0b3JhZ2VFdmVudFxufSBmcm9tICduZ3gtc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdG9TdG9yYWdlU2VydmljZSB7XG4gIGV2ZW50OkJlaGF2aW9yU3ViamVjdDxhbnk+O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVzU3RvcmFnZVNlcnZpY2U6Q29va2llc1N0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2FsU3RvcmFnZVNlcnZpY2U6TG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzaGFyZWRTdG9yYWdlU2VydmljZTpTaGFyZWRTdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuaW5pdFR5cGVTdG9yYWdlKCk7XG4gICAgdGhpcy5ldmVudCA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuICB9XG5cbiAgaW5pdFR5cGVTdG9yYWdlKCkge1xuICAgIC8vICB0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5zZXQoJ29sYScsIFwid29ya1wiKTtcbiAgICAvLyAgdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICB0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLnNldChcIm9sYVwiLFwid29ya1wiKTtcbiAgICAvLyAgIC8vICBjb25zb2xlLmxvZyh0aGlzLmNvb2tpZXNTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhZXQnKSlcbiAgICAvLyAgY29uc29sZS5sb2codGhpcy5zaGFyZWRTdG9yYWdlU2VydmljZS5nZXQoJ29sYScpKVxuXG4gIH1cblxuICBnZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5nZXQoa2V5KTtcblxuICB9XG5cbiAgc2V0KHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZywgdmFsdWU6c3RyaW5nKTpPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzW3R5cGVTdG9yYWdlXS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cblxuXG4gIHN1Yih0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG5cbiAgICB0aGlzW3R5cGVTdG9yYWdlXS5vYnNlcnZlKClcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT0ga2V5KSB7XG4gICAgICAgICAgdGhpcy5ldmVudC5uZXh0KHtcImNoYW5nZUtleVwiOiBrZXl9KVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmV2ZW50O1xuXG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWJTdG9yYWdlTW9kdWxlIH0gZnJvbSAnbmd4LXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5nQ29yZU1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEVycm9yUmVzcG9uc2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBFdmVudGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmluYWxpemUsIHRhcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcnZlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXZlbnRlcjpFdmVudGVyU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOk9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKFxuICAgICAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgaWYoZXZlbnQuYm9keS5zdGF0dXMgJiYgZXZlbnQuYm9keS5tZXNzYWdlICYmIGV2ZW50LmJvZHkubWVzc2FnZVswXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihldmVudC5ib2R5Lm1lc3NhZ2VbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvci5iaW5kKHRoaXMpKVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSB7XG5cbiAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XG4gICAgICAvLyBBIGNsaWVudC1zaWRlIG9yIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQuIEhhbmRsZSBpdCBhY2NvcmRpbmdseS5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yLmVycm9yLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5tZXNzYWdlKTtcblxuICAgICAgc3dpdGNoKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgY2FzZSAndGltZW91dC1vci1kdXBsaWNhdGUnOlxuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfDkMKew5HCiMOQwrjDkMKxw5DCusOQwrAgw5HCgcOQwrXDkcKAw5DCssOQwrXDkcKAw5DCsCAow5HCgsOQwrDDkMK5w5DCvMOQwrDDkcKDw5HCgikuIMOQwp/DkMK+w5DCssORwoLDkMK+w5HCgMOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwr/DkcKLw5HCgsOQwrrDkcKDIMOQwr/DkMK+w5DCt8OQwrbDkMK1Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHJldHVybmVkIGFuIHVuc3VjY2Vzc2Z1bCByZXNwb25zZSBjb2RlLlxuICAgICAgLy8gVGhlIHJlc3BvbnNlIGJvZHkgbWF5IGNvbnRhaW4gY2x1ZXMgYXMgdG8gd2hhdCB3ZW50IHdyb25nLFxuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEJhY2tlbmQgcmV0dXJuZWQgY29kZSAke2Vycm9yLnN0YXR1c30sIGAgK1xuICAgICAgICBgYm9keSB3YXM6ICR7ZXJyb3IuZXJyb3J9YCk7XG5cbiAgICAgIGlmKGVycm9yLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnVW5hdXRob3JpemVkJywgJycsICcnKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCfDkMKdw5DCtcOQwr7DkMKxw5HChcOQwr7DkMK0w5DCuMOQwrzDkMK+IMOQwr/DkcKAw5DCvsOQwrnDkcKCw5DCuCDDkMKww5DCssORwoLDkMK+w5HCgMOQwrjDkMK3w5DCsMORwobDkMK4w5HCjicpO1xuICAgICAgfWVsc2UgaWYoKGVycm9yLnN0YXR1cyA9PSA0MDAgfHwgZXJyb3Iuc3RhdHVzID09IDUwMClcbiAgICAgICAgJiYgZXJyb3IuZXJyb3JcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSkge1xuICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCdlcnJvcicsIGVycm9yLmVycm9yLm1lc3NhZ2UudGl0bGUsIGVycm9yLmVycm9yLm1lc3NhZ2UuYm9keSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcbiAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCp8ORwoLDkMK+LcORwoLDkMK+IMOQwr/DkMK+w5HCiMOQwrvDkMK+IMOQwr3DkMK1IMORwoLDkMKww5DCui4gw5DCn8OQwr7DkMKyw5HCgsOQwr7DkcKAw5DCuMORwoLDkMK1IMOQwr/DkMK+w5DCv8ORwovDkcKCw5DCusORwoMgw5DCv8OQwr7DkMK3w5DCtsOQwrUuJyk7XG4gIH07XG59IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZUludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGV2ZW50ZXI6RXZlbnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTpPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChcbiAgICAgICAgICBldmVudCA9PiB7XG4gICAgICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZihldmVudC5ib2R5Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAmJiBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keVxuICAgICAgICAgICAgICAgICYmIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZVxuICAgICAgICAgICAgICAgICYmIGV2ZW50LmJvZHkubWVzc2FnZS50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmJvZHkubWVzc2FnZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnaW5mbycsIGV2ZW50LmJvZHkubWVzc2FnZS50aXRsZSwgZXZlbnQuYm9keS5tZXNzYWdlLmJvZHkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ3N1Y2Nlc3MnLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBldmVudC5ib2R5Lm1lc3NhZ2UudGl0bGUsIGV2ZW50LmJvZHkubWVzc2FnZS5ib2R5KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50ZXIuZW1pdE1lc3NhZ2VFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRXZlbnRNZXNzYWdlKCd3YXJuaW5nJywgZXZlbnQuYm9keS5tZXNzYWdlLnRpdGxlLCBldmVudC5ib2R5Lm1lc3NhZ2UuYm9keSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59IiwiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFNlcnZlckVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBNZXNzYWdlSW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9tZXNzYWdlLmludGVyY2VwdG9yXCI7XG5cblxuZXhwb3J0IGNvbnN0IG5nQ29yZUh0dHBJbnRlcmNlcHRvclByb3ZpZGVycyA9IFtcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IFNlcnZlckVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBNZXNzYWdlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH1cbl07XG5cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwicmV0cnkiLCJIdHRwQ2xpZW50IiwiQmVoYXZpb3JTdWJqZWN0IiwiQ29va2llc1N0b3JhZ2VTZXJ2aWNlIiwiTG9jYWxTdG9yYWdlU2VydmljZSIsIlNoYXJlZFN0b3JhZ2VTZXJ2aWNlIiwiTmdNb2R1bGUiLCJ0YXAiLCJIdHRwUmVzcG9uc2UiLCJjYXRjaEVycm9yIiwidGhyb3dFcnJvciIsIkhUVFBfSU5URVJDRVBUT1JTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFBQTtRQUtFLHNCQUFZLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjsyQkFUSDtRQVVDOzs7Ozs7QUNWRDtRQVNFO2dDQUZrQyxJQUFJQSxlQUFZLEVBQUU7U0FFbkM7Ozs7O1FBQ2pCLHlDQUFnQjs7OztZQUFoQixVQUFpQixPQUFvQjtnQkFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7Ozs7UUFDRCwwQ0FBaUI7OztZQUFqQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDMUI7O29CQVpGQyxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFMRDs7Ozs7OztBQ0FBO1FBV0UsZ0JBQWlDLFdBQWtCO3dCQUpyQyxFQUFFOzBCQUNBLE1BQU07aUNBQ04sS0FBSztZQUduQixJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQztTQUN4Qjs7b0JBWkZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7O3FEQVFjQyxTQUFNLFNBQUMsV0FBVzs7OztxQkFYakM7Ozs7Ozs7QUNBQTtRQVlFLG9CQUFvQixJQUFlLEVBQUUsTUFBYTtZQUE5QixTQUFJLEdB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
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FpbHMtcmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvY29uZmlnLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9uZy1jb3JlLm1vZHVsZS50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudE1lc3NhZ2Uge1xuICB0eXBlOnN0cmluZztcbiAgdGl0bGU6c3RyaW5nO1xuICBib2R5OnN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0eXBlLCB0aXRsZSwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50LW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XG4gIGV2ZW50TWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XG4gIH1cbiAgZ2V0TWVzc2FnZUVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHVybDphbnk7XG4gIHBvcnQ6bnVtYmVyID0gODA7XG4gIHByZWZpeDpzdHJpbmcgPSBcImFwaS9cIjtcbiAgdmVyc2lvbk1vZHVsZSA9IFwiMC41XCI7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQXBpRG9tYWluJykgZW5kcG9pbnRVcmw6QmVoYXZpb3JTdWJqZWN0PGFueT4pIHtcbiAgICBlbmRwb2ludFVybC5zdWJzY3JpYmUodXJsPT57XG4gICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9KSAgXG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xuICBjb25maWc6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50LCBjb25maWc6Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgIGdldCh1cmw6c3RyaW5nLCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljICBwdXQodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xuXG4gIH1cblxuICBwdWJsaWMgIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29va2llc1N0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBTaGFyZWRTdG9yYWdlU2VydmljZSwgTmd4U3RvcmFnZUV2ZW50XG59IGZyb20gJ25neC1zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcbiAgZXZlbnQ6QmVoYXZpb3JTdWJqZWN0PGFueT47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXNTdG9yYWdlU2VydmljZTpDb29raWVzU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNoYXJlZFN0b3JhZ2VTZXJ2aWNlOlNoYXJlZFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0VHlwZVN0b3JhZ2UoKTtcbiAgICB0aGlzLmV2ZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIH1cblxuICBpbml0VHlwZVN0b3JhZ2UoKSB7XG4gICAgLy8gIHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLnNldCgnb2xhJywgXCJ3b3JrXCIpO1xuICAgIC8vICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGFldCcpKVxuICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG5cbiAgfVxuXG4gIGdldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLmdldChrZXkpO1xuXG4gIH1cblxuICBzZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nLCB2YWx1ZTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG5cbiAgc3ViKHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHRoaXNbdHlwZVN0b3JhZ2VdLm9ic2VydmUoKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBrZXkpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50Lm5leHQoe1wiY2hhbmdlS2V5XCI6IGtleX0pXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQ7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VNb2R1bGUgfSBmcm9tICduZ3gtc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3JlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCnsORwojDkMK4w5DCscOQwrrDkMKwIMORwoHDkMK1w5HCgMOQwrLDkMK1w5HCgMOQwrAgKMORwoLDkMKww5DCucOQwrzDkMKww5HCg8ORwoIpLiDDkMKfw5DCvsOQwrLDkcKCw5DCvsORwoDDkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK/w5HCi8ORwoLDkMK6w5HCgyDDkMK/w5DCvsOQwrfDkMK2w5DCtScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xuXG4gICAgICBpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCncOQwrXDkMK+w5DCscORwoXDkMK+w5DCtMOQwrjDkMK8w5DCviDDkMK/w5HCgMOQwr7DkMK5w5HCgsOQwrggw5DCsMOQwrLDkcKCw5DCvsORwoDDkMK4w5DCt8OQwrDDkcKGw5DCuMORwo4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIGFuIG9ic2VydmFibGUgd2l0aCBhIHVzZXItZmFjaW5nIGVycm9yIG1lc3NhZ2VcbiAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5lcnJvcik7XG4gIH07XG59IiwiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IFNlcnZlckVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBuZ0NvcmVIdHRwSW50ZXJjZXB0b3JQcm92aWRlcnMgPSBbXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTZXJ2ZXJFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuXTtcblxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkluamVjdGFibGUiLCJCZWhhdmlvclN1YmplY3QiLCJJbmplY3QiLCJyZXRyeSIsIkh0dHBDbGllbnQiLCJDb29raWVzU3RvcmFnZVNlcnZpY2UiLCJMb2NhbFN0b3JhZ2VTZXJ2aWNlIiwiU2hhcmVkU3RvcmFnZVNlcnZpY2UiLCJOZ01vZHVsZSIsInRhcCIsIkh0dHBSZXNwb25zZSIsImNhdGNoRXJyb3IiLCJ0aHJvd0Vycm9yIiwiSFRUUF9JTlRFUkNFUFRPUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBO1FBS0Usc0JBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzJCQVRIO1FBVUM7Ozs7OztBQ1ZEO1FBU0U7Z0NBRmtDLElBQUlBLGVBQVksRUFBRTtTQUVuQzs7Ozs7UUFDakIseUNBQWdCOzs7O1lBQWhCLFVBQWlCLE9BQW9CO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQzs7OztRQUNELDBDQUFpQjs7O1lBQWpCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQzthQUMxQjs7b0JBWkZDLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzZCQUxEOzs7Ozs7O0FDQUE7UUFZRSxnQkFBaUMsV0FBZ0M7WUFBakUsaUJBSUM7d0JBUmEsRUFBRTswQkFDQSxNQUFNO2lDQUNOLEtBQUs7WUFHbkIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQ3ZCLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2hCLENBQUMsQ0FBQTtTQUNIOztvQkFkRkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7d0JBSFFDLG9CQUFl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
>>>>>>> 222cd7b78e4de185ae94ef43dd498c46c510505e
