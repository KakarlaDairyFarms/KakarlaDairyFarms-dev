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

}
