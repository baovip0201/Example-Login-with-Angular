import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  token: any;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
    localStorage.setItem('access_token', this.token);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
