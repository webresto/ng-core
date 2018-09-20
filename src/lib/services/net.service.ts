import { Injectable } from '@angular/core';
import { Config} from '../config';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  config:any;

  constructor(private http:HttpClient, config:Config) {
    this.config = config;
  }

  public  get(url:string, isApi:boolean = true):Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.get<any>(url)
      .pipe(
        retry(3) // retry a failed request up to 3 times
      );
  }

  public  put(url:string, data:any, isApi:boolean = true):Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.put(url, data);

  }

  public  post(url:string, data:any, isApi:boolean = true):Observable<any> {

    url = isApi
      ? this.config.url + this.config.prefix + this.config.versionModule + url
      : this.config.url + url;

    return this.http.post(url, data);
  }



}
