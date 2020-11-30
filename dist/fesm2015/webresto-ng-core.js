import { EventEmitter, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, filter, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

class EventMessage {
    constructor(type, title, body) {
        this.type = type;
        this.title = title;
        this.body = body;
    }
}

class EventerService {
    constructor() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    emitMessageEvent(message) {
        this.eventMessage.emit(message);
    }
    emitActionEvent(action) {
        this.eventAction.emit(action);
    }
    getMessageEmitter() {
        return this.eventMessage;
    }
    getActionEmitter() {
        return this.eventAction;
    }
}
EventerService.ɵfac = function EventerService_Factory(t) { return new (t || EventerService)(); };
EventerService.ɵprov = ɵɵdefineInjectable({ token: EventerService, factory: EventerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EventerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class StateService {
    constructor() {
        this.maintenance$ = new BehaviorSubject(null);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class Config {
    constructor(endpointUrl) {
        this.port = 80;
        this.prefix = "api/";
        this.versionModule = "0.5";
        endpointUrl.subscribe(url => {
            this.url = url;
        });
    }
}
Config.ɵfac = function Config_Factory(t) { return new (t || Config)(ɵɵinject('ApiDomain')); };
Config.ɵprov = ɵɵdefineInjectable({ token: Config, factory: Config.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(Config, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: BehaviorSubject, decorators: [{
                type: Inject,
                args: ['ApiDomain']
            }] }]; }, null); })();

class NetService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    get(url, isApi = true, options = {}) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url, { headers: options.headers, params: options.params })
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    post(url, data, isApi = true, options = {}) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data, { headers: options.headers, params: options.params });
    }
}
NetService.ɵfac = function NetService_Factory(t) { return new (t || NetService)(ɵɵinject(HttpClient), ɵɵinject(Config)); };
NetService.ɵprov = ɵɵdefineInjectable({ token: NetService, factory: NetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: HttpClient }, { type: Config }]; }, null); })();

class RestoStorageService {
    constructor() {
        this.initTypeStorage();
        this.event = new BehaviorSubject({});
    }
    initTypeStorage() {
        //  this.cookiesStorageService.set('ola', "work");
        //  this.localStorageService.set("ola","work");
        //   //  this.sharedStorageService.set("ola","work");
        //   //  console.log(this.cookiesStorageService.get('ola'))
        //   console.log(this.localStorageService.get('olaet'))
        //  console.log(this.sharedStorageService.get('ola'))
    }
    get(typeStorage, key) {
        return this[typeStorage].get(key);
    }
    set(typeStorage, key, value) {
        return this[typeStorage].set(key, value);
    }
    sub(typeStorage, key) {
        this[typeStorage].observe()
            .subscribe((event) => {
            if (event.key == key) {
                this.event.next({ "changeKey": key });
            }
        });
        return this.event;
    }
}
RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(); };
RestoStorageService.ɵprov = ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestoStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const LS_TOKEN_NAME = 'gf:tkn:v2';
class ServerErrorInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        const authToken = localStorage.getItem(LS_TOKEN_NAME);
        return next.handle(!authToken ? req : req.clone({
            headers: req.headers.set('Authorization', `JWT ${authToken}`)
        })).pipe(filter(event => !!event.type), map(event => {
            var _a, _b, _c, _d;
            console.log('event--->>>', event);
            if (event instanceof HttpResponse && event.ok && ((_a = event === null || event === void 0 ? void 0 : event.body) === null || _a === void 0 ? void 0 : _a.message) && ((_c = (_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.body)) {
                const message = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message;
                this.eventer.emitMessageEvent(new EventMessage((message === null || message === void 0 ? void 0 : message.type) || '', (message === null || message === void 0 ? void 0 : message.title) || '', (message === null || message === void 0 ? void 0 : message.body) || ''));
            }
            ;
            return event;
        }), catchError(err => this.handleError(err)));
    }
    handleError(error) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        if (((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.enable) && ((_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.title) && ((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.description) && ((_d = error === null || error === void 0 ? void 0 : error.error) === null || _d === void 0 ? void 0 : _d.startDate) && ((_e = error === null || error === void 0 ? void 0 : error.error) === null || _e === void 0 ? void 0 : _e.stopDate)) {
            const currentTime = new Date().getTime(), startTime = new Date((_f = error === null || error === void 0 ? void 0 : error.error) === null || _f === void 0 ? void 0 : _f.startDate).getTime(), stopTime = new Date((_g = error === null || error === void 0 ? void 0 : error.error) === null || _g === void 0 ? void 0 : _g.stopDate).getTime();
            if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                    title: error.error.title,
                    description: error.error.description,
                    social: error.error.social
                });
            }
            ;
            return throwError(error.error);
        }
        else {
            switch (true) {
                case (error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent:
                    console.error('An error occurred:', (_h = error === null || error === void 0 ? void 0 : error.error) === null || _h === void 0 ? void 0 : _h.message);
                    return throwError(error === null || error === void 0 ? void 0 : error.error);
                    ;
                case (((_j = error.error) === null || _j === void 0 ? void 0 : _j.message) == 'timeout-or-duplicate'):
                    console.error('An error occurred:', error === null || error === void 0 ? void 0 : error.message);
                    return throwError('Ошибка сервера (таймаут). Повторите попытку позже');
                case (((_k = error.error) === null || _k === void 0 ? void 0 : _k.message) != 'timeout-or-duplicate'):
                    console.error(`Backend returned code ${error === null || error === void 0 ? void 0 : error.status}, ` + `body was: `, error === null || error === void 0 ? void 0 : error.error);
                    if (!(error.status == 404 && (((_l = error === null || error === void 0 ? void 0 : error.url) === null || _l === void 0 ? void 0 : _l.includes('images')) && (((_m = error === null || error === void 0 ? void 0 : error.url) === null || _m === void 0 ? void 0 : _m.includes('.jpg')) || ((_o = error === null || error === void 0 ? void 0 : error.url) === null || _o === void 0 ? void 0 : _o.includes('png')))))) {
                        this.eventer.emitMessageEvent(new EventMessage('error', ((_q = (_p = error === null || error === void 0 ? void 0 : error.error) === null || _p === void 0 ? void 0 : _p.message) === null || _q === void 0 ? void 0 : _q.title) || '', ((_s = (_r = error === null || error === void 0 ? void 0 : error.error) === null || _r === void 0 ? void 0 : _r.message) === null || _s === void 0 ? void 0 : _s.body) || ''));
                    }
                    ;
                    if ((error === null || error === void 0 ? void 0 : error.status) == 401 || ((error === null || error === void 0 ? void 0 : error.status) == 404 && (error === null || error === void 0 ? void 0 : error.error) == "User not found")) {
                        console.log('очистка Storage');
                        localStorage.removeItem(LS_TOKEN_NAME);
                    }
                    ;
                    return throwError(error === null || error === void 0 ? void 0 : error.error);
                default: return throwError(error === null || error === void 0 ? void 0 : error.error);
            }
            ;
        }
        ;
        // return an observable with a user-facing error message
    }
    ;
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(ɵɵinject(EventerService), ɵɵinject(StateService)); };
ServerErrorInterceptor.ɵprov = ɵɵdefineInjectable({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ServerErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: EventerService }, { type: StateService }]; }, null); })();

class MessageInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(map(event => {
            var _a, _b, _c, _d, _e, _f, _g;
            if (event instanceof HttpResponse && ((_a = event.body) === null || _a === void 0 ? void 0 : _a.enable)
                && typeof event.body.title !== 'undefined'
                && typeof event.body.description !== 'undefined'
                && typeof event.body.startDate !== 'undefined'
                && typeof event.body.stopDate !== 'undefined') {
                const currentTime = new Date().getTime(), startTime = new Date(event.body.startDate).getTime(), stopTime = new Date(event.body.stopDate).getTime();
                if (currentTime > startTime && currentTime < stopTime) {
                    this.state.maintenance$.next({
                        title: event.body.title,
                        description: event.body.description
                    });
                }
            }
            else if (event instanceof HttpResponse && ((_c = (_b = event === null || event === void 0 ? void 0 : event.body) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.body) && ((_e = (_d = event === null || event === void 0 ? void 0 : event.body) === null || _d === void 0 ? void 0 : _d.message) === null || _e === void 0 ? void 0 : _e.title) && ((_g = (_f = event === null || event === void 0 ? void 0 : event.body) === null || _f === void 0 ? void 0 : _f.message) === null || _g === void 0 ? void 0 : _g.type)) {
                this.eventer.emitMessageEvent(new EventMessage(event.body.message.type, event.body.message.title, event.body.message.body));
            }
            ;
            return event;
        }));
    }
}
MessageInterceptor.ɵfac = function MessageInterceptor_Factory(t) { return new (t || MessageInterceptor)(ɵɵinject(EventerService), ɵɵinject(StateService)); };
MessageInterceptor.ɵprov = ɵɵdefineInjectable({ token: MessageInterceptor, factory: MessageInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MessageInterceptor, [{
        type: Injectable
    }], function () { return [{ type: EventerService }, { type: StateService }]; }, null); })();

class NgCoreModule {
}
NgCoreModule.ɵmod = ɵɵdefineNgModule({ type: NgCoreModule });
NgCoreModule.ɵinj = ɵɵdefineInjector({ factory: function NgCoreModule_Factory(t) { return new (t || NgCoreModule)(); }, providers: [], imports: [[]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgCoreModule, [{
        type: NgModule,
        args: [{
                imports: [],
                declarations: [],
                providers: [],
                exports: []
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Config, EventMessage, EventerService, MessageInterceptor, NetService, NgCoreModule, RestoStorageService, ServerErrorInterceptor, StateService };
//# sourceMappingURL=webresto-ng-core.js.map
