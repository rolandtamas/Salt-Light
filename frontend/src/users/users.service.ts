import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = "https://localhost:44369/api/user";
  constructor(private httpclient: HttpClient) {}
  getUsers(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }
}
