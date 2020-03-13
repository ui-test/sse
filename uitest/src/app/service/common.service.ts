import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  private Subject = new Subject<any>();
  
  public sendSubjectData(obj: any) {
    this.Subject.next(obj);
  }

  public readSubjectData(): Observable<any> {
    return this.Subject.asObservable();
  }

  constructor() { }


}
