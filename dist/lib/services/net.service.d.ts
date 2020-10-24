import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NetService {
    private http;
    config: Config;
    constructor(http: HttpClient, config: Config);
    get<T = any>(url: string, isApi?: boolean): Observable<T>;
    put<T = any>(url: string, data: T, isApi?: boolean): Observable<any>;
    post<T = any>(url: string, data: T, isApi?: boolean): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<NetService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NetService>;
}
