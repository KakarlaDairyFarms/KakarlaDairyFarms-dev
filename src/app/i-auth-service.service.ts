import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IAuthServiceService {
  private apiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    // Mock login implementation
    console.log('Service called!');
    if (username === 'user' && password === 'password') {
      return of(true); // Simulate successful login
    }
    return of(false); // Simulate failed login
  }

  // fetchUserData(): Promise<string> {
  //   return this.http.get<string>(this.apiUrl).toPromise()
  //     .then(response => {
  //       return response;
  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data', error);
  //       return Promise.reject('Failed to fetch user data');
  //     });
  // }

  fetchUserData(): Promise<string> {
    return this.http.get<string>(this.apiUrl).toPromise()
      .then(response => {
        // Check if response is undefined and throw an error if it is
        if (response === undefined) {
          throw new Error('User data is undefined');
        }
        return response; // Ensure response is of type string
      })
      .catch(error => {
        console.error('Error fetching user data', error);
        return Promise.reject('Failed to fetch user data');
      });
  }
  private currentUser: any = null;

  loginAs(username: string, password: string): boolean {
    // This is just a simulation, replace with actual login logic
    if (username === 'admin' && password === 'admin') {
      this.currentUser = { username: 'admin', role: 'admin' };
      return true;
    } else if (username === 'user' && password === 'user') {
      this.currentUser = { username: 'user', role: 'user' };
      return true;
    }
    return false;
  }

  // Simulate logout
  logout(): void {
    this.currentUser = null;
  }

  // Get the current logged-in user
  getCurrentUser(): any {
    return this.currentUser;
  }

  // Check if the current user is an admin
  isAdmin(): boolean {
    return this.currentUser && this.currentUser.role === 'admin';
  }
}
