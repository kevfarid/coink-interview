import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  login(email: string, password: string, remember: boolean) {
    if (email === 'admin@coink.com' && password === 'admin') {
      if (remember) {
        localStorage.setItem('email', email);
      }

      sessionStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['/request-cards']);
    }
  }

  logout() {
    sessionStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
