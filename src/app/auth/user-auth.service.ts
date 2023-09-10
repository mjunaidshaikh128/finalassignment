import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = 'https://api.escuelajs.co/api/v1/auth/login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      email,
      password
    };
    return this.http.post(url, body, httpOptions);
  }

  createUser(name: string,email: string, password: string, avatar: string): Observable<any> {
    const url = 'https://api.escuelajs.co/api/v1/users';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = {
      name,
      email,
      password,
      avatar
    };
    return this.http.post(url, body, httpOptions);
  }
}
