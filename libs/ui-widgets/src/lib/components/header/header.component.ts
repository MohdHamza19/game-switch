import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'widget-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isActive: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(){
    this.loginService.loginState$.subscribe((state) => {
      console.log('login state', state);
      
      this.isLoggedIn = state;
    });
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  login(){
    this.loginService.showLoginModal();
  }
}
