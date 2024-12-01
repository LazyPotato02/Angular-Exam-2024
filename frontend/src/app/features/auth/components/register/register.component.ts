import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
    registerForm: FormGroup;
    errorMessage: string | null = null;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onRegister() {
        if (this.registerForm.valid) {
            this.authService.register(this.registerForm.value).subscribe({
                next: (response) => {
                    this.errorMessage = null;
                    this.router.navigate(['/']);
                },
                error: (error) => {
                    if (error.status === 400) {
                        this.errorMessage = error.error.message;
                    } else {
                        this.errorMessage = 'An unexpected error occurred. Please try again.';
                    }
                },
            });
        }
    }
}
