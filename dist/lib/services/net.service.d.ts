import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class NetService {
    private http;
    config: Config;
    constructor(http: HttpClient, config: Config);
    get<T = any>(url: string, isApi?: boolean, options?: {
        headers?: {
            [header: string]: string;
        };
        params?: {
            [params: string]: string;
        };
    }): Observable<T>;
    put<T = any>(url: string, data: T, isApi?: boolean): Observable<any>;
    post<T = any, R = any>(url: string, data: T, isApi?: boolean, options?: {
        headers?: {
            [header: string]: string;
        };
        params?: {
            [params: string]: string;
        };
    }): Observable<any>;
}
