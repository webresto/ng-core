import { Injectable } from '@angular/core';
import {
  CookiesStorageService, LocalStorageService,
  SharedStorageService, NgxStorageEvent
} from 'ngx-store';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoStorageService {
  event:BehaviorSubject<any>;


  constructor(private cookiesStorageService:CookiesStorageService,
              private localStorageService:LocalStorageService,
              private sharedStorageService:SharedStorageService) {
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

  get(typeStorage:string, key:string):string {
    return this[typeStorage].get(key);

  }

  set(typeStorage:string, key:string, value:string):Observable<any> {
    return this[typeStorage].set(key, value);
  }


  sub(typeStorage:string, key:string):Observable<any> {

    this[typeStorage].observe()
      .subscribe((event) => {
        if (event.key == key) {
          this.event.next({"changeKey": key})
        }

      });
    return this.event;

  }
}
