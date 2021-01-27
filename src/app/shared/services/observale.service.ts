import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ObservableService {

  constructor() { }

  private newUser = new BehaviorSubject<number>(0);

  setCartItemNumber(n: number) {
    this.newUser.next(n);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }
}
