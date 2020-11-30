(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@webresto/ng-core', ['exports', '@angular/core', 'rxjs', '@angular/common/http', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.webresto = global.webresto || {}, global.webresto['ng-core'] = {}), global.ng.core, global.rxjs, global.ng.common.http, global.rxjs.operators));
}(this, (function (exports, i0, rxjs, i1, operators) { 'use strict';

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
    EventerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
    EventerService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    EventerService.ctorParameters = function () { return []; };

    var StateService = /** @class */ (function () {
        function StateService() {
            this.maintenance$ = new rxjs.BehaviorSubject(null);
        }
        return StateService;
    }());
    StateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StateService_Factory() { return new StateService(); }, token: StateService, providedIn: "root" });
    StateService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    StateService.ctorParameters = function () { return []; };

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
    Config.ɵprov = i0.ɵɵdefineInjectable({ factory: function Config_Factory() { return new Config(i0.ɵɵinject("ApiDomain")); }, token: Config, providedIn: "root" });
    Config.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    Config.ctorParameters = function () { return [
        { type: rxjs.BehaviorSubject, decorators: [{ type: i0.Inject, args: ['ApiDomain',] }] }
    ]; };

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
    NetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NetService_Factory() { return new NetService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(Config)); }, token: NetService, providedIn: "root" });
    NetService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NetService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: Config }
    ]; };

    var RestoStorageService = /** @class */ (function () {
        function RestoStorageService() {
            this.initTypeStorage();
            this.event = new rxjs.BehaviorSubject({});
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
    RestoStorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RestoStorageService_Factory() { return new RestoStorageService(); }, token: RestoStorageService, providedIn: "root" });
    RestoStorageService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    RestoStorageService.ctorParameters = function () { return []; };

    var LS_TOKEN_NAME = 'gf:tkn:v2';
    var ServerErrorInterceptor = /** @class */ (function () {
        function ServerErrorInterceptor(eventer, state) {
            this.eventer = eventer;
            this.state = state;
        }
        ServerErrorInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            var authToken = localStorage.getItem(LS_TOKEN_NAME);
            return next.handle(!authToken ? req : req.clone({
                headers: req.headers.set('Authorization', "JWT " + authToken)
            })).pipe(operators.filter(function (event) { return !!event.type; }), operators.map(function (event) {
                var _a, _b, _c, _d;
                console.log('event--->>>', event);
                if (event instanceof i1.HttpResponse && event.ok && ((_a = event === null || event === void 0 ? void 0 : event.body) === null || _a === void 0 ? void 0 : _a.message) && ((_c = (_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.body)) {
                    var message = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message;
                    _this.eventer.emitMessageEvent(new EventMessage((message === null || message === void 0 ? void 0 : message.type) || '', (message === null || message === void 0 ? void 0 : message.title) || '', (message === null || message === void 0 ? void 0 : message.body) || ''));
                }
                ;
                return event;
            }), operators.catchError(function (err) { return _this.handleError(err); }));
        };
        ServerErrorInterceptor.prototype.handleError = function (error) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
                return rxjs.throwError(error.error);
            }
            else {
                switch (true) {
                    case (error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent:
                        console.error('An error occurred:', (_h = error === null || error === void 0 ? void 0 : error.error) === null || _h === void 0 ? void 0 : _h.message);
                        return rxjs.throwError(error === null || error === void 0 ? void 0 : error.error);
                        ;
                    case (((_j = error.error) === null || _j === void 0 ? void 0 : _j.message) == 'timeout-or-duplicate'):
                        console.error('An error occurred:', error === null || error === void 0 ? void 0 : error.message);
                        return rxjs.throwError('Ошибка сервера (таймаут). Повторите попытку позже');
                    case (((_k = error.error) === null || _k === void 0 ? void 0 : _k.message) != 'timeout-or-duplicate'):
                        console.error("Backend returned code " + (error === null || error === void 0 ? void 0 : error.status) + ", " + "body was: ", error === null || error === void 0 ? void 0 : error.error);
                        if (!(error.status == 404 && (((_l = error === null || error === void 0 ? void 0 : error.url) === null || _l === void 0 ? void 0 : _l.includes('images')) && (((_m = error === null || error === void 0 ? void 0 : error.url) === null || _m === void 0 ? void 0 : _m.includes('.jpg')) || ((_o = error === null || error === void 0 ? void 0 : error.url) === null || _o === void 0 ? void 0 : _o.includes('png')))))) {
                            this.eventer.emitMessageEvent(new EventMessage('error', ((_q = (_p = error === null || error === void 0 ? void 0 : error.error) === null || _p === void 0 ? void 0 : _p.message) === null || _q === void 0 ? void 0 : _q.title) || '', ((_s = (_r = error === null || error === void 0 ? void 0 : error.error) === null || _r === void 0 ? void 0 : _r.message) === null || _s === void 0 ? void 0 : _s.body) || ''));
                        }
                        ;
                        if ((error === null || error === void 0 ? void 0 : error.status) == 401 || ((error === null || error === void 0 ? void 0 : error.status) == 404 && (error === null || error === void 0 ? void 0 : error.error) == "User not found")) {
                            console.log('очистка Storage');
                            localStorage.removeItem(LS_TOKEN_NAME);
                        }
                        ;
                        return rxjs.throwError(error === null || error === void 0 ? void 0 : error.error);
                    default: return rxjs.throwError(error === null || error === void 0 ? void 0 : error.error);
                }
                ;
            }
            ;
            // return an observable with a user-facing error message
        };
        ;
        return ServerErrorInterceptor;
    }());
    ServerErrorInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    ServerErrorInterceptor.ctorParameters = function () { return [
        { type: EventerService },
        { type: StateService }
    ]; };

    var MessageInterceptor = /** @class */ (function () {
        function MessageInterceptor(eventer, state) {
            this.eventer = eventer;
            this.state = state;
        }
        MessageInterceptor.prototype.intercept = function (req, next) {
            var _this = this;
            return next.handle(req)
                .pipe(operators.map(function (event) {
                var _a, _b, _c, _d, _e, _f, _g;
                if (event instanceof i1.HttpResponse && ((_a = event.body) === null || _a === void 0 ? void 0 : _a.enable)
                    && typeof event.body.title !== 'undefined'
                    && typeof event.body.description !== 'undefined'
                    && typeof event.body.startDate !== 'undefined'
                    && typeof event.body.stopDate !== 'undefined') {
                    var currentTime = new Date().getTime(), startTime = new Date(event.body.startDate).getTime(), stopTime = new Date(event.body.stopDate).getTime();
                    if (currentTime > startTime && currentTime < stopTime) {
                        _this.state.maintenance$.next({
                            title: event.body.title,
                            description: event.body.description
                        });
                    }
                }
                else if (event instanceof i1.HttpResponse && ((_c = (_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.body) && ((_e = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message) === null || _e === void 0 ? void 0 : _e.title) && ((_g = (_f = event === null || event === void 0 ? void 0 : event.body) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.type)) {
                    _this.eventer.emitMessageEvent(new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body));
                }
                ;
                return event;
            }));
        };
        return MessageInterceptor;
    }());
    MessageInterceptor.decorators = [
        { type: i0.Injectable }
    ];
    MessageInterceptor.ctorParameters = function () { return [
        { type: EventerService },
        { type: StateService }
    ]; };

    var NgCoreModule = /** @class */ (function () {
        function NgCoreModule() {
        }
        return NgCoreModule;
    }());
    NgCoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [],
                    providers: [],
                    exports: []
                },] }
    ];

    /*
     * Public API Surface of ng-core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Config = Config;
    exports.EventMessage = EventMessage;
    exports.EventerService = EventerService;
    exports.MessageInterceptor = MessageInterceptor;
    exports.NetService = NetService;
    exports.NgCoreModule = NgCoreModule;
    exports.RestoStorageService = RestoStorageService;
    exports.ServerErrorInterceptor = ServerErrorInterceptor;
    exports.StateService = StateService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=webresto-ng-core.umd.js.map
