import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  logout() {
    // Xóa token khỏi localStorage
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {
    // Kiểm tra xem token có tồn tại trong localStorage không
    return localStorage.getItem('access_token') !== null;
  }

  getToken() {
    // Lấy token từ localStorage
    return localStorage.getItem('access_token');
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }
}
