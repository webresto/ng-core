import { Injectable } from '@angular/core';
import { Config } from '../config';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, retryWhen,shareReplay } from 'rxjs/operators';

const getErrorMessage = () =>
  `Tried to load Resource over XHR for 1 times without success. Giving up.`;

export function retryWithBackoff() {
  let retries = 1;

  return (src: Observable<any>) =>
    src.pipe(
      retryWhen((errors: Observable<any>) => errors.pipe(
        mergeMap(error => {
          if (retries-- > 0) {
            const backoffTime = 1000 + (5 - retries) * 10000;
            return of(error).pipe(delay(backoffTime));
          }
          return throwError(getErrorMessage());
        }
        ))));
}

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
        retryWithBackoff(), // retry a failed request up to 5 times,
        shareReplay(1)
      );
  }

  public put<T = any>(url: string, data: T, isApi: boolean = true): Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.put(url, data).pipe(
      shareReplay(1)
    );
  }

  public post<T = any, R = any>(url: string, data: T, isApi: boolean = true, options: {
    headers?: { [header: string]: string },
    params?: { [params: string]: string }
  } = {}): Observable<R> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.post<R>(url, data, { headers: options.headers, params: options.params }).pipe(
      retryWithBackoff(),
      shareReplay(1)
      // retry a failed request up to 5 times
    );;
  }

}
