import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  findAll(): Observable<Message[]> {
    return this.http.get<Message[]>('/public/message')
  }

  save(message: string): Observable<number> {
    return this.http.post<number>('/private/message', message, {
      headers: {
        'Authorization': 'Bearer ' + this.authService.token
      }
    })
  }

  delete(id:number): Observable<void> {
    return this.http.delete<void>('/private/message/'+ id, {
      headers: {
        'Authorization': 'Bearer ' + this.authService.token
      }
    });
  }
}
