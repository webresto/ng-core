import { EventEmitter, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, map, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookiesStorageService, LocalStorageService, SharedStorageService } from 'ngx-store';

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
    get(url, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.get(url)
            .pipe(retry(3) // retry a failed request up to 3 times
        );
    }
    put(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.put(url, data);
    }
    post(url, data, isApi = true) {
        url = isApi
            ? this.config.url + this.config.prefix + this.config.versionModule + url
            : this.config.url + url;
        return this.http.post(url, data);
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
    constructor(cookiesStorageService, localStorageService, sharedStorageService) {
        this.cookiesStorageService = cookiesStorageService;
        this.localStorageService = localStorageService;
        this.sharedStorageService = sharedStorageService;
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
RestoStorageService.ɵfac = function RestoStorageService_Factory(t) { return new (t || RestoStorageService)(ɵɵinject(CookiesStorageService), ɵɵinject(LocalStorageService), ɵɵinject(SharedStorageService)); };
RestoStorageService.ɵprov = ɵɵdefineInjectable({ token: RestoStorageService, factory: RestoStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestoStorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: CookiesStorageService }, { type: LocalStorageService }, { type: SharedStorageService }]; }, null); })();

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

class ServerErrorInterceptor {
    constructor(eventer, state) {
        this.eventer = eventer;
        this.state = state;
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body.status && event.body.message && event.body.message[0]) {
                    throw new Error(event.body.message[0]);
                }
            }
        }), catchError(this.handleError.bind(this)));
    }
    handleError(error) {
        if (error.error.enable
            && typeof error.error.title !== 'undefined'
            && typeof error.error.description !== 'undefined'
            && typeof error.error.startDate !== 'undefined'
            && typeof error.error.stopDate !== 'undefined') {
            const currentTime = new Date().getTime(), startTime = new Date(error.error.startDate).getTime(), stopTime = new Date(error.error.stopDate).getTime();
            if (currentTime > startTime && currentTime < stopTime) {
                this.state.maintenance$.next({
                    title: error.error.title,
                    description: error.error.description,
                    social: error.error.social
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
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
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
    }
    ;
}
ServerErrorInterceptor.ɵfac = function ServerErrorInterceptor_Factory(t) { return new (t || ServerErrorInterceptor)(ɵɵinject(EventerService), ɵɵinject(StateService)); };
ServerErrorInterceptor.ɵprov = ɵɵdefineInjectable({ token: ServerErrorInterceptor, factory: ServerErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ServerErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: EventerService }, { type: StateService }]; }, null); })();

const LS_TOKEN_NAME = 'gf:tkn:v2';
class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        console.info('AuthInterceptor', req);
        // Get the auth token from the service.
        const authToken = localStorage.getItem(LS_TOKEN_NAME);
        if (authToken) {
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `JWT ${authToken}`)
            });
            // send cloned request with header to the next handler.
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = ɵɵdefineInjectable({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuthInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();

/*
 * Public API Surface of ng-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthInterceptor, EventMessage, EventerService, MessageInterceptor, NetService, NgCoreModule, RestoStorageService, ServerErrorInterceptor, StateService };
//# sourceMappingURL=webresto-ng-core.js.map
