import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RegisterationService } from './registeration.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {
  
  registerStatus: number = 0;
  registrationForm: FormGroup;
  msg: any = '';
  bloodGroups = [
    { value: 'A+', itemName: 'A+' },
    { value: 'A-', itemName: 'A-' },
    { value: 'B+', itemName: 'B+' },
    { value: 'B-', itemName: 'B-' },
    { value: 'O+', itemName: 'O+' },
    { value: 'O-', itemName: 'O-' },
    { value: 'AB+', itemName: 'AB+' },
    { value: 'AB-', itemName: 'AB-' },
  ];

  constructor(private http: HttpClient,
              private RegisterationService: RegisterationService,
              private router:Router,
              private fb: FormBuilder){
                this.registrationForm = this.fb.group({
                  username: ['', Validators.required],
                  age: [null, [Validators.required, Validators.min(1),Validators.min(18), Validators.max(65)]],
                  gender: ['', Validators.required],
                  bloodGroup: ['', Validators.required],
                  password: ['', [Validators.required, Validators.minLength(6)]],
                });
              }
  
  

  register()
  {  
    if (this.registrationForm.valid) {
      const body = {
        username: this.registrationForm.get('username')!.value,
        age: this.registrationForm.get('age')!.value,
        gender: this.registrationForm.get('gender')!.value,
        blood_group: this.registrationForm.get('bloodGroup')!.value,
        password: this.registrationForm.get('password')!.value,
      };
     console.log(body, 'registrationss')

    this.RegisterationService.getRegisterData(body).subscribe(
      (data) => {
        if(data == null)
        {
          this.msg = "username already exists try a different name"
          this.registerStatus =2;
        }
        else{
        console.log('Registration successful', data);
        this.msg = 'Donor has registered successfully!! Please Login to Continue'
        this.registrationForm.reset();
        this.registerStatus =1
        }
      },
      (error) => {
        console.error('Error fetching data from API:', error);
        this.msg = 'Registeration Failed!'
          this.registerStatus =2;
      }
    );
    }
  }

  redirect()
  {
    if(this.registerStatus == 1)
    {
    this.router.navigate(['/login'],{ queryParams: { id: '3' }});
    }
    else{
      this.router.navigate(['/register'],{ queryParams: { id: '2' }});
    }
    this.registerStatus = 0;
  }
  }
