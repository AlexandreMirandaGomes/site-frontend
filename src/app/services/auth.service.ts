import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string;

  constructor(private http: HttpClient) { }

  signIn(email:string, password:string):Observable<Auth> {
    return this.http.post<Auth>('/public/auth/signin', {'name':email, 'password': password});
  }

  isLoggedIn():boolean {
    return !!this.token;
  }

  autoLogin() {
    this.token = localStorage.getItem('token');
  }

  signOut(){
    this.token = undefined;
    localStorage.clear();
  }
}
