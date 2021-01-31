import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAllUser(paging, pagesize): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiZnVsbE5hbWUiOiJOZ3V54buFbiBC4bqjbyBIxrBuZyIsInBob25lTnVtYmVyIjoiMDMzMzM0MTExMSIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6Imh1bmdib2JAZ21haS5jb20iLCJjcmVhdGVkRGF0ZSI6IjIwMjEtMDEtMjdUMjI6MDE6MzguMzk1WiIsImlkIjoiNjAxMWUyYzJhMTgzZjMyY2ZjMTI2ZDdhIn0sImlhdCI6MTYxMTgwNzYyOSwiZXhwIjoxNjEyNDEyNDI5fQ.tXM0lLmH3MUcKkUlB3YwsWTnk1jlq09VUoiZvpWVG7Y`
    })
    return this.http.get<User[]>(`${environment.URL}/${endpoint.user}?paging=${paging}&pagesize=${pagesize}`, { headers: headers });
  }
}
