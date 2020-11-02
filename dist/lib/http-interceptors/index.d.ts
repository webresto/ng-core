import { ServerErrorInterceptor } from './server-error.interceptor';
import { MessageInterceptor } from "./message.interceptor";
export declare const ngCoreHttpInterceptorProviders: ({
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof ServerErrorInterceptor;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof MessageInterceptor;
    multi: boolean;
})[];
