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

  isRegistering: boolean = false;
  registerFirstName: string = '';
  registerLastName: string = '';
  registerEmail: string = '';
  accountPurpose: string = 'customer'; // default value
  employeeRole: string = 'staff'; // default value
  registerPassword: string = '';
  confirmPassword: string = '';

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
        this.router.navigate(['/services-home']);
      }
    } else {
      alert('Invalid username or password');
    }
  }

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
  }

  register() {
    // Add your registration logic here
    console.log('Register', this.registerFirstName, this.registerLastName, this.registerEmail, this.accountPurpose, this.employeeRole, this.registerPassword, this.confirmPassword);
  }

  onPurposeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.accountPurpose = selectElement.value;
  }

}
