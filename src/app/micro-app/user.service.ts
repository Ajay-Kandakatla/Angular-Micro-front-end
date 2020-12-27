import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  public getUsers() {
    const url = 'https://5fe7ff43010a670017803cfe.mockapi.io/mydata/users';
    return this.http.get(url);
  }
}
