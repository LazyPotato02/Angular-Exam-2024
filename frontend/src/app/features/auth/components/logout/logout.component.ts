import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
  standalone: true
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.logout().add(() => {
      this.router.navigate(['/']);
    });
  }
}
