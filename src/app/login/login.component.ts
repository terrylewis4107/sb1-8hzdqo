import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private routerExtensions: RouterExtensions) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (isAuthorized) => {
        if (isAuthorized) {
          this.routerExtensions.navigate(['/conference'], { clearHistory: true });
        } else {
          alert('Login failed. Please check your credentials.');
        }
      },
      (error) => {
        console.error('Login error:', error);
        alert('An error occurred during login. Please try again.');
      }
    );
  }
}