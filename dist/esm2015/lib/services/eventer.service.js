import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class EventMessage {
    constructor(type, title, body) {
        this.type = type;
        this.title = title;
        this.body = body;
    }
}
export class EventerService {
    constructor() {
        this.eventMessage = new EventEmitter();
        this.eventAction = new EventEmitter();
    }
    emitMessageEvent(message) {
        this.eventMessage.emit(message);
    }
    emitActionEvent(action) {
        this.eventAction.emit(action);
    }
    getMessageEmitter() {
        return this.eventMessage;
    }
    getActionEmitter() {
        return this.eventAction;
    }
}
EventerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventerService_Factory() { return new EventerService(); }, token: EventerService, providedIn: "root" });
EventerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
EventerService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL3dlYnJlc3RvL25nLWNvcmUvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFDeEQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFBbUIsSUFBWSxFQUFTLEtBQWEsRUFBUyxJQUFZO1FBQXZELFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7Q0FHaEY7QUFLRCxNQUFNLE9BQU8sY0FBYztJQUl6QjtRQUhBLGlCQUFZLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUQsZ0JBQVcsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0lBRWpCLGdCQUFnQixDQUFDLE9BQW9CO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7Ozs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IGNsYXNzIEV2ZW50TWVzc2FnZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHR5cGU6IHN0cmluZywgcHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyBib2R5OiBzdHJpbmcpIHsgfVxyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGRhdGE/OiBhbnk7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV2ZW50ZXJTZXJ2aWNlIHtcclxuICBldmVudE1lc3NhZ2U6IEV2ZW50RW1pdHRlcjxFdmVudE1lc3NhZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGV2ZW50QWN0aW9uOiBFdmVudEVtaXR0ZXI8RXZlbnRNZXNzYWdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZW1pdE1lc3NhZ2VFdmVudChtZXNzYWdlOkV2ZW50TWVzc2FnZSkge1xyXG4gICAgdGhpcy5ldmVudE1lc3NhZ2UuZW1pdChtZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGVtaXRBY3Rpb25FdmVudChhY3Rpb246RXZlbnRNZXNzYWdlKSB7XHJcbiAgICB0aGlzLmV2ZW50QWN0aW9uLmVtaXQoYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldE1lc3NhZ2VFbWl0dGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRNZXNzYWdlO1xyXG4gIH1cclxuICBnZXRBY3Rpb25FbWl0dGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBY3Rpb247XHJcbiAgfVxyXG59XHJcbiJdfQ==