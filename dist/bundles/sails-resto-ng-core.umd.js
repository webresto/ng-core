(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('ngx-store'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@sails-resto/ng-core', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', 'ngx-store', 'rxjs'], factory) :
    (factory((global['sails-resto'] = global['sails-resto'] || {}, global['sails-resto']['ng-core'] = {}),global.ng.core,global.ng.common.http,global.rxjs.operators,null,global.rxjs));
}(this, (function (exports,i0,i1,operators,i1$1,rxjs) { 'use strict';

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
            this.port = 80;
            this.prefix = "api/";
            this.versionModule = "0.5";
            this.url = endpointUrl;
        }
        Config.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        Config.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: ['ApiDomain',] }] }
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
                        if (event.body.status && event.body.message) {
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
                return rxjs.throwError('Что-то пошло не так. Повторите попытку позже.');
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
    /** @type {?} */
    var ngCoreHttpInterceptorProviders = [
        { provide: i1.HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
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
    exports.ɵa = EventerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FpbHMtcmVzdG8tbmctY29yZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9ldmVudC1tZXNzYWdlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvY29uZmlnLnRzIiwibmc6Ly9Ac2FpbHMtcmVzdG8vbmctY29yZS9saWIvc2VydmljZXMvbmV0LnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9zZXJ2aWNlcy9yZXN0by1zdG9yYWdlLnNlcnZpY2UudHMiLCJuZzovL0BzYWlscy1yZXN0by9uZy1jb3JlL2xpYi9uZy1jb3JlLm1vZHVsZS50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL3NlcnZlci1lcnJvci5pbnRlcmNlcHRvci50cyIsIm5nOi8vQHNhaWxzLXJlc3RvL25nLWNvcmUvbGliL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFdmVudE1lc3NhZ2Uge1xuICB0eXBlOnN0cmluZztcbiAgdGl0bGU6c3RyaW5nO1xuICBib2R5OnN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0eXBlLCB0aXRsZSwgYm9keSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudE1lc3NhZ2UgfSBmcm9tICcuL2V2ZW50LW1lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFdmVudGVyU2VydmljZSB7XG4gIGV2ZW50TWVzc2FnZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xuICAgIHRoaXMuZXZlbnRNZXNzYWdlLmVtaXQobWVzc2FnZSk7XG4gIH1cbiAgZ2V0TWVzc2FnZUVtaXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maWcge1xuICB1cmw6YW55O1xuICBwb3J0Om51bWJlciA9IDgwO1xuICBwcmVmaXg6c3RyaW5nID0gXCJhcGkvXCI7XG4gIHZlcnNpb25Nb2R1bGUgPSBcIjAuNVwiO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0FwaURvbWFpbicpIGVuZHBvaW50VXJsOnN0cmluZykge1xuICAgIHRoaXMudXJsID0gZW5kcG9pbnRVcmw7XG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5ldFNlcnZpY2Uge1xuICBjb25maWc6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50LCBjb25maWc6Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwdWJsaWMgIGdldCh1cmw6c3RyaW5nLCBpc0FwaTpib29sZWFuID0gdHJ1ZSk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHVybCA9IGlzQXBpXG4gICAgICA/IHRoaXMuY29uZmlnLnVybCArIHRoaXMuY29uZmlnLnByZWZpeCArIHRoaXMuY29uZmlnLnZlcnNpb25Nb2R1bGUgKyB1cmxcbiAgICAgIDogdGhpcy5jb25maWcudXJsICsgdXJsO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpXG4gICAgICAucGlwZShcbiAgICAgICAgcmV0cnkoMykgLy8gcmV0cnkgYSBmYWlsZWQgcmVxdWVzdCB1cCB0byAzIHRpbWVzXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljICBwdXQodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGRhdGEpO1xuXG4gIH1cblxuICBwdWJsaWMgIHBvc3QodXJsOnN0cmluZywgZGF0YTphbnksIGlzQXBpOmJvb2xlYW4gPSB0cnVlKTpPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgdXJsID0gaXNBcGlcbiAgICAgID8gdGhpcy5jb25maWcudXJsICsgdGhpcy5jb25maWcucHJlZml4ICsgdGhpcy5jb25maWcudmVyc2lvbk1vZHVsZSArIHVybFxuICAgICAgOiB0aGlzLmNvbmZpZy51cmwgKyB1cmw7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgfVxuXG5cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29va2llc1N0b3JhZ2VTZXJ2aWNlLCBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICBTaGFyZWRTdG9yYWdlU2VydmljZSwgTmd4U3RvcmFnZUV2ZW50XG59IGZyb20gJ25neC1zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0b1N0b3JhZ2VTZXJ2aWNlIHtcbiAgZXZlbnQ6QmVoYXZpb3JTdWJqZWN0PGFueT47XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXNTdG9yYWdlU2VydmljZTpDb29raWVzU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU2VydmljZTpMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNoYXJlZFN0b3JhZ2VTZXJ2aWNlOlNoYXJlZFN0b3JhZ2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0VHlwZVN0b3JhZ2UoKTtcbiAgICB0aGlzLmV2ZW50ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG4gIH1cblxuICBpbml0VHlwZVN0b3JhZ2UoKSB7XG4gICAgLy8gIHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLnNldCgnb2xhJywgXCJ3b3JrXCIpO1xuICAgIC8vICB0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIHRoaXMuc2hhcmVkU3RvcmFnZVNlcnZpY2Uuc2V0KFwib2xhXCIsXCJ3b3JrXCIpO1xuICAgIC8vICAgLy8gIGNvbnNvbGUubG9nKHRoaXMuY29va2llc1N0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdvbGFldCcpKVxuICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLnNoYXJlZFN0b3JhZ2VTZXJ2aWNlLmdldCgnb2xhJykpXG5cbiAgfVxuXG4gIGdldCh0eXBlU3RvcmFnZTpzdHJpbmcsIGtleTpzdHJpbmcpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLmdldChrZXkpO1xuXG4gIH1cblxuICBzZXQodHlwZVN0b3JhZ2U6c3RyaW5nLCBrZXk6c3RyaW5nLCB2YWx1ZTpzdHJpbmcpOk9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXNbdHlwZVN0b3JhZ2VdLnNldChrZXksIHZhbHVlKTtcbiAgfVxuXG5cbiAgc3ViKHR5cGVTdG9yYWdlOnN0cmluZywga2V5OnN0cmluZyk6T2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgIHRoaXNbdHlwZVN0b3JhZ2VdLm9ic2VydmUoKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBrZXkpIHtcbiAgICAgICAgICB0aGlzLmV2ZW50Lm5leHQoe1wiY2hhbmdlS2V5XCI6IGtleX0pXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnQ7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYlN0b3JhZ2VNb2R1bGUgfSBmcm9tICduZ3gtc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdDb3JlTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cFJlc3BvbnNlLFxuICBIdHRwRXJyb3JSZXNwb25zZVxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEV2ZW50ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZXZlbnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50TWVzc2FnZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V2ZW50LW1lc3NhZ2UnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBldmVudGVyOkV2ZW50ZXJTZXJ2aWNlXG4gICkge31cblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6T2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoXG4gICAgICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZihldmVudC5ib2R5LnN0YXR1cyAmJiBldmVudC5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXZlbnQuYm9keS5tZXNzYWdlWzBdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xuXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xuICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgIHN3aXRjaChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3RpbWVvdXQtb3ItZHVwbGljYXRlJzpcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCnsORwojDkMK4w5DCscOQwrrDkMKwIMORwoHDkMK1w5HCgMOQwrLDkMK1w5HCgMOQwrAgKMORwoLDkMKww5DCucOQwrzDkMKww5HCg8ORwoIpLiDDkMKfw5DCvsOQwrLDkcKCw5DCvsORwoDDkMK4w5HCgsOQwrUgw5DCv8OQwr7DkMK/w5HCi8ORwoLDkMK6w5HCgyDDkMK/w5DCvsOQwrfDkMK2w5DCtScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAgIC8vIFRoZSByZXNwb25zZSBib2R5IG1heSBjb250YWluIGNsdWVzIGFzIHRvIHdoYXQgd2VudCB3cm9uZyxcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBCYWNrZW5kIHJldHVybmVkIGNvZGUgJHtlcnJvci5zdGF0dXN9LCBgICtcbiAgICAgICAgYGJvZHkgd2FzOiAke2Vycm9yLmVycm9yfWApO1xuXG4gICAgICBpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgIHRoaXMuZXZlbnRlci5lbWl0TWVzc2FnZUV2ZW50KFxuICAgICAgICAgIG5ldyBFdmVudE1lc3NhZ2UoJ1VuYXV0aG9yaXplZCcsICcnLCAnJylcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignw5DCncOQwrXDkMK+w5DCscORwoXDkMK+w5DCtMOQwrjDkMK8w5DCviDDkMK/w5HCgMOQwr7DkMK5w5HCgsOQwrggw5DCsMOQwrLDkcKCw5DCvsORwoDDkMK4w5DCt8OQwrDDkcKGw5DCuMORwo4nKTtcbiAgICAgIH1lbHNlIGlmKChlcnJvci5zdGF0dXMgPT0gNDAwIHx8IGVycm9yLnN0YXR1cyA9PSA1MDApXG4gICAgICAgICYmIGVycm9yLmVycm9yXG4gICAgICAgICYmIGVycm9yLmVycm9yLm1lc3NhZ2VcbiAgICAgICAgJiYgZXJyb3IuZXJyb3IubWVzc2FnZS50aXRsZVxuICAgICAgICAmJiBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpIHtcbiAgICAgICAgdGhpcy5ldmVudGVyLmVtaXRNZXNzYWdlRXZlbnQoXG4gICAgICAgICAgbmV3IEV2ZW50TWVzc2FnZSgnZXJyb3InLCBlcnJvci5lcnJvci5tZXNzYWdlLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlLmJvZHkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBhbiBvYnNlcnZhYmxlIHdpdGggYSB1c2VyLWZhY2luZyBlcnJvciBtZXNzYWdlXG4gICAgcmV0dXJuIHRocm93RXJyb3IoJ8OQwqfDkcKCw5DCvi3DkcKCw5DCviDDkMK/w5DCvsORwojDkMK7w5DCviDDkMK9w5DCtSDDkcKCw5DCsMOQwrouIMOQwp/DkMK+w5DCssORwoLDkMK+w5HCgMOQwrjDkcKCw5DCtSDDkMK/w5DCvsOQwr/DkcKLw5HCgsOQwrrDkcKDIMOQwr/DkMK+w5DCt8OQwrbDkMK1LicpO1xuICB9O1xufSIsImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2ZXItZXJyb3IuaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgY29uc3QgbmdDb3JlSHR0cEludGVyY2VwdG9yUHJvdmlkZXJzID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogU2VydmVyRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfVxuXTtcblxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkluamVjdGFibGUiLCJJbmplY3QiLCJyZXRyeSIsIkh0dHBDbGllbnQiLCJCZWhhdmlvclN1YmplY3QiLCJDb29raWVzU3RvcmFnZVNlcnZpY2UiLCJMb2NhbFN0b3JhZ2VTZXJ2aWNlIiwiU2hhcmVkU3RvcmFnZVNlcnZpY2UiLCJOZ01vZHVsZSIsInRhcCIsIkh0dHBSZXNwb25zZSIsImNhdGNoRXJyb3IiLCJ0aHJvd0Vycm9yIiwiSFRUUF9JTlRFUkNFUFRPUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBO1FBS0Usc0JBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzJCQVRIO1FBVUM7Ozs7OztBQ1ZEO1FBU0U7Z0NBRmtDLElBQUlBLGVBQVksRUFBRTtTQUVuQzs7Ozs7UUFDakIseUNBQWdCOzs7O1lBQWhCLFVBQWlCLE9BQW9CO2dCQUNuQyxJQUFJLENBQUMs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