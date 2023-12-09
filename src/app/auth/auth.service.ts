import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Expose the observable
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Method to update authentication status
  setAuthenticated(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }

}
