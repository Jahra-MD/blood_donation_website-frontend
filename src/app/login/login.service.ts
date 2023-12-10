import { Injectable } from '@angular/core';
import { environment } from 'src/env';
import { HttpClient } from '@angular/common/http';
import * as crypto from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.ApiUrl;

getData(body:any) {
  return this.http.post(this.apiUrl + 'donors/login', {body});
}
getEncryptedData(data : any)
{
  const secretKey = 'asdfqwer1234!@#$';
  const encrptData = crypto.AES.encrypt(data,secretKey).toString();
  console.log('encrypted data is', encrptData)

  return encrptData
}
}
