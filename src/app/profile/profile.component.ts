import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  currentUser: any;
  constructor(private router: Router)
  {}
  ngOnInit() {

    const storedDetails = sessionStorage.getItem('currentUser');

    if (storedDetails) {
      this.currentUser = JSON.parse(storedDetails);
      console.log('User Details:', this.currentUser);
    } else {
      console.log('User details not found in session storage.');
    }
  }

  redirect(){
    this.router.navigate(['/people'],{ queryParams: { id: '5' }});
  }

}
