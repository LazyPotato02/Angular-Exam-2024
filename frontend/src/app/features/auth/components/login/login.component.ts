import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    standalone: true
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string | null = null

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    onLogin() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        this.errorMessage = null;
                        this.router.navigate(['/']);
                    }
                },
                error: (error) => {
                    console.error('Login failed:', error);
                    if (error.status === 401) {
                        this.errorMessage = 'Invalid email or password.';
                    } else {
                        this.errorMessage = 'An unexpected error occurred. Please try again later.';
                    }
                }
            });
        }
    }
}
