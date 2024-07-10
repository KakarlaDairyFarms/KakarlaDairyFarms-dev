import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KFUser } from 'src/KDFModel/kfuser';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin'; // Adjust this URL to match your backend API

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<KFUser[]> {
    return this.http.get<KFUser[]>(`${this.apiUrl}/users`);
  }

  createUser(user: KFUser): Observable<KFUser> {
    return this.http.post<KFUser>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: KFUser): Observable<KFUser> {
    return this.http.put<KFUser>(`${this.apiUrl}/users/${user.KFUId}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
