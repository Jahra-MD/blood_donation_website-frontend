import { Injectable } from '@angular/core';
import { environment } from 'src/env';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.ApiUrl;
  getLoginData(body:any) {
    return this.http.post(this.apiUrl + 'donors/login', body);
}
}
