import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  private validCredentials = { username: 'admin', password: 'admin123' };

  constructor(private router: Router) {}

  login() {
    if (
      this.username === this.validCredentials.username &&
      this.password === this.validCredentials.password
    ) {
      this.router.navigate(['/employees']);
    } else {
      this.errorMessage = 'Invalid username or password!';
    }
  }
}
