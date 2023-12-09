import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env';
@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.ApiUrl;
  getRegisterData(body:any) {
    console.log(body, 'body in service')
    return this.http.post(this.apiUrl + 'donors/register', body);

}
}
