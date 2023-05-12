import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (this.authService.isLoggedIn()) {
      console.log('Login successfully');
      return true;
    } else {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      this.router.navigate(['/login']);
      console.log('Redirecting to login page');
      return false;
    }
  }
}
