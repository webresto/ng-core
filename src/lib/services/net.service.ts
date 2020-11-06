import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  constructor(private http: HttpClient, public config: Config) { }

  public get<T = any>(url: string, isApi: boolean = true, options: {
    headers?: { [header: string]: string },
    params?: { [params: string]: string },
  } = {}): Observable<T> {
    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;
    return this.http.get<T>(url, { headers: options.headers, params: options.params })
      .pipe(
        retry(3) // retry a failed request up to 3 times
      );
  }

  public put<T = any>(url: string, data: T, isApi: boolean = true): Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.put(url, data);

  }

  public post<T = any, R = any>(url: string, data: T, isApi: boolean = true, options: {
    headers?: { [header: string]: string },
    params?: { [params: string]: string }
  } = {}): Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.post(url, data, { headers: options.headers, params: options.params });
  }



}
