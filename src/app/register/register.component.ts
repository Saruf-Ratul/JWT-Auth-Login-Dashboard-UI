// register.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  registrationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService
  )
  {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
    });
  }

  passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    const password = this.registrationForm?.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  register() {
    console.log(this.registrationForm.value);
    this.authService.register(this.registrationForm.value).subscribe(
      (response) => {
        this.message.success('Registration successful', { nzDuration: 3000 }); // Display success toast
        this.router.navigate(['/login']);
      },
      (error) => {
        this.message.error('Registration failed',error.code);
      }
    );
  }
}
