import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { StateService } from "../services/state.service";
import * as i0 from "@angular/core";
export declare class ServerErrorInterceptor implements HttpInterceptor {
    private eventer;
    private state;
    constructor(eventer: EventerService, state: StateService);
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>>;
    private handleError;
    static ɵfac: i0.ɵɵFactoryDef<ServerErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDef<ServerErrorInterceptor>;
}
//# sourceMappingURL=server-error.interceptor.d.ts.map