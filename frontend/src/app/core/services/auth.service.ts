import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of, tap} from 'rxjs';
import {Router} from '@angular/router';
import {LoginData, RegisterData} from './auth.types';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedInSubject.asObservable();
  constructor(private http: HttpClient,private router:Router) {

    this.checkSession().subscribe();
  }

  register(credentials: RegisterData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/register`, credentials, { withCredentials: true }).pipe(
      tap(() => {
        this.loggedInSubject.next(true);
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        console.error('Registration failed:', error);
        this.loggedInSubject.next(false);
        return of(error);
      })
    );
  }

  login(credentials: LoginData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, credentials, { withCredentials: true }).pipe(
      tap(() => {
        this.loggedInSubject.next(true);
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        this.loggedInSubject.next(false);
        return of(error);
      })
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/users/logout`, {}, { withCredentials: true }).subscribe({
      next: () => {
        console.log('Logged out successfully');
        this.router.navigate(['/login']);
        this.loggedInSubject.next(false)
      },
      error: (error) => console.error('Logout failed:', error),
    });
  }

  checkSession(): Observable<boolean> {
    return this.http.get<{ loggedIn: boolean }>(`${this.apiUrl}/users/verify`, { withCredentials: true }).pipe(
      map(response => response.loggedIn),
      tap(loggedIn => this.loggedInSubject.next(loggedIn)),
      catchError(() => {
        this.loggedInSubject.next(false);
        return of(false);
      })
    );
  }

}
