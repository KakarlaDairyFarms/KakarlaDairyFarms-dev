import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KFUser } from 'src/KDFModel/kfuser';

@Injectable({
  providedIn: 'root'
})
export class KFUserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // GET all users
  getAllUsers(): Observable<KFUser[]> {
    return this.http.get<KFUser[]>(this.apiUrl);
  }

  // POST a new user
  createUser(user: KFUser): Observable<KFUser> {
    return this.http.post<KFUser>(this.apiUrl, user);
  }

  // GET a user by ID
  getUserById(id: number): Observable<KFUser> {
    return this.http.get<KFUser>(`${this.apiUrl}/${id}`);
  }
}
