import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { EventerService } from '../services/eventer.service';
import { Observable } from 'rxjs';
import { StateService } from "../services/state.service";
export declare class ServerErrorInterceptor implements HttpInterceptor {
    private eventer;
    private state;
    constructor(eventer: EventerService, state: StateService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>>;
    handleError(error: HttpErrorResponse): Observable<never>;
}
