import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SharedService {
private subject = new Subject<any>();
sendClickEvent() {
  this.subject.next();
}
getClickEvent(): Observable<any>{ 
  return this.subject.asObservable();
}
sendClickEvent1() {
  this.subject.next();
}
getClickEvent1(): Observable<any>{ 
  return this.subject.asObservable();
}
sendUpload() {
  this.subject.next();
}
getUpload(): Observable<any>{ 
  return this.subject.asObservable();
}
}