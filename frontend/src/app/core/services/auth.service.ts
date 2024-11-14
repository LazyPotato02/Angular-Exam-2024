import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface LoginData{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}
  register(credentials: RegisterData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/register`, credentials, {withCredentials: true});
  }
  login(credentials: LoginData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, credentials,{withCredentials: true});
  }

}
