import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = '';
  password:string = '' ;
  loginStatus: number =0;
  msg: any = '';
  loginForm: FormGroup;

  constructor(private http: HttpClient,
              private LoginService: LoginService,
              private router:Router,
              private fb: FormBuilder) {
                this.loginForm = this.fb.group({
                  username: ['', Validators.required],
                  password: ['', [Validators.required]],
                });
              }

  login() {
    const body = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value,
    }
    console.log(body, 'body from login');
    const data = this.LoginService.getEncryptedData(JSON.stringify(body));
    console.log(JSON.stringify(data), 'encrypted data');

    this.LoginService.getData(data).subscribe(
      (data) => {
        if(data != null)
        {
          console.log('Login successful', data);
        sessionStorage.setItem('currentUser', JSON.stringify(data))
        this.msg = 'You have login successfully'
        this.loginStatus =1
        this.router.navigate(['/profile'],{ queryParams: { id: '6' }});
        }
        else
        {
          this.msg = 'In Valid Credentials. Please Try Again'
          this.loginStatus =2;
        }
      }
    );
  }

  redirect()
  { this.loginStatus = 0;
    this.username = '';
    this.password = '';
  }
}
