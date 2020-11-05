(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('ngx-store')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common/http', 'ngx-store'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common.http, global.i1$2));
}(this, (function (exports, i0, i1, operators, i1$1, i1$2) { 'use strict';

    var EventMessage = /** @class */ (function () {
        function EventMessage(type, title, body) {
            this.type = type;
            this.title = title;
            this.body = body;
        }
        return EventMessage;
    }());

    var EventerService = /** @class */ (function () {
        function EventerService() {
            this.eventMessage = new i0.EventEmitter();
            this.eventAction = new i0.EventEmitter();
        }
        EventerService.prototype.emitMessageEvent = function (message) {
            this.eventMessage.emit(message);
        };
        EventerService.prototype.emitActionEvent = function (action) {
            this.eventAction.emit(action);
        };
        EventerService.prototype.getMessageEmitter = function () {
            return this.eventMessage;
        };
        EventerService.prototype.getActionEmitter = function () {
            return this.eventAction;
        };
        return EventerService;
    }());
    EventerService.ɵfac = function EventerService_Factory(t) { return new (t || EventerService)(); };
    EventerService.ɵprov = i0.ɵɵdefineInjectable({ token: EventerService, factory: EventerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(EventerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var StateService = /** @class */ (function () {
        function StateService() {
            this.maintenance$ = new i1.BehaviorSubject(null);
        }
        return StateService;
    }());
    StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
    StateService.ɵprov = i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StateService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

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
        return Config;
    }());
    Config.ɵfac = function Config_Factory(t) { return new (t || Config)(i0.ɵɵinject('ApiDomain')); };
    Config.ɵprov = i0.ɵɵdefineInjectable({ token: Config, factory: Config.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Config, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () {
            return [{ type: i1.BehaviorSubject, decorators: [{
                            type: i0.Inject,
                            args: ['ApiDomain']
                        }] }];
        }, null);
    })();

    var NetService = /** @class */ (function () {
        function NetService(http, config) {
            this.http = http;
            this.config = config;
        }
        NetService.prototype.get = function (url, isApi) {
            if (isApi === void 0) { isApi = true; }
            url = isApi
                ? this.config.url + this.config.prefix + this.config.versionModule + url
                : this.config.url + url;
            return this.http.get(url)
                .pipe(operators.retry(3) // retry a failed request up to 3 times
            );
        };
        NetService.prototype.put = function (url, data, isApi) {
            if (isApi === void 0) { isApi = true; }
            url = isApi
                ? this.config.url + this.config.prefix + this.config.versionModule + url
                : this.config.url + url;
            return this.http.put(url, data);
        };
        NetService.prototype.post = function (url, data, isApi) {
            if (isApi === void 0) { isApi = true; }
            url = isApi
                ? this.config.url + this.config.prefix + this.config.versionModule + url
                : this.config.url + url;
            return this.http.post(url, data);
        };
        return NetService;
    }());
    NetService.ɵfac = function NetService_Factory(t) { return new (t || NetService)(i0.ɵɵinject(i1$1.HttpClient), i0.ɵɵinject(Config)); };
    NetService.ɵprov = i0.ɵɵdefineInjectable({ token: NetService, factory: NetService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NetService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1$1.HttpClient }, { type: Config }]; }, null);
    })();

    var RestoStorageService = /** @class */ (function () {
        function RestoStorageService(cookiesStorageService, localStorageService, sharedStorageService) {
            this.cookiesStorageService = cookiesStorageService;
            this.localStorageService = localStorageService;
            this.sharedStorageService = sharedStorageService;
            this.initTypeStorage();
            this.event = new i1.BehaviorSubject({});
        }
        RestoStorageService.prototype.initTypeStorage = function () {
            //  this.cookiesStorageService.set('ola', "work");
            //  this.localStorageService.set("ola","work");
            //   //  this.sharedStorageService.set("ola","work");
            //   //  console.log(this.cookiesStorageService.get('ola'))
            //   console.log(this.localStorageService.get('olaet'))
            //  console.log(this.sharedStorageService.get('ola'))
        };
        RestoStorageService.prototype.get = function (typeStorage, key) {
            return this[typeStorage].get(key);
        };
        RestoStorageService.prototype.set = function (typeStorage, key, value) {
            return this[typeStorage].set(key, value);
        };
        RestoStorageService.prototype.sub = function (typeStorage, key) {
            var _this = this;
            this[typeStorage].observe()
                .subscribe(function (event) {
                if (event.key == key) {
                    _this.event.next({ "changeKey": key });
                }
            });
            return this.event;
        };
        return RestoStorageService;
    }());
    RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(i0.ɵɵinject(i1$2.CookiesStorageService), i0.ɵɵinject(i1$2.LocalStorageService), i0.ɵɵinject(i1$2.SharedStorageService)); };
    RestoStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RestoStorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1$2.CookiesStorageService }, { type: i1$2.LocalStorageService }, { type: i1$2.SharedStorageService }]; }, null);
    })();

    var NgCoreModule = /** @class */ (function () {
        function NgCoreModule() {
        }
        return NgCoreModule;
    }());
    NgCoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgCoreModule });
    NgCoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgCoreModule_Factory(t) { return new (t || NgCoreModule)(); }, providers: [], imports: [[]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgCoreModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [],
                        declarations: [],
                        providers: [],
                        exports: []
                    }]
            }], null, null);
    })();

    var LS_TOKEN_NAME = 'gf:tkn:v2';
    var ServerErrorInterceptor = /** @class */ (function () {
        function ServerErrorInterceptor(eventer, state) {
            this.eventer = eventer;
            this.state = state;
        }
        ServerErrorInterceptor.prototype.intercept = function (req, next) {
            return next.handle(req)
                .pipe(operators.tap(function (event) {
                if (event instanceof i1$1.HttpResponse) {
                    if (event.body.status && event.body.message && event.body.message[0]) {
                        throw new Error(event.body.message[0]);
                    }
                }
            }), operators.catchError(this.handleError.bind(this)));
        };
        ServerErrorInterceptor.prototype.handleError = function (error) {
            if (error.error.enable
                && typeof error.error.title !== 'undefined'
                && typeof error.error.description !== 'undefined'
                && typeof error.error.startDate !== 'undefined'
                && typeof error.error.stopDate !== 'undefined') {
                var currentTime = new Date().getTime(), startTime = new Date(error.error.startDate).getTime(), stopTime = new Date(error.error.stopDate).getTime();
                if (currentTime > startTime && currentTime < stopTime) {
                    this.state.maintenance$.next({
                        title: error.error.title,
                        description: error.error.description,
                        social: error.error.social
                    });
                }
                return i1.throwError(error.error);
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
                        return i1.throwError('Ошибка сервера (таймаут). Повторите попытку позже');
                }
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error("Backend returned code " + error.status + ", " +
                    ("body was: " + error.error));
                if (error.status == 401) {
                    this.eventer.emitMessageEvent(new EventMessage('Unauthorized', '', ''));
                    return i1.throwError(error.error && error.error.title
                        ? error.error.title
                        : 'Необходимо пройти авторизацию');
                }
                else if ((error === null || error === void 0 ? void 0 : error.status) == 404 && (error === null || error === void 0 ? void 0 : error.error) == "User not found") {
                    localStorage.removeItem(LS_TOKEN_NAME);
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
            return i1.throwError(error.error);
        };
        ;
        return ServerErrorInterceptor;
    }());
    ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(i0.ɵɵinject(EventerService), i0.ɵɵinject(StateService)); };
    ServerErrorInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ServerErrorInterceptor, [{
                type: i0.Injectable
            }], function () { return [{ type: EventerService }, { type: StateService }]; }, null);
    })();

    var LS_TOKEN_NAME$1 = 'gf:tkn:v2';
    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor() {
        }
        AuthInterceptor.prototype.intercept = function (req, next) {
            console.info('AuthInterceptor', req);
            // Get the auth token from the service.
            var authToken = localStorage.getItem(LS_TOKEN_NAME$1);
            if (authToken) {
                // Clone the request and replace the original headers with
                // cloned headers, updated with the authorization.
                var authReq = req.clone({
                    headers: req.headers.set('Authorization', "JWT " + authToken)
                });
                // send cloned request with header to the next handler.
                return next.handle(authReq);
            }
            return next.handle(req);
        };
        return AuthInterceptor;
    }());
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
    AuthInterceptor.ɵprov = i0.ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(AuthInterceptor, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    /*
     * Public API Surface of ng-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AuthInterceptor = AuthInterceptor;
    exports.EventMessage = EventMessage;
    exports.EventerService = EventerService;
    exports.NetService = NetService;
    exports.NgCoreModule = NgCoreModule;
    exports.RestoStorageService = RestoStorageService;
    exports.ServerErrorInterceptor = ServerErrorInterceptor;
    exports.StateService = StateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=webresto-ng-core.umd.js.map
