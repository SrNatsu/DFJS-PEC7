import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user/';
  private http = inject(HttpClient);

  register(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}register`, { username, password });
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}login`, { username, password }).pipe(
      tap((response: User) => {
        if (response.token) {
          this.setToken(response.token);
        }
      }),
    );
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}
