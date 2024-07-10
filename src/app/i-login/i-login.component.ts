import { Component } from '@angular/core';
import { IAuthServiceService } from '../i-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-i-login',
  templateUrl: './i-login.component.html',
  styleUrls: ['./i-login.component.css']
})
export class ILoginComponent {
  username: string = '';
  password: string = '';
  loginFailed: boolean = false;

  constructor(private authService: IAuthServiceService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/services']);
      } else {
        this.loginFailed = true;
      }
    });
  }
  
  login() {
    if (this.authService.loginAs(this.username, this.password)) {
      // Navigate to the admin user management if the user is admin
      if (this.authService.isAdmin()) {
        this.router.navigate(['/admin/user-management']);
      } else {
        // Navigate to a different page for non-admin users if needed
        this.router.navigate(['/services']);
      }
    } else {
      alert('Invalid username or password');
    }
  }

}
