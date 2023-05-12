import { Component, ElementRef, ViewChild } from '@angular/core';
import axios from 'axios';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  @ViewChild('container') container: any;
  username: string = '';
  password: string='';

  loginUrl = 'http://localhost:3000/api/auth/google';
  
  async authGoogle(event: Event) {
    event.preventDefault();
    window.location.href = this.loginUrl;
  }


  swapSignUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  swapSignIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  async localLogin() {
    const login = await axios.post('http://localhost:3000/api/signin', {
      username: this.username,
      password: this.password,
    });
    console.log(login.data.data.accessToken);
    this.authService.setToken(login.data.data.accessToken);
    this.router.navigate(['/profile']);
  }
}
