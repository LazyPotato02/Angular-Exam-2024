import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {AuthService} from '../../auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.authService.checkSession().pipe(
            tap((loggedIn) => {
                if (loggedIn) {
                    this.router.navigate(['/']);
                }
            }),
            map(loggedIn => !loggedIn)
        );
    }
}