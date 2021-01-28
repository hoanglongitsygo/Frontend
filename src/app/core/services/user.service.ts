import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment, endpoint } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: Observable<User> = new Observable<User>();

  constructor(
    private http: HttpClient
  ) { }

  createNewUser(bodyReq): any {
    return this.http.post(`${environment.URL}/${endpoint.user}/register`, bodyReq);
  }

  login(bodyReq): any {
    return this.http.post(`${environment.URL}/${endpoint.user}/authenticate`, bodyReq);
  }
}
