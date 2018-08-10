import { Inject,Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class Config {
  url:any;
  port:number = 80;
  prefix:string = "api/";
  versionModule = "0.5";

  constructor(@Inject('ApiDomain') endpointUrl:string) {
    this.url = endpointUrl;
  }


}
