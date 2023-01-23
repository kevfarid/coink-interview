import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPasswordVisible = false;
  emailSaved = localStorage.getItem('email') || '';

  loginForm = this.fb.group({
    email: [this.emailSaved, [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    remember: [this.emailSaved ? true : false],
  });

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  togglePasssword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.loginForm.value.email);
    if (this.loginForm.valid) {
      this.loginService.login(
        this.loginForm.value.email || '',
        this.loginForm.value.password || '',
        this.loginForm.value.remember || false
      );
    }
  }
}
