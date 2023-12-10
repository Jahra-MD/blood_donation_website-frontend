import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bb_frontend';
  id :string = '1';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
       this.id = params['id'];
      console.log('Example Parameter:', this.id);
    });
  }
}
