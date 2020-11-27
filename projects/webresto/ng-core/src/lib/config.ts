import { Inject,Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Config {
  url:any;
  port:number = 80;
  prefix:string = "api/";
  versionModule = "0.5";

  constructor(@Inject('ApiDomain') endpointUrl:BehaviorSubject<any>) {
    endpointUrl.subscribe(url=>{
      this.url = url;
    })  
  }
}
