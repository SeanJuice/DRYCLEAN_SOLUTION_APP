import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private data: BehaviorSubject<any> = new BehaviorSubject<string>(null);
  public data$: Observable<any> = this.data.asObservable(); 
constructor() { }

setMessage(newMessage: any) {
  this.data.next(newMessage);
}

}
