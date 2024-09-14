import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  // Example GET request
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // Example POST request
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

}
