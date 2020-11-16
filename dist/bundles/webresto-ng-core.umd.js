(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common.http));
}(this, (function (exports, i0, i1, operators, i1$1) { 'use strict';

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
        NetService.prototype.get = function (url, isApi, options) {
            if (isApi === void 0) { isApi = true; }
            if (options === void 0) { options = {}; }
            url = isApi
                ? this.config.url + this.config.prefix + this.config.versionModule + url
                : this.config.url + url;
            return this.http.get(url, { headers: options.headers, params: options.params })
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
        NetService.prototype.post = function (url, data, isApi, options) {
            if (isApi === void 0) { isApi = true; }
            if (options === void 0) { options = {}; }
            url = isApi
                ? this.config.url + this.config.prefix + this.config.versionModule + url
                : this.config.url + url;
            return this.http.post(url, data, { headers: options.headers, params: options.params });
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
        function RestoStorageService() {
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
    RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(); };
    RestoStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RestoStorageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
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
            var _this = this;
            console.info('Interceptor', req);
            var authToken = localStorage.getItem(LS_TOKEN_NAME);
            return next.handle(!authToken ? req : req.clone({
                headers: req.headers.set('Authorization', "JWT " + authToken)
            })).pipe(operators.map(function (event) {
                var _a, _b, _c, _d, _e, _f;
                if (event instanceof i1$1.HttpResponse && ((_b = (_a = event === null || event === void 0 ? void 0 : event.body) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.body) && ((_d = (_c = event === null || event === void 0 ? void 0 : event.body) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.title) && ((_f = (_e = event === null || event === void 0 ? void 0 : event.body) === null || _e === void 0 ? void 0 : _e.message) === null || _f === void 0 ? void 0 : _f.type)) {
                    _this.eventer.emitMessageEvent(new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body));
                }
                ;
                return event;
            }), operators.catchError(function (err) { return _this.handleError(err); }));
        };
        ServerErrorInterceptor.prototype.handleError = function (error) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            if (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.enable) && ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.title) && ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.description) && ((_d = error === null || error === void 0 ? void 0 : error.error) === null || _d === void 0 ? void 0 : _d.startDate) && ((_e = error === null || error === void 0 ? void 0 : error.error) === null || _e === void 0 ? void 0 : _e.stopDate)) {
                var currentTime = new Date().getTime(), startTime = new Date((_f = error === null || error === void 0 ? void 0 : error.error) === null || _f === void 0 ? void 0 : _f.startDate).getTime(), stopTime = new Date((_g = error === null || error === void 0 ? void 0 : error.error) === null || _g === void 0 ? void 0 : _g.stopDate).getTime();
                if (currentTime > startTime && currentTime < stopTime) {
                    this.state.maintenance$.next({
                        title: error.error.title,
                        description: error.error.description,
                        social: error.error.social
                    });
                }
                ;
                return i1.throwError(error.error);
            }
            else {
                switch (true) {
                    case (error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent:
                        console.error('An error occurred:', (_h = error === null || error === void 0 ? void 0 : error.error) === null || _h === void 0 ? void 0 : _h.message);
                        return i1.throwError(error === null || error === void 0 ? void 0 : error.error);
                        ;
                    case (((_j = error.error) === null || _j === void 0 ? void 0 : _j.message) == 'timeout-or-duplicate'):
                        console.error('An error occurred:', error === null || error === void 0 ? void 0 : error.message);
                        return i1.throwError('Ошибка сервера (таймаут). Повторите попытку позже');
                    case (((_k = error.error) === null || _k === void 0 ? void 0 : _k.message) != 'timeout-or-duplicate'):
                        console.error("Backend returned code " + (error === null || error === void 0 ? void 0 : error.status) + ", " + "body was: ", error === null || error === void 0 ? void 0 : error.error);
                        if ((error === null || error === void 0 ? void 0 : error.status) == 401 || ((error === null || error === void 0 ? void 0 : error.status) == 404 && (error === null || error === void 0 ? void 0 : error.error) == "User not found")) {
                            this.eventer.emitMessageEvent(new EventMessage('Unauthorized', '', ''));
                            localStorage.removeItem(LS_TOKEN_NAME);
                        }
                        ;
                        if ((error === null || error === void 0 ? void 0 : error.status) == 400 && ((_m = (_l = error === null || error === void 0 ? void 0 : error.error) === null || _l === void 0 ? void 0 : _l.message) === null || _m === void 0 ? void 0 : _m.title) && ((_p = (_o = error === null || error === void 0 ? void 0 : error.error) === null || _o === void 0 ? void 0 : _o.message) === null || _p === void 0 ? void 0 : _p.body)) {
                            this.eventer.emitMessageEvent(new EventMessage('error', (_r = (_q = error === null || error === void 0 ? void 0 : error.error) === null || _q === void 0 ? void 0 : _q.message) === null || _r === void 0 ? void 0 : _r.title, (_t = (_s = error === null || error === void 0 ? void 0 : error.error) === null || _s === void 0 ? void 0 : _s.message) === null || _t === void 0 ? void 0 : _t.body));
                        }
                        return i1.throwError(error === null || error === void 0 ? void 0 : error.error);
                }
                ;
            }
            ;
            // return an observable with a user-facing error message
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

    /*
     * Public API Surface of ng-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

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
