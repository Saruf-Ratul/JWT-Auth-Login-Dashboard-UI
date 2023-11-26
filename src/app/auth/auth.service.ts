// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5063/api/auth'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, { withCredentials: true });
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
  redirectToLogin(): void {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  logout(): void {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }





}







