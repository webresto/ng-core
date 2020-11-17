export class EventMessage {
  type:string;
  title:string;
  body:string;
  description?:string;
  data?:any;

  constructor(type, title, body) {
    this.type = type;
    this.title = title;
    this.body = body;
  }
}
