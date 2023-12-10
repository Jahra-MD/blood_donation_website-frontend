import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  people: Observable<any> | undefined;
  count :number =0
 constructor(private ps: PeopleService){}
 
 ngOnInit() {
  this.ps.getPeople().subscribe(
    (data : any) => {
      console.log('Data received:', data);
      this.count = data.length
      console.log('count', this.count)
    },
    (error) => {
      console.error('Error:', error);
    }
  );

  this.people = this.ps.getPeople()
}


}