// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
  (response) => {
    console.log('Login successful:', response);
    localStorage.setItem('token', response.token);
    this.router.navigate(['/dashboard']);
  },
  (error) => {
    console.error('Login failed:', error);
    this.router.navigate(['/login']);
  }
);
  }


}
