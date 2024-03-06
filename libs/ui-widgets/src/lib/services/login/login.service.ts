import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginState$ = this.loginStateSubject.asObservable();

  private loginModalStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loginModalState$ = this.loginModalStateSubject.asObservable();

  constructor(
    private router: Router
  ) { }

  showLoginModal(){
    this.loginModalStateSubject.next(true);
  }

  initiateLogin(){
    this.loginStateSubject.next(true);
  }

  loginUser() {
    console.log('login');
    // Perform login logic here
    // Once login is successful, update the login state
    this.loginStateSubject.next(true);
    this.router.navigate(['/home']);
  }
  logoutUser() {
    console.log('logout');
    // Perform logout logic here
    // Once logout is successful, update the login state
    this.loginStateSubject.next(false);
  }

}
